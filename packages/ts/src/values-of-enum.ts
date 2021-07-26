const StringIsNumber = (value: string | number) => isNaN(Number(value)) === true

// Turn enum into array
export function valuesOfEnum(enumme: any): string[] {
  return Object.keys(enumme)
    .filter(StringIsNumber)
    .map(key => enumme[key])
}
