import { PagingObject } from "./PagingObject";
import { SavedShowObject } from "./SavedShowObject";

export type PagingSavedShowObject = PagingObject & {
            items?: SavedShowObject[];
          };