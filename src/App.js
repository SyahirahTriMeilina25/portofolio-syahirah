import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Palette, Database, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);
  const [projectImageIndex, setProjectImageIndex] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Aplikasi Reservasi Bimbingan Akademik",
      description: "Sistem reservasi bimbingan akademik berbasis web dengan Laravel, fitur penjadwalan otomatis, integrasi Google Calendar, dan dashboard admin untuk Program Studi Teknik Informatika",
      tech: ["Laravel", "PHP", "MySQL", "Google Calendar API"],
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
      ],
      link: "https://github.com/SyahirahTriMeilina25/Reservasi",
      year: "2025",
      featured: true
    },
    {
      title: "Carbon Footprint Calculator App",
      description: "Design UI/UX dan prototype aplikasi penghitung karbon untuk mengukur kualitas udara dengan penelitian pengguna untuk memahami kebutuhan dan preferensi",
      tech: ["Figma", "UI/UX Design", "User Research"],
      images: [
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop"
      ],
      link: "https://www.figma.com/proto/7VCPY8Qb2vjBs5TNo9ql1y/AirPulse?node-id=905-28647&p=f&t=3b8sVTkS3MjgHZxz-0&scaling=scale-down&content-scaling=fixed&page-id=870%3A13724&starting-point-node-id=905%3A28704",
      year: "2024",
      featured: true
    },
    // {
    //   title: "Supermarket Database Design",
    //   description: "Perancangan database lengkap untuk sistem supermarket termasuk ERD, business scenario, conceptual model, dan table relational",
    //   tech: ["SQL", "Database Design", "ERD"],
    //   images: [
    //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    //     "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=500&fit=crop"
    //   ],
    //   link: "#",
    //   year: "2022",
    //   featured: true
    // }
  ];

  const portfolioGallery = [
    {
      title: "Project Title 1",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Project Title 2",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Project Title 3",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Project Title 4",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Project Title 5",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Project Title 6",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Project Title 7",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Project Title 8",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
      link: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioGallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioGallery.length) % portfolioGallery.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextFeaturedSlide = () => {
    const maxSlide = Math.ceil(projects.length / 2) - 1;
    setCurrentFeaturedSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevFeaturedSlide = () => {
    setCurrentFeaturedSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToFeaturedSlide = (index) => {
    setCurrentFeaturedSlide(index);
  };

  const nextProjectImage = (projectIndex) => {
    setProjectImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length
    }));
  };

  const prevProjectImage = (projectIndex) => {
    setProjectImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
    }));
  };

  const goToProjectImage = (projectIndex, imageIndex) => {
    setProjectImageIndex(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  const experience = [
    {
      role: " Intern - Pengelola Fasilitas Umum",
      company: "Lapas Kelas IIB Teluk Kuantan (KEMNAKER)",
      period: "Dec 2025 - May 2026",
      description: "Membantu pengelolaan fasilitas umum dengan mengumpulkan data, Memeriksa kondisi fasilitas, dan Mendukung kegiatan operasional sehari-hari."
    },
    {
      role: "Web Developer - Aplikasi Reservasi Bimbingan",
      company: "Universitas Riau",
      period: "Jan 2025 - Oct 2025",
      description: "Mengembangkan sistem reservasi bimbingan akademik berbasis web dengan Laravel, fitur penjadwalan otomatis, dan integrasi Google Calendar"
    },
    {
      role: "Asisten Dosen",
      company: "Universitas Riau",
      period: "Nov 2024 - Dec 2024",
      description: "Mendampingi praktikum Kecerdasan Buatan, menjelaskan konsep AI dan algoritma kepada mahasiswa"
    },
    {
      role: "UI/UX Designer",
      company: "PT. Greatedu Global Mahardika - Kampus Merdeka",
      period: "Feb 2024 - Jun 2024",
      description: "Designer pada project aplikasi penghitung karbon, melakukan user research dan membuat prototype menggunakan Figma"
    },
    {
      role: "IT Support",
      company: "Puskesmas Melur",
      period: "Oct 2023 - Nov 2023",
      description: "Bertanggung jawab atas backup data, menyelesaikan masalah teknis hardware dan software"
    }
  ];

  const leadership = [
    {
      role: "Kepala Departemen KOMINFO",
      org: "HIMATRO Fakultas Teknik UNRI",
      period: "Mar 2024 - Dec 2024",
      description: "Bertanggung jawab mengkoordinasi, memimpin, mengawasi, dan evaluasi kerja para anggota departemen KOMINFO @himatro_ftunri"
    },
    {
      role: "Sekretaris Dinas KOMINFO",
      org: "BEM Fakultas Teknik UNRI",
      period: "Oct 2023 - May 2024",
      description: "Bertanggung jawab mengkoordinasi, menjalankan, dan mengawasi berbagai akun media sosial dan menjadwalkan postingan salah satunya di @instateknikunri"
    }
  ];

  const skills = [
    { 
      name: "Frontend Development", 
      icon: <Code2 size={24} />, 
      items: ["HTML", "CSS", "JavaScript", "Laravel"] 
    },
    { 
      name: "Design & Creative", 
      icon: <Palette size={24} />, 
      items: ["Figma", "Adobe Illustrator", "Canva", "Blender"] 
    },
    { 
      name: "Database & Tools", 
      icon: <Database size={24} />, 
      items: ["SQL", "Database Design", "Android Studio", "Primavera"] 
    }
  ];

  const certifications = [
    "Junior Graphic Designer (LSP Informatika) - Kompeten (2024)",
    "Fresh Graduate Academy Database Design (KOMINFO) - 2022"
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Cursor follower effect - PINK */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.08), transparent 40%)`
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-8 mb-20">
          <a href="#home" className="text-xl font-medium tracking-tight hover:text-pink-400 transition-colors">
            syahirah.dev
          </a>
          <div className="flex gap-6">
            <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center mb-32">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm text-pink-400 font-mono">Hi, my name is</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              Syahirah Tri Meilina
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-500 tracking-tight">
              I build digital experiences.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed pt-4">
              Fresh graduate dari Teknik Informatika dengan passion di Front-End Development, UI/UX Design, 
              dan Database Management. Saya senang mengembangkan solusi digital yang berdampak positif.
            </p>
            <div className="flex gap-6 pt-8">
              <a href="https://github.com/SyahirahTriMeilina25" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/syahirahtrimeilina" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:syahiratrimeilina@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="fade-in-section mb-32 py-20">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-sm text-pink-400 font-mono mb-4">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Halo! Saya Syahirah, fresh graduate dari Teknik Informatika Universitas Riau dengan IPK 3.72. 
                  Saya memiliki ketertarikan tinggi terhadap perkembangan teknologi dan dampaknya bagi kehidupan manusia.
                </p>
                <p>
                  Selama kuliah, saya aktif mengembangkan keterampilan di Front-End Development, UI/UX Design, 
                  dan Database Management. Saya juga aktif berorganisasi sebagai Kepala Departemen KOMINFO di HIMATRO 
                  dan staff di BEM Fakultas Teknik.
                </p>
                <p>
                  Saya memiliki soft skill yang baik seperti problem solving, adaptif, kerja tim, dan manajemen waktu 
                  yang mendukung kinerja di lingkungan profesional.
                </p>
                <div className="pt-4">
                  <h3 className="text-white font-medium mb-3">Certifications</h3>
                  <ul className="space-y-2">
                    {certifications.map((cert, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-pink-400 mt-1">▹</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-pink-400">{skill.icon}</span>
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-9">
                      {skill.items.map((item, i) => (
                        <span key={i} className="text-sm text-gray-400 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="fade-in-section mb-32 py-20">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-sm text-pink-400 font-mono mb-8">Where I've Worked</h2>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="group border-l-2 border-gray-800 pl-8 hover:border-pink-400 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-medium">{exp.role}</h3>
                    <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-pink-400 mb-3">{exp.company}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="fade-in-section mb-32 py-20">
          <div className={`transition-all duration-1000 ${isVisible.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-sm text-pink-400 font-mono mb-8">Leadership Experience</h2>
            <div className="space-y-12">
              {leadership.map((exp, index) => (
                <div key={index} className="group border-l-2 border-gray-800 pl-8 hover:border-pink-400 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-medium">{exp.role}</h3>
                    <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-pink-400 mb-3">{exp.org}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Featured Slider */}
        <section id="work" className="fade-in-section mb-32 py-20">
          <div className={`transition-all duration-1000 ${isVisible.work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-sm text-pink-400 font-mono">Featured Projects</h2>
              <div className="flex gap-3">
                <button 
                  onClick={prevFeaturedSlide}
                  className="p-2 border border-pink-400/30 text-pink-400 rounded hover:bg-pink-400/10 transition-colors"
                  aria-label="Previous project"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  onClick={nextFeaturedSlide}
                  className="p-2 border border-pink-400/30 text-pink-400 rounded hover:bg-pink-400/10 transition-colors"
                  aria-label="Next project"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Featured Slider - Show 2 projects */}
            <div className="relative overflow-hidden mb-8">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentFeaturedSlide * 100}%)` }}
              >
                {projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="min-w-full flex gap-6 px-1">
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                      <a href={project.link} className="block group h-full">
                        <div className="flex flex-col h-full">
                          {/* Project Image Slider */}
                          <div className="relative mb-4">
                            <div className="overflow-hidden rounded-lg bg-gray-900">
                              <div 
                                className="flex transition-transform duration-500 ease-out"
                                style={{ 
                                  transform: `translateX(-${(projectImageIndex[projectIndex] || 0) * 100}%)` 
                                }}
                              >
                                {project.images.map((img, imgIndex) => (
                                  <div key={imgIndex} className="min-w-full">
                                    <img 
                                      src={img} 
                                      alt={`${project.title} - Image ${imgIndex + 1}`}
                                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Image Navigation Buttons */}
                            {project.images.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    prevProjectImage(projectIndex);
                                  }}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
                                  aria-label="Previous image"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                  </svg>
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    nextProjectImage(projectIndex);
                                  }}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
                                  aria-label="Next image"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                  </svg>
                                </button>

                                {/* Image Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                  {project.images.map((_, imgIndex) => (
                                    <button
                                      key={imgIndex}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        goToProjectImage(projectIndex, imgIndex);
                                      }}
                                      className={`h-1.5 rounded-full transition-all ${
                                        (projectImageIndex[projectIndex] || 0) === imgIndex
                                          ? 'w-8 bg-pink-400' 
                                          : 'w-1.5 bg-white/50 hover:bg-white/70'
                                      }`}
                                      aria-label={`Go to image ${imgIndex + 1}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>

                          {/* Project Info */}
                          <div className="space-y-3 flex-grow">
                            <span className="text-xs text-gray-500 font-mono">{project.year}</span>
                            <h3 className="text-xl lg:text-2xl font-medium group-hover:text-pink-400 transition-colors flex items-center gap-2">
                              {project.title}
                              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm lg:text-base line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {project.tech.map((tech, i) => (
                                <span key={i} className="text-xs text-pink-400 font-mono bg-pink-400/10 px-3 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Second project in the same slide (only on desktop) */}
                    {projects[projectIndex + 1] && (
                      <div className="hidden lg:block w-1/2 flex-shrink-0">
                        <a href={projects[projectIndex + 1].link} className="block group h-full">
                          <div className="flex flex-col h-full">
                            {/* Project Image Slider */}
                            <div className="relative mb-4">
                              <div className="overflow-hidden rounded-lg bg-gray-900">
                                <div 
                                  className="flex transition-transform duration-500 ease-out"
                                  style={{ 
                                    transform: `translateX(-${(projectImageIndex[projectIndex + 1] || 0) * 100}%)` 
                                  }}
                                >
                                  {projects[projectIndex + 1].images.map((img, imgIndex) => (
                                    <div key={imgIndex} className="min-w-full">
                                      <img 
                                        src={img} 
                                        alt={`${projects[projectIndex + 1].title} - Image ${imgIndex + 1}`}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Image Navigation Buttons */}
                              {projects[projectIndex + 1].images.length > 1 && (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      prevProjectImage(projectIndex + 1);
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
                                    aria-label="Previous image"
                                  >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      nextProjectImage(projectIndex + 1);
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
                                    aria-label="Next image"
                                  >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                  </button>

                                  {/* Image Dots */}
                                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                    {projects[projectIndex + 1].images.map((_, imgIndex) => (
                                      <button
                                        key={imgIndex}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          goToProjectImage(projectIndex + 1, imgIndex);
                                        }}
                                        className={`h-1.5 rounded-full transition-all ${
                                          (projectImageIndex[projectIndex + 1] || 0) === imgIndex
                                            ? 'w-8 bg-pink-400' 
                                            : 'w-1.5 bg-white/50 hover:bg-white/70'
                                        }`}
                                        aria-label={`Go to image ${imgIndex + 1}`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Project Info */}
                            <div className="space-y-3 flex-grow">
                              <span className="text-xs text-gray-500 font-mono">{projects[projectIndex + 1].year}</span>
                              <h3 className="text-2xl font-medium group-hover:text-pink-400 transition-colors flex items-center gap-2">
                                {projects[projectIndex + 1].title}
                                <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h3>
                              <p className="text-gray-400 leading-relaxed text-base line-clamp-3">{projects[projectIndex + 1].description}</p>
                              <div className="flex flex-wrap gap-2 pt-2">
                                {projects[projectIndex + 1].tech.map((tech, i) => (
                                  <span key={i} className="text-xs text-pink-400 font-mono bg-pink-400/10 px-3 py-1 rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation for Featured */}
            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToFeaturedSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentFeaturedSlide === index 
                      ? 'w-12 bg-pink-400' 
                      : 'w-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center">
              <span className="text-sm text-gray-500 font-mono">
                Showing {currentFeaturedSlide * 2 + 1}-{Math.min((currentFeaturedSlide + 1) * 2, projects.length)} of {projects.length}
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="fade-in-section py-32">
          <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-sm text-pink-400 font-mono mb-4">What's Next?</h2>
            <h3 className="text-5xl font-bold mb-6">Get In Touch</h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Saya terbuka untuk kesempatan kerja dan kolaborasi baru. Jika Anda punya pertanyaan atau 
              hanya ingin say hi, inbox saya terbuka!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="mailto:syahiratrimeilina@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-pink-400 text-pink-400 rounded hover:bg-pink-400/10 transition-colors font-medium"
              >
                <Mail size={20} />
                Say Hello
              </a>
              <a 
                href="https://wa.me/6281268240068" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors font-medium"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-900">
          <p>Built with React & Tailwind CSS</p>
          <p className="mt-2">© 2025 Syahirah Tri Meilina • Pekanbaru, Riau</p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}