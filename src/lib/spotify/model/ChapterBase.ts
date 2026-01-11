import { ExternalUrlObject } from "./ExternalUrlObject";
import { ImageObject } from "./ImageObject";
import { ResumePointObject } from "./ResumePointObject";
import { ChapterRestrictionObject } from "./ChapterRestrictionObject";

export type ChapterBase = {
            audio_preview_url: string;
  available_markets?: string[];
  chapter_number: number;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  resume_point: ResumePointObject;
  type: "episode";
  uri: string;
  restrictions?: ChapterRestrictionObject;
          };