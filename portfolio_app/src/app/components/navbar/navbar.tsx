'use client';

import { Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div >
                <Button href='/'>home</Button>
                <Button href='/aboutMe'>About me</Button>
                <Button href='/areaOfExpertise'>aoe</Button>
                <Button href='/publications'>pubs</Button>
                <Button href='/contact'>contact</Button>
            </div>
        </>
    );
}