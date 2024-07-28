import { useState } from "react";
import HamburgerMenu from "@components/HamburgerMenu";
import Logo from "@components/Logo";
import Navbar from "@components/Header/Navbar";

export default function Header() {
    const [appear, setAppear] = useState(false);

    function handleAppear() {
        setAppear(!appear);
    }
    
    return (
        <header>
            <div className="container">
                <div className="relative flex items-center justify-between border-b-2 border-primary py-4 sm:px-4">
                    <div className="flex items-center gap-3">
                        <HamburgerMenu handleAppear={handleAppear} />
                        <a href="/">
                            <Logo />
                        </a>
                    </div>
                    <Navbar appear={appear} />
                </div>
            </div>
        </header>
    );
}
