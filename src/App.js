import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Code, Trophy, BookOpen, Users, Heart, Gamepad2, Dumbbell, Target, ChevronDown, ExternalLink, Star, Award } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const skills = [
    { name: 'Python', level: 95, color: '#3B82F6' },
    { name: 'React', level: 90, color: '#06B6D4' },
    { name: 'JavaScript', level: 92, color: '#EAB308' },
    { name: 'Java', level: 88, color: '#F97316' },
    { name: 'C++', level: 85, color: '#A855F7' },
    { name: 'Swift', level: 80, color: '#EF4444' },
  ];

  const projects = [
    {
      title: 'LearnOlympiad',
      description: 'Interactive STEM learning platform with AI chatbot and personalized dashboard',
      tech: ['React', 'Python', 'AI/ML', 'GitHub Actions'],
      link: 'https://learnolympiad.com',
      status: 'Live'
    },
    {
      title: 'Mental Health App',
      description: 'SwiftUI app for mental therapy with daily journal and mood tracking',
      tech: ['Swift', 'SwiftUI', 'iOS'],
      status: 'Mobile'
    },
    {
      title: 'Robotics Control System',
      description: 'Award-winning robotics software with predictive analytics and telemetry',
      tech: ['Java', 'Android Studio', 'Data Analytics'],
      status: 'Winner'
    }
  ];

  const achievements = [
    { title: 'USACO Gold', icon: Trophy, color: '#EAB308' },
    { title: 'AIME Qualifier', icon: Target, color: '#3B82F6' },
    { title: 'Google Code Jam', icon: Code, color: '#10B981' },
    { title: 'Debate Nationals', icon: Users, color: '#A855F7' },
    { title: '#56 US Debater', icon: Star, color: '#EF4444' },
    { title: 'Regional Robotics Champion', icon: Award, color: '#F97316' }
  ];

  const interests = [
    { name: 'Working Out', icon: Dumbbell, desc: 'Staying fit and pushing limits' },
    { name: 'Basketball', icon: Target, desc: 'Team sports and competition' },
    { name: 'Gaming', icon: Gamepad2, desc: 'Strategy and problem solving' },
    { name: 'Coding', icon: Code, desc: 'Building innovative solutions' },
    { name: 'Research', icon: BookOpen, desc: 'ML and quantum computing' },
    { name: 'Volunteering', icon: Heart, desc: 'Community impact and service' }
  ];

  const styles = {
    body: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      padding: '0.5rem 0',
      position: 'relative',
      transition: 'color 0.2s ease'
    },
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      inset: 0,
      opacity: 0.1,
      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
    },
    heroContent: {
      zIndex: 10,
      maxWidth: '1000px',
      padding: '0 1.5rem'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #06b6d4, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'pulse 2s infinite'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '1rem'
    },
    heroDescription: {
      fontSize: '1.125rem',
      color: '#9ca3af',
      marginBottom: '2rem'
    },
    interestTags: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem'
    },
    interestTag: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(4px)',
      borderRadius: '9999px',
      padding: '0.5rem 1rem',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '3rem'
    },
    socialLink: {
      padding: '0.75rem',
      borderRadius: '50%',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
      border: 'none'
    },
    section: {
      padding: '5rem 1.5rem'
    },
    sectionAlt: {
      padding: '5rem 1.5rem',
      background: 'rgba(0, 0, 0, 0.2)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '4rem',
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(4px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.2s ease'
    },
    cardHover: {
      transform: 'scale(1.05)'
    },
    skillBar: {
      width: '100%',
      height: '0.75rem',
      background: '#374151',
      borderRadius: '9999px',
      overflow: 'hidden'
    },
    skillProgress: {
      height: '100%',
      borderRadius: '9999px',
      transition: 'width 1s ease-out'
    },
    badge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    button: {
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none'
    },
    buttonPrimary: {
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      color: 'white'
    },
    buttonSecondary: {
      background: 'transparent',
      color: '#06b6d4',
      border: '2px solid #06b6d4'
    },
    footer: {
      padding: '2rem 1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      color: '#9ca3af'
    }
  };

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Andy Hou</div>
          <div style={styles.navLinks}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = '#06b6d4'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Andy Hou</h1>
          <div style={styles.heroSubtitle}>
            Computer Science Student • Developer • Problem Solver
          </div>
          <div style={styles.heroDescription}>
            Incoming Freshman at the University of Washington (Seattle)
          </div>
          
          <div style={styles.interestTags}>
            {interests.slice(0, 4).map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  style={styles.interestTag}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <Icon size={20} color="#06b6d4" />
                  <span>{interest.name}</span>
                </div>
              );
            })}
          </div>

          <div style={styles.socialLinks}>
            <button
              style={{...styles.socialLink, background: 'linear-gradient(to right, #06b6d4, #a855f7)'}}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Mail size={24} />
            </button>
            <button
              style={{...styles.socialLink, background: 'linear-gradient(to right, #a855f7, #ec4899)'}}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Phone size={24} />
            </button>
            <button
              style={{...styles.socialLink, background: 'linear-gradient(to right, #ec4899, #ef4444)'}}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Github size={24} />
            </button>
          </div>

          <button onClick={() => scrollToSection('about')} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
            <ChevronDown size={32} color="#06b6d4" style={{animation: 'bounce 2s infinite'}} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          
          <div style={{...styles.grid, ...styles.gridCols2, alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <p style={{fontSize: '1.125rem', color: '#d1d5db', lineHeight: '1.7'}}>
                I'm a passionate computer science student with a drive for innovation and problem-solving. 
                Currently ranked in the top 10% of my class at Westlake High School, I've earned acceptance 
                to prestigious programs at UW, UT Austin, and UC San Diego.
              </p>
              
              <p style={{fontSize: '1.125rem', color: '#d1d5db', lineHeight: '1.7'}}>
                Beyond academics, I'm deeply involved in robotics, competitive programming, and research. 
                I've published papers on quantum computing and machine learning while maintaining a balance 
                with athletics, gaming, and community service.
              </p>

              <div style={{...styles.grid, gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem'}}>
                <div style={{...styles.card, textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4'}}>100+</div>
                  <div style={{color: '#9ca3af'}}>Hours Volunteered</div>
                </div>
                <div style={{...styles.card, textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#a855f7'}}>15+</div>
                  <div style={{color: '#9ca3af'}}>Awards Won</div>
                </div>
              </div>
            </div>
            
            <div style={{...styles.grid, gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    style={styles.card}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    <Icon color={achievement.color} size={32} style={{marginBottom: '0.75rem'}} />
                    <h3 style={{fontWeight: '600', fontSize: '0.875rem'}}>{achievement.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          
          <div style={{...styles.grid, ...styles.gridCols2}}>
            {skills.map((skill, index) => (
              <div key={index} style={styles.card}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <span style={{fontWeight: '600'}}>{skill.name}</span>
                  <span style={{color: '#9ca3af'}}>{skill.level}%</span>
                </div>
                <div style={styles.skillBar}>
                  <div
                    style={{
                      ...styles.skillProgress,
                      width: `${skill.level}%`,
                      background: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div style={{...styles.grid, ...styles.gridCols3, marginTop: '3rem'}}>
            <div style={{...styles.card, textAlign: 'center', background: 'rgba(6, 182, 212, 0.2)'}}>
              <Code color="#06b6d4" size={40} style={{margin: '0 auto 1rem'}} />
              <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Development</h3>
              <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>Full-stack development with modern frameworks</p>
            </div>
            <div style={{...styles.card, textAlign: 'center', background: 'rgba(168, 85, 247, 0.2)'}}>
              <Target color="#a855f7" size={40} style={{margin: '0 auto 1rem'}} />
              <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Competitive Programming</h3>
              <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>USACO Gold and algorithmic problem solving</p>
            </div>
            <div style={{...styles.card, textAlign: 'center', background: 'rgba(16, 185, 129, 0.2)'}}>
              <BookOpen color="#10b981" size={40} style={{margin: '0 auto 1rem'}} />
              <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Research</h3>
              <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>ML, quantum computing, and data analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          
          <div style={{...styles.grid, ...styles.gridCols3}}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600'}}>{project.title}</h3>
                  <span style={{
                    ...styles.badge,
                    background: project.status === 'Live' ? 'rgba(16, 185, 129, 0.2)' : 
                               project.status === 'Mobile' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(234, 179, 8, 0.2)',
                    color: project.status === 'Live' ? '#10b981' : 
                           project.status === 'Mobile' ? '#3b82f6' : '#eab308'
                  }}>
                    {project.status}
                  </span>
                </div>
                
                <p style={{color: '#d1d5db', marginBottom: '1rem', fontSize: '0.875rem'}}>{project.description}</p>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={{...styles.badge, background: 'rgba(255, 255, 255, 0.1)'}}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a href={project.link} style={{display: 'inline-flex', alignItems: 'center', color: '#06b6d4', fontSize: '0.875rem', textDecoration: 'none'}}>
                    View Project <ExternalLink size={14} style={{marginLeft: '0.25rem'}} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond Code</h2>
          
          <div style={{...styles.grid, ...styles.gridCols3}}>
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  style={{...styles.card, textAlign: 'center'}}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <Icon color="#06b6d4" size={40} style={{margin: '0 auto 1rem'}} />
                  <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>{interest.name}</h3>
                  <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>{interest.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={{...styles.container, textAlign: 'center'}}>
          <h2 style={styles.sectionTitle}>Let's Connect</h2>
          
          <p style={{fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem'}}>
            Interested in collaborating or just want to chat? I'd love to hear from you!
          </p>
          
          <div style={{...styles.grid, ...styles.gridCols3, marginBottom: '3rem'}}>
            <div style={{...styles.card, background: 'rgba(6, 182, 212, 0.2)'}}>
              <Mail color="#06b6d4" size={32} style={{margin: '0 auto 1rem'}} />
              <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Email</h3>
              <a href="mailto:ahnoduy77@gmail.com" style={{color: '#9ca3af', textDecoration: 'none'}}>
                ahnoduy77@gmail.com
              </a>
            </div>
            
            <div style={{...styles.card, background: 'rgba(168, 85, 247, 0.2)'}}>
              <Phone color="#a855f7" size={32} style={{margin: '0 auto 1rem'}} />
              <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Phone</h3>
              <a href="tel:512-965-8516" style={{color: '#9ca3af', textDecoration: 'none'}}>
                (512) 965-8516
              </a>
            </div>
            
            <div style={{...styles.card, background: 'rgba(16, 185, 129, 0.2)'}}>
              <MapPin color="#10b981" size={32} style={{margin: '0 auto 1rem'}} />
              <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Location</h3>
              <span style={{color: '#9ca3af'}}>Austin, Texas</span>
            </div>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem'}}>
            <button
              style={{...styles.button, ...styles.buttonPrimary}}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Download Resume
            </button>
            <button
              style={{...styles.button, ...styles.buttonSecondary}}
              onMouseEnter={(e) => {
                e.target.style.background = '#06b6d4';
                e.target.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#06b6d4';
              }}
              onClick={() => window.open('https://github.com/AndyH2007', '_blank')}
            >
              View GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Andy Hou. Built with React and passion for innovation.</p>
      </footer>
    </div>
  );
};

export default PersonalWebsite;