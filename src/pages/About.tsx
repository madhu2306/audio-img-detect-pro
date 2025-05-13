
import React from 'react';
import { Shield, Users, Zap, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="gradient-bg py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About DeepfakeDetect</h1>
              <p className="text-lg text-gray-600">
                Our mission is to combat misinformation by providing accessible tools for detecting AI-generated media.
                We use advanced neural networks to identify manipulated content across multiple media formats.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
              <p className="text-gray-600 mb-8">
                DeepfakeDetect uses state-of-the-art convolutional neural networks and audio analysis algorithms to identify manipulated content. 
                Our technology can detect subtle inconsistencies in images, unusual patterns in audio spectrograms, and temporal anomalies in video frames.
              </p>
              
              <div className="space-y-8 mt-12">
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <Shield size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Image Detection</h3>
                    <p className="text-gray-600">
                      Our image detection models are trained on thousands of real and AI-generated images to identify inconsistencies in lighting, shadows, reflections, and facial features. We analyze noise patterns and compression artifacts that are characteristic of synthetic images.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <Zap size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Audio Analysis</h3>
                    <p className="text-gray-600">
                      For audio content, we extract MFCC (Mel-Frequency Cepstral Coefficients) features to identify unnatural speech patterns, unusual spectral characteristics, and other artifacts typically present in synthetic speech and deepfake audio clips.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <Award size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Video Processing</h3>
                    <p className="text-gray-600">
                      Our video detection analyzes both spatial and temporal consistency across frames, looking for unnatural movements, inconsistent blinking patterns, and synchronization issues between audio and visual elements that often appear in deepfake videos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why This Matters</h2>
              <p className="text-gray-600 mb-12">
                As AI-generated content becomes increasingly sophisticated and widespread, the ability to distinguish between authentic and synthetic media is crucial for:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Combating Misinformation</h3>
                  <p className="text-gray-600">
                    Preventing the spread of false information through manipulated media that could mislead the public or damage reputations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Preserving Trust</h3>
                  <p className="text-gray-600">
                    Maintaining trust in digital media by providing tools to verify authenticity in an era where seeing is no longer believing.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Protecting Individuals</h3>
                  <p className="text-gray-600">
                    Helping people protect themselves from identity theft, fraud, and harassment through manipulated media.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Supporting Journalism</h3>
                  <p className="text-gray-600">
                    Providing journalists and fact-checkers with tools to verify the authenticity of media content before publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              DeepfakeDetect was developed by a team of AI researchers, computer vision specialists, and information security experts committed to fighting digital misinformation.
            </p>
            
            <div className="flex justify-center items-center">
              <Users size={120} className="text-primary opacity-70" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
