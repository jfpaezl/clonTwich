import Nadvar from "../../components/navegation/Nadvar"
import Side from "../../components/side/Side"
import Layout from "../../hocs/layouts/Layout"
import { BodyCss } from "../../styled/BodyCss"
import { HomeMain } from "../../components/mains/HomeMain"

export const CheckIn = () =>{
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