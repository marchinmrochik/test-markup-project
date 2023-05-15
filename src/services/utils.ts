export const splitArray = <T>(array: T[], size: number, page: number): T[] => {
    const start = (page - 1) * size;
    const end = start + size;
    return array.slice(start, end);
}
