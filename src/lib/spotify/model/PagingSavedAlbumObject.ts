import { PagingObject } from "./PagingObject";
import { SavedAlbumObject } from "./SavedAlbumObject";

export type PagingSavedAlbumObject = PagingObject & {
            items?: SavedAlbumObject[];
          };