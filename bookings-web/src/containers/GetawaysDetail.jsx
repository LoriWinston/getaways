import React, { useState, useEffect } from 'react'
import { getOnePlace } from '../services/placesApi';
import PlaceDetails from '../components/places/PlaceDetails';
import { useParams } from 'react-router-dom';

export default function GetawaysDetail() {

    const [place, setPlace] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        getOnePlace(id).then(setPlace)
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading 
                ?
            <h2>Loading...</h2>
                :
         <PlaceDetails place={place} />
            }
        </div>
    )
}
