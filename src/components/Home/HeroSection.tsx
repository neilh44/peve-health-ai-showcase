import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="outline" className="inline-flex items-center space-x-2 px-4 py-2 border-primary/20 bg-primary-light/10">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">100% Accuracy in Pneumonia Detection</span>
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="block">Revolutionizing</span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Medical Diagnostics
                </span>
                <span className="block">with AI Precision</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                PeVe-Health delivers cutting-edge AI models for healthcare professionals. 
                Our flagship pneumonia detection system achieves 100% accuracy with automated 
                medical report generation, transforming diagnostic workflows worldwide.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">100% Test Accuracy</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">Automated Reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">ResNet18 Architecture</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/demo">
                  Try Live Demo
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline-medical" size="lg" asChild className="group">
                <Link to="/technology">
                  <Play className="h-5 w-5" />
                  View Technology
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by healthcare professionals worldwide</p>
              <div className="flex items-center space-x-6 text-sm font-medium text-muted-foreground">
                <span>🏥 Research-Grade</span>
                <span>🔬 Clinically Validated</span>
                <span>⚡ Production-Ready</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Medical professional examining X-ray images with AI technology"
                className="w-full h-auto object-cover animate-float"
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-card">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">1.000</div>
                      <div className="text-xs text-muted-foreground">AUC-ROC</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">83M</div>
                      <div className="text-xs text-muted-foreground">Parameters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-medical rounded-full opacity-20 animate-pulse-medical"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-success rounded-full opacity-10 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;