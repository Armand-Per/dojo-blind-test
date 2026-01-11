import { AuthorObject } from "./AuthorObject";
import { CopyrightObject } from "./CopyrightObject";
import { ExternalUrlObject } from "./ExternalUrlObject";
import { ImageObject } from "./ImageObject";
import { NarratorObject } from "./NarratorObject";

export type AudiobookBase = {
            authors: AuthorObject[];
  available_markets: string[];
  copyrights: CopyrightObject[];
  description: string;
  html_description: string;
  edition?: string;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  languages: string[];
  media_type: string;
  name: string;
  narrators: NarratorObject[];
  publisher: string;
  type: "audiobook";
  uri: string;
  total_chapters: number;
          };