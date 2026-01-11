import { CopyrightObject } from "./CopyrightObject";
import { ExternalUrlObject } from "./ExternalUrlObject";
import { ImageObject } from "./ImageObject";

export type ShowBase = {
            available_markets: string[];
  copyrights: CopyrightObject[];
  description: string;
  html_description: string;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: "show";
  uri: string;
  total_episodes: number;
          };