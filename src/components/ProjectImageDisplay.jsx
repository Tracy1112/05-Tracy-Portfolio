import React from 'react'
import ImageSkeleton from './ImageSkeleton' // Assuming ImageSkeleton is in the same components directory

const ProjectImageDisplay = ({
  currentProject,
  currentImageIndex,
  isImageLoading,
  imageError,
  handleImageLoad,
  handleImageError,
  getImageSrc,
}) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-full">
      {/* Two side-by-side images */}
      <div className="flex gap-2 w-full max-w-3xl aspect-[4/3] border-3 border-stone-700 rounded-3xl p-2 bg-stone-700">
        {/* Left Image */}
        <div className="flex-[3] bg-white rounded-2xl overflow-hidden flex items-center justify-center">
          {currentProject.images && currentProject.images[0] ? (
            <a
              href={currentProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full block"
            >
              {isImageLoading && <ImageSkeleton />}
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl">
                  Failed to load image
                </div>
              ) : (
                <picture
                  className={`w-full h-full ${
                    isImageLoading ? 'hidden' : 'block'
                  } group`}
                >
                  <source
                    srcSet={getImageSrc(currentProject.images[0]).webp}
                    type="image/webp"
                  />
                  <img
                    src={getImageSrc(currentProject.images[0]).fallback}
                    alt={`${currentProject.title} left`}
                    className="w-full h-full object-cover object-left"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                </picture>
              )}
            </a>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
              No Image
            </div>
          )}
        </div>
        {/* Right Image */}
        <div className="flex-[1] bg-white rounded-2xl overflow-hidden flex items-center justify-center">
          {currentProject.images && currentProject.images[1] ? (
            <a
              href={currentProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full block"
            >
              {isImageLoading && <ImageSkeleton />}
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl">
                  Failed to load image
                </div>
              ) : (
                <picture
                  className={`w-full h-full ${
                    isImageLoading ? 'hidden' : 'block'
                  } group`}
                >
                  <source
                    srcSet={getImageSrc(currentProject.images[1]).webp}
                    type="image/webp"
                  />
                  <img
                    src={getImageSrc(currentProject.images[1]).fallback}
                    alt={`${currentProject.title} right`}
                    className="w-full h-full object-cover object-left"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                </picture>
              )}
            </a>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
              No Image
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectImageDisplay
