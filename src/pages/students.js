// src/pages/students.js
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// Import from your synced lab data file!
import { postdocs, phdStudents, msStudents, gradAlumni, internAlumni } from '@/data/members_data';

export default function Students() {
    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
            <Navbar />
            
            <div className="container">
                
                {/* --- FULL WIDTH BREADCRUMB --- */}
                <div className="mb-4 pb-3 border-bottom" style={{ fontSize: '1.05rem' }}>
                    <Link href="/" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Home</Link> 
                    <span className="mx-2 text-muted fw-light">/</span> 
                    <span className="text-dark fw-bold">Students</span>
                </div>

                {/* --- MAIN CONTENT (Left-aligned to exactly match the breadcrumb) --- */}
                <div className="row">
                    <div className="col-lg-10 col-md-12">
                        
                        {/* 1. Large Page Title */}
                        <h1 className="fw-bold mb-4" style={{ color: '#001f3f', fontSize: '2.5rem' }}>Students</h1>

                        {/* 2. Blue Lab Members Info Box */}
                        <div className="p-3 mb-5" style={{ backgroundColor: '#f4f8fc', border: '1px solid #d3e2f2', borderRadius: '8px', color: '#003264', fontSize: '0.95rem' }}>
                            <strong>Current Lab Members:</strong> For a complete roster with detail info, visit <Link href="https://hcitech.org" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>HCI Tech Lab People</Link>.
                        </div>

                        {/* --- CURRENT STUDENTS SECTION --- */}
                        <section className="mb-5">
                            
                            {postdocs && postdocs.length > 0 && (
                                <>
                                    <h3 className="fw-bold mb-4" style={{ color: '#333', fontSize: '1.3rem' }}>Post-Doc Researchers</h3>
                                    <ul className="list-unstyled mb-5">
                                        {postdocs.map((student, index) => (
                                            <StudentRow key={`pd-${index}`} student={student} type="current" />
                                        ))}
                                    </ul>
                                </>
                            )}

                            <h3 className="fw-bold mb-4" style={{ color: '#333', fontSize: '1.3rem' }}>Ph.D. Students</h3>
                            <ul className="list-unstyled mb-5">
                                {phdStudents.map((student, index) => (
                                    <StudentRow key={`phd-${index}`} student={student} type="current" />
                                ))}
                            </ul>

                            <h3 className="fw-bold mb-4" style={{ color: '#333', fontSize: '1.3rem' }}>M.S. Students</h3>
                            <ul className="list-unstyled">
                                {msStudents.map((student, index) => (
                                    <StudentRow key={`ms-${index}`} student={student} type="current" />
                                ))}
                            </ul>
                        </section>

                        {/* --- ALUMNI SECTION --- */}
                        <section className="mb-5 pt-4" style={{ borderTop: '1px solid #e9ecef' }}>
                            
                            <h2 className="fw-bold mb-4 mt-2" style={{ color: '#001f3f', fontSize: '1.8rem' }}>Alumni</h2>

                            <h3 className="fw-bold mb-4" style={{ color: '#333', fontSize: '1.3rem' }}>Graduate Alumni</h3>
                            <ul className="list-unstyled mb-5">
                                {gradAlumni.map((student, index) => (
                                    <StudentRow key={`galum-${index}`} student={student} type="alumni" />
                                ))}
                            </ul>
                            
                            <h3 className="fw-bold mb-4" style={{ color: '#333', fontSize: '1.3rem' }}>Intern Alumni</h3>
                            <ul className="list-unstyled">
                                {internAlumni.map((student, index) => (
                                    <StudentRow key={`ialum-${index}`} student={student} type="alumni" />
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}

// --- REUSABLE ROW COMPONENT ---
const StudentRow = ({ student, type }) => {
    
    // Determine the correct link variable depending on if they are current or alumni
    const validLink = type === "current" ? student.link : student.nameLink;
    const hasLink = validLink && validLink !== "#" && validLink !== "";

    return (
        <li className="mb-4 pb-2" style={{ transition: 'transform 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
            <div className="d-flex flex-wrap align-items-baseline mb-1">
                
                {/* Name & Link */}
                {hasLink ? (
                    <Link href={validLink} target="_blank" className="fw-bold fs-6 text-decoration-none me-2" style={{ color: '#1260de' }}>
                        {student.name}
                    </Link>
                ) : (
                    <strong className="fw-bold fs-6 me-2" style={{ color: '#333' }}>{student.name}</strong>
                )}

                {/* Title Badge */}
                {student.title && <span className="badge bg-light text-dark border rounded-pill me-2 fw-normal">{student.title}</span>}
                
                {/* Period (Mainly for Alumni) */}
                {student.period && <span className="text-muted small"><i className="bi bi-calendar3 me-1"></i>{student.period}</span>}
            </div>

            {/* Content for Current Students */}
            {type === "current" && (
                <div className="text-secondary ps-3 mt-2" style={{ borderLeft: '2px solid #e0e0e0', fontSize: '0.9rem' }}>
                    {student.interest && student.interest !== "Research Interest" && student.interest !== "" && (
                        <div><i className="bi bi-search me-2 text-muted"></i>{student.interest}</div>
                    )}
                    {student.note && student.note !== "" && (
                        <div><i className="bi bi-info-circle me-2 text-muted"></i>{student.note}</div>
                    )}
                    
                    {/* Render Email/LinkedIn if they exist and are not "#" */}
                    <div className="mt-1 d-flex gap-3">
                        {student.mail && student.mail !== "#" && student.mail !== "" && (
                            <a href={`mailto:${student.mail}`} className="text-muted small text-decoration-none hover-primary">
                                <i className="bi bi-envelope-fill me-1"></i>Email
                            </a>
                        )}
                        {student.linkedin && student.linkedin !== "#" && student.linkedin !== "" && (
                            <a href={student.linkedin} target="_blank" className="text-muted small text-decoration-none hover-primary">
                                <i className="bi bi-linkedin me-1"></i>LinkedIn
                            </a>
                        )}
                    </div>
                </div>
            )}

            {/* Content for Alumni */}
            {type === "alumni" && (
                <div className="text-secondary ps-3 mt-2" style={{ borderLeft: '2px solid #e0e0e0', fontSize: '0.9rem' }}>
                    {student.current && student.current !== "" && (
                        <div className="mb-1">
                            <i className="bi bi-building me-2 text-muted"></i>
                            <span>{student.current}</span>
                        </div>
                    )}
                    {student.thesisLink && student.thesisLink !== "#" && student.thesisLink !== "" && (
                        <div>
                            <i className="bi bi-journal-text me-2 text-muted"></i>
                            <a href={student.thesisLink} target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>View Thesis / Dissertation</a>
                        </div>
                    )}
                </div>
            )}
        </li>
    );
};