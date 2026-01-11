import { mkdir, writeFile } from "fs/promises";
import openapi from "../openapi.json" assert { type: 'json' };

const targetDirectory = "src/lib/spotify/model";

async function generateSpotifyClient() {
  console.log("\nLaunched generate-spotify-client script");
  console.log('Generating Spotify client from OpenApi spec file...\n')
  await mkdir(targetDirectory, { recursive: true });

  const schemas = openapi.components.schemas;
  const typesToGenerate = Object.keys(schemas);

  for (const typeName of typesToGenerate) {
    const typeSchema = schemas[typeName];
    generateType(typeName, typeSchema);
  }
}

function generateType(typeName, typeSchema) {  
  console.log(`Generating type ${typeName}...`);

  const imports = new Set();
  const generatedCode = getGeneratedCode(typeName, typeSchema, imports);

  writeFile(`${targetDirectory}/${typeName}.ts`, generatedCode);
}

function getGeneratedCode(typeName, typeSchema, imports) {
  const generatedType = getGeneratedType(typeSchema, imports);

  const importsCode = [...imports]
    .map(type => `import { ${type} } from "./${type}";`)
    .join("\n");

  return `
${importsCode}

export type ${typeName} = ${generatedType};
`.trim();
}

function getGeneratedType(typeSchema, imports) {

  if (typeSchema.$ref) {
    const typeName = typeSchema.$ref.split("/").pop();
    imports.add(typeName);
    return typeName;
  }

  if (Array.isArray(typeSchema.enum)) {
    return typeSchema.enum.map(v => `"${v}"`).join(" | ");
  }

  if (Array.isArray(typeSchema.oneOf) && typeSchema.oneOf.length > 0) {
    const union = typeSchema.oneOf.map(s => getGeneratedType(s, imports)).join(" | ");
    return `(${union})`;
  }

  if (Array.isArray(typeSchema.allOf) && typeSchema.allOf.length > 0) {
    return typeSchema.allOf.map(s => getGeneratedType(s, imports)).join(" & ");
  }

  const schemaType = typeSchema.type;
  switch (schemaType) {
    case "number":
    case "integer":
      return "number";
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "array": 
      return `${getGeneratedType(typeSchema.items, imports)}[]`;
    case "object":
      if (typeSchema.properties) {
        const required = new Set(typeSchema.required ?? []);

        return `{
          ${Object.entries(typeSchema.properties)
            .map(([propName, propSchema]) => {
              const optionalMark = required.has(propName) ? "" : "?";
              return `  ${propName}${optionalMark}: ${getGeneratedType(propSchema, imports)};`;
            })
            .join("\n")}
          }`          
      }
    default:
      return "any";
  }
}

generateSpotifyClient();