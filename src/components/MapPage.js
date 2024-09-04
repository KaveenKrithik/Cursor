import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapPage.css';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const center = {
    lat: 37.7749, 
    lng: -122.4194 
};

const MapPage = () => {
    return (
        <div className="map-page">
            <LoadScript googleMapsApiKey={process.env.api}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    options={{
                        disableDefaultUI: true,
                        zoomControl: true,
                        styles: [
                            {
                                elementType: 'geometry',
                                stylers: [{ color: '#242f3e' }],
                            },
                            {
                                elementType: 'labels.text.stroke',
                                stylers: [{ color: '#242f3e' }],
                            },
                            {
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#746855' }],
                            },
                            {
                                featureType: 'administrative.locality',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }],
                            },
                            {
                                featureType: 'poi',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }],
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'geometry',
                                stylers: [{ color: '#263c3f' }],
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#6b9a76' }],
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry',
                                stylers: [{ color: '#38414e' }],
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: '#212a37' }],
                            },
                            {
                                featureType: 'road',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#9ca5b3' }],
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry',
                                stylers: [{ color: '#746855' }],
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: '#1f2835' }],
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#f3d19c' }],
                            },
                            {
                                featureType: 'transit',
                                elementType: 'geometry',
                                stylers: [{ color: '#2f3948' }],
                            },
                            {
                                featureType: 'transit.station',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }],
                            },
                            {
                                featureType: 'water',
                                elementType: 'geometry',
                                stylers: [{ color: '#17263c' }],
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#515c6d' }],
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.stroke',
                                stylers: [{ color: '#17263c' }],
                            },
                        ],
                    }}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
            <div className="map-overlay">
                <h1 className="map-title">Track Your Bus in Real-Time</h1>
            </div>
        </div>
    );
};


export default MapPage;

