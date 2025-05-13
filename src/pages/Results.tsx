
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Scan, X, Check, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConfidenceMeter from '../components/ConfidenceMeter';
import { detectFake, DetectionResult, FakeRegion } from '../utils/detectionUtils';

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const { fileType, fileName, fileData } = location.state || {};
  
  useEffect(() => {
    if (!fileData) {
      navigate('/scanner');
      return;
    }
    
    const runDetection = async () => {
      try {
        // Convert the file data URL back to a file object for processing
        const response = await fetch(fileData);
        const blob = await response.blob();
        const file = new File([blob], fileName, { type: blob.type });
        
        // Run the detection
        const detectionResult = await detectFake(file);
        setResult(detectionResult);
      } catch (error) {
        console.error("Error during detection:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    runDetection();
  }, [fileData, fileName, navigate]);
  
  const renderFilePreview = () => {
    if (!fileData) return null;
    
    if (fileType === 'image') {
      return (
        <div className="relative">
          <img 
            src={fileData} 
            alt="Analyzed content" 
            className="w-full max-h-80 object-contain rounded-lg"
          />
          {!isLoading && result?.isFake && result.regions && result.regions.map((region, index) => (
            <div
              key={index}
              className="fake-highlight"
              style={{
                left: `${region.x}px`,
                top: `${region.y}px`,
                width: `${region.width}px`,
                height: `${region.height}px`
              }}
            ></div>
          ))}
        </div>
      );
    }
    
    if (fileType === 'audio') {
      return (
        <audio controls className="w-full">
          <source src={fileData} />
          Your browser does not support the audio element.
        </audio>
      );
    }
    
    if (fileType === 'video') {
      return (
        <div className="relative">
          <video controls className="w-full max-h-80 object-contain rounded-lg">
            <source src={fileData} />
            Your browser does not support the video element.
          </video>
        </div>
      );
    }
    
    return null;
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="spinner-border w-12 h-12 mb-4 mx-auto">
              <svg className="animate-spin h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-medium">Analyzing your content...</h2>
            <p className="text-gray-500 mt-2">Please wait while our AI examines the file for signs of manipulation.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className={`${result?.isFake ? 'bg-red-500' : 'bg-green-500'} p-4 text-white flex items-center justify-between`}>
                <div className="flex items-center">
                  {result?.isFake ? (
                    <X size={20} className="mr-2" />
                  ) : (
                    <Check size={20} className="mr-2" />
                  )}
                  <h1 className="text-xl font-bold">
                    {result?.isFake ? 'Deepfake Detected' : 'Authentic Content Verified'}
                  </h1>
                </div>
                <div className="text-sm bg-white/20 px-3 py-1 rounded">
                  {fileType.toUpperCase()}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
                    
                    {renderFilePreview()}
                    
                    <div className="mt-4">
                      <div className="text-sm text-gray-600 mb-1">Filename</div>
                      <div className="text-gray-900 font-medium">{fileName}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <ConfidenceMeter 
                        percentage={result?.confidence || 0} 
                        isFake={result?.isFake || false} 
                      />
                    </div>
                    
                    <div className={`p-4 rounded-lg ${result?.isFake ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                      <div className="flex items-center mb-2">
                        {result?.isFake ? (
                          <AlertTriangle size={18} className="mr-2" />
                        ) : (
                          <Check size={18} className="mr-2" />
                        )}
                        <h3 className="font-medium">
                          {result?.isFake ? 'Manipulation Detected' : 'No Manipulation Detected'}
                        </h3>
                      </div>
                      <p className="text-sm">
                        {result?.explanation || "No detailed explanation available."}
                      </p>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold mb-2">Technical Details</h3>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div>Detection Confidence:</div>
                          <div className="font-medium">{result?.confidence}%</div>
                          
                          <div>Content Type:</div>
                          <div className="font-medium capitalize">{fileType}</div>
                          
                          <div>Detection Result:</div>
                          <div className="font-medium">{result?.isFake ? 'AI-Generated/Manipulated' : 'Authentic'}</div>
                          
                          {result?.regions && (
                            <>
                              <div>Suspicious Regions:</div>
                              <div className="font-medium">{result.regions.length}</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => navigate('/scanner')}
                        className="scan-btn"
                      >
                        <Scan size={18} className="mr-2" />
                        Scan Another File
                      </button>
                    </div>
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

export default Results;
