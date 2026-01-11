import { PagingObject } from "./PagingObject";
import { SavedTrackObject } from "./SavedTrackObject";

export type PagingSavedTrackObject = PagingObject & {
            items?: SavedTrackObject[];
          };