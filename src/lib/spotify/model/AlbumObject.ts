import { AlbumBase } from "./AlbumBase";
import { SimplifiedArtistObject } from "./SimplifiedArtistObject";
import { PagingSimplifiedTrackObject } from "./PagingSimplifiedTrackObject";
import { CopyrightObject } from "./CopyrightObject";
import { ExternalIdObject } from "./ExternalIdObject";

export type AlbumObject = AlbumBase & {
            artists?: SimplifiedArtistObject[];
  tracks?: PagingSimplifiedTrackObject;
  copyrights?: CopyrightObject[];
  external_ids?: ExternalIdObject;
  genres?: string[];
  label?: string;
  popularity?: number;
          };