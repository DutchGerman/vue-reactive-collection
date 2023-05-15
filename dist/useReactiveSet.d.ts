import type { SetConstructorArgument } from './types';
export default function useReactiveSet<T>(values?: SetConstructorArgument<T>): import("vue").WritableComputedRef<Set<T>>;
