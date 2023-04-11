import { ADD_FAV, FILTRAR_NOMBRE, REMOVE_FAV, FILTER, ORDER, RESET, STATUS, ADD_CHARACTER, REMOVE_CHARACTER, NEXT_PAGE, PREV_PAGE, ADD_LOCATION, SEARCH_CHARACTERS, RESET_CHARACTERS, HANDLE_NUMBER } from "./actions"

const initialState = {
    location: [],
    numPage: 1,
    characters: [],
    charactersOrigin: [],
    myFavorites: [],
    myFavoritesOrigin: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case HANDLE_NUMBER:
            return {
                ...state,
                numPage: payload
            }
        case RESET_CHARACTERS:
            return {
                ...state,
                characters: [...state.charactersOrigin]
            }
        case SEARCH_CHARACTERS:
            return {
                ...state,
                characters: [payload]
            }
        case ADD_LOCATION:
            return {
                ...state,
                location: [...state.location, payload]
            }
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            }
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            }
        case ADD_CHARACTER:
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    characters: [...state.characters, ...payload],
                    charactersOrigin: [...state.characters, ...payload]
                }
            }
            return {
                ...state,
                characters: [payload, ...state.characters]
            }
        case REMOVE_CHARACTER:
            const newCharacter = state.myFavorites.filter((pj) => pj.id !== payload)
            return {
                ...state,
                myFavorites: newCharacter,
                myFavoritesOrigin: newCharacter
            }
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                myFavoritesOrigin:payload
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            };
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