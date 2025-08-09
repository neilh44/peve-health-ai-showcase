import HeroSection from '@/components/Home/HeroSection';
import ModelShowcase from '@/components/Home/ModelShowcase';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PeVe-Health | AI Medical Diagnostics - Revolutionizing Healthcare with AI</title>
        <meta 
          name="description" 
          content="PeVe-Health delivers cutting-edge AI models for healthcare diagnostics. Our flagship pneumonia detection system achieves 100% accuracy with automated medical report generation." 
        />
        <meta name="keywords" content="AI healthcare, medical diagnostics, pneumonia detection, medical AI, chest X-ray analysis" />
        <link rel="canonical" href="https://pevehealth.ai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PeVe-Health | AI Medical Diagnostics" />
        <meta property="og:description" content="Revolutionizing healthcare diagnostics with AI-powered precision. 100% accuracy in pneumonia detection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pevehealth.ai" />
      </Helmet>

      <div>
        <HeroSection />
        <ModelShowcase />
      </div>
    </>
  );
};

export default Index;
