// refs: https://github.com/juliangruber/is-mobile/blob/master/index.js
import IsMobile, { IsMobileOptions } from 'is-mobile'

// refs: https://github.com/smali-kazmi/detect-mobile-browser/blob/master/detect-browser.js
/**
 * @category ua
 */
export const isiOS = (ua: string = navigator.userAgent) => {
  return ua.match(/iPhone|iPad|iPod/i)
}

// refs: https://github.com/smali-kazmi/detect-mobile-browser/blob/master/detect-browser.js
/**
 * @category ua
 */
export const isAndroid = (ua: string = navigator.userAgent) => {
  return ua.match(/Android/i)
}

/**
 * @category ua
 */
export const isMobile = (props: IsMobileOptions = {}) => {
  return IsMobile(props)
}
