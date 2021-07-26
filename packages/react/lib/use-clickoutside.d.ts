/**
 * refs: https://usehooks.com/useOnClickOutside/
 */
/// <reference types="react" />
export declare type UseClickOutsideProps = {
    onClickOutside?(event: MouseEvent | TouchEvent): void;
    onClickInside?(event: MouseEvent | TouchEvent): void;
    outsides?: any[];
    insides?: any[];
};
export declare function useClickOutside(ref: React.MutableRefObject<HTMLElement | null | undefined>, { outsides, insides, onClickInside, onClickOutside, }: UseClickOutsideProps): void;
