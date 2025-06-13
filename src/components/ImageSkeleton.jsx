import React from 'react'

const ImageSkeleton = () => {
  return (
    <div className="w-full h-full animate-pulse">
      <div className="w-full h-full bg-gray-800 rounded-lg"></div>
    </div>
  )
}

export default ImageSkeleton
