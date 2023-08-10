import axiosInstance from "../axiosInstance";


export const submitOrderForm = async (formData) => {
    try {
        const response = await axiosInstance.post('/send/order.php', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
}