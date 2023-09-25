import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Header.css'
import { useState } from "react";
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex justify-between py-6">
            <div>
                <img className="w-48" src={Logo} alt="" />
            </div>
            <div>
                <div className="md:hidden text-2xl mr-8 mt-5" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
                <nav className={`absolute bg-white md:block z-50 md:static px-5 ${open ? 'right-1' : '-right-72'} ${open ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row gap-5">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation">Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                    </ul>

                </nav>
            </div>

        </div>
    );
};

export default Header;