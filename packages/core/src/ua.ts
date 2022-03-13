// refs: https://github.com/juliangruber/is-mobile/blob/master/index.js
import IsMobile, { IsMobileOptions } from 'is-mobile'

// refs: https://github.com/smali-kazmi/detect-mobile-browser/blob/master/detect-browser.js
export const isiOS = (ua: string = navigator.userAgent) => {
  return ua.match(/iPhone|iPad|iPod/i)
}

// refs: https://github.com/smali-kazmi/detect-mobile-browser/blob/master/detect-browser.js
export const isAndroid = (ua: string = navigator.userAgent) => {
  return ua.match(/Android/i)
}

export const isMobile = (props: IsMobileOptions = {}) => {
  return IsMobile(props)
}
