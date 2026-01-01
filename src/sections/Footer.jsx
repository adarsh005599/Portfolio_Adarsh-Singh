import { mySocials } from "../constants";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pb-7 c-space">
      {/* Divider */}
      <div className="mb-8 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">
        
        {/* Copyright */}
        <p className="order-3 md:order-1">© 2025 Adarsh Singh. All rights reserved.</p>

        {/* Legal Links */}
   
<div className="flex gap-4 order-2">
  <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
  <span className="text-neutral-700">|</span>
  <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
</div>

        {/* Social Icons */}
        <div className="flex gap-4 order-1 md:order-3">
          {mySocials.map((social, index) => (
            <a 
              href={social.href} 
              key={index}
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group"
            >
              <img 
                src={social.icon} 
                className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" 
                alt={social.name} 
              />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;