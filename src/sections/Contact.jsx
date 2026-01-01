import { useState } from "react";
import Alert from "../components/Alert";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Using the ID from your .env file
      const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
      
      const response = await fetch(`https://formspree.io/f/xpqwwnzw`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setShowAlert(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus("error");
      setShowAlert(true);
    } finally {
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <section className="c-space my-32" id="contact">
      {showAlert && (
        <Alert 
          type={status === "success" ? "success" : "danger"} 
          text={status === "success" ? "Message sent! I'll be in touch soon." : "Something went wrong. Please try again."} 
        />
      )}

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 p-8 md:p-14 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] backdrop-blur-3xl overflow-hidden">
        
        {/* Decorative Background Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tighter">
              Let’s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                the future.
              </span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-md leading-relaxed">
              Currently seeking new challenges. Whether you have a question or just want to say hi, I’ll get back to you!
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-500 font-bold mb-1">Available for</p>
              <p className="text-white text-lg">Freelance & Full-time Roles</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-1">Direct Contact</p>
              <a href="mailto:adarshsingh821109@gmail.com" className="text-white text-lg hover:text-indigo-400 transition-all border-b border-white/10 hover:border-indigo-400 pb-1">
                adarshsingh821109@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative z-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="space-y-6">
              <div className="group relative">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-indigo-500 transition-all placeholder:text-neutral-600"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="group relative">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-indigo-500 transition-all placeholder:text-neutral-600"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="group relative">
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Project details or just a 'Hello'..."
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-indigo-500 transition-all placeholder:text-neutral-600 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all duration-500 disabled:opacity-50 overflow-hidden"
            >
              <span className="relative z-10">
                {status === "loading" ? "Processing..." : "Initiate Conversation"}
              </span>
              {status !== "loading" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;