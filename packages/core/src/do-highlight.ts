/**
 * NOTE:
 * if webcontent come from can be use with markdown render, and __html
 * use for hightlight keyword by replacing with a html tag
 */

export const doHighlight = (
  original: string,
  highlight: string,
  callback?: (substring: string, ...args: any[]) => string,
) => {
  if (callback) {
    return original.replace(new RegExp('>([^<]*)?(' + highlight + ')([^>]*)?<', 'ig'), callback)
  }
  return original.replace(
    new RegExp('>([^<]*)?(' + highlight + ')([^>]*)?<', 'ig'),
    '>$1<mark>$2</mark>$3<',
  )
}
