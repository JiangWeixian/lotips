/**
 * WHY:
 * 有的时候我们会选择监听剪贴板行为，甚至是跨域`Tab`的监听行为。所以用了轮询的方式
 * 或许会有延迟，但是的确是`Observer`的表现
 * WARNING:
 * 在`IOS`移动端上, 可能不支持`navigator.clipboard`
 */
import { useState, useRef, useEffect } from 'react'

export const useClipboardObserver = ({ interval = 1000 }) => {
  const [text, setText] = useState<string>()
  const intervaler = useRef<NodeJS.Timer>()
  useEffect(() => {
    if (!intervaler.current) {
      intervaler.current = setInterval(() => {
        navigator.clipboard
          .readText()
          .then(res => res !== text && setText(res))
          .catch(() => {
            // do nothing
          })
      }, interval)
    }
    return () => (intervaler.current = undefined)
  }, [interval, text])
  return {
    text,
  }
}
