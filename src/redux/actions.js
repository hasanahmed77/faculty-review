export const serachProfessor = (professor) => {
    return {
        type: "SEARCH_BY_NAME",
        payload: professor
    }
}

export const searchByUni = (professor) => {
    return {
        type: "SEARCH_BY_UNI",
        payload: professor
    }
}

export const setProfessors = (professors) => {
    return {
        type: "SET_PROFESSORS",
        payload: professors
    }
}