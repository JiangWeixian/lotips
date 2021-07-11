/**
 * refs: https://usehooks.com/useOnClickOutside/
 */
export declare type UseClickOutsideProps = {
  onClickOutside?(event: MouseEvent | TouchEvent): void
  onClickInside?(event: MouseEvent | TouchEvent): void
  outsides?: Element[]
  insides?: Element[]
}
export declare function useClickOutside(
  ref: React.MutableRefObject<HTMLElement | null | undefined>,
  { outsides, insides, ...props }: UseClickOutsideProps,
): void
