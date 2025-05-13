
import React, { useState, useRef } from 'react';
import { FileImage, FileAudio, FileVideo, Upload, X } from 'lucide-react';

interface UploadContainerProps {
  type: 'image' | 'audio' | 'video';
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
}

const UploadContainer: React.FC<UploadContainerProps> = ({ type, onFileSelect, selectedFile }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      validateAndSelectFile(file);
    }
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndSelectFile(file);
    }
  };
  
  const validateAndSelectFile = (file: File) => {
    let valid = false;
    
    if (type === 'image' && file.type.startsWith('image/')) {
      valid = true;
    } else if (type === 'audio' && file.type.startsWith('audio/')) {
      valid = true;
    } else if (type === 'video' && file.type.startsWith('video/')) {
      valid = true;
    }
    
    if (valid) {
      onFileSelect(file);
    } else {
      alert(`Please select a valid ${type} file.`);
    }
  };
  
  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null as unknown as File);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const renderIcon = () => {
    const size = 36;
    const className = "text-primary opacity-70";
    
    if (type === 'image') return <FileImage size={size} className={className} />;
    if (type === 'audio') return <FileAudio size={size} className={className} />;
    if (type === 'video') return <FileVideo size={size} className={className} />;
  };
  
  const renderFilePreview = () => {
    if (!selectedFile) return null;
    
    if (type === 'image') {
      return (
        <div className="mt-3 relative">
          <img 
            src={URL.createObjectURL(selectedFile)} 
            alt="Selected file" 
            className="max-h-32 rounded" 
          />
        </div>
      );
    }
    
    return (
      <div className="mt-2 text-sm text-gray-700 flex items-center">
        <span className="font-medium mr-2">Selected file:</span> {selectedFile.name}
      </div>
    );
  };
  
  const getAcceptedTypes = () => {
    if (type === 'image') return "image/*";
    if (type === 'audio') return "audio/*";
    if (type === 'video') return "video/*";
    return "";
  };
  
  return (
    <div
      className={`upload-container ${isDragging ? 'active' : ''} ${selectedFile ? 'border-primary border-solid' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept={getAcceptedTypes()}
        className="hidden"
      />
      
      {selectedFile ? (
        <div className="text-center">
          {renderFilePreview()}
          <button 
            onClick={clearFile}
            className="mt-3 flex items-center text-sm text-red-500 hover:text-red-700 transition"
          >
            <X size={16} className="mr-1" /> Remove file
          </button>
        </div>
      ) : (
        <div className="text-center">
          {renderIcon()}
          <p className="mt-3 text-lg font-medium text-gray-700 capitalize">{type} Upload</p>
          <p className="mt-1 text-sm text-gray-500">
            Drag & drop your {type} here or click to browse
          </p>
          <div className="mt-4 flex items-center text-sm text-primary">
            <Upload size={16} className="mr-1" /> Upload {type}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadContainer;
