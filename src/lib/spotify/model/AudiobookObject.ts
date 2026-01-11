import { AudiobookBase } from "./AudiobookBase";
import { PagingSimplifiedChapterObject } from "./PagingSimplifiedChapterObject";

export type AudiobookObject = AudiobookBase & {
            chapters: PagingSimplifiedChapterObject;
          };