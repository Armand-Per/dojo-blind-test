import { ChapterBase } from "./ChapterBase";
import { SimplifiedAudiobookObject } from "./SimplifiedAudiobookObject";

export type ChapterObject = ChapterBase & {
            audiobook: SimplifiedAudiobookObject;
          };