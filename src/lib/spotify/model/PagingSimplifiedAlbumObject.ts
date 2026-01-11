import { PagingObject } from "./PagingObject";
import { SimplifiedAlbumObject } from "./SimplifiedAlbumObject";

export type PagingSimplifiedAlbumObject = PagingObject & {
            items?: SimplifiedAlbumObject[];
          };