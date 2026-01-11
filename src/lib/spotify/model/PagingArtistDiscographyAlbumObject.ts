import { PagingObject } from "./PagingObject";
import { ArtistDiscographyAlbumObject } from "./ArtistDiscographyAlbumObject";

export type PagingArtistDiscographyAlbumObject = PagingObject & {
            items?: ArtistDiscographyAlbumObject[];
          };