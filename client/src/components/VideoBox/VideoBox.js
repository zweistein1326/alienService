import React from "react";
import { Box } from "@chakra-ui/core";
import Webcam from "react-webcam";
import { RiCameraLine, RiCameraOffLine, RiAliensLine} from 'react-icons/ri';
import { FiMic, FiMicOff } from 'react-icons/fi';
import { MdFace } from 'react-icons/md';
import './VideoBox.css';

class VideoBox extends React.Component {
  state = {
    openCamera: false,
    openMic: false,
    openFilter: false,
  }
  cameraOn = () => {
    this.setState({
      openCamera: !this.state.openCamera
    })
  }
  muteOn = () => {
    this.setState({
      openMic: !this.state.openMic
    })
  }
  alienOn = () => {
    this.setState({
      openFilter: !this.state.openFilter
    })
  }
  render() {
    const {openCamera,openMic, openFilter} = this.state
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
          {openCamera ? <Webcam mirrored="true" imageSmoothing="true" size="40" height="80%" width="80%"/> : <div><p>Please Turn On your Video</p><br/></div>}
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
          height="12%"
          width="100%"
          position="relative"
          opacity="none"
          alignItems="space-between"
        >
        <div className="spread">
        <a onClick={this.cameraOn}>{openCamera ? <RiCameraOffLine size="40" className="logo-endcall" /> : <RiCameraLine size="40" className="logo-endcall" />}</a>
        &emsp;&emsp;&emsp;&emsp;
        <a onClick={this.muteOn}>{openMic ? <FiMicOff size="40" className="logo-endcall" /> : <FiMic size="40" className="logo-endcall" />}</a>
        &emsp;&emsp;&emsp;&emsp;
        <a onClick={this.alienOn}>{openFilter ? <RiAliensLine size="40" className="logo-endcall" /> : <MdFace size="40" className="logo-endcall" />}</a>
        </div>
      </Box>
      </Box>
    );
  }
};

export default VideoBox;
