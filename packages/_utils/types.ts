import Vue from 'vue'

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T) => args

export declare type SFCWithInstall<T> = T & { install(vue: Vue): void }

export const ComSizeType = tuple('default', 'large', 'medium', 'small')