import {Api} from "./axiosInstanse";

export const getCards = async (): Promise<any> => {
    try {
        const response = await Api.get('/cards');
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch cards');
    }
};
