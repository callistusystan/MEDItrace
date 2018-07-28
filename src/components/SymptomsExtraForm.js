import React, { Component } from 'react';

import { FormContent } from './FormContent';
import { FormControl, Input, InputLabel } from '@material/core';

export class SymptomsExtraForm extends Component { 
  render() {
    return (
      <form>
        <FormContent title="Extras">        
          <input type="file" name="pic" accept="image/*"/>
          <FormControl error={this.error.options !== undefined} margin="dense">
            <InputLabel htmlFor="notes">Notes</InputLabel>
            <Input
              id="notes"
              onChange={this.onOptionsChange}
              multiline
              rows={5}
            />
          </FormControl>
        </FormContent>
      </form>
    )
  }
}