import styled from 'styled-components'

//import icons
import { SiTwitch } from 'react-icons/si';
import { CiMenuKebab } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import { TbCrown } from 'react-icons/tb'
import { RxPerson } from 'react-icons/rx'   
import { MdOutlineContentCopy } from 'react-icons/md'

export const NavCss = styled.nav`
    display: flex;
    flex-direction: column;
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
        background-color: var(--fontHeader);
        border-bottom: solid 2px black;
    }
    .navs{
        display: flex;
        align-items: center;
        height: 100%; 
        gap: 1rem;

        .iconTwich{
            display: flex;
            align-items: center;
            justify-content: center;
            width: auto;
            height: 4rem;
            padding: .5rem;
        }
        .extra{
            display: none;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
            &:hover{
                cursor: pointer;
            }
            .extrah{
                &:hover{
                    color: var(--fontHoverButton);
                }
            }
        }
        .link{
            text-decoration: none;
            color: var(--text1);
            font-family: Roobert, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            padding: 0 2rem;
            &:hover {
                color: var(--text2);
            }
        }
        .icon1{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 3rem;
            width: 3rem;

            &:hover{
            background-color: var(--fontCategory);
            opacity: 48%;
            border-radius: .5rem;
            }
        }

    }
    /*responsive para el primer div del nav */
    
    @media (max-width: 480px) {
        .link{
            display: none;
        }
        .extra{
            display: flex !important;
        }
    }

    .seach{
        display: none;
        align-items: center;
        justify-content: center;
        .inputSeach{
            border-radius: 5px 0 0 5px;
            background-color: transparent;
            border-style: ridge;
            height: 34px;
            min-width: 35.6rem;
            color: var(--textCategory);
            font-family: inherit;
            &:focus{
                border-color: var(--fonButtons);
                outline: none;
            }
        }
        .seachContainer{
            background-color: var(--fontCategory);
            opacity: 38%;
            width: 30px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            &:hover{
                opacity: 48%;
            }
        }
    }

    .openSeach{
        display: flex;
        justify-content: center;
        align-items: center;
        
        .iconSeach{
            background-color: var(--fontCategory);
            opacity: 38%;
            width: 3rem;
            height: auto;
            border-radius: .4rem;
            cursor: pointer;
            padding: .5rem;
            &:hover{
                opacity: 48%;
            }
        }
        
    }

    /* responsive para el div de buscar */
    @media (min-width: 768px) { 
        .seach{
            display: flex;
        }
        .openSeach{
            display: none;
        }
    }
    .containerLogin{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1.5rem;
        align-items: center;    
        .ContainerCrown, .ContainerPerson{
            height: 3rem;
            width: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                cursor: pointer;
                background-color: var(--fontCategory);
                border-radius: .4rem;
                opacity: 48%;
            }
        }
        .linksPerson{
            background-color: var(--fontHoverButton);
            color: var(--text1);
            border: none;
            padding: .8rem;
            text-decoration: none;
            font-size: 13px;
            border-radius: 0.4rem;
            font-weight: 600;
            &:hover{
                background-color: var(--fonButtons);
                cursor: pointer;
            }
        }
        .linkIni{
            background-color: var(--fontCategory);
            opacity: 38%;
            min-width: 8.31rem;
            &:hover{
                background-color: var(--fontCategory);
                opacity: 48%;
            }
        }
    }
    @media (max-width: 1024px) { 
        .linkRe{
            display: none;
        }
    }
    .showLogIn{
        display: flex;
    }
    .showChekIn{
        display: flex;
    }
    .hiden{
        display: none !important;
    }
`
//style icons
export const Icon1 = styled(CiMenuKebab)`
    height: 2rem;
    width: 2rem;
    color: var(--text1);
`
export const Seach = styled(IoIosSearch)`
    height: 2rem;
    width: 2rem;
    color: var(--text1)
`
export const Crown = styled(TbCrown)`
    height: 2rem;
    width: 2rem;
    color: var(--text1)
    `
export const Person = styled(RxPerson)`
    height: 2rem;
    width: 2rem;
    color: var(--text1)
`
export const Extra = styled(MdOutlineContentCopy)`
    height: 1.7rem;
    width: auto;
    color: var(--text1)
    
`
export const IconTwich = styled(SiTwitch)`
    height: 3rem;
    width: auto;
    color: var(--fontHoverButton);
`