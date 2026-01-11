import { AlbumBase } from "./AlbumBase";
import { SimplifiedArtistObject } from "./SimplifiedArtistObject";

export type SimplifiedAlbumObject = AlbumBase & {
            artists: SimplifiedArtistObject[];
          };