import API from './api';

function head(token) {
    const head = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return head;
}

export async function createHabit(data, token) {
    const response = API.post("/habits", data, head(token)).catch(() => false)

    if(response === false) return false;
    return response.data;
}

export async function listHabits(token) {
    const response = await API.get("/habits", head(token)).catch(() => false)

    if (response === false) return false;
    return response.data;
}

export async function deleteHabit(habitId, token) {
    const response = await API.delete(`/habits/${habitId}`, head(token)).catch(() => false)

    if(response === false) return false;
    return response.data;
}

export async function searchTodayHabits(token) {
    const response = await API.get("/habits/today", head(token))
        .catch(() => false)

    if(response === false) return false;
    return response.data;
}

export async function markHabitAsDone(habitId, token) {
    const response = await API.post(`/habits/${habitId}/check`, {}, head(token))
        .catch(() => false)
    
    if(response === false) return false;
    return response.data;
}

export async function markOffHabitAsDone() {
    const response = await API.post(`/habits/${habitId}/uncheck`, {}, head(token))
        .catch(() => false)

    if(response === false) return false;
    return response.data;
}