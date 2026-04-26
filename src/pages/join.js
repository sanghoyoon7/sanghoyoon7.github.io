// src/pages/join.js
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Join() {
    
    // Smooth scroll function for the Quick Navigation buttons
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100; // Accounts for your sticky navbar
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
            <Navbar />
            
            <div className="container">
                
                {/* --- FULL WIDTH BREADCRUMB --- */}
                <div className="mb-4 pb-3 border-bottom" style={{ fontSize: '1.05rem' }}>
                    <Link href="/" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Home</Link> 
                    <span className="mx-2 text-muted fw-light">/</span> 
                    <span className="text-dark fw-bold">Join Us</span>
                </div>

                {/* --- MAIN CONTENT (Left-aligned to match other pages) --- */}
                <div className="row">
                    <div className="col-lg-10 col-md-12">
                        
                        {/* Large Page Title */}
                        <h1 className="fw-bold mb-4" style={{ color: '#001f3f', fontSize: '2.5rem' }}>Joining HCI Tech Lab</h1>

                        {/* Intro Application Instructions */}
                        <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                            If you are interested in joining our lab as an M.S. or Ph.D. student, please send me an email and submit the official application form. Please briefly describe your research interests and attach your CV, including your undergraduate transcript or GPA. <br/><br/>
                            <strong className="text-danger">Important:</strong> Please insert <code className="bg-light px-2 py-1 border rounded text-dark fw-bold">"Application PhD"</code> or <code className="bg-light px-2 py-1 border rounded text-dark fw-bold">"Application MS"</code> in the subject line if you send an email.
                        </p>

                        {/* Blue Action Box */}
                        <div className="p-3 mb-5 d-flex align-items-center gap-3 flex-wrap shadow-sm" style={{ backgroundColor: '#f4f8fc', border: '1px solid #d3e2f2', borderRadius: '8px', color: '#003264', fontSize: '0.95rem' }}>
                            <strong>Ready to apply?</strong> 
                            <a href="mailto:sangho@kaist.ac.kr" className="btn btn-primary btn-sm fw-bold px-3">Email</a>
                            <Link href="https://hcitech.org/recruiting_graduate" target="_blank" className="btn btn-outline-primary btn-sm fw-bold bg-white px-3">
                                View Lab Recruiting Website
                            </Link>
                        </div>

                        {/* --- ABOUT LAB --- */}
                        <section id="about" className="mb-5 pb-4 border-bottom">
                            <h3 className="fw-bold mb-4" style={{ color: '#1260de', fontSize: '1.5rem' }}>HCI Tech Lab Introduction</h3>
                            <div className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                <p>As an interdisciplinary research group in Culture Technology, we build physical and digital interactive systems powered by novel sensing and haptic technologies. At HCI Tech Lab, we explore interactive technologies that bring direct benefits to real-world users.</p>
                                <p className="mb-2 fw-bold text-dark mt-4">Our research process generally includes:</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Identify gaps between interface/device and human needs.</li>
                                    <li>Bridge the gap with novel technical and social solutions.</li>
                                    <li>Evaluate the solution with research methods.</li>
                                    <li>Deploy solutions with real-world applications.</li>
                                </ul>
                                <p className="mt-4">See our <Link href="/publications" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>recent publications</Link> for examples.</p>
                            </div>
                        </section>

                        {/* --- POTENTIAL PROJECTS --- */}
                        <section id="projects" className="mb-5 pb-4 border-bottom">
                            <h3 className="fw-bold mb-4" style={{ color: '#1260de', fontSize: '1.5rem' }}>Potential Projects</h3>
                            <div className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                <p>You will work on a research project in close collaboration with the PI and the other lab members. Here are some potential project ideas:</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Build, collect, and design physical AI dataset and models.</li>
                                    <li>Design, build, and evaluate novel sensing techniques.</li>
                                    <li>Design, build, and evaluate wearable haptic experiences.</li>
                                    <li>Develop creativity and authoring toolkits for human-centered interaction.</li>
                                </ul>
                                <div className="mt-4 p-3 bg-light rounded text-dark fst-italic" style={{ borderLeft: '4px solid #1260de' }}>
                                    You can also suggest new ideas!
                                </div>
                            </div>
                        </section>

                        {/* --- REQUIREMENTS --- */}
                        <section id="requirements" className="mb-5 pb-4 border-bottom">
                            <h3 className="fw-bold mb-4" style={{ color: '#1260de', fontSize: '1.5rem' }}>General Requirements</h3>
                            <div className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                <p>We welcome students from diverse backgrounds and majors. Ideal candidates are:</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Eager to learn and build physical and digital interactive systems.</li>
                                    <li>Self-motivated and able to take ownership of their proposed ideas.</li>
                                    <li>Experienced in SW/HW prototyping within research projects (optional but strongly recommended).</li>
                                </ul>
                            </div>
                        </section>

                        {/* --- PH.D. STUDENT --- */}
                        <section id="phd" className="mb-5 pb-4 border-bottom">
                            <h3 className="fw-bold mb-4" style={{ color: '#1260de', fontSize: '1.5rem' }}>Ph.D. Student</h3>
                            <div className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                <p>We prefer Ph.D. candidates with prior research experience and publications in related venues (e.g., top conferences listed on CSRankings).</p>
                                <p>If you do not yet have research experience or publications, please consider applying for the M.S. program first. At KAIST, a Master's degree is required for admission to the Ph.D. program.</p>
                            </div>
                        </section>

                        {/* --- M.S. STUDENT --- */}
                        <section id="ms" className="mb-5 pb-4 border-bottom">
                            <h3 className="fw-bold mb-4" style={{ color: '#1260de', fontSize: '1.5rem' }}>M.S. Student</h3>
                            <div className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                <p>All M.S. students are expected to conduct an individual research project and complete a thesis.</p>
                                
                                <div className="mb-4 mt-4">
                                    <h5 className="fw-bold text-dark mb-2">Spring 2027 Admission</h5>
                                    <p>We will <strong>only</strong> consider candidates who complete an internship in our lab during Summer 2026.</p>
                                </div>
                                <div className="mb-4">
                                    <h5 className="fw-bold text-dark mb-2">Fall 2026 Admission</h5>
                                    <p>Priority will be given to candidates who complete a lab internship during Summer 2026.</p>
                                </div>
                                
                                <div className="p-4 bg-light rounded mt-4" style={{ border: '1px solid #eaeaea' }}>
                                    <strong className="d-block mb-3 text-dark">Official KAIST Admission Guidelines:</strong>
                                    <ul className="mb-0" style={{ paddingLeft: '20px' }}>
                                        <li className="mb-2">Graduate School of Culture Technology (<Link href="https://ct.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Website</Link>)</li>
                                        <li className="mb-2">School of Computing (<Link href="https://cs.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Website</Link>)</li>
                                        <li className="mb-2">Graduate School of Metaverse (<Link href="https://meta.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Website</Link>)</li>
                                        <li>Robotics Program (<Link href="https://robots.kaist.ac.kr" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Website</Link>)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* --- CONDITIONS --- */}
                        <section id="conditions" className="mb-5">
                            <h3 className="fw-bold mb-4" style={{ color: '#1260de', fontSize: '1.5rem' }}>Conditions & Support</h3>
                            <div className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li className="mb-2">Monthly Stipend + Research Incentive.</li>
                                    <li className="mb-2">Personal office space in the N5 building, with a hybrid work arrangement available as needed.</li>
                                    <li className="mb-2">Standing desk and individual PC & monitor provided.</li>
                                    <li>Prototyping-related consumables and equipment are provided.</li>
                                </ul>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}