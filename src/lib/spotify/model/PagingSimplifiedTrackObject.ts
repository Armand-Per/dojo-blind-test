import { PagingObject } from "./PagingObject";
import { SimplifiedTrackObject } from "./SimplifiedTrackObject";

export type PagingSimplifiedTrackObject = PagingObject & {
            items?: SimplifiedTrackObject[];
          };