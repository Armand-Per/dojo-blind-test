import { CursorObject } from "./CursorObject";

export type CursorPagingObject = {
            href?: string;
  limit?: number;
  next?: string;
  cursors?: CursorObject;
  total?: number;
          };