import React, {  useEffect } from "react";
import CardComp from "../../components/Card/Card";
import "./Videogames.css"

export default function Videogames ({videogames}) {

	

  return (
    <div className="showing">
      {videogames.length > 0 
        ?videogames.map((data) => (<CardComp key={data.id} data={data} />))
        :<div className="t-w">BUSCANDO ...</div>
			
      }
    </div>
  );
};

