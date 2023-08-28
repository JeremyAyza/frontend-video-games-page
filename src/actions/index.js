const URL_API="https://api.rawg.io/api"
const API_KEY="38b50206c79a4b3aaa3aa94762fa6e6a"

export function getVideogames() {
  return function (dispatch) {
    return fetch(URL_API + `/games?key=${API_KEY}&page=1&page_size=20`)
      .then(response => response.json())
      .then(json => {
        // console.log({json})
				console.log({results:json.results});
        dispatch({ type: "GET_VIDEOGAMES", payload: json.results });
      });
  };
}

export function getVideogameById(id) {
  return (dispatch) =>
    fetch(URL_API + `/games/${id}?key=${API_KEY}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log({getVideogameById:json})
        dispatch({
          type: "GET_VIDEOGAME_BY_ID",
          payload: json,
        });
      });
}



export const resetAll = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    });
  };
};







