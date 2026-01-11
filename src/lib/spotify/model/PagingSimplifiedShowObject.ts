import { PagingObject } from "./PagingObject";
import { SimplifiedShowObject } from "./SimplifiedShowObject";

export type PagingSimplifiedShowObject = PagingObject & {
            items?: SimplifiedShowObject[];
          };