import { connect } from 'react-redux'; //importante esta mierda
import VideoCartsCss from '../../styled/carts/VideoCartsCss';

const VideoCarts = ({portada, viewers=0, avatar, description="Indefinite", nickName='Indefinite', category='Indefinite', tags}) =>{

//para las etiquetas toca ver si mas bien se manda una lista para iterar con max 4 campos en la etiqueta
    return(
        <VideoCartsCss>
            <div className='contentVideo'>
                <img className='portada' src={portada} alt="imagen de portada" />
                <strong>EN VIVO</strong>
                <p>{viewers} espectadores</p>
            </div>
            <div className='contentDescription'>
                <img src={avatar} alt="avatar del streamer" />
                <div className='description'>
                    <div className='desParrafo'>
                        <h3 className="parrafo">{description}</h3>
                    </div>
                    <strong className='parrafo2'>{nickName}</strong>
                    <a className="parrafo2">{category}</a>
                    <div className="spans">
                    { 

                        tags.slice(0, 3).map((tag, key) => (
                        <span key={key}> {tag} </span>
                        ))
                    }
                    </div>
                </div>
            </div>
            
        </VideoCartsCss>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(VideoCarts)
