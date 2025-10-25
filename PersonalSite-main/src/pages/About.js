import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Code, Trophy, BookOpen, Users, Heart, Gamepad2, Dumbbell, Target, ExternalLink, Star, Award, Brain, TrendingUp, Shield, Sparkles, Linkedin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = [
    {
      title: 'Neural Systems Lab Research',
      org: 'University of Washington',
      period: '2024 - Present',
      type: 'Research',
      description: 'Investigating computational models of neural networks and brain-inspired machine learning architectures. Focus on understanding how biological neural systems process information and applying those insights to artificial intelligence.',
      skills: ['PyTorch', 'Neuroscience', 'Deep Learning', 'Python', 'Research Methods'],
      icon: Brain,
      color: '#06b6d4'
    },
    {
      title: 'Technical Consultant',
      org: 'Target',
      period: '2025 Jul - 2025 Sep',
      type: 'Research',
      description: 'Investigating computational models of neural networks and brain-inspired machine learning architectures. Focus on understanding how biological neural systems process information and applying those insights to artificial intelligence.',
      skills: ['PyTorch', 'Neuroscience', 'Deep Learning', 'Python', 'Research Methods'],
      icon: Brain,
      color: '#d60d0dff'
    },
    {
      title: 'Quantitative Research',
      org: 'Independent Projects',
      period: '2024 - Present',
      type: 'Research',
      description: 'Developing algorithmic trading strategies and financial models using statistical analysis and machine learning. Implemented backtesting frameworks and analyzed market microstructure.',
      skills: ['Python', 'Statistics', 'Finance', 'ML', 'Pandas', 'NumPy'],
      icon: TrendingUp,
      color: '#a855f7'
    },
    {
      title: 'Software Developer and Co-founder',
      org: 'Startup - LearnOlympiad',
      period: '2024 - Present',
      type: 'Research',
      description: 'Developing algorithmic trading strategies and financial models using statistical analysis and machine learning. Implemented backtesting frameworks and analyzed market microstructure.',
      skills: ['Python', 'Statistics', 'Finance', 'ML', 'Pandas', 'NumPy'],
      icon: TrendingUp,
      color: '#a855f7'
    },
    {
      title: 'Computer Science Student',
      org: 'University of Washington',
      period: '2023 - Present',
      type: 'Education',
      description: 'Pursuing B.S. in Computer Science with focus on artificial intelligence, algorithms, and systems. Relevant coursework: Data Structures, Algorithms, Machine Learning, Computer Systems.',
      skills: ['CS Theory', 'Algorithms', 'Systems', 'AI/ML'],
      icon: GraduationCap,
      color: '#10b981'
    }
  ];

  const projects = [
    {
      title: 'LearnOlympiad SaaS',
      description: 'Full-stack STEM learning platform with AI-powered tutoring, personalized dashboards, and automated problem generation. Serves 500+ active users with 95% positive feedback.',
      tech: ['React', 'Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'AWS', 'Docker'],
      link: 'https://learnolympiad.com',
      github: 'https://github.com/AndyH2007',
      status: 'Live',
      icon: Sparkles,
      highlights: ['500+ users', 'AI tutoring', 'Real-time feedback'],
      color: '#06b6d4'
    },
    {
      title: 'SuprisalGuard',
      description: 'Agent accountability framework ensuring AI model outputs align with specifications through surprisal-based monitoring and real-time verification. Novel approach to AI safety.',
      tech: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'Monitoring'],
      github: 'https://github.com/AndyH2007',
      status: 'Research',
      icon: Shield,
      highlights: ['AI Safety', 'Real-time monitoring', 'Novel framework'],
      color: '#a855f7'
    },
    {
      title: 'Veritas',
      description: 'AI-powered fact-checking system with multi-source verification, credibility scoring, and automated claim extraction from text and media. Achieved 87% accuracy on benchmark datasets.',
      tech: ['Python', 'NLP', 'Web Scraping', 'React', 'ML Models'],
      github: 'https://github.com/AndyH2007',
      status: 'Active',
      icon: Target,
      highlights: ['87% accuracy', 'Multi-source', 'Auto-extraction'],
      color: '#10b981'
    }
  ];

  const skills = [
    { name: 'Python', level: 95, category: 'Language', projects: 15, years: 4 },
    { name: 'React', level: 92, category: 'Framework', projects: 8, years: 2 },
    { name: 'JavaScript', level: 90, category: 'Language', projects: 12, years: 3 },
    { name: 'Machine Learning', level: 87, category: 'AI/ML', projects: 6, years: 2 },
    { name: 'Data Analysis', level: 89, category: 'Analytics', projects: 10, years: 3 },
    { name: 'Java', level: 88, category: 'Language', projects: 7, years: 3 },
    { name: 'C++', level: 85, category: 'Language', projects: 5, years: 2 },
    { name: 'Swift', level: 82, category: 'Language', projects: 3, years: 1 }
  ];

  const achievements = [
    { title: 'USACO Gold', icon: Trophy, color: '#EAB308', desc: 'Competitive Programming', year: '2024' },
    { title: 'AIME Qualifier', icon: Target, color: '#3B82F6', desc: 'Mathematics', year: '2024' },
    { title: 'Google Code Jam', icon: Code, color: '#10B981', desc: 'Algorithm Competition', year: '2024' },
    { title: 'Debate Nationals', icon: Users, color: '#A855F7', desc: 'Public Forum', year: '2023' },
    { title: '#56 US Debater', icon: Star, color: '#EF4444', desc: 'National Ranking', year: '2023' },
    { title: 'Regional Robotics Champion', icon: Award, color: '#F97316', desc: 'FRC/FTC', year: '2022' }
  ];

  const interests = [
    { name: 'Neural Systems Research', icon: Brain, desc: 'Computational neuroscience and brain-inspired AI' },
    { name: 'Quant Research', icon: TrendingUp, desc: 'Algorithmic trading and financial modeling' },
    { name: 'Poker Strategy', icon: Gamepad2, desc: 'Game theory and probabilistic decision making' },
    { name: 'Fitness', icon: Dumbbell, desc: 'Powerlifting and athletic optimization' },
    { name: 'Open Source', icon: Code, desc: 'Contributing to AI/ML projects' },
    { name: 'Community Service', icon: Heart, desc: 'STEM education and mentorship' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      paddingTop: '100px',
      paddingBottom: '4rem',
      position: 'relative'
    },
    progressBar: {
      position: 'fixed',
      top: '80px',
      left: 0,
      width: `${scrollProgress}%`,
      height: '3px',
      background: 'linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)',
      transition: 'width 0.1s ease-out',
      zIndex: 49
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: '#06b6d4',
      display: 'inline-block',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#94a3b8',
      maxWidth: '600px',
      margin: '0 auto'
    },
    tabs: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '3rem',
      flexWrap: 'wrap'
    },
    tab: (isActive) => ({
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      background: isActive ? 'linear-gradient(135deg, #06b6d4, #a855f7)' : 'rgba(255, 255, 255, 0.05)',
      color: isActive ? 'white' : '#94a3b8',
      border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '600',
      fontSize: '1rem'
    }),
    timeline: {
      position: 'relative',
      padding: '2rem 0'
    },
    timelineItem: {
      position: 'relative',
      paddingLeft: '3rem',
      marginBottom: '3rem'
    },
    timelineDot: (color) => ({
      position: 'absolute',
      left: 0,
      top: '0.5rem',
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `0 0 20px ${color}50`
    }),
    experienceCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      marginBottom: '2rem'
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      height: '100%'
    },
    skillCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    },
    badge: {
      padding: '0.375rem 0.875rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
      marginRight: '0.5rem',
      marginBottom: '0.5rem'
    },
    contactSection: {
      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
      borderRadius: '1.5rem',
      padding: '3rem',
      marginTop: '4rem',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.progressBar}></div>
      
      <div style={styles.maxWidth}>
        <div style={styles.header}>
          <h1 style={styles.title}>About Me</h1>
          <p style={styles.subtitle}>
            Passionate about building innovative solutions at the intersection of AI, software engineering, and quantitative analysis
          </p>
        </div>

        <div style={styles.tabs}>
          <button
            style={styles.tab(activeTab === 'experience')}
            onClick={() => setActiveTab('experience')}
            onMouseEnter={(e) => {
              if (activeTab !== 'experience') {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                e.currentTarget.style.borderColor = '#06b6d4';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'experience') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <Briefcase size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Experience
          </button>
          <button
            style={styles.tab(activeTab === 'projects')}
            onClick={() => setActiveTab('projects')}
            onMouseEnter={(e) => {
              if (activeTab !== 'projects') {
                e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                e.currentTarget.style.borderColor = '#a855f7';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'projects') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <Code size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Projects
          </button>
          <button
            style={styles.tab(activeTab === 'skills')}
            onClick={() => setActiveTab('skills')}
            onMouseEnter={(e) => {
              if (activeTab !== 'skills') {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                e.currentTarget.style.borderColor = '#10b981';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'skills') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <Trophy size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Skills & Achievements
          </button>
          <button
            style={styles.tab(activeTab === 'interests')}
            onClick={() => setActiveTab('interests')}
            onMouseEnter={(e) => {
              if (activeTab !== 'interests') {
                e.currentTarget.style.background = 'rgba(236, 72, 153, 0.2)';
                e.currentTarget.style.borderColor = '#ec4899';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'interests') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <Heart size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Interests
          </button>
        </div>

        {activeTab === 'experience' && (
          <div style={styles.timeline}>
            {experience.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} style={styles.timelineItem}>
                  <div style={styles.timelineDot(exp.color)}>
                    <Icon size={16} color="white" />
                  </div>
                  <div
                    style={styles.experienceCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)';
                      e.currentTarget.style.borderColor = exp.color;
                      e.currentTarget.style.boxShadow = `0 10px 30px ${exp.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: exp.color }}>
                          {exp.title}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{exp.org}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <span style={{
                          ...styles.badge,
                          background: `${exp.color}20`,
                          color: exp.color,
                          border: `1px solid ${exp.color}50`,
                          marginTop: '0.5rem'
                        }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p style={{ color: '#e2e8f0', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                      {exp.description}
                    </p>
                    <div>
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          style={{
                            ...styles.badge,
                            background: 'rgba(6, 182, 212, 0.15)',
                            color: '#06b6d4',
                            border: '1px solid rgba(6, 182, 212, 0.3)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'projects' && (
          <div style={{ ...styles.grid, ...styles.gridCols2 }}>
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  style={styles.projectCard}
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
                  <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '1rem',
                      background: `${project.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${project.color}30`,
                      flexShrink: 0
                    }}>
                      <Icon size={28} color={project.color} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                          {project.title}
                        </h3>
                        <span style={{
                          ...styles.badge,
                          background: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}50`
                        }}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p style={{ color: '#e2e8f0', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        style={{
                          ...styles.badge,
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: '#10b981',
                          border: '1px solid rgba(16, 185, 129, 0.3)'
                        }}
                      >
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          ...styles.badge,
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#e2e8f0'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: project.color,
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#e2e8f0'}
                        onMouseLeave={(e) => e.currentTarget.style.color = project.color}
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#94a3b8',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = project.color}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'skills' && (
          <>
            <div style={{ ...styles.grid, ...styles.gridCols2, marginBottom: '3rem' }}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={styles.skillCard}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontWeight: '700', fontSize: '1.125rem' }}>{skill.name}</span>
                      <span style={{ color: '#94a3b8', fontSize: '0.85rem', marginLeft: '0.75rem' }}>
                        {skill.category}
                      </span>
                    </div>
                    <span style={{ color: '#06b6d4', fontWeight: '700', fontSize: '1.25rem' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      height: '100%',
                      width: hoveredSkill === index ? `${skill.level}%` : '0%',
                      background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                      borderRadius: '9999px',
                      transition: 'width 1s ease-out'
                    }}></div>
                  </div>
                  {hoveredSkill === index && (
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                      <span>📊 {skill.projects} projects</span>
                      <span>📅 {skill.years} years</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#e2e8f0'
            }}>
              Achievements & Recognition
            </h2>
            <div style={{ ...styles.grid, ...styles.gridCols3 }}>
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    style={{
                      ...styles.skillCard,
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.borderColor = achievement.color;
                      e.currentTarget.style.boxShadow = `0 20px 40px ${achievement.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '1rem',
                      background: `${achievement.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      border: `1px solid ${achievement.color}30`
                    }}>
                      <Icon size={28} color={achievement.color} />
                    </div>
                    <h3 style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                      {achievement.title}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      {achievement.desc}
                    </p>
                    <span style={{
                      ...styles.badge,
                      background: `${achievement.color}20`,
                      color: achievement.color,
                      border: `1px solid ${achievement.color}50`
                    }}>
                      {achievement.year}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {activeTab === 'interests' && (
          <div style={{ ...styles.grid, ...styles.gridCols3 }}>
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              const colors = ['#06b6d4', '#a855f7', '#ec4899', '#10b981', '#eab308', '#ef4444'];
              const color = colors[index % colors.length];
              return (
                <div
                  key={index}
                  style={{
                    ...styles.skillCard,
                    textAlign: 'center',
                    background: index < 3 ? `linear-gradient(135deg, ${color}15, ${color}05)` : 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 25px 50px ${color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '4.5rem',
                    height: '4.5rem',
                    borderRadius: '1.25rem',
                    background: `${color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    border: `1px solid ${color}30`
                  }}>
                    <Icon size={32} color={color} />
                  </div>
                  <h3 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                    {interest.name}
                  </h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                    {interest.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div style={styles.contactSection}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: '#06b6d4',
            display: 'inline-block'
          }}>
            Let's Connect
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.125rem' }}>
            Open to opportunities, collaborations, and interesting conversations
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <a
              href="mailto:ahnoduy77@gmail.com"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.5rem',
                background: 'rgba(6, 182, 212, 0.1)',
                borderRadius: '1rem',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
              }}
            >
              <Mail size={32} color="#06b6d4" />
              <span style={{ color: '#e2e8f0', fontWeight: '600' }}>ahnoduy77@gmail.com</span>
            </a>

            <a
              href="https://github.com/AndyH2007"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.5rem',
                background: 'rgba(168, 85, 247, 0.1)',
                borderRadius: '1rem',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
              }}
            >
              <Github size={32} color="#a855f7" />
              <span style={{ color: '#e2e8f0', fontWeight: '600' }}>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/andy-hou"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.5rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '1rem',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
              }}
            >
              <Linkedin size={32} color="#10b981" />
              <span style={{ color: '#e2e8f0', fontWeight: '600' }}>LinkedIn</span>
            </a>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.5rem',
                background: 'rgba(234, 179, 8, 0.1)',
                borderRadius: '1rem',
                border: '1px solid rgba(234, 179, 8, 0.3)'
              }}
            >
              <MapPin size={32} color="#eab308" />
              <span style={{ color: '#e2e8f0', fontWeight: '600' }}>Seattle, Washington</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;