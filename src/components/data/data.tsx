import React, { useCallback, useState } from 'react';
import './data.scss';
import plApi from '../../config'
import { useEffect } from 'react';

interface ChelseaData {
    address: string;
}

const Data = (props: any) => {

    const [data, setData] = useState(null);
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
      fetchData()
    }, [])
     async function fetchData() {
        let response;
        let formattedResponse;


      const url = 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/team?name=Chelsea';

      
      const options: any = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': plApi,
            'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
        },
      };

            response = await fetch(url, options);
    
        if (response) {
          formattedResponse = await response.json() as ChelseaData;
          setData(formattedResponse);
          setFetching(false)
        }
      };    

  

    return (
        <div className="scores">
            {fetching ? 'Loading' : data?.address}
        </div>
    )
}

export default Data;