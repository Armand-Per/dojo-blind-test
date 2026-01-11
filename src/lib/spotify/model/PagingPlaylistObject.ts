import { PagingObject } from "./PagingObject";
import { SimplifiedPlaylistObject } from "./SimplifiedPlaylistObject";

export type PagingPlaylistObject = PagingObject & {
            items?: SimplifiedPlaylistObject[];
          };