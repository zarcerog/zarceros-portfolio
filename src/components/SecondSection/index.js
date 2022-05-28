import React from "react";
import { useTranslation } from 'react-i18next';

export default function SecondSection() {

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
  
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 400;
          let sectionId = current.getAttribute("id");
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector("#about p[id*=" + sectionId + "]").classList.remove("lg:text-melon");
            document.querySelector("#about p[id*=" + sectionId + "]").classList.remove("lg:opacity-40");
            document.querySelector("#about p[id*=" + sectionId + "]").classList.add("lg:text-white");
            document.querySelector("#about p[id*=" + sectionId + "]").classList.add("lg:opacity-100");
          } else {
            document.querySelector("#about p[id*=" + sectionId + "]").classList.remove("lg:text-white");
            document.querySelector("#about p[id*=" + sectionId + "]").classList.remove("lg:opacity-100");
            document.querySelector("#about p[id*=" + sectionId + "]").classList.add("lg:text-melon");
            document.querySelector("#about p[id*=" + sectionId + "]").classList.add("lg:opacity-40");
          }
        });
      }
    
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col bg-dark-lava content-wrap" id="about">
            <div className="mx-20 my-14 md:mx-40 md:my-20 xl:mx-60 xl:my-28">
                <section id="first" className="pb-16">
                    <p id="first" className="text-2xl text-justify lg:text-left md:text-4xl xl:text-6xl md:transition-colors duration-200 font-semibold md:font-bold xl:font-extrabold tracking-wide text-white opacity-100 lg:text-melon lg:opacity-40">{t('secondSection.first')}</p>
                </section>
                <section id="second" className="pb-16">
                    <p id="second" className="text-2xl text-justify lg:text-left md:text-4xl xl:text-6xl md:transition-colors duration-200 font-semibold md:font-bold xl:font-extrabold tracking-wide text-white opacity-100 lg:text-melon lg:opacity-40">{t('secondSection.second')}</p>
                </section>
                <section id="third" className="pb-16">
                    <p id="third" className="text-2xl text-justify lg:text-left md:text-4xl xl:text-6xl md:transition-colors duration-200 font-semibold md:font-bold xl:font-extrabold tracking-wide text-white opacity-100 lg:text-melon lg:opacity-40">{t('secondSection.third')}</p>
                </section>
                <section id="fourth" className="pb-16">
                    <p id="fourth" className="text-2xl text-justify lg:text-left md:text-4xl xl:text-6xl md:transition-colors duration-200 font-semibold md:font-bold xl:font-extrabold tracking-wide text-white opacity-100 lg:text-melon lg:opacity-40">{t('secondSection.fourth')}</p>
                </section>
            </div>
        </div>
    );
}