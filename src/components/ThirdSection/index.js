import React from "react";
import figma from "images/Figma.svg";
import github from "images/Github.svg";
import flora from "images/Flora.svg";
import swillan from "images/swillan-logo.svg";
import { useTranslation } from 'react-i18next';

export default function ThirdSection() {
    
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-7" id="work">
            <h1 className="font-bold text-5xl md:text-7xl xl:text-8xl mx-12 mt-8 mb-14 md:mx-16 md:mt-12 xl:mb-22 xl:mx-24 xl:mt-16 xl:mb-28">{t('thirdSection.title')}</h1>
            <div className="flex flex-col xl:flex-row xl:items-start items-center justify-between mx-12 mb-8 xl:mx-24 xl:mb-16">
                <div id="first-project" className="flex flex-col items-center mb-6 xl:mb-0">
                    <div className="w-72 h-72 md:w-96 md:h-96 bg-middle-grey rounded-lg flex flex-col justify-center items-center gap-12">
                        <img src={flora} className="w-44 h-44 md:w-56 md:h-56" alt="Flora" />
                        <div className="flex flex-row gap-2">
                            <a href="https://github.com/frequential/flora-landing" target="_blank" rel="noreferrer"><img src={github} alt="Github" className="h-8 w-8 md:h-11 md:w-11" /></a>
                            <a href="https://www.figma.com/file/eh6xwk3gYhcScZTAAzOSs5/flora-landing?node-id=0%3A1" target="_blank" rel="noreferrer"><img src={figma} alt="Figma" className="h-8 w-8 md:h-11 md:w-11" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xs xl:max-w-sm">
                        <h1 className="font-medium text-2xl xl:text-4xl text-center mt-3">{t('thirdSection.first-project.title')}</h1>
                        <span className="text-justify text-sm md:text-base mt-3">{t('thirdSection.first-project.first-desc')}<a href="https://github.com/frequential/flora" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:bg-green-highlight hover:text-white">{t('thirdSection.first-project.link')}</a>{t('thirdSection.first-project.second-desc')}</span>
                    </div>
                </div>
                <div id="second-project" className="flex flex-col items-center mb-6 xl:mb-0">
                    <div className="w-72 h-72 md:w-96 md:h-96 bg-middle-grey rounded-lg flex flex-col justify-center items-center gap-12">
                        <img src={swillan} className="w-44 h-44 md:w-56 md:h-56" alt="Swillan" />

                        <div className="flex flex-row gap-2">
                            <a href="https://github.com/frequential/flora" target="_blank" rel="noreferrer"><img src={github} alt="Github" className="h-8 w-8 md:h-11 md:w-11" /></a>
                            <a href="https://www.figma.com/file/eh6xwk3gYhcScZTAAzOSs5/flora-landing?node-id=0%3A1" target="_blank" rel="noreferrer"><img src={figma} alt="Figma" className="h-8 w-8 md:h-11 md:w-11" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xs xl:max-w-sm">
                        <h1 className="font-medium text-2xl xl:text-4xl text-center mt-3">{t('thirdSection.second-project.title')}</h1>
                        <span className="text-justify text-sm md:text-base mt-3">{t('thirdSection.second-project.description')}</span>
                    </div>
                </div>
                <div id="third-project" className="flex flex-col items-center mb-6 xl:mb-0">
                    <div className="w-72 h-72 md:w-96 md:h-96 bg-middle-grey rounded-lg flex flex-col justify-center items-center gap-12 ">
                        <img src={flora} className="w-44 h-44 md:w-56 md:h-56" alt="Flora" />
                        <div className="flex flex-row gap-2">
                            <a href="https://github.com/frequential/flora" target="_blank" rel="noreferrer"><img src={github} alt="Github" className="h-8 w-8 md:h-11 md:w-11" /></a>
                            <a href="https://www.figma.com/file/h646EFcVZeLYIhn4SgGhWF/Zarcero's-Portfolio-v1?node-id=0%3A1" target="_blank" rel="noreferrer" ><img src={figma} alt="Figma" className="h-8 w-8 md:h-11 md:w-11" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xs xl:max-w-sm">
                        <h1 className="font-medium text-2xl xl:text-4xl text-center mt-3">{t('thirdSection.third-project.title')}</h1>
                        <span className="text-justify text-sm md:text-base mt-3">{t('thirdSection.third-project.description')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}