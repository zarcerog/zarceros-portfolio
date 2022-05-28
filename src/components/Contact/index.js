import React from "react";
import { useTranslation } from 'react-i18next';
import linkedin from "images/Linkedin.svg";
import github from "images/Github-Socials.svg";
import instagram from "images/Instagram.svg";
import twitter from "images/Twitter.svg";

export default function Contact() {
    
    const { t } = useTranslation();

    const copyToClipboard = str => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
          return navigator.clipboard.writeText("nzarcerogarcia@gmail.com") && copiedFunction();
        return Promise.reject('The Clipboard API is not available.');
      };

      const classesList = ["underline", "underline-offset-2", "hover:bg-green-highlight", "hover:bg-opacity-80", "hover:text-white", "cursor-pointer"];

      function copiedFunction() {
        document.getElementById("email").innerHTML = t('contact.copied');
        document.getElementById("email").classList.remove(...classesList);
        setTimeout(() => {  document.getElementById("email").innerHTML = "nzarcerogarcia@gmail.com" }, 2000);
        setTimeout(() => {  document.getElementById("email").classList.add(...classesList) }, 2000);
      }

    return (
        <div id="contact" className="flex flex-col bg-pale-silver gap-60">
            <div className="flex flex-col gap-20 items-start mx-24 mt-16">
                <h1 className="font-bold text-8xl tracking-tighter">
                    {t('contact.contact')}
                </h1>
                <h2 id="email" onClick={copyToClipboard} className="font-black text-7xl tracking-tighter underline underline-offset-2 hover:bg-green-highlight hover:bg-opacity-80 hover:text-white cursor-pointer">nzarcerogarcia@gmail.com</h2>
            </div>
            <div className="flex flex-col gap-20 mx-24">
                <h1 className="font-bold text-8xl tracking-tighter">{t('contact.socials')}</h1>
                <div className="flex flex-row gap-1 mb-20">
                    <a href="https://www.linkedin.com/in/zarcerog" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/zarcerog" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                    <a href="https://www.instagram.com/zarcerog/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.twitter.com/zarcerog/" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
    )
}