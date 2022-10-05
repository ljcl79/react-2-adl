import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ producto }) {
    const navigate = useNavigate();


    return (

        <div className="card col-lg-3 col-md-6" key={producto.id}>
            <img className="card-img-top"
                src={producto.img}
                alt={producto.name}
            />
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <hr />
                <ul>
                    {producto.ingredients.map((i) => (
                        <li>🍕 {i}</li>
                    ))}
                </ul>
                <div className="d-flex">
                    <button className="btn btn-success" onClick={() => navigate(`/pizza/${producto.id}`)}>Ver más</button>
                    <button className="btn btn-warning" onClick={() => console.log('aqui va el añadir carrito')}>Añadir</button>

                </div>
            </div>
        </div>
    )
}
