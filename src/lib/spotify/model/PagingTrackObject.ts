import { PagingObject } from "./PagingObject";
import { TrackObject } from "./TrackObject";

export type PagingTrackObject = PagingObject & {
            items?: TrackObject[];
          };