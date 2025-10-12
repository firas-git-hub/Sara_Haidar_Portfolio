'use client';

import './navbar.scss'
import { Button } from "@mui/material";
import navData from "@/data/navigationItemsList.json"
import { NavDataItemInterface } from '@/interfaces/navDataItemInterface';
import { useTranslations } from 'next-intl';
import { getNavbarButtonStyle } from '@/styles/mainTheme';
import LocaleSwitcher from '@/app/components/localeSwitcher/localeSwitcher';

export default function Navbar() {
    const t = useTranslations("navbar");

    return (
        <>
            <div className="navbar">
                <div className='buttonContainer'>
                    {
                        navData.map((navItem: NavDataItemInterface, index) => {
                            return (
                                <Button sx={getNavbarButtonStyle()} disableRipple key={index} href={navItem.navPath} >
                                    {t(navItem.navTitleMsgsKey.toString())}
                                </Button>
                            )
                        })
                    }
                </div>
                <LocaleSwitcher></LocaleSwitcher>
            </div>
        </>
    );
}