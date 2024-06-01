import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';





// AIzaSyBo-uNgOc-9az84PkqZpEyYCv7yul4RRn0
function ProjectsList_Maps() {
    const position = { lat: 53.54992, lng: 10.00678 };
    const position2 = { lat: 50.54992, lng: 9 };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBo-uNgOc-9az84PkqZpEyYCv7yul4RRn0"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };
    return (
        <>
            {
                isLoaded &&
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            }

        </>
    )
}

export default ProjectsList_Maps