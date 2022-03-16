/**
 * @description a simple way to highlight content on website
 * @waring now it's not working on textarea
 * @category dom
 */
export function doSearch(
  text: string,
  { caseSensitive = false }: { caseSensitive: boolean } = { caseSensitive: false },
) {
  const W = window as any
  const B = document.body as any
  if (W && window.getSelection) {
    document.designMode = 'on'
    const sel = window.getSelection()
    sel?.collapse(document.body, 0)

    // tslint:disable-next-line:no-any
    while (W.find(text, caseSensitive)) {
      document.execCommand('HiliteColor', false, 'yellow')
      sel?.collapseToEnd()
    }
    document.designMode = 'off'
  } else if (B.createTextRange) {
    const textRange = B.createTextRange()
    while (textRange.findText(text)) {
      textRange.execCommand('BackColor', false, 'yellow')
      textRange.collapse(false)
    }
  }
}
