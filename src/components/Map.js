import React, { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';
import Geocode from "react-geocode";


const mapLoader = new Loader({
    apiKey: "AIzaSyC7m-QOWRvt33CSLwvzArrAKZbSkDHIZ6s",
    version: "weekly"
});


function Map({ activeRoute }) {
    const mapRef = useRef();

    const getLocation = (address) => {
        console.log(address);
        const geocoder = new window.google.maps.Geocoder();
        return geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                return results[0].geometry.location;
            } else {
                console.log(status);
            }
        });
    }

    const initData = () => {
        const center = activeRoute === undefined ? { lat: 40.189047526231334, lng: 44.504357760617864 }
            : { lat: parseFloat(activeRoute.startLat), lng: parseFloat(activeRoute.endLng) };
        const options = { zoom: 9, scaleControl: true, center: center };
        mapLoader
            .load()
            .then(async (google) => {
                const map = new google.maps.Map(mapRef.current, options);
                let firstAddress = { lat: parseFloat(activeRoute.startLat), lng: parseFloat(activeRoute.startLng) };
                let secondAddress = { lat: parseFloat(activeRoute.endLat), lng: parseFloat(activeRoute.endLng) };
                console.log(typeof activeRoute.startLat + 'start')


                //It is for function getLocation but i can not found free api for Geocoder


                // console.log(initialData.startLat + "second")
                // const locationWithAddress = await getLocation(activeRoute.startName);
                // console.log(locationWithAddress);

                new google.maps.Marker({ position: firstAddress, map: map });
                new google.maps.Marker({ position: secondAddress, map: map });
                new google.maps.Polyline({ path: [firstAddress, secondAddress], map: map });
            })
            .catch(e => {
                console.log(e);
                console.log("error")
            });
    }

    useEffect(() => {
        initData()
    }, [activeRoute])

    return <div className="map" ref={mapRef} id="map" />;
}


export default Map;