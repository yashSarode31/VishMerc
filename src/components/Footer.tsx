import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Globe, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm">
            {COMPANY.tagline} VishMerc helps students launch careers in AI, web,
            and software engineering through real-world internship programs.
          </p>
          <p className="inline-flex items-center gap-2 text-xs text-primary/90 border border-primary/30 rounded-full px-3 py-1 bg-primary/10">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            MSME Registered
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/internships" className="hover:text-primary">Internships</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/verification" className="hover:text-primary">Verify Certificate</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> {COMPANY.email}</li>
            <li className="flex items-center gap-2"><Globe size={14} className="text-primary" /> {COMPANY.website}</li>
            <li className="flex gap-3 pt-2">
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md bg-muted hover:bg-primary/20 hover:text-primary transition"><Linkedin size={16} /></a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-md bg-muted hover:bg-primary/20 hover:text-primary transition"><MessageCircle size={16} /></a>
              <a href={`mailto:${COMPANY.email}`} aria-label="Email" className="p-2 rounded-md bg-muted hover:bg-primary/20 hover:text-primary transition"><Mail size={16} /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.</p>
          <p>Built for the next generation of technologists.</p>
        </div>
      </div>
    </footer>
  );
}
