import { SimplifiedArtistObject } from "./SimplifiedArtistObject";
import { ExternalUrlObject } from "./ExternalUrlObject";
import { LinkedTrackObject } from "./LinkedTrackObject";
import { TrackRestrictionObject } from "./TrackRestrictionObject";

export type SimplifiedTrackObject = {
            artists?: SimplifiedArtistObject[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_urls?: ExternalUrlObject;
  href?: string;
  id?: string;
  is_playable?: boolean;
  linked_from?: LinkedTrackObject;
  restrictions?: TrackRestrictionObject;
  name?: string;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri?: string;
  is_local?: boolean;
          };