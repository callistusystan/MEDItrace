import React, { Component } from 'react';
import Img from 'react-image';

import { FormControl, Input, InputLabel, Button, withStyles } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { SymptomsBottomSection } from './SymptomsBottomSection';
import { FormContent } from './FormContent';
import { Fade } from '@material-ui/core';
import { GridLoader } from 'react-spinners';

export const SymptomsExtraForm = withStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  // Probably should have called this imagePreview or something
  pic: {
    objectFit: 'contain',
    background: '#000',
    objectPosition: 'center',
    maxHeight: '384px'
  }
}, { withTheme: true }))(class extends Component {
  constructor() {
    super();
    this.state = {
      note: '',
      imgFiles: []
    }    
  }

  onNotesChange = (e) => {
    this.setState({
      note: e.target.value
    });
  }

  onNext = () => {
    console.log(this.state);
    console.log('Next form...');
    this.props.onNext(this.state);
  }

  onImagePathChange = async (e) => {
    console.log('Adding files');
    console.log(e.target.files.length);
    this.setState({
      imgFiles: e.target.files
    });
    if (e.target.files.length > 0) {
      console.log('Loading image for previewing');
      const file = e.target.files[0];
      const fr = new FileReader();
      fr.onload = this.onPhotoFileLoad;
      fr.readAsDataURL(file);
    }
  }

  onPhotoFileLoad = (e) => {
    console.log('Loaded image!');
    this.setState({
      imgSrc: e.target.result
    });
  }

  render() {
    return (
      <form>
        <FormContent title="Extras">
          <Fade in timeout={400}>
            <div>
          <FormControl margin="dense" style={{ width: '100%' }}>
            <InputLabel htmlFor="notes">Notes</InputLabel>
            <Input
              id="notes"
              onChange={this.onNotesChange}
              multiline
              fullWidth
              value={this.state.notes}
            />
          </FormControl>
            </div>
          </Fade>
          <Fade in timeout={600}>
            <div style={{ marginTop: 16 }}>
          <input 
            type="file"
            id="take-pic" accept="image/*" 
            onChange={this.onImagePathChange}
            style={{display: 'none'}}
          />
          {
            this.state.imgSrc ? <Img src={this.state.imgSrc} loader={<div style={{ display : 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 260 }}><GridLoader color='rgb(255, 91, 91)'  /></div>} className={this.props.classes.pic} style={{ width: '100%', height: 'auto' }}/> : null
          }
          <label htmlFor="take-pic">
            <Button component="span">
              <CameraAltIcon className={this.props.classes.leftIcon}/>
              Add Photo
            </Button>            
          </label>
            </div>
          </Fade>
          <Fade in timeout={800}>
            <div style={{ marginTop: 16 }}>
              <SymptomsBottomSection nextButtonText={'Submit'} onNext={this.onNext}/>
            </div>
          </Fade>
        </FormContent>
      </form>
    )
  }
});