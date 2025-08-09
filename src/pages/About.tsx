import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every AI model we develop prioritizes patient safety and clinical accuracy above all else.",
    },
    {
      icon: Target,
      title: "Precision Medicine",
      description: "Leveraging cutting-edge AI to deliver precise, reliable diagnostic insights for healthcare professionals.",
    },
    {
      icon: Award,
      title: "Research Excellence",
      description: "Committed to rigorous research, transparent methodologies, and open-source contributions.",
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description: "Working closely with healthcare institutions to develop solutions that truly meet clinical needs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About PeVe-Health | AI Healthcare Innovation & Medical Diagnostics</title>
        <meta 
          name="description" 
          content="Learn about PeVe-Health's mission to revolutionize healthcare diagnostics with AI. From research to production-ready medical AI solutions." 
        />
      </Helmet>

      <div className="py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Building the Future of 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> AI Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              PeVe-Health was founded on the belief that artificial intelligence can transform healthcare 
              diagnostics, making accurate medical insights accessible to healthcare professionals worldwide. 
              Our journey from research to production-ready solutions represents our commitment to 
              advancing medical care through responsible AI development.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To revolutionize healthcare diagnostics by developing AI models that empower medical 
                  professionals with unprecedented accuracy and efficiency. We're building intelligent 
                  systems across various modalities - from image-based diagnostics to voice AI and 
                  retrieval-augmented generation (RAG) systems.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A future where AI-powered diagnostic tools are seamlessly integrated into healthcare 
                  workflows worldwide, improving patient outcomes while reducing diagnostic errors and 
                  healthcare costs. We envision expanding beyond diagnostics to prediction models and 
                  comprehensive healthcare AI solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Journey */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">From research project to production-ready healthcare AI</p>
            </div>

            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
              
              <div className="space-y-12">
                {/* Research Phase */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <Badge variant="outline" className="mb-2 border-primary/20 text-primary">
                      Research Phase
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">Deep Learning Foundation</h3>
                    <p className="text-muted-foreground">
                      Started with extensive research in medical image classification using 
                      ResNet18 architecture, focusing on pneumonia detection from chest X-rays.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 lg:left-0 lg:translate-x-0"></div>
                  </div>
                </div>

                {/* Development Phase */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative lg:order-2">
                    <div className="w-4 h-4 bg-accent rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 lg:right-0 lg:left-auto lg:-translate-x-0"></div>
                  </div>
                  <div className="lg:order-1">
                    <Badge variant="outline" className="mb-2 border-accent/20 text-accent">
                      Development Phase
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">Model Optimization</h3>
                    <p className="text-muted-foreground">
                      Achieved breakthrough results with 100% accuracy on test data and perfect 
                      AUC-ROC score, while developing automated medical report generation capabilities.
                    </p>
                  </div>
                </div>

                {/* Production Phase */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <Badge variant="outline" className="mb-2 border-success/20 text-success">
                      Production Ready
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">Clinical Deployment</h3>
                    <p className="text-muted-foreground">
                      Successfully deployed our flagship model to Hugging Face, making it 
                      accessible for healthcare professionals worldwide with comprehensive 
                      API integration.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-success rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 lg:left-0 lg:translate-x-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide our AI development</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-medical transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-light/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Roadmap */}
          <div className="text-center bg-gradient-subtle rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're expanding our AI capabilities across multiple healthcare domains, developing 
              prediction models, voice AI for clinical documentation, and RAG systems for medical 
              knowledge management. Our goal is to become the leading provider of comprehensive 
              AI solutions for healthcare institutions worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">Multi-Modal AI</h4>
                <p className="text-sm text-muted-foreground">
                  Expanding to voice, text, and multi-modal diagnostic systems
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-accent mb-2">Predictive Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Moving beyond diagnosis to predictive healthcare models
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-success mb-2">Global Deployment</h4>
                <p className="text-sm text-muted-foreground">
                  Scaling our solutions to healthcare institutions worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;