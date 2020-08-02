import React from "react";
import { Box } from "@chakra-ui/core";
import Webcam from "react-webcam";

class VideoBox extends React.Component {
  state = {
    openCamera: false,
  }
  cameraOn = () => {
    this.setState({
      openCamera: !this.state.openCamera
    })
  }
  render() {
    const {openCamera} = this.state
    return (
      <Box
        height="80vh"
        width="80%"
        margin="2rem"
        alignItems="space-between"
        justifyContent="center"
        backgroundColor="#f2f5f2"
        borderColor="green"
      >
        <Box
          border="2px solid black"
          height="90%"
          width="100%"
          marginBottom="0"
          position="relative"
        >
          {openCamera ? <Webcam mirrored="true" imageSmoothing="true" /> : <div><p>Please Turn On your Video</p><br/></div>}
          <button onClick={this.cameraOn}>{openCamera ? "Turn Camera Off" : 'Turn Camera On'}</button>
          <Box
            border="2px solid black"
            height="28%"
            width="40%"
            bottom="7px"
            right="2"
            position="absolute"
          >
            User2 image goes here
        </Box>
        </Box>
        <Box
          border="2px solid black"
          height="10%"
          width="100%"
          position="relative"
        >
          Option buttons go here
      </Box>
      </Box>
    );
  }
};

export default VideoBox;
