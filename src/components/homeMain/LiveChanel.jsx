import styled from 'styled-components';
import VideoCarts from '../carts/VideoCarts';
import recomendados from'../../resultados/searchRecomended.json'

export const LiveChanel = () =>{
    const width = '314'
    const height = '170'
    const recomended = recomendados.data
    console.log(recomended)

    return(
        <LiveChanelCss>
            <div className='header'>
                <a href="#">Canales en directos </a>
                <p> que podrían gustarte</p>
            </div>
            <div className='seccionPrueba'>
                {   
                    recomended.map(recomend =>(
                        
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

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
    }

`