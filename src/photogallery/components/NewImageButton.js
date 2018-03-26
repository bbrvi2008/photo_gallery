import React, { Component } from 'react';

import { Glyphicon, Panel, FormControl } from 'react-bootstrap';

import axios from 'axios';

class NewImageButton extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      image: null
    }
  }*/

  onChange = (e) => {
    const { onAddImage } = this.props;

    console.log("Uploading");
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = (upload) => {
        const dataURL = upload.target.result;
        const imageBase64 = dataURL.replace(/^.*;base64,/, "");

        onAddImage(imageBase64)


        /*console.log(base64);

        



        self.setState({
            image: base64
        });

        console.log(this.state.image);*/
    };
    reader.readAsDataURL(file);
    /*console.log(this.state.image);
    console.log("Uploaded");*/

  }
  
  render() {
    return (
      <Panel className="square">
        <Panel.Body className="content uploader">
          <label className="">
            <Glyphicon glyph="plus" />       
            <input type="file" accept="image/*" onChange={this.onChange} />        
          </label>
        </Panel.Body>
      </Panel>
    );
  }
}

export default NewImageButton;