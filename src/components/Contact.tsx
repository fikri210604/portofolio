import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ParallaxSection from './elements/ParallaxSection';
import { IoLocationSharp } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCalendar } from 'react-icons/fa';
import './Contact.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/fikri210604' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ahmad-fikri-hanif-47b075247' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'Email', icon: <FaEnvelope />, url: `mailto:${import.meta.env.PUBLIC_MAIL_ADDRESS}` },
];



export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Message sent! (This is a demo)');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="contact" ref={ref}>
            <ParallaxSection offset={40}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                    >
                        <h2>Get In Touch</h2>
                        <p className="section-subtitle">Let's create something amazing together</p>
                    </motion.div>

                    <div className="contact-content">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            <motion.div variants={fadeInUp}>
                                <h3>Let's Talk</h3>
                                <p>
                                    I'm always open to discussing new projects, creative ideas, or
                                    opportunities to be part of your vision.
                                </p>
                            </motion.div>

                            <motion.div className="contact-details" variants={fadeInUp}>
                                <div className="contact-detail-item">
                                    <span className="detail-icon"><IoLocationSharp /></span>
                                    <div>
                                        <h4>Location</h4>
                                        <p>Your City, Country</p>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <span className="detail-icon"><FaEnvelope /></span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>{import.meta.env.PUBLIC_MAIL_ADDRESS}</p>

                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <span className="detail-icon"><FaCalendar /></span>
                                    <div>
                                        <h4>Availability</h4>
                                        <p>Open for opportunities</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="linkedin-badge-container" variants={fadeInUp} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                                {isMounted && (
                                    <div 
                                        className="badge-base LI-profile-badge" 
                                        data-locale="in_ID" 
                                        data-size="medium" 
                                        data-theme="light" 
                                        data-type="VERTICAL" 
                                        data-vanity="ahmad-fikri-hanif-47b075247" 
                                        data-version="v1"
                                    >
                                        <a 
                                            className="badge-base__link LI-simple-link" 
                                            href="https://id.linkedin.com/in/ahmad-fikri-hanif-47b075247?trk=profile-badge"
                                        >
                                            Ahmad Fikri Hanif
                                        </a>
                                    </div>
                                )}
                            </motion.div>



                            <motion.div className="social-links" variants={fadeInUp}>
                                <h4>Connect With Me</h4>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-icon"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>{social.icon}</span>
                                            <span className="social-name">{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                        >
                            <form onSubmit={handleSubmit} className="contact-form glass-card">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Your message..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="cosmic-button submit-btn"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading-spinner" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <span>🚀</span> Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Footer */}
            <motion.footer
                className="footer"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <p>© 2026 Ahmad Fikri Hanif. Built with ❤️ using Astro & React</p>
            </motion.footer>
        </section>
    );
}

