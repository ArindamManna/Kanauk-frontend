import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { set } from 'firebase/database';
const usaCenter = {
    lat: 39.8097343,
    lng: - 98.5556199
}




// AIzaSyBo-uNgOc-9az84PkqZpEyYCv7yul4RRn0
function ProjectsList_Maps({ projectList }) {
    let dummy = [
        {
            location: {
                lat: 22.5452029,
                lng: 88.3411707
            },

            properties: [
                {
                    location: {
                        lat: 22.5452029,
                        lng: 88.3411707
                    },
                },

                {
                    location: {
                        lat: 22.5542489,
                        lng: 88.3236605
                    },
                }

            ]
        },
        {
            location: {
                lat: 22.5686578,
                lng: 88.3285858
            }
        },
    ]
    const position = { lat: 53.54992, lng: 10.00678 };
    const [locationList, setLocationList] = useState([])
    useEffect(() => {
        if (projectList) {
            setLocationList(dummy)
        }
    }, [])
    return (
        <>
            <APIProvider apiKey={'AIzaSyBo-uNgOc-9az84PkqZpEyYCv7yul4RRn0'}>
                <Map defaultCenter={usaCenter} defaultZoom={5} zoomControl={true}>
                    {locationList?.map((item, key) => {
                        return <Marker key={key} title={`${item?.name}`} label={`${key}`} position={item?.location} onClick={(e) => { setLocationList(prev => (item?.properties)) }} />
                    })}

                </Map>
            </APIProvider>

        </>
    )
}

export default ProjectsList_Maps