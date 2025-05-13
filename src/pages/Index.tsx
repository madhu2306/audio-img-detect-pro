
import React from 'react';
import { Link } from 'react-router-dom';
import { Scan, ShieldCheck, Zap, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-bg py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                  Detect AI-Generated <span className="text-primary">Deepfakes</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Fast, accurate detection of AI-generated images, audio, and video using advanced machine learning technology.
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <Link 
                    to="/scanner" 
                    className="scan-btn flex items-center justify-center space-x-2"
                  >
                    <Scan size={20} />
                    <span>Start Scanning</span>
                  </Link>
                  <Link 
                    to="/about" 
                    className="bg-white text-primary hover:bg-gray-50 font-medium py-3 px-8 rounded-lg shadow-md border border-gray-200 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                  alt="AI Detection Illustration" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Detection Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-gradient p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Scan size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-Format Detection</h3>
                <p className="text-gray-600">
                  Analyze images, audio files, and video content with a single powerful tool to identify AI-generated content.
                </p>
              </div>
              
              <div className="card-gradient p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <ShieldCheck size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Accuracy</h3>
                <p className="text-gray-600">
                  Our advanced neural networks deliver industry-leading accuracy in deepfake detection with detailed confidence metrics.
                </p>
              </div>
              
              <div className="card-gradient p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
                <p className="text-gray-600">
                  Get detection results quickly with our optimized processing pipeline, even for high-resolution content.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our platform uses advanced machine learning to detect manipulated content across different media types.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Upload Content</h3>
                  <p className="text-gray-600">Upload the image, audio, or video file you want to analyze.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">AI Analysis</h3>
                  <p className="text-gray-600">Our deep learning algorithms analyze the content for manipulation markers.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">View Results</h3>
                  <p className="text-gray-600">Receive a detailed analysis with confidence scores and highlighted suspicious areas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Detecting Deepfakes Now</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Protect yourself from misinformation with our advanced deepfake detection technology.
            </p>
            <Link 
              to="/scanner" 
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-md inline-flex items-center space-x-2"
            >
              <Scan size={20} />
              <span>Try Scanner</span>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
