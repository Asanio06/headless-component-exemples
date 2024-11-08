
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type NextDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "STOP"];

type Inc<T> = T extends Digit ? NextDigit[T] : "STOP";

export type DeepKey<T, Depth = 0> = (
    T extends object
        ? Depth extends "STOP"
            ? unknown
            : {
                [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
                    DeepKey<T[K], Inc<Depth>>
                >}`;
            }[Exclude<keyof T, symbol>]
        : ""
    ) extends infer D
    ? Extract<D, string>
    : never;

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;
