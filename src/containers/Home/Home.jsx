import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames,  resetAll } from "../../actions/index";
import Videogames from "../../components/Videogames/Videogames";
// import { Pagination } from "../../components/Pagination/Pagination";
// import { Filter } from "../Filter/Filter";
// import Search from "../Search/Search";

export default function Home() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(resetAll());
    dispatch(getVideogames());

		console.log("renderizando home");
		
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

	
	// const filteredVideogames = useSelector((state) => state.filteredVideogames);

	// const filterBy = useSelector((state) => state.filterBy);
	// const orderBy = useSelector((state) => state.orderBy);
	const videogames = useSelector((state) => state.videogames);






	
	


  return (
    <div className="home">

      <Videogames videogames={videogames} />
      
    </div>
  );
};