import { Color, Pattern, Selection } from './../types';

// function returns a string the same as the filename of the img
export function generateShirtId({ pattern, colorA, colorB }: Selection) {
    if (pattern !== 'plain' && colorB) {
        return `${patternId(pattern)}${colorId(colorA)}${colorId(colorB)}`;
    }

    return `${patternId(pattern)}${colorId(colorA)}`;
}

function patternId(pattern: Pattern) {
    switch (pattern) {
        case 'plain':
            return 'pl';
        case 'stripe':
            return 'st';
        case 'two-tone':
            return 'tt';
    }
}

function colorId(color: Color) {
    switch (color) {
        case 'black':
            return '01';
        case 'blue':
            return '02';
        case 'green':
            return '03';
        case 'orange':
            return '04';
        case 'red':
            return '05';
        case 'yellow':
            return '06';
        default:
            break;
    }
}
