// src/pages/news.js
import Navbar from '@/components/Navbar';
import ProfileSidebar from '@/components/ProfileSidebar';
import Link from 'next/link';

// Import the news data
import { news } from '@/data/news_data';

export default function News() {
    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
            <Navbar />
            
            <div className="container">
                <div className="row">
                    
                    {/* LEFT COLUMN: Profile Sidebar */}
                    <div className="col-lg-3 col-md-4 mb-5 d-none d-md-block">
                        <ProfileSidebar />
                    </div>

                    {/* RIGHT COLUMN: Main Content */}
                    <div className="col-lg-8 col-md-8 offset-lg-1">
                        
                        {/* Breadcrumb */}
                        <div className="mb-4 text-muted small fw-bold">
                            <Link href="/" className="text-decoration-none" style={{ color: '#1260de' }}>Home</Link> <span className="mx-2">/</span> Recent News
                        </div>
                        
                        <h2 className="fw-bold mb-3" style={{ color: '#001f3f' }}>Recent News</h2>
                        <p className="text-secondary mb-4">Updates on research, publications, and lab activities.</p>

                        {/* Card Container */}
                        <div className="card border-0 shadow-sm p-4 pt-5" style={{ borderRadius: '12px' }}>
                            
                            {/* Timeline List (Retaining the format from index.js) */}
                            <ul className="list-unstyled mb-0" style={{ borderLeft: '2px solid #e9ecef', marginLeft: '10px', paddingLeft: '20px' }}>
                                {news.map((item, index) => (
                                    <li key={index} className="mb-4 pb-2 position-relative">
                                        {/* The Blue Timeline Dot */}
                                        <div style={{ position: 'absolute', left: '-27px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1260de' }}></div>
                                        
                                        {/* Date */}
                                        <div className="text-muted small fw-bold mb-1">{item.date}</div>
                                        
                                        {/* Content */}
                                        <div className="text-secondary" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                                            {item.content}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}