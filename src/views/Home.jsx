import React, { useEffect, useContext } from 'react';
import Header from '../componentes/Header';
import Grilla from '../componentes/Grilla';
import AppContext from '../context/AppContext';

export default function Home() {


    const { listaProductos, setListaProductos } = useContext(AppContext);

    console.log(listaProductos);
    return (
        <div>
            <Header />
            <Grilla data={listaProductos}/>
        </div>
    )
}
