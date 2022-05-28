import React from "react";
import Dropdown from "components/Dropdown";
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

export default function Navbar() {
    
    const { t } = useTranslation();
    
    return (
        <nav className="flex justify-between h-36 items-center mx-16">
            <h4 className="font-semibold">
                <a href="/">Nicolás Zarcero</a>
            </h4>
            <div className="flex gap-16">
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className="font-semibold cursor-pointer">
                    {t('navbar.about')}
                </Link>
                <Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={800} className="font-semibold cursor-pointer">
                    {t('navbar.work')}
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1100} className="font-semibold cursor-pointer">
                    {t('navbar.contact')}
                </Link>
            </div>
            <div className="flex justify-around gap-2">
                <Dropdown />
            </div>
        </nav>
    )
}