import "./Button.css"
import '../../styles/colors.css'

const Button = ({tittle}) =>{
    return(
        <button>
            <span>{tittle}</span>
        </button>
    );
};

export default Button;