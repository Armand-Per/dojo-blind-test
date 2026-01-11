import { PagingObject } from "./PagingObject";
import { SimplifiedAudiobookObject } from "./SimplifiedAudiobookObject";

export type PagingSimplifiedAudiobookObject = PagingObject & {
            items?: SimplifiedAudiobookObject[];
          };