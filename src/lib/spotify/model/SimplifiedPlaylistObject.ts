import { ExternalUrlObject } from "./ExternalUrlObject";
import { ImageObject } from "./ImageObject";
import { PlaylistOwnerObject } from "./PlaylistOwnerObject";
import { PlaylistTracksRefObject } from "./PlaylistTracksRefObject";

export type SimplifiedPlaylistObject = {
            collaborative?: boolean;
  description?: string;
  external_urls?: ExternalUrlObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  name?: string;
  owner?: PlaylistOwnerObject;
  public?: boolean;
  snapshot_id?: string;
  tracks?: PlaylistTracksRefObject;
  type?: string;
  uri?: string;
          };