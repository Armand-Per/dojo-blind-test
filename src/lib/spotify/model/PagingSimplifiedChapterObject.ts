import { PagingObject } from "./PagingObject";
import { SimplifiedChapterObject } from "./SimplifiedChapterObject";

export type PagingSimplifiedChapterObject = PagingObject & {
            items?: SimplifiedChapterObject[];
          };