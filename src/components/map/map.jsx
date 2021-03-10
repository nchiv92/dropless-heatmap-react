import GoogleMapReact from 'google-map-react';
import './map.scss';
import apiKey from '../../config';


const BristolMap = () => {

    const heatMapData = {    
        positions: [
            {lat: 51.45, lng: -2.5879},
            {lat: 51.50, lng: -2.5881},
            {lat: 51.45, lng: -2.58781},
            {lat: 51.45, lng: -2.58782},
            {lat: 51.45, lng: -2.58783},
            {lat: 51.46, lng: -2.58801},
            {lat: 51.47, lng: -2.5880},
            {lat: 51.47, lng: -1.5879},
        ],
        options: {   
            radius: 50,   
            opacity: 0.8             
        }
    }

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={{
                    lat: 51.45,
                    lng: -2.5879
                }}
                defaultZoom={13}
                heatmapLibrary={true} 
                heatmap={heatMapData} 
            />
        </div>
    )
}

export default BristolMap;