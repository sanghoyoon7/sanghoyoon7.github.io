// src/pages/publications.js
import { useRef, useEffect, useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

// IMPORTANT: Ensure this path correctly points to your data file!
import { research_temp } from "@/data/research_data"; 

export default function Publications() {
    const yearRefs = useRef({});
    
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    if (!research_temp) {
        return (
            <div style={{ paddingTop: '100px', textAlign: 'center' }}>
                <h2>Loading publications...</h2>
            </div>
        );
    }

    useEffect(() => {
        Object.keys(research_temp).forEach(year => {
            yearRefs.current[year] = yearRefs.current[year] || useRef(null);
        });
    }, []);

    const scrollToYear = (year) => {
      if (yearRefs.current[year]) {
          const yOffset = -100; 
          const y = yearRefs.current[year].getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    const categories = [
        "All",
        "Conference / Journal (peer-reviewed)",
        "Poster / Demo / Workshop",
        "Preprint",
        "Submitted"
    ];

    const { stats, filteredData } = useMemo(() => {
        let total = 0, confJournal = 0, posterDemo = 0, preprint = 0, submitted = 0;
        const filtered = {};

        Object.keys(research_temp).forEach(year => {
            const yearData = research_temp[year];
            
            yearData.forEach(item => {
                total++;
                if (item.category === "Conference / Journal (peer-reviewed)") confJournal++;
                else if (item.category === "Poster / Demo / Workshop") posterDemo++;
                else if (item.category === "Preprint") preprint++;
                else if (item.category === "Submitted") submitted++;
            });

            const query = searchQuery.toLowerCase();
            const filteredYearData = yearData.filter(item => {
                const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
                const matchesSearch = 
                    (item.title && item.title.toLowerCase().includes(query)) ||
                    (item.authors && item.authors.toLowerCase().includes(query)) ||
                    (item.conference && item.conference.toLowerCase().includes(query));
                return matchesCategory && matchesSearch;
            });

            if (filteredYearData.length > 0) {
                filtered[year] = filteredYearData;
            }
        });

        return { 
            stats: { total, confJournal, posterDemo, preprint, submitted }, 
            filteredData: filtered 
        };
    }, [searchQuery, selectedCategory]); 


    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
            <Navbar />
            
            <div className="container">
                
                {/* --- FULL WIDTH BREADCRUMB --- */}
                <div className="mb-4 pb-3 border-bottom" style={{ fontSize: '1.05rem' }}>
                    <Link href="/" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>Home</Link> 
                    <span className="mx-2 text-muted fw-light">/</span> 
                    <span className="text-dark fw-bold">Publications</span>
                </div>

                {/* --- MAIN CONTENT (Left-aligned to match the breadcrumb) --- */}
                <div className="row">
                    <div className="col-lg-10 col-md-12">
                        
                        {/* 1. Large Page Title */}
                        <h1 className="fw-bold mb-4" style={{ color: '#001f3f', fontSize: '2.5rem' }}>Publications</h1>

                        {/* 2. Blue Info Box */}
                        <div className="p-3 mb-5" style={{ backgroundColor: '#f4f8fc', border: '1px solid #d3e2f2', borderRadius: '8px', color: '#003264', fontSize: '0.95rem' }}>
                            <strong>Lab Publications:</strong> For up-to-date lab publications, visit <Link href="https://hcitech.org/publications" target="_blank" className="text-decoration-none fw-bold" style={{ color: '#1260de' }}>HCI Tech Lab Publications</Link>.
                        </div>

                        {/* 3. Combined Stats & Filter Card */}
                        <div className="card border-0 shadow-sm p-4 mb-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                            
                            {/* Stats Row */}
                            <div className="row g-3 mb-4 text-center border-bottom pb-4">
                                <div className="col-4 col-md-2">
                                    <h4 className="fw-bold mb-0" style={{ color: '#1a73e8' }}>{stats.total}</h4>
                                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Total</span>
                                </div>
                                <div className="col-4 col-md-3">
                                    <h4 className="fw-bold mb-0" style={{ color: '#9334e6' }}>{stats.confJournal}</h4>
                                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Journal/Conf</span>
                                </div>
                                <div className="col-4 col-md-3">
                                    <h4 className="fw-bold mb-0" style={{ color: '#137333' }}>{stats.posterDemo}</h4>
                                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Poster/Demo</span>
                                </div>
                                <div className="col-6 col-md-2">
                                    <h4 className="fw-bold mb-0" style={{ color: '#b06000' }}>{stats.preprint}</h4>
                                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Preprint</span>
                                </div>
                                <div className="col-6 col-md-2">
                                    <h4 className="fw-bold mb-0" style={{ color: '#00796b' }}>{stats.submitted}</h4>
                                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Submitted</span>
                                </div>
                            </div>

                            {/* Search & Filter Row */}
                            <div className="row g-3 align-items-center">
                                <div className="col-md-7">
                                    <input 
                                        type="text" 
                                        className="form-control bg-white" 
                                        placeholder="Search title, author, venue..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ced4da' }}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <select 
                                        className="form-select bg-white" 
                                        value={selectedCategory} 
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ced4da' }}
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* No Results Message */}
                        {Object.keys(filteredData).length === 0 && (
                            <div className="text-center py-5">
                                <h5 className="text-muted">No publications found.</h5>
                            </div>
                        )}

                        {/* Nested Layout for Publications (Left) and Jump-to-Year (Right) */}
                        <div className="row">
                            
                            {/* LEFT LIST COLUMN */}
                            <div className="col-lg-10">
                                {Object.keys(filteredData)
                                .sort((a, b) => {
                                    if (a === "2021 and Before") return 1;
                                    if (b === "2021 and Before") return -1;
                                    return parseInt(b) - parseInt(a);
                                })
                                .map(year => (
                                    <div key={year} ref={(el) => (yearRefs.current[year] = el)} className="mb-5">
                                        <div className="d-flex align-items-center mb-4 mt-2">
                                            <h2 className="m-0 me-3 fw-bold" style={{ color: "#333", fontSize: "1.8rem" }}>{year}</h2>
                                            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e0" }}></div>
                                        </div>
                                        
                                        {filteredData[year].map((item, index) => (
                                            <div key={`${year}-${index}`} className="row mb-5 pb-3 border-bottom" style={{ borderColor: '#f0f0f0' }}>
                                                <div className="col-md-4 mb-3 mb-md-0">
                                                    <video className="img-fluid rounded shadow-sm w-100 border" style={{ objectFit: "cover", borderColor: '#eaeaea' }} autoPlay loop muted playsInline poster={item.poster}>
                                                        {item.demo && <source type="video/mp4" src={item.demo} />}
                                                    </video>
                                                </div>
                                                <div className="col-md-8">
                                                    <h5 className="mb-2 fw-bold" style={{ color: '#001f3f', fontSize: '1.15rem', lineHeight: '1.4' }}>{item.title}</h5>
                                                    <p className="mb-2 text-secondary" style={{ fontSize: '0.9rem' }}>{item.authors}</p>
                                                    
                                                    <div className="mb-2 small">
                                                        <span className="badge bg-light text-dark border me-2">{item.status}</span>
                                                        {item.conferenceLink ? (
                                                            <Link className="text-decoration-none fw-bold" style={{ color: '#1260de' }} href={item.conferenceLink} target="_blank">
                                                                {item.conference}
                                                            </Link>
                                                        ) : (
                                                            <span className="fw-bold" style={{ color: '#1260de' }}>{item.conference}</span>
                                                        )}
                                                    </div>
                                                    
                                                    {item.award && (
                                                        <div className="d-flex align-items-center mb-2 small fw-bold mt-2" style={{ color: "#b08d00" }}>
                                                            <i className="bi bi-trophy-fill me-2"></i>{item.award}
                                                        </div>
                                                    )}
                                                        
                                                    <div className="d-flex flex-wrap gap-2 mt-3" style={{ fontSize: '0.8rem' }}>
                                                        {item.website && <Link className="btn btn-sm btn-outline-primary rounded-pill px-3" href={item.website} target="_blank">Project Website</Link>}
                                                        {item.doi && <Link className="btn btn-sm btn-outline-secondary rounded-pill px-3" href={item.doi} target="_blank">DOI</Link>}
                                                        {item.video && <Link className="btn btn-sm btn-outline-danger rounded-pill px-3" href={item.video} target="_blank">Video</Link>}
                                                        {item.pdf && <Link className="btn btn-sm btn-outline-dark rounded-pill px-3" href={item.pdf} target="_blank">PDF</Link>}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* RIGHT JUMP-TO-YEAR COLUMN */}
                            <div className="col-lg-2 d-none d-lg-block">
                                <div style={{ position: "sticky", top: "120px" }}>
                                    <div className="ps-3 border-start">
                                        <p className="text-muted small fw-bold mb-3 text-uppercase" style={{ letterSpacing: '1px' }}>Jump to Year</p>
                                        <ul className="list-unstyled">
                                            {Object.keys(filteredData)
                                                .sort((a, b) => {
                                                    if (a === "2021 and Before") return 1;
                                                    if (b === "2021 and Before") return -1;
                                                    return parseInt(b) - parseInt(a);
                                                })
                                                .map(year => (
                                                <li key={year} className="mb-2">
                                                    <button 
                                                        onClick={() => scrollToYear(year)}
                                                        className="btn btn-link text-decoration-none fw-bold p-0"
                                                        style={{ color: '#555', transition: 'color 0.2s', fontSize: '0.9rem' }}
                                                        onMouseEnter={(e) => e.target.style.color = '#1260de'}
                                                        onMouseLeave={(e) => e.target.style.color = '#555'}
                                                    >
                                                        {year}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}