import { PagingObject } from "./PagingObject";
import { ArtistObject } from "./ArtistObject";

export type PagingArtistObject = PagingObject & {
            items?: ArtistObject[];
          };