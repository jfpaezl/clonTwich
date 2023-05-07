import { connect } from 'react-redux';
import { useState } from 'react';
import styled from "styled-components"
import { ArrowBarLeft, ArrowBarRight, HiOutlineVideo } from './SideCss';

export const Side =()=>{

    const [change, setChange] = useState(true)
    const cerrar = change ? 'open span': 'close'
    const abrir = !change ? 'open span': 'close'

    const handleClick =()=>{
        setChange(!change)
    }
    return(
        <SideCss>
            <header className='header'>
                <h3 className={cerrar}>CANALES RECOMENDADOS</h3>
                <ArrowBarRight className={abrir} onClick={handleClick}/>
                <ArrowBarLeft className={cerrar} onClick={handleClick}/>
            </header>
            <div className='contentCamera'>   
                <HiOutlineVideo className='camera'/>
                <strong className='tooltip'>Canales recomendados</strong>
            </div>
        </SideCss>
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Side)

export const SideCss = styled.section`
    background-color: var(--fonHeader2);
    height: 100vh;
    padding: 1rem;
    @media (min-width: 1024px) {
        max-width: 24rem;
    }
    
    //css svg camera
    .contentCamera{
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
    .open{
        display: block;
    }
    .close{
        display: none;
    }
    
`
