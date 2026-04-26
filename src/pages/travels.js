// src/pages/travels.js
import Navbar from '@/components/Navbar';
import ProfileSidebar from '@/components/ProfileSidebar';
import Link from 'next/link';

// Import all data
import { travels } from '@/data/travel_data';

export default function Travels() {
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
                        
                        {/* Breadcrumb matching your screenshot */}
                        <div className="mb-4 text-muted small fw-bold">
                            <Link href="/" className="text-decoration-none text-primary">Home</Link> <span className="mx-2">/</span> Travel & Talks
                        </div>
                        
                        <h2 className="fw-bold mb-3" style={{ color: '#001f3f' }}>Travel & Talks</h2>
                        <p className="text-secondary mb-4">Speaking engagements, conferences, and travel activities.</p>

                        <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '12px' }}>
                            <div className="d-flex flex-column">
                                {travels.map((item, index) => (
                                    <div key={index} className="py-3 border-bottom" style={{ borderColor: '#f0f0f0' }}>
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-lg-2 mb-1 mb-md-0">
                                                <span className="text-muted small">{item.date}</span>
                                            </div>
                                            <div className="col-md-9 col-lg-10 text-secondary" style={{ fontSize: '0.95rem' }}>
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}