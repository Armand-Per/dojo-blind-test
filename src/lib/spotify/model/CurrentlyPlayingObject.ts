import { ContextObject } from "./ContextObject";
import { TrackObject } from "./TrackObject";
import { EpisodeObject } from "./EpisodeObject";
import { DisallowsObject } from "./DisallowsObject";

export type CurrentlyPlayingObject = {
            context?: ContextObject;
  timestamp?: number;
  progress_ms?: number;
  is_playing?: boolean;
  item?: (TrackObject | EpisodeObject);
  currently_playing_type?: string;
  actions?: DisallowsObject;
          };