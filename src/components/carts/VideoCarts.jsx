import { connect } from 'react-redux'; //importante esta mierda
import styled from "styled-components"

const colors = ['red', 'blue', 'orange', 'yellow', 'grey', 'black', 'purple']
const color = colors[Math.floor(Math.random() * colors.length)];

const VideoCarts = () =>{

    return(
        <VideoCartsCss>
            <div className='contentVideo'>
                <img src="https://www.welivesecurity.com/wp-content/uploads/2021/08/Ataques-compa%C3%B1%C3%ADas-videojuegos-por-qu%C3%A9-son-blanco-atractivo.jpg" alt="imagen de prueba" />
                <strong>EN DIRECTO</strong>
                <p>190 espectadores</p>
            </div>
            <div className='contentDescription'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU" alt="avatar del streamer" />
                <div className='description'>
                    <h3 className="parrafo">VUE, VITE y VITEST: CHARLANDO con PATAK (Matias Capeletto), Core Contributor de las bibliotecas</h3>
                    <strong className='parrafo2'>midudev</strong>
                    <a className="parrafo2">se pone la categoria que tiene</a>
                    <div className="spans">
                        <span>spedrup</span>
                        <span>Español</span>
                    </div>
                </div>
            </div>
            
        </VideoCartsCss>
    )
}




const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(VideoCarts)

export const VideoCartsCss = styled.div`
    max-width: 31.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .contentVideo{
        position: relative;
        max-width: 31.4rem;
        max-height: 17rem;
        height: 31.4rem;
        height: 17rem;
        transition: transform 350ms;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        strong{
            position: absolute;
            top: 0;
            left: 0;
            font-size: 1.2rem;
            background-color: red;
            padding: .3rem;
            border-radius: .3rem;
            margin: 1rem;
        }
        p{
            position: absolute;
            top: 14rem;
            left: 1rem;
            font-size: 1.2rem;
            background-color: #00000044;
            padding: .3rem;
            border-radius: .3rem;
            margin: 0;
        }
        &:hover{
            position: relative;
            cursor: pointer;
            transform: translate(.7rem, -.7rem);
            filter: drop-shadow(-.7rem .7rem 0 ${color});
        }
    }
    .contentDescription{
        display: flex;
        gap: 1rem;
        .description{
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
        img{
            height: 4rem;
            width: 4rem;
            border-radius: 50%;
        }
        .parrafo{
            font-size: 1.3rem;
            max-width: 26.5rem;
            width: auto;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin: 0;
            color: var(--text1);
            :hover{
                cursor: pointer;
                color: var(--fontHoverButton);
            }
        }
        .parrafo2{
            font-size: 1.2rem;
            color: var(--textCategory);
            :hover{
                cursor: pointer;
                color: var(--fontHoverButton);
            }
        }
        p{
            margin: 0;
            font-size: 1.3rem;
        }
        .spans{
            display: flex;
            gap: 0.7rem;
            font-size: 1.2rem;
            span{
                cursor: pointer;
                padding: .3rem 1rem;
                background-color: var(--fontCategory);
                color: var(--text1);
                border-radius: 1rem;
            }
            
        }
    }

`