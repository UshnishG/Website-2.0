import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      >
        <source src="/assets/videoplayback.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;