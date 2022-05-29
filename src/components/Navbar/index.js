import React from "react";
import Dropdown from "components/Dropdown";
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

export default function Navbar() {
    
    const { t } = useTranslation();

    function menuToggle() {
        const menu = document.getElementById("menuIcon");
        const nav = document.getElementById("navbar");
        let list = document.querySelector('ul');

        if (menu.name == "menu-outline") {
            menu.name = "close-outline";
            list.classList.remove('opacity-0');
            list.classList.add('opacity-100');
            list.classList.remove('pointer-events-none');
            nav.classList.add('h-52');
        } else {
            menu.name = "menu-outline";
            list.classList.remove('opacity-100');
            list.classList.add('opacity-0');
            list.classList.add('pointer-events-none');
            nav.classList.remove('h-52');
        }
    }

    return (
        <nav id="navbar" className="md:flex md:justify-between md:h-36 md:items-center mx-11 md:mx-16 transition-all ease-in duration-500">
            <div className="flex justify-between items-center mt-10 md:mt-0">
                <h4 className="font-semibold">
                    <a href="/">Nicolás Zarcero</a>
                </h4>
                <button className="text-3xl mt-2 md:hidden">
                    <ion-icon name="menu-outline" id="menuIcon" onClick={menuToggle}></ion-icon>
                </button>
            </div>
            <div>
                <ul className="md:flex md:items-center z-10 md:z-auto md:bg-inherit left-0 absolute md:static w-full md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400] pointer-events-none">
                    <li className="font-semibold cursor-pointer mx-4 my-0">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                            {t('navbar.about')}
                        </Link>
                    </li>
                    <li className="font-semibold cursor-pointer mx-4 my-6 md:my-0">
                        <Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={800}>
                            {t('navbar.work')}
                        </Link>
                    </li>
                    <li className="font-semibold cursor-pointer mx-4 my-6 md:my-0">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1100}>
                            {t('navbar.contact')}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex justify-around gap-2">
                <Dropdown />
            </div>
        </nav>
    )
}
