import { Color } from './Color';
import { Pattern } from './Pattern';

export interface Selection {
    pattern: Pattern;
    colorA: Color;
    colorB?: Color;
}
