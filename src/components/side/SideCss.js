import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import styled from 'styled-components'

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

