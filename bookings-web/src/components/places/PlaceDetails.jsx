import React from 'react';
import { getOnePlace } from '../services/placesApi';

const Details = (props) => { 
    const [places, setPlace] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getOnePlace(props.match.params.id).then(setPlace)
            .finally(() => setLoading(false))
       
    }, [])

    return (
        <div>
            {loading 
                ?
            <h2>Loading...</h2>
                :
            <div>
                <p>{places.name}</p>
                <img src={places.image} alt={places.imageThumbnail}/>
                <p>{places.description}</p>
                <p>Max Guest: {places.maxGuests}</p>
                <p>Furry Friends: {places.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
                {places.pool ? <p>Has a Pool!</p> : null}
                {places.wifi ? <p>Free Wifi</p> : null}
            </div>
            }
        </div>
    )
}

export default Details;

// import React from 'react';
// import PropTypes from 'prop-types';

// const PlaceDetails = ({
//   name,
//   description,
//   location,
//   pricePerNight,
//   image,
//   imageThumbnail,
//   maxGuests,
//   petFriendly,
//   pool,
//   wifi,
// }) => {
//   return (
//     <ul>
//       <li>{name}</li>
//       <li>{description}</li>
//       <li>{location}</li>
//       <li>{pricePerNight}</li>
//       <li>{image}</li>
//       <li>{imageThumbnail}</li>
//       <li>{maxGuests}</li>
//       <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
//       {pool ? <li>Has a Pool!</li> : null}
//       {wifi ? <li>Free Wifi</li> : null}
//     </ul>
//   );
// };

// Place.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   pricePerNight: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   imageThumbnail: PropTypes.string.isRequired,
//   maxGuests: PropTypes.number.isRequired,
//   petFriendly: PropTypes.bool.isRequired,
//   pool: PropTypes.bool.isRequired,
//   wifi: PropTypes.bool.isRequired,
// };

// export default PlaceDetails;


