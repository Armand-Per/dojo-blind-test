import { ExternalUrlObject } from "./ExternalUrlObject";
import { ImageObject } from "./ImageObject";
import { ResumePointObject } from "./ResumePointObject";
import { EpisodeRestrictionObject } from "./EpisodeRestrictionObject";

export type EpisodeBase = {
            audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language?: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  resume_point: ResumePointObject;
  type: "episode";
  uri: string;
  restrictions?: EpisodeRestrictionObject;
          };