import type { MapConstructorArgument } from './types';
export default class ReactiveMap<K, V> extends Map<K, V> {
    private readonly onMutate;
    constructor(onMutate: () => void, entries?: MapConstructorArgument<K, V>);
    set(key: K, value: V): this;
    delete(key: K): boolean;
    clear(): void;
}
