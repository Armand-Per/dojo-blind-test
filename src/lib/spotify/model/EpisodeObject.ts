import { EpisodeBase } from "./EpisodeBase";
import { SimplifiedShowObject } from "./SimplifiedShowObject";

export type EpisodeObject = EpisodeBase & {
            show: SimplifiedShowObject;
          };