import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import styled from 'styled-components'

import { Home } from "../../containers/pages/Home";
import logo from './../../assets/img/iconmonstr-twitch-2-240.png';
import { CiMenuKebab } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import { TbCrown } from 'react-icons/tb'
import { RxPerson } from 'react-icons/rx'   
import { MdOutlineContentCopy } from 'react-icons/md'

function Nadvar (){
    return(
        <NavCss>
            <div className="navs">
                <NavLink to={Home}><img src={logo} alt="Logo de twich" className="img"/></NavLink>
                <div className="extra"><Extra className="extrah"/></div>
                <NavLink to={Home} className='link'>Explorar</NavLink>
                <NavLink className='icon1'><Icon1/></NavLink>
            </div>
            <div className='openSeach'><Search/></div>
            <div className="seach">
                <input type="seach" className="inputSeach"/>
                <div className='seachContainer'><Search/></div>
            </div>
            <div className="containerLogin">
                <div className="ContainerCrown"><Crown/></div>
                <NavLink className='linksPerson linkIni'>Iniciar sesión</NavLink>
                <NavLink className='linksPerson linkRe'>Registrarse</NavLink>
                <div className="ContainerPerson"><Person/></div>
            </div>
        </NavCss>
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Nadvar)

export const NavCss = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1.5fr 1.5fr;
    @media (min-width: 910px) {
        grid-template-columns: 1fr 2fr 1fr;
    }
    align-items: center;
    height: 5rem;
    background-color: var(--fontHeader);
    border-bottom: solid 2px black;
    
    .navs{
        display: flex;
        align-items: center;
        height: 100%; 

        .img{
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
            font-weight: 500;
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
            display: flex;
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
            color: var(--textCategory);
            font-family: inherit;
            max-width: 350px;
            width: 70%;
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
        background-color: var(--fontCategory);
        opacity: 38%;
        width: 30px;
        height: 32px;
        border-radius: .4rem;
        cursor: pointer;
        &:hover{
            opacity: 48%;
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
        justify-content: space-evenly;
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
            
            padding: .8rem;
            text-decoration: none;
            font-size: 13px;
            border-radius: 0.4rem;
            font-weight: 600;
            &:hover{
                background-color: var(--fonButtons);
            }
        }
        .linkIni{
            background-color: var(--fontCategory);
            opacity: 38%;
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
`

const Icon1 = styled(CiMenuKebab)`
    height: 2rem;
    width: 2rem;
    color: var(--text1);
`
const Search = styled(IoIosSearch)`
    height: 2rem;
    width: 2rem;
    color: var(--text1)
`
const Crown = styled(TbCrown)`
    height: 2rem;
    width: 2rem;
    color: var(--text1)
    `
const Person = styled(RxPerson)`
    height: 2rem;
    width: 2rem;
    color: var(--text1)
`
const Extra = styled(MdOutlineContentCopy)`
    height: 1.7rem;
    width: auto;
    color: var(--text1)
    
`