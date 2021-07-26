import { useEffect } from 'react'

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
  }, [deps, callback])
}
