import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//importar hooks
import { useToggle } from '../../hocs/Toggle';

//importar el estilo del nav
import { Seach, Icon1, Crown, Person, Extra, IconTwich, NavCss } from './NavCss';

//impor pages for nav
import { Home } from '../../containers/pages/Home';
import { LogIn } from './LogIn';



function Nadvar (){
    // un hook creado para crear funciones toogle o buleabos
    const {toggle, handleToggle} = useToggle(false)
    const showModal = toggle ? '': 'hiden'
    return(
        <>
        <NavCss>
            <div className='nav'>
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
                    <input type='seach' placeholder='Buscar' className='inputSeach'/>
                    <div className='seachContainer'>
                        <Seach/>
                    </div>
                </div>
                <div className='containerLogin'>
                    <div className='ContainerCrown'>
                        <Crown/>
                    </div>
                    <button className='linksPerson linkIni' onClick={handleToggle}>
                        Iniciar sesión
                    </button>
                    <button className='linksPerson linkRe' onClick={handleToggle} >
                        Registrarse
                    </button>
                    <div className='ContainerPerson'>
                        <Person/>
                    </div>
                </div>
            </div>
            
            <div className={showModal}>
                <LogIn showP = {handleToggle}/>
            </div>
        </NavCss>
        
        </>
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Nadvar)



