import { useEffect } from 'react'
import { isMobile } from '@lotips/core/ua'

const EMPTY_ELEMENTS: Element[] = []

export type UseClickOutsideProps = {
  onClickOutside?(event: MouseEvent | TouchEvent): void
  onClickInside?(event: MouseEvent | TouchEvent): void
  outsides?: any[]
  insides?: any[]
}

/**
 * @description click outside of element hook
 * @see {@link https://usehooks.com/useOnClickOutside/}
 */
export function useClickOutside(
  ref: React.MutableRefObject<HTMLElement | null | undefined>,
  {
    /**
     * Specific extra outside elements
     */
    outsides = EMPTY_ELEMENTS,
    /**
     * Specific extra inside elements
     * @default ref
     */
    insides = EMPTY_ELEMENTS,
    /**
     * Callback if click inside
     */
    onClickInside,
    /**
     * Callback if click outside
     */
    onClickOutside,
  }: UseClickOutsideProps,
) {
  const isSwitchToTouchMode = isMobile()
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || !event.target) return

        if (event.target && outsides.some(v => v.contains(event.target))) {
          onClickOutside?.(event)
          return
        }
        if (
          ref.current.contains(event.target as Node) ||
          insides.some(v => v.contains(event.target))
        ) {
          onClickInside?.(event)
          return
        }

        onClickOutside?.(event)
      }

      if (!isSwitchToTouchMode) document.addEventListener('mousedown', listener)
      else document.addEventListener('touchstart', listener)

      return () => {
        if (!isSwitchToTouchMode) document.removeEventListener('mousedown', listener)
        else document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, onClickInside, onClickOutside, outsides, insides, isSwitchToTouchMode],
  )
}
