import { SimplifiedAlbumObject } from "./SimplifiedAlbumObject";

export type ArtistDiscographyAlbumObject = SimplifiedAlbumObject & {
            album_group: "album" | "single" | "compilation" | "appears_on";
          };