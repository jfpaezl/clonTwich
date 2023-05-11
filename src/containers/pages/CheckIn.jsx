import Nadvar from "../../components/navegation/Nadvar"
import Side from "../../components/side/Side"
import Layout from "../../hocs/layouts/Layout"
import { BodyCss } from "../../styled/BodyCss"

export const CheckIn = () =>{
    return(
        <Layout>
            <Nadvar/>
            <BodyCss>
                <Side/>
            </BodyCss>
        </Layout>
    )
}