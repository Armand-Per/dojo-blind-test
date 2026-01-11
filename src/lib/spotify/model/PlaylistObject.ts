import { ExternalUrlObject } from "./ExternalUrlObject";
import { FollowersObject } from "./FollowersObject";
import { ImageObject } from "./ImageObject";
import { PlaylistOwnerObject } from "./PlaylistOwnerObject";
import { PagingPlaylistTrackObject } from "./PagingPlaylistTrackObject";

export type PlaylistObject = {
            collaborative?: boolean;
  description?: string;
  external_urls?: ExternalUrlObject;
  followers?: FollowersObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  name?: string;
  owner?: PlaylistOwnerObject;
  public?: boolean;
  snapshot_id?: string;
  tracks?: PagingPlaylistTrackObject;
  type?: string;
  uri?: string;
          };