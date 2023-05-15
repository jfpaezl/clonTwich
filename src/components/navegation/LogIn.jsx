//importar hooks
import { useToggle } from '../../hocs/Toggle'

//importar stilos y iconos
import { IconTwich } from '../../styled/navegation/NavCss'
import { LoginCss, Close } from '../../styled/navegation/LoginCss'


export const  LogIn = ({showP, state=true}) =>{
    
    //estado para cambiar los modales de si es inicio de secion o registro
    const {toggle, handleToggle} = useToggle(state)
    const login = toggle ? 'container': 'hiden'
    const chekin = !toggle ? 'container': 'hiden'

    return(
        <LoginCss>
            <section className={login} >
                <header className='headeLogin'>
                    <Close className='close' onClick={showP}/>
                    <IconTwich className='icon'/>
                    <h2>Iniciar sesión en Twich</h2>
                </header>
                <form action="" method="post" className='formLogin'>
                    <div className='contInput'>
                        <label htmlFor="" className='labelLogin'>Usuario</label>
                        <input type="text" className='inputLogin'/>
                    </div>
                    <div className='contInput'>
                        <label htmlFor="" className='labelLogin'>Contaseña</label>
                        <input type="password" className='inputLogin'/>

                        <span className='linkR'>¿Tienes problemas para iniciar sesión</span>
                    </div>
                    
                    <button className='button'>Iniciar sesión</button>
                </form>
                <footer className='footerLigin'>
                    <span className='linkF'  onClick={handleToggle}>¿No tienes una cuenta? Registrate</span>
                </footer>
            </section>

            <section className={chekin}>
                <header className='headeLogin'>
                    <Close className='close' onClick={showP}/>
                    <IconTwich className='icon'/>
                    <h2>Unete a Twich hoy</h2>
                </header>
                <form action="" method="post" className='formLogin'>
                    <div className='contInput'>
                        <label htmlFor="" className='labelLogin'>Usuario</label>
                        <input type="text" className='inputLogin'/>
                        <span className='text-hidden'>Este es el nombre por el que te conoceran los demas en Twich. Puedes cambiarlo más tarde.</span>
                    </div>
                    <div className='contInput'>
                        <label htmlFor="" className='labelLogin'>Contaseña</label>
                        <input type="password" className='inputLogin'/>
                    </div>                    
                </form>
                <span className='pasos'>Paso 1 de 3</span>
                <footer className='footerCheck'>
                    <span className='linkF' onClick={handleToggle}>¿Ya eres usuario de Twich? Inicia sesión</span>
                    <button className='button'>Siguiente paso</button>
                </footer>
            </section>
        </LoginCss>
    )
}

