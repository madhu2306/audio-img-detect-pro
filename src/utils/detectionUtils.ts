
// This is a simplified mock implementation for frontend demonstration
// In a real application, this would connect to a backend API that runs the actual ML models

export interface DetectionResult {
  isFake: boolean;
  confidence: number;
  regions?: FakeRegion[]; // For images and videos
  explanation: string;
}

export interface FakeRegion {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Mock detection function for frontend demonstration
export const detectFake = (file: File): Promise<DetectionResult> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // For demonstration purposes, we'll randomly decide if something is fake
      // In a real app, this would call your Python model through an API
      const isFake = Math.random() > 0.5;
      const confidence = isFake ? 
        Math.floor(Math.random() * 30) + 70 : // 70-99% for fakes
        Math.floor(Math.random() * 30) + 70;  // 70-99% for real
      
      let regions: FakeRegion[] = [];
      let explanation = "";
      
      if (isFake) {
        // Add fake regions for images
        if (file.type.startsWith('image/')) {
          regions = [
            { x: 30, y: 40, width: 100, height: 70 },
            { x: 150, y: 80, width: 60, height: 50 }
          ];
          explanation = "Inconsistencies detected in facial features, particularly around the eyes and mouth. The image shows unnatural smoothing and texture patterns consistent with GAN-generated content.";
        } else if (file.type.startsWith('audio/')) {
          explanation = "Analysis detected unnatural voice patterns and spectral inconsistencies typical of AI-generated audio. Voice formants show unusual smoothing and transitions.";
        } else if (file.type.startsWith('video/')) {
          regions = [
            { x: 100, y: 120, width: 80, height: 60 }
          ];
          explanation = "Multiple frames show temporal inconsistencies and unnatural facial movements. Background elements remain static while facial features move in ways inconsistent with natural human expressions.";
        }
      } else {
        if (file.type.startsWith('image/')) {
          explanation = "Image exhibits natural lighting conditions, consistent noise patterns, and authentic facial imperfections typical of genuine photography.";
        } else if (file.type.startsWith('audio/')) {
          explanation = "Analysis confirms natural voice patterns, expected background noise variation, and authentic vocal tract resonances consistent with human speech.";
        } else if (file.type.startsWith('video/')) {
          explanation = "Video displays consistent temporal patterns, natural motion blur, and authentic lighting interactions across all frames.";
        }
      }
      
      resolve({
        isFake,
        confidence,
        regions,
        explanation
      });
    }, 2000);
  });
};
