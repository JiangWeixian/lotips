// refs: https://github.com/smali-kazmi/detect-mobile-browser/blob/master/detect-browser.js
export const isiOS = (ua: string = navigator.userAgent) => {
  return ua.match(/iPhone|iPad|iPod/i)
}
