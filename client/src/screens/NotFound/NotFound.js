import React, {Component} from 'react';
import Lottie from 'react-lottie';
import animationData from './404.json';

class NotFound extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className="lottie-wrapper">
        <Lottie options={defaultOptions} height={450} width={450} />
      </div>
    );
  }
}

export default NotFound;
