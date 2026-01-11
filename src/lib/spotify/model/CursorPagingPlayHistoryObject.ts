import { CursorPagingObject } from "./CursorPagingObject";
import { PlayHistoryObject } from "./PlayHistoryObject";

export type CursorPagingPlayHistoryObject = CursorPagingObject & {
            items?: PlayHistoryObject[];
          };