import api from '../../store/api';
// ------------------------------------//
// Actions
// ------------------------------------//

// Get messages by thread id
export const getMessagesByThreadId = async (id) => {
    try {
        const response = await api.get(`/messages/thread/${id}`);
        return response.data.messages
    } catch (error) {
        throw new Error(error);
    }
}

// Create new message
export const createMessage = async (data) => {
    const sentBy = data.id;
    const threadId = data.threadId;
    const messageData = {
        message: data.message,
        sentBy,
        threadId
    }
    try {
        const response = await api.post('/messages', messageData);
        return response.data.message
    } catch (error) {
        throw new Error(error);
    }
}