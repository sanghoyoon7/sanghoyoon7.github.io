import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const path = router.pathname;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Publications', path: '/publications' },
        { name: 'Students', path: '/students' },
        { name: 'Join Us', path: '/join' },
    ];

    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', padding: '15px 0' }}>
            <div className="container">
                <Link href="/" className="navbar-brand fw-bold" style={{ color: '#001f3f', fontSize: '1.5rem' }}>
                    Sang Ho Yoon
                </Link>
                {/* Note: In a real app, you'd add a hamburger menu toggle here for mobile */}
                <div className="collapse navbar-collapse justify-content-end d-none d-lg-block">
                    <ul className="navbar-nav gap-4">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link 
                                    href={link.path} 
                                    className="nav-link"
                                    style={{ 
                                        fontWeight: path === link.path ? '700' : '500',
                                        color: path === link.path ? '#1260de' : '#555',
                                        borderBottom: path === link.path ? '2px solid #1260de' : '2px solid transparent',
                                        transition: 'all 0.2s ease'
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