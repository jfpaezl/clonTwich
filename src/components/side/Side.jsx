import { connect } from 'react-redux';
import { useState } from 'react';

import { SideCss, ArrowBarLeft, ArrowBarRight, HiOutlineVideo } from './SideCss';
import { StreamAlive } from './StreamAlive';
function Side (){

    const [change, setChange] = useState(true)
    const cerrar = change ? 'open': 'close'
    const abrir = !change ? 'open': 'close'
    
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
            <StreamAlive 
                newclas={cerrar}
                avatar={'src/assets/img/iconmonstr-twitch-2-240.png'}
                nickname={'Jfpaezl'}
                category={'sobre que va el stream'}
                views={19.2}
                description={'🔴ESTA NOCHE DESCENDEMOS AL INFIERNO O SUBIMOS A PLATINO DEFINITIVAMENTE🔴 !redes !video !reddit !discord'}
            />
        </SideCss>
        
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Side)
