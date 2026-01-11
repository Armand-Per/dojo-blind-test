import { PagingObject } from "./PagingObject";
import { SavedEpisodeObject } from "./SavedEpisodeObject";

export type PagingSavedEpisodeObject = PagingObject & {
            items?: SavedEpisodeObject[];
          };