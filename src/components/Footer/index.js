import React from "react";
import { useTranslation } from 'react-i18next';

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="h-10 md:h-14 xl:h-20 bg-dark-lava flex items-center justify-center">
            <h4 className="text-white font-thin tracking-tighter text-xl md:text-2xl xl:text-3xl">{t('footer.title')}</h4>
        </footer>
    );
}