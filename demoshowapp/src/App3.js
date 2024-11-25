// location finder in react js

import { useEffect,useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator} from "react-map-gl";
import Fly from "./components/Fly";
import {ImLocation } from "react-icons/im";
import "./App3.css";

function App3() {

    // setting up the state for the latitude and longitude
    const [lat, setLat] = useState(22.5726);
    const [lon, setLon] = useState(88.3639);
    //setting up the state for the map
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        width: "100%",
        height: "100vh",
});

// Map viewport updates whenever the 
// latitude or longitude changes
useEffect(() => {
    setViewport({
        latitude: lat,
        longitude: lon,
        zoom: 12,
        transitionInterpolator: new  FlyToInterpolator({speed: 1.0}),
        transitionDuration: "auto",
        width: "100%",
        height: "100vh",
        });
        }, [lat, lon]);

        return (
            <ReactMapGL 
            mapboxApiAccessToken={"<YOUR_API_KEY>"}
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                <Marker latitude={lat} longitude={lon}>
                    <ImLocation size="30px"  />
                    </Marker>
                    <Fly setLat={setLat} setLon ={setLon} />
            </ReactMapGL>
        );
    }
    export default App3;