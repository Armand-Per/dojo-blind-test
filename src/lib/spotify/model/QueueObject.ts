import { TrackObject } from "./TrackObject";
import { EpisodeObject } from "./EpisodeObject";

export type QueueObject = {
            currently_playing?: (TrackObject | EpisodeObject);
  queue?: (TrackObject | EpisodeObject)[];
          };