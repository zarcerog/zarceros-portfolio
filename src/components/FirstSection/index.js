import React from "react";
import image from "images/zarcerog.jpg";
import { useTranslation } from 'react-i18next';
import Navbar from "components/Navbar";

export default function FirstSection() {

    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen" id="home">
            <Navbar />
            <div className="mx-10 md:mx-12 xl:mx-16">
                <h1 className="font-bold text-5xl md:text-7xl xl:text-8xl mt-3 w-92">{t('mainSection.title')}</h1>
                <div className="flex lg:flex-row flex-col align-middle items-start md:justify-between mt-10 lg:mt-12 md:mt-16 xl:mt-16">
                    <img src={image} alt="zarcero" className="mt-20 md:mt-0 h-auto w-auto" />
                    <div className="bg-middle-grey w-fit mr-0 mt-16 mb-10 md:mb-0 lg:mt-[308px] xl:mt-[238px]">
                        <h2 className="font-light text-3xl lg:text-5xl md:text-6xl xl:text-8xl p-2 lg:p-4 xl:p-8 text-white">Nicolás Zarcero</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
