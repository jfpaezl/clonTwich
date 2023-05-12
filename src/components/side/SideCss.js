import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import styled from 'styled-components'

export const SideCss = styled.section`
    background-color: var(--fonHeader2);
    height: calc(100vh - 5rem);
    min-width: 5rem;
    overflow: hidden;
    @media (max-width: 479px) {
        display: none !important;
    }

    &:hover{
        overflow: auto;
    }
    ::-webkit-scrollbar {
        width: .5rem; /* Ancho del scrollbar */
    }
    ::-webkit-scrollbar-thumb {
        background: var(--fontCategory); /* Color del thumb */
        border-radius: 1rem; /* Radio del borde del thumb */
    }
    /* padding: 1rem; */
    @media (min-width: 1024px) {
        max-width: 25rem;
    }
    
    //css svg camera
    .contentCamera{
        padding: 1rem 0;
        display: flex;
        justify-content: center;
    }
    .tooltip {
        display: none;
        position: absolute;
        left: 3rem;
        margin-left: 10px;
        padding: .6rem;
        border-radius: .5rem;
        font-size: 1.2rem;
        background-color: var(--text1);
        color: var(--fontContainer);
    }
    .camera{

        cursor: pointer;
        &:hover + .tooltip {
            display: block;
        }
    }
    .header{
        display: none;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        gap: 2.4rem;
    }
    @media (min-width: 1024px) {
        .contentCamera{
            display: none;
        }
        .header{
            display: flex;
        }
    }
    h3{
        margin: 0;
    }
    .open{
        display: block;
    }
    .close{
        display: none;
    }
    
`

export const ArrowBarLeft = styled(BsArrowBarLeft)`
    height: 3rem;
    width: 3rem;
    color: var(--text1);
    padding: .5rem;
    border-radius: .4rem;
    
    &:hover{
        background-color: var(--fontCategory);
        opacity: 48%;
        cursor: pointer;
    }
`
export const ArrowBarRight = styled(BsArrowBarRight)`
    height: 3rem;
    width: 3rem;
    color: var(--text1);
    padding: .5rem;
    border-radius: .4rem;
    
    &:hover{
        background-color: var(--fontCategory);
        opacity: 48%;
        cursor: pointer;
    }
`
export const HiOutlineVideo = styled(HiOutlineVideoCamera)`
    height: 2rem;
    width: 2rem;
    color: var(--text1);
`

