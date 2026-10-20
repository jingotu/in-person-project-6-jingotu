import { useState } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    function handleNavClick(event) {
        setIsMobileMenuOpen(false);

        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (
        <nav id="navbar">
            <div className="nav-brand">
                <span>Jingo Tu</span>
            </div>

            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <li>
                    <a href="#home" className="nav-link" onClick={handleNavClick}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="nav-link" onClick={handleNavClick}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" className="nav-link" onClick={handleNavClick}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="nav-link" onClick={handleNavClick}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="nav-link" onClick={handleNavClick}>
                        Contact
                    </a>
                </li>
            </ul>


            <button
                type="button"
                className="nav-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}

export default Navbar;