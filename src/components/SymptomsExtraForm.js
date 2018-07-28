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
              rows={5}
            />
          </FormControl>
          <input 
            type="file"
             name="pic" accept="image/*" onChange={this.onImagePathChange}/>
          <SymptomsBottomSection nextButtonText={'Submit'} onNext={this.onNext}/>
        </FormContent>
      </form>
    )
  }
});