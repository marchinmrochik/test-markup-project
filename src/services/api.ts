import {Api} from "./axiosInstanse";

export const getCards = async (): Promise<any> => {
    try {
        return await Api.get('/cards');
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch cards');
    }
};
