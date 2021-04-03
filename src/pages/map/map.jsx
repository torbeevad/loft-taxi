import React, {Component} from "react";
import mapboxgl from "mapbox-gl";
import "./map.css";
import {Header} from "../../components/header/header";

export class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoidG9yYmVjIiwiYSI6ImNrbW92bnIwNDA4bG8zMG85MzdiY3puZjcifQ.Nux4h1GTcwcLdM9EYv6Xqg";
        this.map = new mapboxgl.Map({
            attributionControl: false,
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [30.3056504, 59.9429126],
            zoom: 11,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return (
            <>
                <Header/>
                <div className="map-wrapper">
                    <div data-testid="map" className="map" ref={this.mapContainer}/>
                </div>
            </>
        );
    }
}
