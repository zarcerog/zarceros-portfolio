import React from "react";
import imageUSA from "images/usa.svg";
import imageES from "images/spanish.svg";
import arrow from "images/arrow-down.svg";
import arrowGif from "images/arrow-down.gif";
import i18n from "i18n";

export default function Dropdown() {    

    const [language, setLanguage] = React.useState({
        language: "en",
        image: "usa.svg",
        english: true
    });

    const [arrows, setArrows] = React.useState({
        arrow: "down-arrow.svg",
        animation: false
    });

    let country = language.english ? imageUSA : imageES;
    let name = language.english ? "English" : "Español";
    let arrowType = arrows.animation ? arrowGif : arrow;

    function setLanguageSpanish() {
        setLanguage({
            language: "es",
            image: "spanish.svg",
            english: false
        });
        toggle();
        toggleVisible("english", "spanish");
        i18n.changeLanguage('es_ES');
    }

    function setLanguageEnglish() {
        setLanguage({
            language: "en",
            image: "usa.svg",
            english: true
        });
        toggle();
        toggleVisible("spanish", "english");
        i18n.changeLanguage('en_US');
    }

    function changeArrow() {
        setArrows({
            arrow: "down-arrow.svg",
            animation: true
        });
    }

    function changeArrowGif() {
        setArrows({
            arrow: "down-arrow.gif",
            animation: false
        });
    }

    return (
        <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button onMouseEnter={changeArrow} onMouseLeave={changeArrowGif} onClick={toggle} className="inline-flex items-center justify-center p-2 rounded-md text-black font-semibold hover:bg-melon focus:outline-none transition duration-150 ease-in-out gap-2">
                    <div className="inline-flex items-center justify-center gap-2">
                        <img src={country} alt="USA" className="h-6 w-8" />
                        <span>{name}</span>
                    </div>
                    <img src={arrowType} className="max-h-6 max-w-6" alt="Arrow" />
                </button>
            </div>
            <div id="dropdown" className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                <div className="flex flex-col py-1 rounded-md bg-white shadow-xs">
                    <a href="/#" id="spanish" onClick={setLanguageSpanish} className="flex gap-2 px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        <img src={imageES} alt="Español" className="h-6 w-8" />
                        Español
                    </a>
                    <a href="/#" id="english" onClick={setLanguageEnglish} className="hidden flex gap-2 px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        <img src={imageUSA} alt="English" className="h-6 w-8" />
                        English
                    </a>
                </div>
            </div>
        </div>
    );
}

function toggle() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
}

function toggleVisible(language, language2) {
    const lang = document.getElementById(language);
    const lang2 = document.getElementById(language2);
    lang.classList.toggle("hidden");
    lang2.classList.toggle("hidden");
}