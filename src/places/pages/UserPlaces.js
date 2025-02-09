import React from 'react';
import { useParams } from 'react-router-dom';


import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Pyramid",
      description: "Ahramat ElGiza",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/2560px-All_Gizah_Pyramids.jpg",
      address: "Al Haram, Giza Governorate 3512201, Egypt",
      location: {
        lat: 29.9792354, // Convert to number
        lng: 31.1316862, // Convert to number
      },
      creator: "u1",
    },
  ];
  

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;