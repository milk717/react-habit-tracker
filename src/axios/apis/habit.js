export const getHabit = async(id) => {
    const response = await get(
        `/habit/${id}`
    );
    return response.data;
}