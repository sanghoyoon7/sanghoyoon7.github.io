import Link from 'next/link';

export default function ProfileSidebar() {
    return (
        <div style={{ position: 'sticky', top: '100px' }}>
            
            {/* The enclosing card with a subtle border */}
            <div className="card border p-4 text-center" style={{ borderRadius: '12px', borderColor: '#eaeaea', backgroundColor: '#ffffff' }}>
                
                {/* 1. Image Section */}
                <div className="d-flex justify-content-center mb-4">
                    <img 
                        src="/img/Sang1.png" 
                        alt="Sang Ho Yoon" 
                        className="img-fluid shadow-sm"
                        style={{ width: '180px', borderRadius: '12px', objectFit: 'cover' }} 
                    />
                </div>
                
                {/* 2. Name & Title Section */}
                <h3 className="fw-bold mb-2" style={{ color: '#001f3f' }}>Sang Ho Yoon</h3>
                
                <div className="text-secondary mb-2" style={{ fontSize: '0.95rem' }}>Associate Professor</div>
                
                <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    <Link href="https://ct.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>
                        Graduate School of Culture Technology, KAIST
                    </Link>
                    <br />
                    <Link href="https://cs.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>
                        School of Computing, KAIST
                    </Link>
                </div>

                {/* --- Divider --- */}
                <hr className="my-4" style={{ borderColor: '#e0e0e0' }} />

                {/* 3. CV, Contact & Office Information */}
                <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }} className="text-secondary mb-4">
                    
                    {/* CV Link Added Here */}
                    <Link href="/cv.pdf" target="_blank" className="text-decoration-none fw-bold mb-3 d-block" style={{ color: '#1260de' }}>
                        Curriculum Vitae (PDF)
                    </Link>

                    <Link href="mailto:sangho@kaist.ac.kr" className="text-decoration-none fw-bold mb-2 d-block" style={{ color: '#1260de' }}>
                        sangho@kaist.ac.kr
                    </Link>
                    Office: N5 3F #2327, KAIST<br />
                    291 Daehak-ro, Yuseong-gu<br />
                    Daejeon, Korea 34141
                </div>

                {/* --- Divider --- */}
                <hr className="my-3" style={{ borderColor: '#e0e0e0' }} />

                {/* 4. Lab Logo & Solid Blue Icons */}
                <div className="d-flex flex-column align-items-center mt-2">
                    
                    <Link href="https://hcitech.org" target="_blank" className="mb-3">
                        <img src="/img/icon/Logo_Dark.png" alt="HCI Tech Lab" className="img-fluid" style={{ maxWidth: '160px' }} />
                    </Link>

                    <div className="d-flex justify-content-center gap-3">
                        <Link href="mailto:sangho@kaist.ac.kr" className="fs-2" style={{ color: '#1260de', transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '0.7'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                            <i className="bi bi-envelope-fill"></i>
                        </Link>
                        <Link href="https://www.youtube.com/@HCI_Tech" target="_blank" className="fs-2" style={{ color: '#1260de', transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '0.7'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                            <i className="bi bi-youtube"></i>
                        </Link>
                        <Link href="https://www.linkedin.com/in/hcidesigner/" target="_blank" className="fs-2" style={{ color: '#1260de', transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '0.7'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                            <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link href="https://scholar.google.com/citations?user=ejaRQn8AAAAJ&hl=en" target="_blank" className="fs-2" style={{ color: '#1260de', transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '0.7'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                            <i className="ai ai-google-scholar-square"></i>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}