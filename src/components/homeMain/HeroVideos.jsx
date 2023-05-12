import styled from "styled-components"
import{ FiChevronLeft, FiChevronRight } from 'react-icons/fi'
export function HeroVideos (){
    return(
        <HeroCss>
            <Previus className="previus"/>
            <div className="contentVideo">
                <video className="video" src="src/assets/videos/video.mp4" controls></video>
                <div className="contentInfo">
                    <header>
                        <img src="src/assets/img/iconmonstr-twitch-2-240.png" alt="avtar del streamer" />
                        <div className="infoStream">
                            <strong>Jfpaezl</strong>
                            <a className="parrafo">se pone la categoria que tiene</a>
                            <p>1.2 k espectadores</p>
                        </div>
                    </header>
                    <div className="spans">
                        <span>spedrup</span>
                        <span>Español</span>
                    </div>
                    <div className="contentDescription">
                        <p>¡Este streamer lleva más de 1250 días stremeando TODOS los días! ¡Bienvenido seas a su comunidad!</p>
                    </div>
                </div>
            </div>
            <Netx className="next"/>
        </HeroCss>
    )
}

export const HeroCss = styled.section`
    min-height: 35rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    /* grid-template-columns: .5fr 6fr .5fr; */
    justify-content: space-evenly;
    

    .contentVideo{
        max-width: 75rem;
        max-height: 30rem;
        display: flex;
        background-color: var(--fontHeader);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.281);
        .video{
            max-height: 30rem;
            width: auto;
            object-fit: cover;
        }
        .contentInfo{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
         }
        header{
            display: flex;
            gap: 1rem;
        }
        img{
            height: 5rem;
            width: 5rem;
            border-radius: 50%;
        }
        .infoStream{
            display: flex;
            flex-direction: column;
            gap: .2rem;
            strong{
                font-size: 1.3rem;
                color: var(--text2);
                :hover{
                    cursor: pointer;
                    color: var(--fontHoverButton);
                }
            }
            p{
                margin: 0;
                font-size: 1.3rem;
            }
        }
        .parrafo{
            font-size: 1.3rem;
            max-width: 14rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin: 0;
            color: var(--text2);
            :hover{
                cursor: pointer;
                color: var(--fontHoverButton);
            }
        }

        .spans{
            display: flex;
            gap: 0.7rem;
            cursor: pointer;
            span{
                padding: .2rem .8rem;
                background-color: var(--fontCategory);
                color: var(--textCategory);
                border-radius: 1rem;
            }
            
        }
        .contentDescription{
            max-width: 20rem;
            font-size: 1.3rem;
            line-height: 1.5;
            p{
                margin: 0;
            }
        }
    }
    .next{
        display: flex;
        justify-content: end;
    }
    
`

export const Previus = styled(FiChevronLeft)`
    height: 2rem;
    width: 2rem;
    color: var(--text1);
    width: -webkit-fill-available;
`
export const Netx = styled(FiChevronRight)`
    height: 2rem;
    width: 2rem;
    color: white;
    width: -webkit-fill-available;
`