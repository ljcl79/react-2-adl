import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function Detalle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { listaProductos, setListaProductos } = useContext(AppContext);

    const producto = listaProductos.filter((e) => e.id === id);
    console.log(producto.length);

    return (
        <>
        {producto.length > 0 ?
        <div className="card col-lg-3 col-md-6" key={producto[0].id}>
            <img className="card-img-top"
                src={producto[0].img}
                alt={producto[0].name}
            />
            <div className="card-body">
                <h5 className="card-title">{producto[0].name}</h5>
                <hr />
                <ul>
                    {producto[0].ingredients.map((i) => (
                        <li>🍕 {i}</li>
                    ))}
                </ul>

            </div>
        </div>:<div></div>
        }
        </>
    )
}
