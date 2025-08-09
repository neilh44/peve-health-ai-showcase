import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Building2, 
  Stethoscope,
  MessageSquare,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    inquiryType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        inquiryType: '',
        message: ''
      });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "For general inquiries and support",
      value: "hanotianilesh@gmail.com",
      action: "mailto:hanotianilesh@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+91-9925537229",
      action: "tel:+919926637229"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters location",
      value: "Ahmedabad, India",
      action: ""
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday to Friday",
      value: "9:00 AM - 6:00 PM PST",
      action: ""
    }
  ];

  const inquiryTypes = [
    { icon: Stethoscope, title: "Clinical Partnership", description: "Healthcare institutions and medical centers" },
    { icon: Building2, title: "Enterprise Integration", description: "Large-scale deployment and API integration" },
    { icon: Users, title: "Research Collaboration", description: "Academic partnerships and research projects" },
    { icon: MessageSquare, title: "Technical Support", description: "Implementation assistance and troubleshooting" },
    { icon: Calendar, title: "Product Demo", description: "Scheduled demonstrations and consultations" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact PeVe-Health | AI Medical Diagnostics Consultation & Support</title>
        <meta 
          name="description" 
          content="Contact PeVe-Health for AI medical diagnostics consultation, partnerships, technical support, and product demonstrations. Get in touch with our healthcare AI experts." 
        />
      </Helmet>

      <div className="py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Discuss Your 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Healthcare AI Needs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're a healthcare institution looking to integrate AI diagnostics, 
              a researcher interested in collaboration, or have technical questions about 
              our solutions, we're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Dr. John Smith"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john.smith@hospital.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleInputChange('organization', e.target.value)}
                          placeholder="General Hospital"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Select onValueChange={(value) => handleInputChange('role', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="radiologist">Radiologist</SelectItem>
                            <SelectItem value="physician">Physician</SelectItem>
                            <SelectItem value="administrator">Healthcare Administrator</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="it-director">IT Director</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('inquiryType', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clinical-partnership">Clinical Partnership</SelectItem>
                          <SelectItem value="enterprise-integration">Enterprise Integration</SelectItem>
                          <SelectItem value="research-collaboration">Research Collaboration</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="product-demo">Product Demo</SelectItem>
                          <SelectItem value="custom-development">Custom Development</SelectItem>
                          <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your needs, questions, or how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="medical" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="shadow-card hover:shadow-medical transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{method.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                          {method.action ? (
                            <a 
                              href={method.action}
                              className="font-medium text-primary hover:underline"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="font-medium">{method.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Links */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Resources</CardTitle>
                  <CardDescription>
                    Helpful links and resources for getting started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">View Our Model</p>
                      <p className="text-sm text-muted-foreground">Hugging Face Repository</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  
                  <a 
                    href="/demo"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">Try Live Demo</p>
                      <p className="text-sm text-muted-foreground">Interactive AI Analysis</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  
                  <a 
                    href="/technology"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">Technical Specs</p>
                      <p className="text-sm text-muted-foreground">Model Architecture Details</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-card bg-gradient-subtle">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Fast Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent technical support, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Inquiry Types Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
              <p className="text-xl text-muted-foreground">
                We specialize in various types of partnerships and support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inquiryTypes.map((type, index) => (
                <Card key={index} className="shadow-card hover:shadow-medical transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-light/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;