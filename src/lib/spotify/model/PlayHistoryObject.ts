import { TrackObject } from "./TrackObject";
import { ContextObject } from "./ContextObject";

export type PlayHistoryObject = {
            track?: TrackObject;
  played_at?: string;
  context?: ContextObject;
          };