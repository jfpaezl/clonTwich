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
                <NavLink className='linksPerson linkIni'>
                    Iniciar sesión
                </NavLink>
                <NavLink className='linksPerson linkRe'>
                    Registrarse
                </NavLink>
                <div className='ContainerPerson'>
                    <Person/>
                </div>
            </div>
        </NavCss>
        <LogIn/>
        </>
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Nadvar)



