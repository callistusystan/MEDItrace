import React, { Component } from 'react';

import { FormControl, Input, InputLabel, Button, withStyles } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { SymptomsBottomSection } from './SymptomsBottomSection';
import { FormContent } from './FormContent';

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
}))(class extends Component {
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
          <FormControl margin="dense">
            <InputLabel htmlFor="notes">Notes</InputLabel>
            <Input
              id="notes"
              onChange={this.onNotesChange}
              multiline
              value={this.state.notes}
              rows={6}
            />
          </FormControl>
          <input 
            type="file"
            id="take-pic" accept="image/*" 
            onChange={this.onImagePathChange}
            style={{display: 'none'}}
          />
          {
            this.state.imgSrc ? <img src={this.state.imgSrc} className={this.props.classes.pic}/> : null
          }
          <label htmlFor="take-pic">
            <Button component="span">
              <CameraAltIcon className={this.props.classes.leftIcon}/>
              Add Photo
            </Button>            
          </label>
          <SymptomsBottomSection nextButtonText={'Submit'} onNext={this.onNext}/>
        </FormContent>
      </form>
    )
  }
});