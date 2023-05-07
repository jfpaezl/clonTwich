import styled from 'styled-components'

import { CgClose } from 'react-icons/cg'

export const LoginCss = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .container{

        background-color: var(--fontHeader);
        display: flex;
        padding: 3rem !important;
        border-radius: 1rem;
        flex-direction: column;
        max-width: 50rem;
        width: 100%;
        margin: 0 2rem;
    }
    
    .headeLogin{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        position: relative;
        .icon{
            height: 5rem;
            width: auto;
        }
        h2{
            font-size: 2.4rem;
        }
        .close{
            position: absolute;
            right: -1.5rem;
            top: -1.5rem;
            height: 3rem;
            width: 3rem;
            padding: .5rem;
            border-radius: .5rem;
            :hover{
                cursor: pointer;
                background-color: var(--fontCategory);
                opacity: 48%;
            }
        }
    }
    .formLogin{
        display: flex;
        flex-direction: column;
        gap: 2rem 0;
        .contInput{
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
        .labelLogin{
            font-size: 1.2rem;
        }
        .inputLogin{
            border-radius: .5rem;
            background-color: transparent;
            border-style: ridge;
            height: 34px;
            color: var(--textCategory);
            font-family: inherit;
            width: 100%;
            &:focus{
                border-color: var(--fonButtons);
                outline: none;
            }
        }
        .text-hidden{
            display: block;
            height: 0;
            overflow: hidden;
            transition: height 0.2s ease;
            transform-origin: top center;
            font-size: 1.2rem;
            color: var(--textCategory);
        }
        .inputLogin:focus + .text-hidden {
            height: auto;
            transform: scaleY(1);
        }
    }
    .linkR{
            text-decoration: none;
            color: var(--fontHoverButton);
            font-size: 1.2rem;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
    }
    .linkF{
        color: var(--fontHoverButton);
        font-size: 1.2rem;
        padding: .5rem;
        border-radius: .5rem;
        &:hover{
            cursor: pointer;
            color: var(--text1);
            background-color: var(--fontCategory);
        }
    }
    .button{
            background-color: var(--fontCategory);
            color: var(--text1);
            
            padding: .5rem;
            text-decoration: none;
            font-size: 13px;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            &:hover{
                cursor: pointer;
                opacity: 38%;
            }
    }
    .footerLigin{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;

    }
    .pasos{
        display: flex;
        justify-content: center;
        font-size: 1.3rem;
        font-weight: 600;
        margin-top: 5rem;
    }
    .footerCheck{
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .hiden{
        display: none !important;
    }
`

export const Close = styled(CgClose)`
    color: var(--text1);
    height: 2rem;
    width: auto;
`