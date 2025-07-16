import React, { useState } from "react";
import "./OptimizedImage.css";

const OptimizedImage = ({ 
  src, 
  alt = "", 
  className = "", 
  loading = "lazy",
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad && onLoad();
  };

  const handleError = () => {
    setHasError(true);
    onError && onError();
  };

  if (hasError) {
    return (
      <div className={`optimized-image-error ${className}`} {...props}>
        <span>Image failed to load</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`optimized-image ${isLoaded ? 'loaded' : 'loading'} ${className}`}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage; 