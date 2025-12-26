import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    // This will make the navbar fixed and a bit blurry so that we can still access the elements.
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            },
        });

        navTween.fromTo(
            "nav",
            { backgroundColor: "transparent" },
            {
                backgroundColor: "#00000050",
                backgroundFilter: "blur(10px)",
                duration: "1",
                ease: "power1.inOut",
            },
        );
    });

    return (
        <nav>
            <div>
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                {/* Nav Links */}
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
