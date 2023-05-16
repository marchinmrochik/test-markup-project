export const splitArray = <T>(array: T[], size: number, page: number): T[] => {
    const start = (page - 1) * size;
    const end = start + size;
    return array.slice(start, end);
}


export const checkObjectEquality = <T>(obj1: T, obj2: T, keys: string[]): boolean => {
    for (const key of keys) {
        if ((obj1 as any)[key] !== (obj2 as any)[key]) {
            return false;
        }
    }
    return true;
}
