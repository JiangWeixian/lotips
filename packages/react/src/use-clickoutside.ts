/**
 * refs: https://usehooks.com/useOnClickOutside/
 */

import { useEffect } from 'react'

const EMPTY_ELEMENTS: Element[] = []

export type UseClickOutsideProps = {
  onClickOutside?(event: MouseEvent | TouchEvent): void
  onClickInside?(event: MouseEvent | TouchEvent): void
  outsides?: Element[]
  insides?: Element[]
}

export function useClickOutside(
  ref: React.MutableRefObject<HTMLElement | null | undefined>,
  { outsides = EMPTY_ELEMENTS, insides = EMPTY_ELEMENTS, ...props }: UseClickOutsideProps,
) {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current) {
          return
        }
        if (outsides.some(v => v === event.target)) {
          props.onClickOutside?.(event)
          return
        }
        if (ref.current.contains(event.target as Node) || insides.some(v => v === event.target)) {
          props.onClickInside?.(event)
          return
        }

        props.onClickOutside?.(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, props.onClickInside, props.onClickOutside, outsides, insides],
  )
}
