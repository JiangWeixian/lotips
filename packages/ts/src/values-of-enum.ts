const StringIsNumber = (value: string | number) => isNaN(Number(value)) === false;

// Turn enum into array
export function valuesOfEnum(enumme: any): string[] {
    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(key => enumme[key]);
}