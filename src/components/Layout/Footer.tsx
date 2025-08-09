import { Link } from 'react-router-dom';
import { Activity, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-subtle">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-medical">
                <Activity className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold">PeVe-Health</span>
                <p className="text-sm text-muted-foreground">AI Medical Diagnostics</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing healthcare diagnostics with AI-powered precision. 
              From research to production-ready solutions for medical professionals worldwide.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@pevehealth.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Technology
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-muted-foreground hover:text-primary transition-colors">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hugging Face Model
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-muted-foreground hover:text-primary transition-colors">
                  Security & Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 PeVe-Health. All rights reserved. Research-stage AI diagnostic technology.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision and care for healthcare professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;