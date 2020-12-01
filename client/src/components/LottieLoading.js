import React, { useMemo } from 'react';
import Lottie from 'react-lottie';
import animationData from 'src/assets/lotties/lottie-couple.json';

const LoadingAnimation = () => {
  const options = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }),
    []
  );

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Lottie options={options} height={400} width={400} />
    </div>
  );
};

export default LoadingAnimation;
