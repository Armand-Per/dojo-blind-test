import { PlaylistUserObject } from "./PlaylistUserObject";
import { TrackObject } from "./TrackObject";
import { EpisodeObject } from "./EpisodeObject";

export type PlaylistTrackObject = {
            added_at?: string;
  added_by?: PlaylistUserObject;
  is_local?: boolean;
  track?: (TrackObject | EpisodeObject);
          };