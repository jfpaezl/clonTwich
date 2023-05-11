import styled from "styled-components"
import { TbPointFilled } from 'react-icons/tb'

export const StreamAliveCss = styled.section`
    max-width: 24rem;
    padding: 1rem;
    display: flex;
    grid-template-columns: 2.2fr .8fr ;
    gap: 1rem;

    //activar la modal de descripccion
    &:hover{
        cursor: pointer;

        .modal{
            display: block;
            background-color: var(--fonHeader2);
            position: absolute;
            font-size: 1.5rem;
            border-radius: .6rem;
            left: 25rem;
            top: auto;
            width: 24rem;
            max-height: 5.5rem;
            p{
                margin: .5rem;
                line-height: 2rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
            }
        }
    }
    &:hover{
        .hoverModal{
            display: flex !important;
            flex-direction: column;
            background-color: var(--fonHeader2);
            position: absolute;
            font-size: 1.5rem;
            border-radius: .6rem;
            left: 6rem;
            top: auto;
            padding: .5rem;
            gap: .5rem;
            width: 24rem;
            max-height: 10rem;
            header{
                color: var(--text2);
                font-size: 1.3rem;
            }
            strong{
                line-height: 2rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
            }
            footer{
                display: flex;
                align-items: center;
                font-size: 1.3rem;
            }
        }
    }


    img{
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
    }
    strong{
        font-size: 1.4rem;
        font-weight: 400;
    }
    .parrafo{
        font-size: 1.3rem;
        width: 112px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: 0;
        color: var(--textCategory);
    }

    p{
        font-size: 1.3rem;
        
    }
    .alive{
        display: flex;
        gap: 1rem;
    }
    .stremer{
        display: flex !important;
        flex-direction: column;
    }
    .views{
        display: flex !important;
        p{
            margin: 0;
            margin-top: .3rem;
        }
    }
    .modal2{
        display: none;
    }
    .open{
        display: flex !important;
    }
    .modal{
        display: none;
    }
    .close{
        display: none !important;
    }

    @media (max-width: 1024px) {
        .stremer{
            display: none !important;
        }
        .views{
            display: none !important;
        }
        .modal{
            display: none !important;
        }
        &:hover{
        .modal2{
            display: flex !important;
            flex-direction: column;
            background-color: var(--fonHeader2);
            position: absolute;
            font-size: 1.5rem;
            border-radius: .6rem;
            left: 6rem;
            top: auto;
            padding: .5rem;
            gap: .5rem;
            width: 24rem;
            max-height: 10rem;
            header{
                color: var(--text2);
                font-size: 1.3rem;
            }
            strong{
                line-height: 2rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
            }
            footer{
                display: flex;
                align-items: center;
                font-size: 1.3rem;
            }
        }
    }
    }

`
//icono en directo
export const Pointer = styled(TbPointFilled)`
    height: 2rem;
    width: 2rem;
    color: red
`