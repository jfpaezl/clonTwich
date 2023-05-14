import { connect } from 'react-redux'; //importante esta mierda
import styled from 'styled-components';

import { HeroVideos } from "./HeroVideos"
import { LiveChanel } from './liveChanel';


const HomeMain=()=>{
    return(
        <HomeMainCss>
            <HeroVideos/>
            <LiveChanel/>
        </HomeMainCss>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(HomeMain)

export const HomeMainCss = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    height: calc(100vh - 5rem);
    overflow: hidden;
    padding: 2rem 3rem;
    &:hover{
        overflow: auto;
    }
    ::-webkit-scrollbar {
        width: .5rem; /* Ancho del scrollbar */
    }
    ::-webkit-scrollbar-thumb {
        background: var(--fontCategory); /* Color del thumb */
        border-radius: 1rem; /* Radio del borde del thumb */
    }
`