import instance from "../index";

export const getHabit = async(id) => {
    const response = await instance.get(
        `/habit/${id}`
    );
    return response.data;
}