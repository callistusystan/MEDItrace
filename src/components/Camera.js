import React, { Component } from 'react';

import { TakePictureIcon } from './TakePictureIcon';

import { withStyles } from '@material-ui/core';

class Camera extends Component { 
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
      console.debug('Obtained video capture permissions :D');
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
    console.error('Failed to obtain video capture permissions', error);
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
      <div className={this.props.classes.container}>
        <canvas style={{display: 'none'}} ref={this.setCanvasRef}/>
        <video 
          autoPlay 
          style={{ transform: 'scaleX(-1)', background: 'rgb(0,0,0)' }} 
          ref={this.setCaptureVideoRef}/>
        <div className={this.props.classes.bottomBar}>
          <button 
            className={this.props.classes.takePicButton}
            width={128}
            height={128}
            ref={this.setTakePicButtonRef}
            disabled={this.state.captureIsReady}
            onClick={this.takePicture}
            >
            <TakePictureIcon disabled={this.state.captureIsReady}/>
          </button>
        </div>
      </div>
    );
  }
}

const StyledCamera = withStyles({
  bottomBar: {
    alignSelf: 'flex-end',
    width: '100%',
    height: '128px',
    display: 'flex'
  },
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    paddingTop: '56.25%',
    flexDirection: 'column'
  },
  takePicButton: {
    alginSelf: 'center'
  }
}, { withTheme: true })(Camera);

export { StyledCamera as Camera };