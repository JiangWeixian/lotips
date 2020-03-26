// refs: https://github.com/smali-kazmi/detect-mobile-browser/blob/master/detect-browser.js
export const isAndroid = (ua: string = navigator.userAgent) => {
  return ua.match(/Android/i)
}
