import { useEffect } from 'react'

const EMPTY_DEPS = []

export const useAsyncEffect = (callback: () => Promise<Function | undefined>, deps?: any[]) => {
  useEffect(() => {
    let result: any
    const asyncEffect = async () => {
      result = await callback()
    }
    asyncEffect()
    return () => result?.()
  }, [(deps ?? EMPTY_DEPS).concat([callback])])
}
