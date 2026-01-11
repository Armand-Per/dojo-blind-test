import { CursorPagingObject } from "./CursorPagingObject";
import { ArtistObject } from "./ArtistObject";

export type CursorPagingSimplifiedArtistObject = CursorPagingObject & {
            items?: ArtistObject[];
          };