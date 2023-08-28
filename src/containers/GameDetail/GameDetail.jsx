import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById } from "../../actions/index";
import NotFound from "../../components/NotFound/NotFound";
import "./GameDetail.css";

function GameDetail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);
	
  useEffect(() => {
    dispatch(getVideogameById(id));
	console.log({ videogame });
	
  }, []);
	
	// useEffect(() => {
	// 	console.log({ videogame });
	// }, [dispatch]);
  return (    
		<div className="detail ">
			<div className="info">
				<div className="image  d-flex flex-wrap justify-content-around  align-items-center">
					{videogame.background_image === null || !videogame.background_image ? (
						<NotFound image={"noimage"} />
					) : (
						<div>

							<img src={videogame.background_image} alt={videogame.name} />
						</div>
					)}
					<div className="my-3">
						<h2>{videogame.name} </h2>
						<h6>({videogame.released})</h6>
					</div>
				</div>
				<div className="details px-5  py-3 mt-3">
					
					<div className="info-box">
						<div className="d-flex justify-content-between">
							<div>
								<b>✅ID: </b>
								<span> {videogame.id}</span>
							</div>
							<div>
								<b>🧬Genres: </b>
								<span>{videogame?.genres.map(g=>g.name).join(" - ")}</span>
							</div>
							<div>
								<b>⭐Rating: </b>
								<span>{videogame?.rating}</span>
							</div>

						</div>
						<div className="mt-3">
							<b>🎮Plataformas: </b>
							<br />
							<span>{videogame?.metacritic_platforms.map(p=>p.platform.name).join(", ")}</span>
						</div>
						<div className="mt-3">
							<b>📖Descripción: </b>
							<br />
							<span>{videogame?.description_raw.slice(0,450)}...</span>
						</div>
					</div>
					
				</div>
			</div>
			<Link to="/home">
				<button className="button" type="submit">🏠 Home</button>
			</Link>
		</div>
  
  );
}

export default GameDetail;