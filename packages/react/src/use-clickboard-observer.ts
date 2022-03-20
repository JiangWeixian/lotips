import { useState, useRef, useEffect } from 'react'

/**
 * @description listen clipboard text
 * @warning maybe not working on iOS
 */
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
