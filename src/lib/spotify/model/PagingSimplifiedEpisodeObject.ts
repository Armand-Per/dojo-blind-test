import { PagingObject } from "./PagingObject";
import { SimplifiedEpisodeObject } from "./SimplifiedEpisodeObject";

export type PagingSimplifiedEpisodeObject = PagingObject & {
            items?: SimplifiedEpisodeObject[];
          };