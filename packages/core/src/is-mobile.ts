// refs: https://github.com/juliangruber/is-mobile/blob/master/index.js
import IsMobile, { IsMobileOptions } from 'is-mobile'

export const isMobile = (props: IsMobileOptions = {}) => {
  return IsMobile(props)
}
