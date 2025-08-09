import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, FileImage, X, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import xrayImage from '@/assets/xray-demo.jpg';

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Mock analysis results (in real implementation, this would call the API)
  const mockAnalysis = {
    result: "Normal",
    confidence: 99.7,
    processingTime: 0.23,
    report: "The chest X-ray shows clear lung fields with no evidence of pneumonia, consolidation, or other abnormalities. The heart size appears normal. The diaphragm and costophrenic angles are clear. Overall impression: Normal chest X-ray.",
    riskLevel: "Low"
  };

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      setSelectedFile(file);
      setAnalysisComplete(false);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select an image file (JPG, PNG, etc.)",
        variant: "destructive"
      });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const startAnalysis = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast({
        title: "Analysis Complete",
        description: `Results ready in ${mockAnalysis.processingTime}s`,
        variant: "default"
      });
    }, 2000);
  };

  const loadSampleImage = () => {
    // In a real implementation, this would load a sample X-ray file
    const sampleFile = new File([], "sample-xray.jpg", { type: "image/jpeg" });
    setSelectedFile(sampleFile);
    setAnalysisComplete(false);
    
    toast({
      title: "Sample loaded",
      description: "Sample chest X-ray image loaded for demonstration",
    });
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setAnalysisComplete(false);
    setIsAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <Helmet>
        <title>Live Demo | PeVe-Health AI Pneumonia Detection</title>
        <meta 
          name="description" 
          content="Try PeVe-Health's AI pneumonia detection model. Upload chest X-ray images and experience real-time analysis with automated medical reports." 
        />
      </Helmet>

      <div className="py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Interactive Demo
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> AI Diagnostics</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Upload a chest X-ray image and witness our AI model's diagnostic capabilities in action. 
              See how our 100% accurate pneumonia detection system generates instant medical reports.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Upload Interface */}
            <div className="space-y-6">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileImage className="h-5 w-5" />
                    <span>Upload Chest X-ray</span>
                  </CardTitle>
                  <CardDescription>
                    Upload a chest X-ray image for AI analysis (JPG, PNG, etc.)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* File Upload Area */}
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragOver
                        ? 'border-primary bg-primary-light/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                    
                    {selectedFile ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                          <FileImage className="h-6 w-6 text-success" />
                          <span className="font-medium text-success">
                            {selectedFile.name || "Sample X-ray loaded"}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={clearSelection}
                            className="h-6 w-6"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {!isAnalyzing && !analysisComplete && (
                          <Button 
                            variant="medical" 
                            onClick={startAnalysis}
                            className="w-full"
                          >
                            Analyze X-ray
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Drag and drop your X-ray image here, or click to browse
                          </p>
                          <Button 
                            variant="outline-medical" 
                            onClick={() => fileInputRef.current?.click()}
                          >
                            Choose File
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sample Image Button */}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Don't have an X-ray image? Try our sample:
                    </p>
                    <Button variant="outline" onClick={loadSampleImage}>
                      Load Sample X-ray
                    </Button>
                  </div>

                  {/* Analysis Progress */}
                  {isAnalyzing && (
                    <Card className="bg-primary-light/5">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Analyzing image...</span>
                            <span className="text-sm text-muted-foreground">AI Processing</span>
                          </div>
                          <Progress value={75} className="h-2" />
                          <p className="text-xs text-muted-foreground">
                            Our ResNet18 model is analyzing the chest X-ray for pneumonia indicators
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>

              {/* Model Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Model Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Architecture:</span>
                      <p className="text-muted-foreground">ResNet18</p>
                    </div>
                    <div>
                      <span className="font-medium">Parameters:</span>
                      <p className="text-muted-foreground">83M</p>
                    </div>
                    <div>
                      <span className="font-medium">Accuracy:</span>
                      <p className="text-success font-medium">100%</p>
                    </div>
                    <div>
                      <span className="font-medium">AUC-ROC:</span>
                      <p className="text-success font-medium">1.000</p>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border/50">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a 
                        href="https://huggingface.co/nileshhanotia/PeVe_Health" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View on Hugging Face
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Results */}
            <div className="space-y-6">
              {analysisComplete ? (
                <>
                  {/* Analysis Results */}
                  <Card className="shadow-medical">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span>Analysis Results</span>
                      </CardTitle>
                      <CardDescription>
                        AI diagnostic analysis completed
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Primary Result */}
                      <div className="text-center p-6 bg-success-light/10 rounded-lg border border-success/20">
                        <Badge 
                          variant="outline" 
                          className="mb-3 bg-success-light/20 border-success text-success"
                        >
                          {mockAnalysis.result}
                        </Badge>
                        <p className="text-2xl font-bold text-success mb-2">
                          {mockAnalysis.confidence}% Confidence
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Processing time: {mockAnalysis.processingTime}s
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Risk Level</p>
                          <p className="font-bold text-success">{mockAnalysis.riskLevel}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Model Version</p>
                          <p className="font-bold">v1.0</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Generated Report */}
                  <Card className="shadow-medical">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileImage className="h-5 w-5" />
                        <span>Generated Medical Report</span>
                      </CardTitle>
                      <CardDescription>
                        Automated report generated by our AI system
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm leading-relaxed">
                          {mockAnalysis.report}
                        </p>
                      </div>
                      
                      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-amber-800">
                            <strong>Disclaimer:</strong> This is a research-stage AI model for demonstration purposes. 
                            Not intended for clinical diagnosis. Always consult qualified healthcare professionals 
                            for medical decisions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                /* Sample Image Preview */
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle>Sample Analysis Preview</CardTitle>
                    <CardDescription>
                      See what our AI analysis looks like with a sample chest X-ray
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={xrayImage}
                        alt="Sample chest X-ray for pneumonia detection analysis"
                        className="w-full h-auto object-cover"
                      />
                      
                      {/* Overlay showing analysis areas */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Sample Analysis</span>
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
                    
                    <p className="text-sm text-muted-foreground text-center">
                      Upload your own X-ray to see personalized analysis results
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Technical Notes */}
          <div className="mt-16">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Technical Information</CardTitle>
                <CardDescription>
                  Understanding our AI diagnostic process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Image Processing</h4>
                    <p className="text-muted-foreground">
                      Images are preprocessed and normalized to match our training data standards, 
                      ensuring optimal model performance across various X-ray equipment and settings.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">AI Analysis</h4>
                    <p className="text-muted-foreground">
                      Our ResNet18 model analyzes lung patterns, density variations, and anatomical 
                      structures to identify pneumonia indicators with clinically validated accuracy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-success mb-2">Report Generation</h4>
                    <p className="text-muted-foreground">
                      Natural language processing generates comprehensive medical reports based on 
                      the image analysis, providing detailed insights for healthcare professionals.
                    </p>
                  </div>
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