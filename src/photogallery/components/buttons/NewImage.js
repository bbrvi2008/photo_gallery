import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';
import ButtonLayout from './Layout';

class NewImage extends Component {
  onChange = (e) => {
    const { onAddImage } = this.props;

    console.log("Uploading");
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = (upload) => {
        const dataURL = upload.target.result;
        const imageBase64 = dataURL.replace(/^.*;base64,/, "");

        onAddImage(imageBase64);

        console.log('Uploaded');
    };
    reader.readAsDataURL(file);
  }
  
  render() {
    return (
      <ButtonLayout>
        <label className="new_image">
          <Glyphicon glyph="plus" />       
          <input type="file" accept="image/*" onChange={this.onChange} className="new_image-input"  />        
        </label>
      </ButtonLayout>
    );
  }
}

export default NewImage;