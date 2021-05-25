export const allPlaces = (places) => {
    const responseData = places.map((place) => {
      return {
        id: place.id,
        name: place.name,
        description: place.description,
      };
    });
    return responseData;
  };
  
  export const onePlace = (places) => {
    return {
      name,
      description,
      location,
      pricePerNight,
      image,
      imageThumbnail,
      maxGuests,
      petFriendly,
      pool,
      wifi,
    };
  };
  