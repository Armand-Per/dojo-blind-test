import { TimeSignature } from "./TimeSignature";

export type SectionObject = {
            start?: number;
  duration?: number;
  confidence?: number;
  loudness?: number;
  tempo?: number;
  tempo_confidence?: number;
  key?: number;
  key_confidence?: number;
  mode?: "-1" | "0" | "1";
  mode_confidence?: number;
  time_signature?: TimeSignature;
  time_signature_confidence?: number;
          };