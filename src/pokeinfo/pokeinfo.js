import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function PokeInfo() {
    return (
    <div className='pokemon_info'>
        <div className="card">
        <img className="card-img-top" src="..." alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
        </div>
    </div>
  </div>

    );
}

export default PokeInfo;
