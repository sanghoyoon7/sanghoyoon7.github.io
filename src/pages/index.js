import Navbar from '@/components/Navbar';
import ProfileSidebar from '@/components/ProfileSidebar';
import Link from 'next/link';

// 1. Importing the data directly from your new files
import { travels } from '@/data/travel_data';
import { news } from '@/data/news_data';

export default function Home() {
    // Notice: NO const travels = [...] or const news = [...] here anymore! 
    // We are pulling entirely from the imports above.

    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
            <Navbar />
            
            <div className="container">
                    <div className="row">
                        
                        {/* LEFT COLUMN: Profile (Increased width from col-lg-3 to col-lg-4) */}
                        <div className="col-lg-4 col-md-5 mb-5">
                            <ProfileSidebar />
                        </div>

                        {/* RIGHT COLUMN: Main Content (Adjusted width from col-lg-8 to col-lg-7) */}
                        <div className="col-lg-7 col-md-7 offset-lg-1"> 
                        
                        {/* Bio Section */}
                        <section className="mb-5 pb-4 border-bottom">
                            <h2 className="fw-bold mb-4" style={{ color: '#001f3f' }}>Biography</h2>
                            
                            {/* Darker text wrapper (color: '#333') */}
                            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                                <p className="mb-3">
                                    He is an Associate Professor in the <Link href="https://ct.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Graduate School of Culture Technology</Link> at <Link href="https://www.kaist.ac.kr/en/" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>KAIST</Link>, and leading the <Link href="https://hcitech.org" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>HCI Tech Lab</Link> (Human-centered Interactive Technologies Lab). 
                                    He is also affiliated with the <Link href="https://cs.kaist.ac.kr/people/view?idx=626&kind=faculty&menu=160" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>School of Computing</Link>, the <Link href="https://ax.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Department of AX</Link>, the <Link href="https://meta.kaist.ac.kr/members/4" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Graduate School of Metaverse</Link>, and the <Link href="https://robots.kaist.ac.kr/sub0401/index/search_field/eNortjIytVJy1MtJLS7Oz9N21MtLzE0FUsWlSVmpySVK1lwwrYYKlg~~/search_keyword/eNortrK0UnozZ8mb5sa3M3YoWQNcMD_xB_k~/page/1" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>KAIST Robotics Program</Link>.
                                </p>
                                <p className="mb-3">
                                    His research focuses on enabling natural user interactions that overcome physical, mental, and social barriers. The research scope falls within the field of Human-Computer Interaction (HCI), enabling novel interactions for XR interfaces. He explores sensing techniques & haptics with the aid of AI technologies.
                                </p>
                                <p className="mb-4">
                                    Before joining KAIST, he was a principal engineer at <Link href="https://research.samsung.com/" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Samsung Research</Link> and a research engineer at <Link href="https://www.microsoft.com/applied-sciences" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Microsoft Applied Sciences Group</Link>. He received Ph.D. from <Link href="https://www.purdue.edu/" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Purdue University</Link>, and M.S. and B.S. from <Link href="https://www.cmu.edu/" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Carnegie Mellon University</Link>.
                                </p>
                            </div>

                            <div className="mt-4 p-3 bg-light rounded" style={{ borderLeft: '4px solid #1260de' }}>
                                If you are interested in joining HCI Tech Lab as an intern, MS student, PhD student, PostDoc, read <Link href="/join" className="fw-bold text-decoration-none" style={{ color: '#1260de' }}>Join Us</Link> page.
                            </div>
                        </section>

                        {/* Travels & Talks Section */}
                        <section className="mb-5 pb-4 border-bottom">
                            <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '12px' }}>
                                <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                                    <h3 className="fw-bold m-0" style={{ color: '#001f3f' }}>Travel & Talks</h3>
                                    <Link href="/travels" className="text-dark text-decoration-none fw-bold small">
                                        See All &rarr;
                                    </Link>
                                </div>
                                
                                <div className="d-flex flex-column">
                                    {travels.slice(0, 12).map((item, index) => (
                                        <div key={index} className="py-3 border-bottom" style={{ borderColor: '#f0f0f0' }}>
                                            <div className="row align-items-start">
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
                        </section>

                        {/* News Section */}
                        <section className="mb-5">
                            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                                <h3 className="fw-bold m-0" style={{ color: '#001f3f' }}>Recent News</h3>
                                <Link href="/news" className="text-dark text-decoration-none fw-bold small">
                                    More News &rarr;
                                </Link>
                            </div>
                            <ul className="list-unstyled" style={{ borderLeft: '2px solid #e9ecef', marginLeft: '10px', paddingLeft: '20px' }}>
                                {news.slice(0, 5).map((item, index) => (
                                    <li key={index} className="mb-4 position-relative">
                                        <div style={{ position: 'absolute', left: '-27px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1260de' }}></div>
                                        <div className="text-muted small fw-bold mb-1">{item.date}</div>
                                        <div className="text-secondary" style={{ lineHeight: '1.6' }}>{item.content}</div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}