import React, { Component } from 'react';

export class Camera extends Component { 
  constructor() {
    super();
    this.state = {
      captureIsReady: true
    };
  }

  startVideoCapture = async () => {
    try { 
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
      this.handleCaptureSuccess(stream);
    } catch(error) {
      this.handleCaptureError(error);
    }
  }

  handleCaptureSuccess = (stream) => {
    this.setState({
      captureIsReady: false
    });
    this.video.srcObject = stream;
  }


  handleCaptureError = (error) => {
    console.error(error);
  }

  componentDidMount() {    
    this.startVideoCapture();
  }

  takePicture = () => {
    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    const context = this.canvas.getContext('2d');
    context.translate(this.canvas.width, 0);
    context.scale(-1, 1);

    context.drawImage(0, 0);
    

    // Other browsers will fall back to image/png
    const src = this.canvas.toDataURL('image/webp');

    this.props.onPictureTaken({ src });
  }

  setTakePicButtonRef = (ref) => this.takePicButton = ref;

  setCaptureVideoRef = (ref) => this.video = ref;

  setCanvasRef = (ref) => this.canvas = ref;

  render() {
    return (
      <div>
        <video autoPlay style={{ transform: 'scaleX(-1)' }} ref={this.setCaptureVideoRef}></video>
        <canvas style={{display: 'none'}} ref={this.setCanvasRef}></canvas>
        <button 
          ref={this.setTakePicButtonRef}
          disabled={this.state.captureIsReady}
          onClick={this.takePicture}>
          Take Pic
        </button>
      </div>
    );
  }
}