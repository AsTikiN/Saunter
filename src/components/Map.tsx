import React, { useState, useEffect, ReactElement, FC } from 'react';
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

interface Props {
  editMode: boolean;
  path: any;
  setPath?: React.Dispatch<React.SetStateAction<any>>;
}

const Map: FC<Props> = ({
  editMode,
  path,
  setPath
}): ReactElement => {
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

  useEffect(() => {
    if(!path) return;

    if(typeof path === "string") {
      setMarkers(JSON.parse(path).markers);
    } else {
      setMarkers(path.markers)
    }
  }, [path])

  const findRoute = async ({start, end, points = []}: FindRouteProps) => {
    if(!start || !end) return;

    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: new google.maps.LatLng(start.lat, start.lng),
        destination: new google.maps.LatLng(end.lat, end.lng),
        waypoints: [
          ...points?.map(point => ({location: new google.maps.LatLng(point.lat, point.lng), stopover: false}))
        ],
        travelMode: google.maps.TravelMode.WALKING,
      })
      setMapRoute(results);

      if(setPath) {
        //@ts-ignore
        setPath((prev) => ({...prev, markers, len: results.routes[0].legs[0].distance?.text}));
      }
    } catch(e) {
      console.log("Request error", e);
      setMarkers(markers.slice(0, markers.length - 1))
    }
  }

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if(!e.latLng || !editMode)  return;

    const cords = e.latLng;
    setMarkers((prev) => [...prev, ({lat: cords.lat(), lng: cords.lng()})]);
  }

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBpFBe9xQa9BlrfC0tVgLlVib1VfNPjZYA",
    libraries: ["places"]
  })

  if(!isLoaded) return <div>error</div>;

  return ( 
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
  );
}

const Label = styled(Box)({
  width: "20px",
  height: "20px",
  background: "red",
})

export default Map;