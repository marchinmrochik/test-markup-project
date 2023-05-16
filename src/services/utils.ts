export const splitArray = <T>(array: T[], size: number, page: number): T[] => {
    const start = (page - 1) * size;
    const end = start + size;
    return array.slice(start, end);
}


export const checkObjectEquality = <T>(arr1: T[], arr2: T[], keys: string[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const obj1 = arr1[i];
        const obj2 = arr2[i];

        for (const key of keys) {
            if ((obj1 as any)[key] !== (obj2 as any)[key]) {
                return false;
            }
        }
    }

    return true;
}
