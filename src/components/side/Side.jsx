import { connect } from 'react-redux';
import { useState } from 'react';

import { SideCss, ArrowBarLeft, ArrowBarRight, HiOutlineVideo } from './SideCss';
import { StreamAlive } from './StreamAlive';
export const Side =()=>{

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
                avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0n5INdEL0_j-DJKG-wSIyU2XEf1JrT_rJ5w&usqp=CAU'}
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
