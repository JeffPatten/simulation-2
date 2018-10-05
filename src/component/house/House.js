import React from 'react';

export default function House( {name, address, city, state, zip, img, mortgage, rent } ){

    return(
        <div>
            <h1>House</h1>
            <h3>{name}</h3>
            <h3>{address}</h3>
            <h3>{city}</h3>
            <h3>{state}</h3>
            <h3>{zip}</h3>
            <img src={img} alt=''/>
            <h3>{mortgage}</h3>
            <h3>{rent}</h3>
        </div>
    )
}