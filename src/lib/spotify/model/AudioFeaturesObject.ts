import { Key } from "./Key";
import { Loudness } from "./Loudness";
import { Mode } from "./Mode";
import { Tempo } from "./Tempo";
import { TimeSignature } from "./TimeSignature";

export type AudioFeaturesObject = {
            acousticness?: number;
  analysis_url?: string;
  danceability?: number;
  duration_ms?: number;
  energy?: number;
  id?: string;
  instrumentalness?: number;
  key?: Key;
  liveness?: number;
  loudness?: Loudness;
  mode?: Mode;
  speechiness?: number;
  tempo?: Tempo;
  time_signature?: TimeSignature;
  track_href?: string;
  type?: "audio_features";
  uri?: string;
  valence?: number;
          };