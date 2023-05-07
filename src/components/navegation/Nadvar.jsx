import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

//importar el estilo del nav
import { Seach, Icon1, Crown, Person, Extra, IconTwich, NavCss } from './NavCss';

//impor pages for nav
import { Home } from '../../containers/pages/Home';
import { LogIn } from './LogIn';



function Nadvar (){
    const [show, setShow] = useState(false)
    const showModal = show ? '': 'hiden'
    const handleClick =()=>{
        setShow(!show)
    }

    const [mostrarP, setMostrarP] = useState(true)
    const change =()=>{
        setMostrarP(!mostrarP)
    }

    console.log(mostrarP)
    return(
        <>
        <NavCss>
            <section className='navs'>
                <NavLink to={Home} className='iconTwich'>
                    <IconTwich/>
                </NavLink>
                <div className='extra'>
                    <Extra className='extrah'/>
                </div>
                <NavLink to={Home} className='link'>
                    Explorar
                </NavLink>
                <NavLink className='icon1'>
                    <Icon1/>
                </NavLink>
            </section>
            <div className='openSeach'>
                <Seach className='iconSeach'/>
            </div>
            <div className='seach'>
                <input type='seach' className='inputSeach'/>
                <div className='seachContainer'>
                    <Seach/>
                </div>
            </div>
            <div className='containerLogin'>
                <div className='ContainerCrown'>
                    <Crown/>
                </div>
                <button className='linksPerson linkIni' onClick={handleClick}>
                    Iniciar sesión
                </button>
                <button className='linksPerson linkRe' onClick={()=>{handleClick(); change();}} >
                    Registrarse
                </button>
                <div className='ContainerPerson'>
                    <Person/>
                </div>
            </div>
            <div className={showModal}>
                <LogIn showP = {handleClick} mostrarP = {mostrarP}/>
            </div>
        </NavCss>
        
        </>
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Nadvar)



