import React, { Component, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function PokeCard() {    
    const [info,setInfo] = useState();

    const getInfo = async() => {
        const response = await fetch(
            'https://pokeapi.co/api/v2/characteristic/1'
        ).then((response)=>response.json())
        setInfo(response);
        console.log(info);
    };

    useEffect(()=>{
        getInfo();
    },[]);

    return (
        <div className='pokemon_cards'>
                <div className="card">
                    <img className="card-img-top" src="..." alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="..." alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="..." alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </div>
    );
}

export default PokeCard;