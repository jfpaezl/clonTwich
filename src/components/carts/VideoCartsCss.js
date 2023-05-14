import styled from "styled-components"

const VideoCartsCss = styled.div`
    max-width: 31.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    
    .contentVideo{
        position: relative;
        max-height: 17rem;
        transition: transform 350ms;
        .portada{
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: 1;
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
            bottom: 0;
            left: 0;
            font-size: 1.2rem;
            background-color: #00000044;
            padding: .3rem;
            border-radius: .3rem;
            margin: 1rem;
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
            max-width: 20rem;
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

export default VideoCartsCss