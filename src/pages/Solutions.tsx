import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Building2, 
  Users, 
  Monitor, 
  Clock, 
  Shield, 
  TrendingUp, 
  FileText,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Solutions = () => {
  const solutions = [
    {
      icon: Stethoscope,
      title: "For Radiologists",
      description: "AI-powered diagnostic assistant for enhanced accuracy and efficiency",
      features: [
        "Pneumonia detection with 100% accuracy",
        "Automated medical report generation",
        "Confidence scoring for decision support", 
        "Seamless workflow integration"
      ],
      color: "primary"
    },
    {
      icon: Building2,
      title: "For Healthcare Institutions",
      description: "Scalable AI solutions for hospitals and medical centers",
      features: [
        "Enterprise-grade deployment options",
        "API integration with existing systems",
        "Batch processing capabilities",
        "Comprehensive training & support"
      ],
      color: "accent"
    },
    {
      icon: Users,
      title: "For Emergency Medicine",
      description: "Rapid diagnostic support for critical care scenarios",
      features: [
        "Real-time analysis under 0.5 seconds",
        "24/7 AI diagnostic availability",
        "Mobile-friendly interface",
        "Priority triage recommendations"
      ],
      color: "success"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Diagnosis",
      description: "Reduce diagnostic time from hours to seconds with AI-powered analysis"
    },
    {
      icon: TrendingUp,
      title: "Improved Accuracy",
      description: "100% test accuracy helps reduce false positives and missed diagnoses"
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description: "Generate comprehensive medical reports automatically with each analysis"
    },
    {
      icon: Shield,
      title: "Clinical Confidence",
      description: "Confidence scoring provides additional decision support for clinicians"
    },
    {
      icon: Monitor,
      title: "Easy Integration",
      description: "Seamless integration with existing PACS and healthcare IT systems"
    },
    {
      icon: Zap,
      title: "Scalable Performance",
      description: "Handle high volumes with cloud-based deployment and batch processing"
    }
  ];

  const industries = [
    "Radiology Departments",
    "Emergency Medicine",
    "Primary Care Clinics", 
    "Telemedicine Platforms",
    "Medical Research Institutions",
    "Healthcare Technology Companies"
  ];

  return (
    <>
      <Helmet>
        <title>Solutions | PeVe-Health AI Medical Diagnostics for Healthcare</title>
        <meta 
          name="description" 
          content="Discover PeVe-Health AI solutions for radiologists, hospitals, and healthcare institutions. Pneumonia detection with 100% accuracy and automated reporting." 
        />
      </Helmet>

      <div className="py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Healthcare Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              AI Solutions for 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Every Healthcare Need</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From individual radiologists to large healthcare institutions, our AI diagnostic 
              solutions are designed to integrate seamlessly into existing workflows while 
              delivering unprecedented accuracy and efficiency.
            </p>
          </div>

          {/* Main Solutions */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-medical hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 bg-${solution.color}-light/10 rounded-lg flex items-center justify-center mb-4`}>
                    <solution.icon className={`h-8 w-8 text-${solution.color}`} />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-medical" className="w-full mt-6" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose PeVe-Health</h2>
              <p className="text-xl text-muted-foreground">
                Proven benefits that transform healthcare diagnostics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Development */}
          <div className="mb-16">
            <Card className="shadow-medical bg-gradient-subtle">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Custom AI Development</CardTitle>
                <CardDescription className="text-base">
                  Tailored AI models for your specific healthcare needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  Beyond our flagship pneumonia detection model, we offer custom AI development 
                  services for healthcare institutions with specific diagnostic requirements. 
                  Our team can develop, train, and deploy specialized AI models tailored to 
                  your clinical workflows and patient populations.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-primary mb-3">Development Services</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Custom medical image classification models</li>
                      <li>• Multi-modal AI systems (image + text + voice)</li>
                      <li>• Predictive analytics for healthcare outcomes</li>
                      <li>• RAG systems for medical knowledge management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-accent mb-3">Implementation Support</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Full system integration and deployment</li>
                      <li>• Staff training and change management</li>
                      <li>• Ongoing technical support and maintenance</li>
                      <li>• Performance monitoring and optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button variant="medical" asChild>
                    <Link to="/contact">Discuss Custom Development</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground">
                Trusted by healthcare professionals across diverse medical settings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-medical transition-all duration-300">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary">{industry}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="mb-16">
            <Card className="shadow-medical">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Implementation Process</CardTitle>
                <CardDescription>
                  Our streamlined approach to deploying AI solutions in healthcare settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h4 className="font-bold mb-2">Consultation</h4>
                    <p className="text-sm text-muted-foreground">
                      Initial assessment of your needs and technical requirements
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">2</span>
                    </div>
                    <h4 className="font-bold mb-2">Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration with your existing healthcare systems
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-success">3</span>
                    </div>
                    <h4 className="font-bold mb-2">Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive staff training on AI-powered workflows
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                    <h4 className="font-bold mb-2">Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Ongoing technical support and performance optimization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-hero rounded-2xl p-12 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Healthcare Diagnostics?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join healthcare institutions worldwide who are already benefiting from AI-powered 
              diagnostic accuracy and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/demo">Try Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;