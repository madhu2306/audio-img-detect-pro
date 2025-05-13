
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scan, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UploadContainer from '../components/UploadContainer';

const Scanner: React.FC = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handleScan = () => {
    if (!imageFile && !audioFile && !videoFile) {
      toast("Please upload at least one file to scan", {
        icon: <AlertTriangle className="text-yellow-500" size={18} />,
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate loading for demo purposes
    setTimeout(() => {
      // Determine which file to analyze
      let fileToAnalyze = imageFile || audioFile || videoFile;
      
      // Navigate to results page with file data
      navigate('/results', { 
        state: { 
          fileType: imageFile ? 'image' : audioFile ? 'audio' : 'video',
          fileName: fileToAnalyze?.name,
          fileSize: fileToAnalyze?.size,
          fileData: URL.createObjectURL(fileToAnalyze as Blob)
        } 
      });
      
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="gradient-bg py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Deepfake Detection Scanner</h1>
              <p className="text-lg text-gray-600 mb-8">
                Upload your image, audio, or video file to analyze it for signs of AI manipulation.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <UploadContainer 
                  type="image" 
                  onFileSelect={setImageFile}
                  selectedFile={imageFile} 
                />
                <UploadContainer 
                  type="audio" 
                  onFileSelect={setAudioFile}
                  selectedFile={audioFile} 
                />
                <UploadContainer 
                  type="video" 
                  onFileSelect={setVideoFile}
                  selectedFile={videoFile} 
                />
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  className={`scan-btn inline-flex items-center space-x-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  onClick={handleScan}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Scanning...</span>
                    </>
                  ) : (
                    <>
                      <Scan size={20} />
                      <span>Scan for Deepfakes</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">How Our Scanner Works</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Upload Your Content</h3>
                    <p className="text-gray-600">
                      Simply upload the image, audio, or video file you want to analyze. We support most common file formats.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Advanced AI Analysis</h3>
                    <p className="text-gray-600">
                      Our neural networks analyze your content for inconsistencies, artifacts, and patterns that indicate potential manipulation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Detailed Results</h3>
                    <p className="text-gray-600">
                      Receive a comprehensive analysis including confidence scores, highlighted manipulation areas, and an explanation of the findings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scanner;
