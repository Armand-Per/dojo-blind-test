import { SimplifiedAlbumObject } from "./SimplifiedAlbumObject";
import { ArtistObject } from "./ArtistObject";
import { ExternalIdObject } from "./ExternalIdObject";
import { ExternalUrlObject } from "./ExternalUrlObject";
import { LinkedTrackObject } from "./LinkedTrackObject";
import { TrackRestrictionObject } from "./TrackRestrictionObject";

export type TrackObject = {
            album?: SimplifiedAlbumObject;
  artists?: ArtistObject[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: ExternalIdObject;
  external_urls?: ExternalUrlObject;
  href?: string;
  id?: string;
  is_playable?: boolean;
  linked_from?: LinkedTrackObject;
  restrictions?: TrackRestrictionObject;
  name?: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type?: "track";
  uri?: string;
  is_local?: boolean;
          };