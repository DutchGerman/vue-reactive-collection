import type { MapConstructorArgument } from './types';
export default function useReactiveMap<K, V>(entires?: MapConstructorArgument<K, V>): import("vue").WritableComputedRef<Map<K, V>>;
