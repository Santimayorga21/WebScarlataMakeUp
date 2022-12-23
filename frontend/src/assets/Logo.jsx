import "./Logo.css"

// @ts-ignore
import logo from "./logoescarlata.png"

function Logo(props) {

    const {size} = props

    const style = {
        //width: size,
        height: size
    }

    return (
        <div className='flex logo'>
            <img src={logo} style={style}></img>
        </div >
    );
}

export default Logo;