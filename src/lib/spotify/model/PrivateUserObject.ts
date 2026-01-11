import { ExplicitContentSettingsObject } from "./ExplicitContentSettingsObject";
import { ExternalUrlObject } from "./ExternalUrlObject";
import { FollowersObject } from "./FollowersObject";
import { ImageObject } from "./ImageObject";

export type PrivateUserObject = {
            country?: string;
  display_name?: string;
  email?: string;
  explicit_content?: ExplicitContentSettingsObject;
  external_urls?: ExternalUrlObject;
  followers?: FollowersObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  product?: string;
  type?: string;
  uri?: string;
          };