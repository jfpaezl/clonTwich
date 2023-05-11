import HomeMain from "../../components/homeMain/HomeMain"
import Nadvar from "../../components/navegation/Nadvar"
import Side from "../../components/side/Side"
import Layout from "../../hocs/layouts/Layout"
import { BodyCss } from "../../styled/BodyCss"

export const Pruebas = () =>{
    return(
        <Layout>
            <Nadvar/>
            <BodyCss>
                <Side/>
                <HomeMain/>
            </BodyCss>
        </Layout>
    )
}