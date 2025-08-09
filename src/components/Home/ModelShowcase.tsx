import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { ExternalLink, Brain, Zap, Target, FileText, Activity } from 'lucide-react';
import aiNetworkImage from '@/assets/ai-network.jpg';
import xrayImage from '@/assets/xray-demo.jpg';

const ModelShowcase = () => {
  const features = [
    {
      icon: Brain,
      title: "ResNet18 Architecture",
      description: "83M parameters optimized for medical image analysis",
    },
    {
      icon: Target,
      title: "Dual-Output System",
      description: "Classification + automated medical report generation",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant analysis with confidence scoring",
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description: "Generate detailed medical reports automatically",
    },
  ];

  const metrics = [
    { label: "Test Accuracy", value: 100, color: "bg-success" },
    { label: "AUC-ROC Score", value: 100, color: "bg-primary" },
    { label: "Precision", value: 100, color: "bg-accent" },
    { label: "Recall", value: 100, color: "bg-success" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Flagship Model
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            PeVe-Health Pneumonia Detection Model
          </h2>
          <p className="text-xl text-muted-foreground">
            Our flagship AI model demonstrates unprecedented accuracy in pneumonia detection 
            from chest X-rays, with automated medical report generation capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: AI Network Visualization */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-medical">
              <img
                src={aiNetworkImage}
                alt="AI neural network visualization for medical diagnostics"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Info */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-primary" />
                      <span className="font-medium">Model Status</span>
                    </div>
                    <Badge variant="outline" className="bg-success-light/20 border-success text-success">
                      Production Ready
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Advanced AI Capabilities</h3>
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <Button variant="outline-medical" asChild>
                <a 
                  href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View on Hugging Face
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center shadow-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-primary">
                  {metric.value}%
                </CardTitle>
                <CardDescription className="font-medium">
                  {metric.label}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={metric.value} 
                  className="h-2"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Preview */}
        <Card className="shadow-medical">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Experience the Technology</CardTitle>
            <CardDescription>
              See our AI model in action with real chest X-ray analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 items-center">
            {/* Sample X-ray */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-card">
                <img
                  src={xrayImage}
                  alt="Sample chest X-ray for pneumonia detection demo"
                  className="w-full h-auto object-cover"
                />
                
                {/* Analysis Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Analysis Result</span>
                      <Badge variant="outline" className="bg-success-light/20 border-success text-success">
                        Normal
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Confidence:</span>
                        <span className="font-medium">99.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing:</span>
                        <span className="font-medium">0.23s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo CTA */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-3">Ready to Try It?</h4>
                <p className="text-muted-foreground mb-6">
                  Upload your own chest X-ray images and experience our AI model's 
                  diagnostic capabilities in real-time.
                </p>
              </div>

              <div className="space-y-4">
                <Button variant="medical" size="lg" asChild className="w-full">
                  <Link to="/demo">
                    Launch Interactive Demo
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link to="/technology">
                    Learn More About Our Technology
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  * Research-stage technology. Not for clinical diagnosis. 
                  Always consult healthcare professionals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ModelShowcase;