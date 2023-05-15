import { StreamAliveCss, Pointer } from '../../styled/side/StreamAliveCss'

export const StreamAlive = ({newclas=Boolean, avatar , nickname='undefined' , category='undefined', views=0, description='description' }) =>{
    const modalSide = newclas === 'open' ? '' : newclas;
    const modal2Side = newclas === 'open' ? '' : 'hoverModal';
    return(
        <StreamAliveCss>
            <div className='alive'>
                <img
                    alt='El avatar de streamer'
                    src={avatar}
                />
                <div className={`stremer ${newclas}`}>
                    <strong>{nickname}</strong>
                    <p className="parrafo">{category}</p>
                </div>
            </div>
            <div className={`views ${newclas}`}>
                <Pointer/>
                <p>{views} k</p>
            </div>    
            <div className={`modal ${modalSide}`}>
                <p>{description}</p>
            </div>
            <div className={`modal2 ${modal2Side}`}>
                <header>{nickname} . {category}</header>
                <strong>{description}</strong>
                <footer>
                    <Pointer/>
                    <span>En vivo | NaN espectadores</span>
                </footer>
            </div>
        </StreamAliveCss>
    )
}

