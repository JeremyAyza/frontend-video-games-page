import React from 'react';
import {Link} from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import './Card.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp({data}) {
	return (
		<div className="cardComp ">
			<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={data.background_image} alt={data.name} />
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>
					<li className="list-group-item">⭐ Rating: {data.rating}</li>

					{/* {data?.description_raw.slice(0,200)}... */}
				</Card.Text>
				<Link to={`/videogames/${data.id}`}>
					<Button variant="primary">Ver videojuego 🎮</Button>
				</Link>
			</Card.Body>
			</Card>



			
		</div>

	)
}

export default CardComp;
