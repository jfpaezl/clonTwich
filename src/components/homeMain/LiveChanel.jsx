import styled from 'styled-components';
import VideoCarts from '../carts/VideoCarts';
import recomendados from'../../resultados/searchRecomended.json'
import { useState, useEffect } from 'react';

export const LiveChanel = () =>{
    const width = '600'
    const height = '300'
    const recomended = recomendados.data
    
    const [videos, setVideos] = useState(8);
    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let videos;
  
        if (screenWidth > 1399) {
          videos = 10;
        } else if (screenWidth > 1023) {
          videos = 8;
        } else if (screenWidth > 768) {
          videos = 6;
        } else if (screenWidth > 480) {
          videos = 4;
        } else {
          videos = 8;
        }
  
            setVideos(videos);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <LiveChanelCss>
            <div className='header'>
                <a href="#">Canales en directos </a>
                <p> que podrían gustarte</p>
            </div>
            <div className='seccionPrueba'>
                    {   
                        recomended.slice(0, videos).map(recomend =>(
                                <VideoCarts 
                                    key={recomend.id}
                                    portada={recomend.thumbnail_url.replace('{width}', width).replace('{height}', height)}
                                    viewers={recomend.viewer_count}
                                    avatar="src/assets/img/iconmonstr-twitch-2-240.png"
                                    description={recomend.title}
                                    nickName={recomend.user_name}
                                    category={recomend.game_name}
                                    tags={recomend.tags}
                                />
                        ))
                    }
            </div>
        </LiveChanelCss>
    )
}

export const LiveChanelCss = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 25rem;

    .header{
        font-family: var(--family2) !important;
        font-size: 1.8rem; 
        display: flex;
        gap: 1rem;
        a{
            text-decoration: none;
            color: var(--text2);
            font-weight: 700;
        }
        p{
            font-weight: 700;
            margin: 0;
        }
    }
    .seccionPrueba{
        display: flex;
        gap: 1rem;
        @media (min-width: 480px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1023px) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 1500px) {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
    }

`