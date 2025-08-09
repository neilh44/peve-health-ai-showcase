import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ExternalLink, Brain, Cpu, Database, Layers, Zap, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Technology = () => {
  const specifications = [
    {
      label: "Architecture",
      value: "ResNet18",
      description: "Deep convolutional neural network optimized for medical imaging",
    },
    {
      label: "Parameters",
      value: "83M",
      description: "Carefully tuned parameters for optimal performance",
    },
    {
      label: "Training Data",
      value: "5,863 images",
      description: "High-quality chest X-ray dataset with expert annotations",
    },
    {
      label: "Processing Speed",
      value: "< 0.5s",
      description: "Real-time analysis for clinical workflows",
    },
  ];

  const performance = [
    { metric: "Test Accuracy", value: 100, color: "bg-success" },
    { metric: "AUC-ROC Score", value: 100, color: "bg-primary" },
    { metric: "Precision", value: 100, color: "bg-accent" },
    { metric: "Recall", value: 100, color: "bg-success" },
    { metric: "F1-Score", value: 100, color: "bg-primary" },
    { metric: "Specificity", value: 100, color: "bg-accent" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced Deep Learning",
      description: "ResNet18 architecture with custom modifications for medical image analysis",
    },
    {
      icon: FileText,
      title: "Automated Report Generation",
      description: "Natural language processing for comprehensive medical reports",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Optimized inference pipeline for immediate diagnostic results",
    },
    {
      icon: Database,
      title: "Robust Training Data",
      description: "Curated dataset with expert radiologist annotations",
    },
    {
      icon: Layers,
      title: "Dual-Output System",
      description: "Simultaneous classification and report generation capabilities",
    },
    {
      icon: Cpu,
      title: "Production-Ready",
      description: "Scalable deployment with comprehensive API integration",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Technology | PeVe-Health AI Medical Diagnostics Platform</title>
        <meta 
          name="description" 
          content="Explore PeVe-Health's advanced AI technology. ResNet18 architecture, 100% accuracy, automated report generation for pneumonia detection." 
        />
      </Helmet>

      <div className="py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Advanced Technology
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Cutting-Edge 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> AI Architecture</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our flagship pneumonia detection model represents the pinnacle of medical AI development, 
              combining state-of-the-art deep learning with automated report generation to deliver 
              unprecedented diagnostic accuracy.
            </p>
          </div>

          {/* Model Specifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specifications.map((spec, index) => (
              <Card key={index} className="text-center shadow-medical">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold text-primary">
                    {spec.value}
                  </CardTitle>
                  <CardDescription className="font-semibold">
                    {spec.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Exceptional Performance</h2>
              <p className="text-xl text-muted-foreground">
                Validated results demonstrating superior diagnostic capabilities
              </p>
            </div>

            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Model Performance Metrics</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive evaluation on test dataset
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {performance.map((metric, index) => (
                    <div key={index} className="text-center space-y-3">
                      <div className="text-2xl font-bold text-primary">
                        {metric.value}%
                      </div>
                      <div className="font-medium text-sm">
                        {metric.metric}
                      </div>
                      <Progress 
                        value={metric.value} 
                        className="h-3"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-success-light/10 rounded-lg border border-success/20">
                  <p className="text-center text-success font-medium">
                    ✅ Perfect 1.000 AUC-ROC Score - Exceptional diagnostic discrimination capability
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced Features</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive AI capabilities for modern healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-card hover:shadow-medical transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Architecture Deep Dive */}
          <div className="mb-16">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Architecture</CardTitle>
                <CardDescription>
                  Detailed overview of our AI model's structure and capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-primary">ResNet18 Foundation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Deep residual learning for medical image classification</li>
                      <li>• Skip connections to prevent vanishing gradients</li>
                      <li>• Optimized for chest X-ray pattern recognition</li>
                      <li>• Transfer learning with medical domain adaptation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-accent">Dual-Output Design</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Binary classification (Normal vs Pneumonia)</li>
                      <li>• Automated medical report generation</li>
                      <li>• Confidence scoring for clinical decision support</li>
                      <li>• Risk assessment and recommendation system</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <h4 className="text-lg font-bold mb-4 text-success">Training Methodology</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Data Preparation</h5>
                      <p>Curated chest X-ray dataset with expert radiologist annotations and comprehensive quality validation.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Model Training</h5>
                      <p>Advanced optimization techniques with regularization and data augmentation for robust generalization.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Validation & Testing</h5>
                      <p>Rigorous evaluation with independent test sets and cross-validation for reliability assurance.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Integration & API */}
          <div className="mb-16">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl">Integration & Deployment</CardTitle>
                <CardDescription>
                  Production-ready APIs and integration options for healthcare systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-primary">API Features</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• RESTful API with comprehensive documentation</li>
                      <li>• Real-time image upload and analysis</li>
                      <li>• JSON response with detailed results</li>
                      <li>• Batch processing capabilities</li>
                      <li>• Secure authentication and authorization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-accent">Deployment Options</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Cloud-based deployment via Hugging Face</li>
                      <li>• On-premises installation available</li>
                      <li>• Docker containerization support</li>
                      <li>• Scalable infrastructure ready</li>
                      <li>• Healthcare compliance considerations</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button variant="medical" asChild>
                    <a 
                      href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Access Model on Hugging Face
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline-medical" asChild>
                    <a href="/demo">
                      Try Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Development */}
          <div className="text-center bg-gradient-subtle rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Technology Roadmap</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're continuously advancing our AI technology stack, expanding to multi-modal 
              systems, predictive analytics, and comprehensive healthcare AI solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-primary mb-2">Multi-Modal AI</h4>
                <p className="text-sm text-muted-foreground">
                  Integrating voice AI and RAG systems for comprehensive diagnostics
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-light/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-accent mb-2">Predictive Models</h4>
                <p className="text-sm text-muted-foreground">
                  Moving beyond diagnosis to predictive healthcare analytics
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success-light/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-success" />
                </div>
                <h4 className="font-bold text-success mb-2">Expanded Diagnostics</h4>
                <p className="text-sm text-muted-foreground">
                  Developing AI models for additional medical conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;