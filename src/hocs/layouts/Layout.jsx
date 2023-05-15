import { connect } from "react-redux";
import Side from "../../components/side/Side";
import { BodyCss } from "../../styled/BodyCss";
import Nadvar from "../../components/navegation/Nadvar";


function Layout({children}) {
    return(
        <>
            <Nadvar/>
            <BodyCss>
                <Side/>
                {children}
            </BodyCss>   
        </>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Layout)