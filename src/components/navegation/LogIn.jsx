import { useState } from 'react'

import { IconTwich } from './NavCss'
import { LoginCss, Close } from './LoginCss'
export const  LogIn = () =>{
    const[isLogin, setIsLogin] = useState(true)

    setIsLogin () = {
        if (isLogin){
            
        }
    }
    return(
        <LoginCss id="modalLogIng" className="modalLogIng">
            <section className={'container'+ setIsLogin}>
                <header className='headeLogin'>
                    <Close className='close'/>
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
                    <span className='linkF'>¿No tienes una cuenta? Registrate</span>
                </footer>
            </section>

            <section className='container'>
                <header className='headeLogin'>
                    <Close className='close'/>
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
                    <span className='linkF'>¿Ya eres usuario de Twich? Inicia sesión</span>
                    <button className='button'>Siguiente paso</button>
                </footer>
            </section>
        </LoginCss>
    )
}

