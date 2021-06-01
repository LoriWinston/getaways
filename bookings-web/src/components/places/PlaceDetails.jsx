import React from 'react';

const PlaceDetails = ({ place}) => {
    console.log(place, 'in details component')
    return (
   
            <div>
                <p>{place.name}</p>
                <img src={place.image} alt={place.imageThumbnail}/>
                <p>{place.description}</p>
                <p>Max Guest: {place.maxGuests}</p>
                <p>Furry Friends: {place.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
                {place.pool ? <p>Has a Pool!</p> : null}
                {place.wifi ? <p>Free Wifi</p> : null}
            </div>
    )
}

export default PlaceDetails;

