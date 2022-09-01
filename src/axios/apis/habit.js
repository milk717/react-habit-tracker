import instance, {jsonServer} from "../index";

export const getHabit = async (id) => {
    const response = await jsonServer.get(
        `/habit/${id}`
    );
    return response.data;
}