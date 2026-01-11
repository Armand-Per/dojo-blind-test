import { ShowBase } from "./ShowBase";
import { PagingSimplifiedEpisodeObject } from "./PagingSimplifiedEpisodeObject";

export type ShowObject = ShowBase & {
            episodes: PagingSimplifiedEpisodeObject;
          };