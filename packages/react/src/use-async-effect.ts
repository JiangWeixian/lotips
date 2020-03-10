import { useEffect } from 'react'

const EMPTY_DEPS: any[] = []

export const useAsyncEffect = (
  callback: () => Promise<Function | undefined | void>,
  deps?: any[],
) => {
  useEffect(() => {
    let result: Function | undefined | void
    const asyncEffect = async () => {
      result = await callback()
    }
    asyncEffect()
    return () => result && result()
  }, [(deps ?? EMPTY_DEPS).concat([callback])])
}
