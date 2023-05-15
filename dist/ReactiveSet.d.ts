import type { SetConstructorArgument } from './types';
export default class ReactiveSet<T> extends Set<T> {
    private readonly onMutate;
    constructor(onMutate: () => void, values?: SetConstructorArgument<T>);
    add(value: T): this;
    delete(value: T): boolean;
    clear(): void;
}
