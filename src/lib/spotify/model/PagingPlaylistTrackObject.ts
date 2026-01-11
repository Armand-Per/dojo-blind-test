import { PagingObject } from "./PagingObject";
import { PlaylistTrackObject } from "./PlaylistTrackObject";

export type PagingPlaylistTrackObject = PagingObject & {
            items?: PlaylistTrackObject[];
          };