import Logo from '../../assets/header/logoPortfolio.svg'
import './Header.css'
import Button from '../buttons/Button';
import '../../styles/colors.css'

const Header = () => {

    return (
        <header>
            <a href='home' className="logo">
                <img src={Logo} alt="Logo"/>
                <h2>ortfolio</h2>
            </a>
            <nav>
                <a href="about">About</a>
                <a href="skills">Skills</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a>
            </nav>
            <Button tittle={"Hire Me"}></Button>
        </header>
    );
};

export default Header;