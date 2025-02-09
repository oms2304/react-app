 /* global google */


import React, { useRef, useEffect } from "react";
import "./Map.css";



const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API is not loaded.");
      return;
    }

    async function initMap() {
      try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        const map = new Map(mapRef.current, {
          zoom: zoom,
          center: center,
          mapId: "DEMO_MAP_ID",
        });

        new AdvancedMarkerElement({
          map: map,
          position: center,
          title: "Location",
        });
      } catch (error) {
        console.error("Error initializing Google Maps:", error);
      }
    }

    initMap();
  }, [center, zoom]);

  return <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>;
};

export default Map;
