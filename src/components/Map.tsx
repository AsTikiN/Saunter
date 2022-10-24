import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer,  } from "@react-google-maps/api";
import { Box, styled } from '@mui/material';

interface Cord {
  lat: number;
  lng: number;
}

interface FindRouteProps {
  start: Cord | undefined;
  end: Cord | undefined;
  points: Cord[];  
}

const Map = () => {
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 48.460255107435785,
      lng: 35.044156794967655
    },
    zoom: 14
  })
  const [mapRoute, setMapRoute] = useState<any>(null); 
  const [markers, setMarkers] = useState<Cord[]>([])

  useEffect(() => {
    if(markers.length > 1) {
      findRoute({
        start: markers.at(0), 
        end: markers.at(-1), 
        points: markers.slice(1, markers.length - 1)
      });
    }
  }, [markers]) 

  const findRoute = async ({start, end, points = []}: FindRouteProps) => {
    if(!start || !end) return;

    try {
      // eslint-disable-next-line no-undef
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        // eslint-disable-next-line no-undef
        origin: new google.maps.LatLng(start.lat, start.lng),
        // eslint-disable-next-line no-undef
        destination: new google.maps.LatLng(end.lat, end.lng),
        // eslint-disable-next-line no-undef
        waypoints: [
          // eslint-disable-next-line no-undef
          ...points?.map(point => ({location: new google.maps.LatLng(point.lat, point.lng), stopover: false}))
        ],
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.WALKING,
      })
      setMapRoute(results);
    } catch(e) {
      console.log("Request error", e);
    }
  }

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if(!e.latLng) return;

    const cords = e.latLng;
    setMarkers((prev) => [...prev, ({lat: cords.lat(), lng: cords.lng()})]);
  }

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBpFBe9xQa9BlrfC0tVgLlVib1VfNPjZYA",
    libraries: ["places"]
  })
  if(!isLoaded) return "error";

  return ( 
    <div style={{width: "1920px", height: "1080px"}}>
      <GoogleMap 
        center={defaultProps.center} 
        zoom={defaultProps.zoom} 
        mapContainerStyle={{width: "100%", height: "100%"}} 
        onClick={handleMapClick}>
      { mapRoute &&  <DirectionsRenderer directions={mapRoute} />}
      {
        markers.map((marker: Cord, index) => 
          <Marker 
            key={marker.lat + index} 
            position={{
              lat: marker.lat, 
              lng: marker.lng
            }}
        />)
        }
      </GoogleMap>
    </div> 
  );
}

const Label = styled(Box)({
  width: "20px",
  height: "20px",
  background: "red",
})

export default Map;