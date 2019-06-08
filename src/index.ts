import { getScale, scales } from './scale';
import { getChord, chords } from './chord';
import { clip } from './clip';
import { getChordDegrees, getChordsByProgression } from './progression';
import { arp } from './arp';
import { midi } from './midi';
import { Session } from './session';

export {
  getScale as scale,
  getScale as mode,
  scales,
  scales as modes,
  getChord as chord,
  chords,
  clip,
  getChordDegrees,
  getChordsByProgression,
  arp,
  midi,
  Session as session,
};