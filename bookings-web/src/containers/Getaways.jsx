import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import style from '../components/app/App.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces()
    .then(setPlaces)
    .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2>loading....</h2>
  ) : (
    <main>
      <PlaceList places={places} />
    </main>
  );
};
export default Getaways;
