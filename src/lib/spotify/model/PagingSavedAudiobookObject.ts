import { PagingObject } from "./PagingObject";
import { SavedAudiobookObject } from "./SavedAudiobookObject";

export type PagingSavedAudiobookObject = PagingObject & {
            items?: SavedAudiobookObject[];
          };