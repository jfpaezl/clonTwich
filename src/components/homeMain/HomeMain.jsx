import { connect } from 'react-redux'; //importante esta mierda
import styled from 'styled-components';

import VideoCarts from "../../components/carts/VideoCarts"
import { HeroVideos } from "./HeroVideos"



const HomeMain=()=>{
    return(
        <HomeMainCss>
            <HeroVideos/>
            <VideoCarts/>
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