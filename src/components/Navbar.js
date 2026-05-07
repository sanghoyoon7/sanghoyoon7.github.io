import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react'; // 1. Import useState

export default function Navbar() {
    const router = useRouter();
    const path = router.pathname;

    // 2. State to track if the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Publications', path: '/publications' },
        { name: 'Students', path: '/students' },
        { name: 'Join Us', path: '/join' },
    ];

    // Function to toggle the menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Function to close the menu when a link is clicked on mobile
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(10px)', padding: '15px 0' }}>
            <div className="container">
                
                <Link href="/" className="navbar-brand fw-bold" style={{ color: '#001f3f', fontSize: '1.5rem' }} onClick={closeMenu}>
                    Sang Ho Yoon
                </Link>

                {/* 3. The Hamburger Button (Visible only on mobile) */}
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    {/* Switch icon between hamburger (list) and close (x) based on state */}
                    <i className={isMenuOpen ? "bi bi-x" : "bi bi-list"} style={{ fontSize: '2rem', color: '#001f3f' }}></i>
                </button>

                {/* 4. The Menu Items (Removed d-none d-lg-block, added dynamic collapse class) */}
                <div className={`${isMenuOpen ? 'show' : 'collapse'} navbar-collapse justify-content-end`}>
                    
                    {/* Added text-center and margin-top for better mobile spacing */}
                    <ul className="navbar-nav gap-4 mt-3 mt-lg-0 text-center text-lg-start">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link 
                                    href={link.path} 
                                    className="nav-link py-2 py-lg-1"
                                    onClick={closeMenu} // Close menu when user clicks a link
                                    style={{ 
                                        fontWeight: path === link.path ? '700' : '500',
                                        color: path === link.path ? '#1260de' : '#555',
                                        borderBottom: path === link.path ? '2px solid #1260de' : '2px solid transparent',
                                        transition: 'all 0.2s ease',
                                        display: 'inline-block' // Keeps the border exactly the width of the text on mobile
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}