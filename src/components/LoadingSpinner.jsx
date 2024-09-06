import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#4A90E2]"></div>
    </div>
  );
};

export default LoadingSpinner;
