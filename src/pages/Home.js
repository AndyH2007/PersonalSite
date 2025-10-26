import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, ChevronDown, Sparkles, Code, Brain, TrendingUp, Gamepad2, Trophy, Target, Star, Award, Users, ExternalLink, ArrowRight, Zap } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = "Building intelligent systems at the intersection of machine learning, software engineering, and quantitative analysis.";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const interests = [
    { name: 'Neural + Quant Research', icon: Brain, color: '#06b6d4' },
    { name: 'SWE + ML Internships', icon: TrendingUp, color: '#a855f7' },
    { name: 'Poker Strategy', icon: Gamepad2, color: '#ec4899' }
  ];

  const quickFacts = [
    { icon: Trophy, text: 'USACO Gold', color: '#EAB308' },
    { icon: Target, text: 'AIME Qualifier', color: '#3B82F6' },
    { icon: Code, text: 'DubHacks', color: '#10B981' },
    { icon: Star, text: '#56 US Debater', color: '#EF4444' }
  ];

  const featuredProjects = [
    {
      title: 'LearnOlympiad SaaS',
      description: '50+ active users',
      icon: Sparkles,
      link: 'https://learnolympiad.com',
      color: '#06b6d4'
    },
    {
      title: 'SuprisalGuard',
      description: 'AI Accountability',
      icon: Zap,
      color: '#a855f7'
    },
    {
      title: 'Verity',
      description: 'Fact-Checking AI',
      icon: Target,
      link: 'https://devpost.com/software/verity-isrt5e?ref_content=my-projects-tab&ref_feature=my_projects',
      color: '#10b981'
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    },
    cursorGlow: {
      position: 'fixed',
      width: '600px',
      height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
      pointerEvents: 'none',
      transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
      transition: 'transform 0.15s ease-out',
      zIndex: 1
    },
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '80px',
      paddingBottom: '80px',
      zIndex: 2
    },
    heroContent: {
      maxWidth: '1000px',
      padding: '0 2rem',
      animation: 'fadeInUp 0.8s ease-out'
    },
    nameContainer: {
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      overflow: 'visible'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 6.5rem)',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #ec4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: '#06b6d4',
      display: 'inline-block',
      letterSpacing: '-3px',
      lineHeight: '1.2',
      textShadow: '0 0 80px rgba(6, 182, 212, 0.5)',
      animation: 'float 6s ease-in-out infinite'
    },
    subtitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#e2e8f0',
      marginBottom: '0.75rem',
      letterSpacing: '-0.5px'
    },
    university: {
      fontSize: '1.125rem',
      color: '#94a3b8',
      marginBottom: '2rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    typingText: {
      fontSize: '1.125rem',
      color: '#94a3b8',
      marginBottom: '3rem',
      lineHeight: '1.8',
      minHeight: '4rem',
      maxWidth: '700px',
      margin: '0 auto 3rem'
    },
    cursor: {
      display: 'inline-block',
      width: '2px',
      height: '1.2em',
      backgroundColor: '#06b6d4',
      marginLeft: '2px',
      animation: 'blink 1s infinite'
    },
    interestGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem'
    },
    interestCard: (color) => ({
      background: `linear-gradient(135deg, ${color}15, ${color}05)`,
      border: `1px solid ${color}30`,
      borderRadius: '1rem',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden'
    }),
    quickFactsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '1rem',
      marginBottom: '3rem',
      maxWidth: '900px',
      margin: '0 auto 3rem'
    },
    quickFact: (color) => ({
      background: 'rgba(255, 255, 255, 0.05)',
      border: `1px solid ${color}30`,
      borderRadius: '0.75rem',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }),
    projectsPreview: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem',
      maxWidth: '900px',
      margin: '0 auto 3rem'
    },
    projectCard: (color) => ({
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem',
      padding: '2rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    }),
    ctaButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
      color: 'white',
      padding: '1.25rem 2.5rem',
      borderRadius: '0.75rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      textDecoration: 'none',
      boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
    },
    secondaryButton: {
      background: 'transparent',
      color: '#06b6d4',
      padding: '1.25rem 2.5rem',
      borderRadius: '0.75rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      border: '2px solid #06b6d4',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      textDecoration: 'none'
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.cursorGlow}></div>
      
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.nameContainer}>
            <h1 style={styles.heroTitle}>Andy Hou</h1>
          </div>
          
          <p style={styles.subtitle}>Software Engineer & AI Researcher</p>
          
          <div style={styles.university}>
            <Code size={20} color="#a855f7" />
            <span>Computer Science @ University of Washington</span>
          </div>
          
          <div style={styles.typingText}>
            {typedText}
            <span style={styles.cursor}></span>
          </div>
          
          <div style={styles.interestGrid}>
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  style={styles.interestCard(interest.color)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${interest.color}30`;
                    e.currentTarget.style.borderColor = interest.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = `${interest.color}30`;
                  }}
                >
                  <Icon size={20} color={interest.color} />
                  <span style={{ fontWeight: '600', color: '#e2e8f0' }}>{interest.name}</span>
                </div>
              );
            })}
          </div>

          <div style={styles.quickFactsGrid}>
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  style={styles.quickFact(fact.color)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = fact.color;
                    e.currentTarget.style.background = `${fact.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = `${fact.color}30`;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <Icon size={28} color={fact.color} />
                  <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{fact.text}</span>
                </div>
              );
            })}
          </div>

          <div style={styles.projectsPreview}>
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  style={styles.projectCard(project.color)}
                  onClick={() => project.link && window.open(project.link, '_blank')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = project.color;
                    e.currentTarget.style.boxShadow = `0 25px 50px ${project.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={32} color={project.color} style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{project.description}</p>
                  {project.link && (
                    <ExternalLink size={16} color={project.color} style={{ position: 'absolute', top: '1rem', right: '1rem' }} />
                  )}
                </div>
              );
            })}
          </div>
          
          <div style={styles.ctaButtons}>
            <Link
              to="/about"
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 182, 212, 0.3)';
              }}
            >
              Explore My Work <ArrowRight size={20} />
            </Link>
            
            <a
              href="mailto:ahnoduy77@gmail.com"
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#06b6d4';
                e.currentTarget.style.color = 'black';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#06b6d4';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={20} /> Get In Touch
            </a>
          </div>

          <div style={styles.scrollIndicator}>
            <ChevronDown size={32} color="#06b6d4" />
          </div>
        </div>
      </section>

      <style jsx>{`
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;