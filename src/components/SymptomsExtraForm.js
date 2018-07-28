import React, { Component } from 'react';

import { FormControl, Input, InputLabel, Button, withStyles } from '@material-ui/core';

import { uploadImage } from '../utils/FirebaseHandler';
import { SymptomsBottomSection } from './SymptomsBottomSection';
import { FormContent } from './FormContent';

export const SymptomsExtraForm = withStyles({
  
})(class extends Component { 
  constructor() {
    super();
    this.state = {
      notes: '',
      imagePath: null
    }    
  }

  onNotesChange = (e) => {
    this.setState({
      notes: e.target.value
    });
  }

  onNext = (state) => {
    this.props.onNext(state);
  }

  onImagePathChange = (e) => {
    for(const file of e.target.files) {
      uploadImage(file);
    }
  }

  render() {
    return (
      <form>
        <FormContent title="Extras">        
          <input type="file" name="pic" accept="image/*" onChange={this.onImagePathChange}/>
          <FormControl margin="dense">
            <InputLabel htmlFor="notes" onChange={this.onImagePathChange}>Notes</InputLabel>
            <Input
              id="notes"
              onChange={this.onNotesChange}
              multiline
              value={this.state.notes}
              rows={5}
            />
          </FormControl>
          <SymptomsBottomSection nextButtonText={'Submit'} onNext={this.props.onNext}/>
        </FormContent>
      </form>
    )
  }
});