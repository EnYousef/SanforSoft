import { CgMenuRightAlt } from "react-icons/cg";
import { PiXLight } from "react-icons/pi";
import Logo from '../../assets/logo.png';
import WhiteLogo from '../../assets/white_logo.png';
import { ThemeButton } from "../../reducers/Theme/Theme";
import { useState } from "react";
import { Link } from "react-router-dom";
import { selectTheme } from "../../reducers/Theme/ThemeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export function Nav() {
    const [menu, setMenu] = useState(false);
    const theme = useSelector(selectTheme);
    return <>
        <nav className={`flex justify-between w-full sm:items-center items-start md:mt-16 relative p-5`}>
            <button onClick={() => setMenu(!menu)} className='md:mr-[4.7rem] lg:mr-[10.6rem] mr-2 duration-200' >
                {menu ? <div className="rotate-180 duration-700"><PiXLight size={'3.5rem'} /></div> : <div className=""><CgMenuRightAlt size={'3.5rem'} /></div>}
            </button>
            <Link to={'/'}><img className='ml-0 md:ml-14 lg:ml-40 filter contrast-200 w-14' src={theme === 'light' ? Logo : WhiteLogo} alt="SanforSoft Logo" /></Link>
        </nav>
        <NavElements isVisible={menu} />
    </>
}

function NavElements({ isVisible }) {
    return <div
        className={`
    ${isVisible ? 'flex' : 'hidden'}
    text-xl absolute right-0 md:mr-36 mr-20 lg:mr-60
    md:top-24 top-6 lg:w-2/6 md:w-1/2 w-3/5 z-10
    bg-blue-50 bg-opacity-20 backdrop-blur-lg
    rounded drop-shadow-lg p-4 shadow-xl
    `}>
        <ul className="w-full">
            <NavElement title={"الرئيسية"} link={'/'} />
            <hr />
            <NavElement title={"خدماتنا"} link={'/service'} />
            <hr />
            <NavElement title={"اعمالنا"} link={'/ourwork'} />
            <hr />
            <NavElement title={"تواصل معانا"} link={'/contact'} />
            <hr />
            <NavElement title={"من نحن"} link={'/about'} />
            <hr />
            <div className="mt-2"><ThemeButton /></div>
        </ul>
    </div>
}

function NavElement({ title, button = null, link }) {
    return (<Link to={link}>
        <div className={`flex justify-between w-full m-2 ${button === null ? 'hover:-translate-x-2' : ''} duration-150 cursor-pointer`}>
            <h1>{title}</h1>
            {button}
        </div>
    </Link>);
}
