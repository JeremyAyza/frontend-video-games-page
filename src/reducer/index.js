const initialState = {
  videogames: [],
  genres: [],
  searchVideogame: [],
  createVideogame: null,
  searchVideogameById: {
    description_raw:"",
    metacritic_platforms :[],
    genres:[]
  },
  searchVideogameByName: [],
  filteredVideogames: [],
  orderBy: "Select",
  filterBy: "All",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };

    case "SEARCH_VIDEOGAMES":
      return {
        ...state,
        searchVideogameByName: action.payload,
      };

    case "GET_VIDEOGAME_BY_ID":
      return {
        ...state,
        searchVideogameById: action.payload,
      };

    

    case "RESET":
      return {
        ...state,
        videogames: [],
        filteredVideogames: [],
        orderBy: "Select",
        filterBy: "All",
      }

    
    default:
      return state;
  }
};