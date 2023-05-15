import { useState, useEffect } from 'react';

export const useFetchTwitchData = ({url=''}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchTwitchData = async () => {
        try {
          const response = await fetch(url, {
            headers: {
              'Client-ID': import.meta.env.VITE_CLIENT_ID, // Reemplaza con tu Client ID de Twitch
              'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` // Reemplaza con tu token de acceso
            }
          });
  
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
  
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
          setError(error);
          setLoading(false);
        }
      };
  
      fetchTwitchData();
    }, []);
  
    return { data, loading, error };
  };
