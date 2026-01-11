import { ExternalUrlObject } from "./ExternalUrlObject";
import { FollowersObject } from "./FollowersObject";
import { ImageObject } from "./ImageObject";

export type PublicUserObject = {
            display_name?: string;
  external_urls?: ExternalUrlObject;
  followers?: FollowersObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  type?: "user";
  uri?: string;
          };