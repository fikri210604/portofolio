import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaPaperPlane,
  FaRegCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import "./Contact.css";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.05, once: true });
  const emailAddress =
    ((import.meta as any).env?.PUBLIC_MAIL_ADDRESS as string) ||
    "afh.fikri2106@gmail.com";

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendReceipt, setSendReceipt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 3D Tilt Card Refs & Handlers
  const directCardRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const createTiltHandler = (cardRef: React.RefObject<HTMLDivElement | null>) => {
    return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const card = cardRef.current;
      if (!card) return;

      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Subtle, elegant 3D tilt (similar to projects cards)
      const rotateX = ((y - height / 2) / height) * -7;
      const rotateY = ((x - width / 2) / width) * 7;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
    };
  };

  const handleMouseLeave = (cardRef: React.RefObject<HTMLDivElement | null>) => {
    return () => {
      const card = cardRef.current;
      if (!card) return;
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated dispatch transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact-editorial" ref={ref}>
      <div className="contact-container">
        {/* Giant Typographic Header */}
        <motion.div
          className="contact-hero-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-2">
            <span>// 06. CONTACT & COLLABORATION</span>
          </div>
          <h2 className="contact-giant-title">
            LET'S BUILD <br />
            <span className="title-muted">SOMETHING MEANINGFUL.</span>
          </h2>
          <p className="contact-tagline">
            Available for full-time engineering roles, system architecture consulting, and high-impact software projects.
          </p>
        </motion.div>

        {/* Two-Column Action Layout with 3D Tilt */}
        <div className="contact-grid">
          {/* Left Column: Direct Communication 3D Card */}
          <div className="contact-card-3d-wrap">
            <motion.div
              ref={directCardRef}
              onMouseMove={createTiltHandler(directCardRef)}
              onMouseLeave={handleMouseLeave(directCardRef)}
              className="contact-direct-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              {/* Inner 3D depth layer */}
              <div
                className="flex flex-col gap-6"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
              >
                {/* Header Badge & Title */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="contact-icon-badge">
                      <FaEnvelope className="text-indigo-400 text-base" />
                    </div>
                    <div className="status-radar">
                      <span className="radar-dot" />
                      <span className="radar-label font-mono">OPEN FOR OPPORTUNITIES</span>
                    </div>
                  </div>

                  <h3 className="direct-title">Direct Connection</h3>
                  <p className="direct-desc">
                    Prefer direct communication over contact forms? Reach out directly to my primary inbox.
                  </p>
                </div>

                {/* Email Box */}
                <div className="email-action-box">
                  <div className="email-text-wrap">
                    <span className="email-mono-label font-mono">// PRIMARY INBOX</span>
                    <a href={`mailto:${emailAddress}`} className="email-address-link font-mono">
                      {emailAddress}
                    </a>
                  </div>

                  <div className="email-buttons">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="gap-2 cursor-pointer transition-all"
                      title="Copy email to clipboard"
                    >
                      {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaRegCopy className="text-xs" />}
                      <span className="text-xs font-mono">{copied ? "COPIED" : "COPY EMAIL"}</span>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2 cursor-pointer"
                      title="Open mail application"
                    >
                      <a href={`mailto:${emailAddress}`}>
                        <FaPaperPlane className="text-xs text-indigo-400" />
                        <span className="text-xs font-mono">SEND MAIL</span>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="social-pills-wrap">
                  <span className="social-label font-mono">// VERIFIED PROFILES</span>
                  <div className="social-pills">
                    <a
                      href="https://github.com/fikri210604"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-pill"
                    >
                      <FaGithub className="text-base text-zinc-300" />
                      <span className="font-heading">GitHub</span>
                      <FaArrowRight className="pill-arrow" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahmad-fikri-hanif-47b075247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-pill"
                    >
                      <FaLinkedin className="text-base text-sky-400" />
                      <span className="font-heading">LinkedIn</span>
                      <FaArrowRight className="pill-arrow" />
                    </a>
                  </div>
                </div>

                {/* Location & Timezone Metadata Strip */}
                <div className="contact-meta-strip">
                  <div className="meta-item">
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <FaMapMarkerAlt className="text-xs text-indigo-400" />
                      <span className="meta-label font-mono">BASE LOCATION</span>
                    </div>
                    <span className="meta-value">Jakarta, Indonesia</span>
                  </div>
                  <div className="meta-item">
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <FaClock className="text-xs text-indigo-400" />
                      <span className="meta-label font-mono">TIMEZONE</span>
                    </div>
                    <span className="meta-value">WIB (UTC+7)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Transmission Form 3D Card */}
          <div className="contact-card-3d-wrap">
            <motion.div
              ref={formCardRef}
              onMouseMove={createTiltHandler(formCardRef)}
              onMouseLeave={handleMouseLeave(formCardRef)}
              className="contact-form-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              {/* Inner 3D depth layer */}
              <div
                className="flex flex-col gap-6"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
              >
                {/* Form Header */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="contact-icon-badge">
                      <FaPaperPlane className="text-indigo-400 text-sm" />
                    </div>
                    <span className="form-mono-badge font-mono">// DIRECT DISPATCH</span>
                  </div>
                  <h3 className="form-title">Send a Transmission</h3>
                  <p className="text-sm text-zinc-400">
                    Have an engineering role or technical collaboration in mind? Leave a brief message below.
                  </p>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="editorial-form space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name" className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                      Your Name <span className="text-indigo-400">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="h-10 bg-zinc-950/60 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-indigo-500/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email" className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                      Contact Email <span className="text-indigo-400">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                      className="h-10 bg-zinc-950/60 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-indigo-500/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message" className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                      Message Inquiry <span className="text-indigo-400">*</span>
                    </Label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your engineering role, project scope, or idea..."
                      className="flex min-h-[110px] w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 shadow-sm transition-colors focus-visible:border-indigo-500/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Checkbox
                      id="receipt-check"
                      checked={sendReceipt}
                      onCheckedChange={(checked) => setSendReceipt(Boolean(checked))}
                    />
                    <Label htmlFor="receipt-check" className="text-xs text-zinc-400 font-normal cursor-pointer">
                      Request delivery confirmation notification
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 font-medium tracking-wide flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs">TRANSMITTING...</span>
                    ) : (
                      <>
                        <span className="font-mono text-xs font-semibold">TRANSMIT MESSAGE</span>
                        <FaArrowRight className="text-xs" />
                      </>
                    )}
                  </Button>

                  {submitSuccess && (
                    <div className="form-success-alert flex items-center gap-2 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-sm">
                      <FaCheck className="text-emerald-400" />
                      <span>Message dispatched successfully. I will respond within 24-48 hours.</span>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quiet Footer */}
        <footer className="editorial-footer">
          <div className="footer-left">
            <span className="footer-copyright font-mono text-xs">
              © {new Date().getFullYear()} Ahmad Fikri Hanif.
            </span>
            <span className="footer-stack font-mono text-xs text-zinc-500">
              Engineered with Astro &amp; React Islands.
            </span>
          </div>

          <div className="footer-right">
            <button onClick={scrollToTop} className="back-to-top-btn font-mono">
              <span>BACK TO TOP</span>
              <FaArrowUp />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
