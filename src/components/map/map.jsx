import GoogleMapReact from 'google-map-react';
import './map.scss';
import apiKey from '../../config';

const BristolMap = (props) => {

    const {positions} = props

    const heatMapData = {    
        positions,
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