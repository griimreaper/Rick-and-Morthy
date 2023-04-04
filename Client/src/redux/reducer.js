import { ADD_FAV, FILTRAR_NOMBRE, REMOVE_FAV, FILTER, ORDER, RESET, STATUS } from "./actions"

const initialState = {
    myFavorites: [],
    myFavoritesOrigin: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                myFavoritesOrigin: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const idDelete = state.myFavorites.filter((pj) => pj.id !== payload)
            return {
                ...state,
                myFavorites: idDelete,
                myFavoritesOrigin: idDelete
            }
        case FILTRAR_NOMBRE:
            const sortedFavorites = state.myFavorites.sort((a, b) => {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return "Ascendente" === payload ? 1 : -1;
                }
                if (nameA > nameB) {
                    return "Descendente" === payload ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                myFavorites: sortedFavorites
            }
        case FILTER:
            const newFilter = state.myFavoritesOrigin.filter((ch) => ch.gender === payload)
            return {
                ...state,
                myFavorites: newFilter
            }
        case ORDER:
            const newOrder = state.myFavorites.sort((a, b) => {
                if (a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1;
                }
                if (a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                myFavorites: newOrder
            }
        case STATUS:
            const newFilterStatus = state.myFavoritesOrigin.filter((ch) => ch.status === payload)
            return {
                ...state,
                myFavorites: newFilterStatus
            }
        case RESET:
            return {
                ...state,
                myFavorites: [...state.myFavoritesOrigin]
            }
        default:
            return state
    }
}