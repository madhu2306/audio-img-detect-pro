
import React, { useEffect, useState } from 'react';

interface ConfidenceMeterProps {
  percentage: number;
  isFake: boolean;
}

const ConfidenceMeter: React.FC<ConfidenceMeterProps> = ({ percentage, isFake }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  useEffect(() => {
    // Animate the percentage filling
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  const getColor = () => {
    if (isFake) {
      return 'bg-red-500';
    } else {
      return 'bg-green-500';
    }
  };

  // Create the gauge/speedometer visualization
  const createSpeedometerPath = () => {
    const angleOffset = -180;
    const totalAngle = 180;
    
    // Calculate the angle based on percentage
    const angle = (animatedPercentage / 100) * totalAngle + angleOffset;
    
    // Calculate the end point of the needle
    const centerX = 90;
    const centerY = 90;
    const needleLength = 65;
    const endX = centerX + needleLength * Math.cos(angle * Math.PI / 180);
    const endY = centerY + needleLength * Math.sin(angle * Math.PI / 180);
    
    return `M ${centerX} ${centerY} L ${endX} ${endY}`;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Speedometer visualization */}
      <div className="relative w-44 h-24">
        <svg width="180" height="100" viewBox="0 0 180 100">
          {/* Background arc */}
          <path
            d="M 15 90 A 75 75 0 0 1 165 90"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          
          {/* Colored progress arc */}
          <path
            d={`M 15 90 A 75 75 0 0 1 ${15 + (150 * animatedPercentage / 100)} 90`}
            stroke={isFake ? "#ef4444" : "#22c55e"}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Center point */}
          <circle cx="90" cy="90" r="3" fill="#374151" />
          
          {/* Needle */}
          <path
            d={createSpeedometerPath()}
            stroke="#374151"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        
        {/* Percentage text overlay */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-3xl font-bold">
            {Math.round(animatedPercentage)}%
          </div>
          <div className={`text-sm font-medium ${isFake ? 'text-red-600' : 'text-green-600'}`}>
            {isFake ? 'FAKE' : 'REAL'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceMeter;
