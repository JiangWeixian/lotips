/**
 * @description replace `highlight` -> `<mark>highlight</mark>` with with vanilla js.
 * @see: {@link https://www.eriwen.com/javascript/highlight-search-results-with-js/}
 * @category string
 * @example doHighlight('hello world', 'world')
 */
export const doHighlight = (
  original: string,
  highlight: string,
  callback?: (substring: string, ...args: any[]) => string,
) => {
  if (!highlight) return original

  if (callback)
    return original.replace(new RegExp(`>([^<]*)?(${highlight})([^>]*)?<`, 'ig'), callback)

  return original.replace(
    new RegExp(`>([^<]*)?(${highlight})([^>]*)?<`, 'ig'),
    '>$1<mark>$2</mark>$3<',
  )
}
