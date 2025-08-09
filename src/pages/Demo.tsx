import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ExternalLink, Brain, Activity, Shield, Zap, Target, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const modelSpecs = {
    architecture: "ResNet18",
    parameters: "83,180,690",
    inputResolution: "224 × 224 RGB",
    framework: "PyTorch",
    testAccuracy: "100%",
    aucRoc: "1.000",
    sensitivity: "100%",
    specificity: "100%",
    precision: "100%",
    f1Score: "1.000"
  };

  const trainingData = {
    training: "5,216 samples (1,341 Normal + 3,875 Pneumonia)",
    validation: "16 samples (8 Normal + 8 Pneumonia)",
    test: "50 samples (25 Normal + 25 Pneumonia)"
  };

  const performanceMetrics = [
    { epoch: 1, trainLoss: 0.1441, trainAuc: 0.9842, valAuc: 1.0000, status: "Best model achieved" },
    { epoch: 2, trainLoss: 0.0911, trainAuc: 0.9944, valAuc: 1.0000, status: "Continued improvement" },
    { epoch: 5, trainLoss: 0.0491, trainAuc: 0.9983, valAuc: 1.0000, status: "Stable performance" },
    { epoch: 10, trainLoss: 0.0127, trainAuc: 0.9999, valAuc: 1.0000, status: "Near-perfect training" },
    { epoch: 20, trainLoss: 0.0013, trainAuc: 1.0000, valAuc: 1.0000, status: "Final convergence" }
  ];

  return (
    <>
      <Helmet>
        <title>Model Demo | PeVe-Health AI Pneumonia Detection</title>
        <meta 
          name="description" 
          content="Explore PeVe-Health's AI pneumonia detection model on Hugging Face. Access model card, technical specifications, and usage instructions." 
        />
      </Helmet>

      <div className="py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Model Documentation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              PeVe-Health 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> AI Model</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Explore our research-grade pneumonia detection model. Access the complete model card, 
              technical specifications, and usage instructions on Hugging Face.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" size="lg" asChild>
                <a 
                  href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Try Model on Hugging Face
                  <ExternalLink className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                View Documentation Below
              </Button>
            </div>
          </div>

          {/* Model Card Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: 'overview', label: 'Overview', icon: Brain },
                { id: 'performance', label: 'Performance', icon: Target },
                { id: 'architecture', label: 'Architecture', icon: Activity },
                { id: 'usage', label: 'Usage', icon: Zap },
                { id: 'limitations', label: 'Limitations', icon: Shield }
              ].map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={activeTab === id ? "medical" : "outline"}
                  onClick={() => setActiveTab(id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Model Card Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Project Overview */}
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="h-6 w-6" />
                      <span>Project Overview</span>
                    </CardTitle>
                    <CardDescription>
                      Research project exploring AI applications in healthcare
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      This is a research project exploring the application of deep learning for automated 
                      pneumonia detection in chest X-ray images. The model combines computer vision and 
                      natural language processing to provide both classification predictions and automated 
                      radiology report generation.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Research Goals</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Explore Medical AI applications in healthcare</li>
                          <li>• Implement multi-modal deep learning techniques</li>
                          <li>• Share research with the AI community</li>
                          <li>• Contribute to open medical AI research</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-3">Key Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Dual-output system: Classification + report generation</li>
                          <li>• Web application with Flask-based interface</li>
                          <li>• Confidence-based risk assessment</li>
                          <li>• Production-ready scalable implementation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Model Capabilities */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Model Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary-light/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Binary Classification</h4>
                        <p className="text-sm text-muted-foreground">Normal vs Pneumonia detection</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-accent-light/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Activity className="h-6 w-6 text-accent" />
                        </div>
                        <h4 className="font-semibold mb-2">Confidence Scoring</h4>
                        <p className="text-sm text-muted-foreground">Probability estimates for decisions</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-success-light/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Brain className="h-6 w-6 text-success" />
                        </div>
                        <h4 className="font-semibold mb-2">Report Generation</h4>
                        <p className="text-sm text-muted-foreground">Automated medical-style reports</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Shield className="h-6 w-6 text-amber-600" />
                        </div>
                        <h4 className="font-semibold mb-2">Risk Assessment</h4>
                        <p className="text-sm text-muted-foreground">Multi-level confidence analysis</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-8">
                {/* Performance Metrics */}
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-6 w-6" />
                      <span>Model Performance Metrics</span>
                    </CardTitle>
                    <CardDescription>
                      Comprehensive evaluation results on test dataset
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                      {Object.entries(modelSpecs).slice(4).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-2xl font-bold text-success mb-1">{value}</p>
                          <p className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">Dataset Composition</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Training:</span>
                          <span className="font-medium">{trainingData.training}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Validation:</span>
                          <span className="font-medium">{trainingData.validation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Test:</span>
                          <span className="font-medium">{trainingData.test}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Training Evolution */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Training Performance Evolution</CardTitle>
                    <CardDescription>
                      Model performance progression across training epochs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2">Epoch</th>
                            <th className="text-left py-2">Train Loss</th>
                            <th className="text-left py-2">Train AUC</th>
                            <th className="text-left py-2">Val AUC</th>
                            <th className="text-left py-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {performanceMetrics.map((metric, index) => (
                            <tr key={index} className="border-b border-border/50">
                              <td className="py-2 font-medium">{metric.epoch}</td>
                              <td className="py-2">{metric.trainLoss}</td>
                              <td className="py-2">{metric.trainAuc}</td>
                              <td className="py-2 text-success font-medium">{metric.valAuc}</td>
                              <td className="py-2 text-sm text-muted-foreground">{metric.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-8">
                {/* Technical Specifications */}
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-6 w-6" />
                      <span>Model Architecture</span>
                    </CardTitle>
                    <CardDescription>
                      Technical specifications and system design
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-primary mb-4">Architecture Details</h4>
                        <div className="space-y-3">
                          {Object.entries(modelSpecs).slice(0, 4).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-accent mb-4">System Requirements</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">RAM:</span>
                            <span className="font-medium">2GB min, 4GB recommended</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Storage:</span>
                            <span className="font-medium">500MB + dependencies</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">CPU:</span>
                            <span className="font-medium">Any modern x64</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">GPU:</span>
                            <span className="font-medium">Optional (CUDA compatible)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Python:</span>
                            <span className="font-medium">3.8+ with PyTorch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Implementation Details */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Implementation Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Framework</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• PyTorch-based implementation</li>
                          <li>• Multi-modal design</li>
                          <li>• CPU and GPU compatible</li>
                          <li>• Production-ready deployment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-3">Processing</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Optimized inference pipeline</li>
                          <li>• Batch processing support</li>
                          <li>• Memory efficient</li>
                          <li>• &lt;100ms inference time</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-success mb-3">Deployment</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Standalone PyTorch inference</li>
                          <li>• Web app with Flask interface</li>
                          <li>• RESTful API endpoints</li>
                          <li>• Scalable architecture</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-8">
                {/* Usage Instructions */}
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="h-6 w-6" />
                      <span>How to Use the Model</span>
                    </CardTitle>
                    <CardDescription>
                      Step-by-step guide to access and use the model from Hugging Face
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-primary-light/5 border border-primary/10 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Access Model on Hugging Face
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        The complete model, documentation, and demo interface are available on our Hugging Face repository.
                      </p>
                      <Button variant="medical" asChild>
                        <a 
                          href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Open Hugging Face Repository
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Basic Usage Example</h4>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre>{`# Basic prediction workflow (conceptual)
# Load and preprocess chest X-ray image
image = load_and_preprocess_xray(image_path)

# Generate prediction
result = model.predict(image)

# Extract results
probability = result['probability']
classification = result['prediction']  # 0: Normal, 1: Pneumonia
report = result['generated_report']
confidence_level = result['confidence']`}</pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Model Outputs</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Binary classification result</li>
                          <li>• Confidence probability (0-1)</li>
                          <li>• Generated medical report</li>
                          <li>• Risk level assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-3">Input Requirements</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Chest X-ray images</li>
                          <li>• 224x224 RGB format</li>
                          <li>• Standard medical imaging</li>
                          <li>• Preprocessed for optimal results</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-success mb-3">Integration Options</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Python API integration</li>
                          <li>• Web interface available</li>
                          <li>• Batch processing support</li>
                          <li>• Custom deployment options</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'limitations' && (
              <div className="space-y-8">
                {/* Limitations and Disclaimers */}
                <Card className="shadow-medical border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-amber-600" />
                      <span>Important Limitations & Disclaimers</span>
                    </CardTitle>
                    <CardDescription>
                      Critical information about model scope and appropriate usage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-800 mb-3">Educational & Research Purpose Only</h4>
                      <ul className="space-y-2 text-sm text-amber-700">
                        <li>• This is a research project for educational exploration</li>
                        <li>• Not intended for clinical use or medical diagnosis</li>
                        <li>• No clinical validation or regulatory approval</li>
                        <li>• Should not be used for patient care decisions</li>
                        <li>• Always consult qualified healthcare professionals</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Technical Constraints</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Limited to pneumonia detection only</li>
                          <li>• Performance tied to training data characteristics</li>
                          <li>• Requires expert medical interpretation</li>
                          <li>• Demonstration implementation for learning</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-3">Appropriate Use Cases</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Academic research and learning</li>
                          <li>• AI algorithm development study</li>
                          <li>• Technical demonstration purposes</li>
                          <li>• Educational and teaching applications</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-3">Responsible AI Development</h4>
                      <p className="text-sm text-blue-700">
                        This project emphasizes ethical awareness, safety considerations, and transparency. 
                        We encourage responsible development practices and community learning while 
                        maintaining clear communication about limitations and appropriate use.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* License Information */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>License & Sharing Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-success mb-2">Licensed under CC BY-NC-ND 4.0</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Permitted Uses</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Academic and educational research</li>
                            <li>• Learning and skill development</li>
                            <li>• Non-commercial study and analysis</li>
                            <li>• Technical evaluation and assessment</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-600 mb-3">Restrictions</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• No commercial or revenue-generating use</li>
                            <li>• No clinical or medical decision-making</li>
                            <li>• No redistribution of model weights</li>
                            <li>• No modifications or derivative works</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card className="shadow-medical bg-gradient-to-r from-primary-light/10 to-accent-light/10">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Explore the Model?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Access the complete model documentation, technical specifications, and interactive demo 
                  on our Hugging Face repository.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="medical" size="lg" asChild>
                    <a 
                      href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Access Model on Hugging Face
                      <ExternalLink className="h-5 w-5 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/contact">
                      Contact Our Team
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;