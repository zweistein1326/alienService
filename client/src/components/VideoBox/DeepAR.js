// import React, { Component } from "react";
// // import Deepar from "./lib/deepar";

// class DeepAR extends Component {
//   render() {
//     // var canvasHeight = window.innerHeight;
//     // var canvasWidth = window.innerWidth;

//     // var deepAR = Deepar({
//     //   canvasWidth: 0.66 * canvasWidth,
//     //   canvasHeight: canvasHeight,

//     //   licenseKey:
//     //     "001fc79848e4705390dbb6f30370ef8bf3c787d53f7a378cce2129ad3278a9cd2dcc49ea18498487",
//     //   canvas: document.getElementById("deepar-canvas"),
//     //   numberOfFaces: 1,
//     //   onInitialize: function () {
//     //     // start video immediately after the initalization, mirror = true
//     //     deepAR.startVideo(true);

//     //     // or we can setup the video element externally and call deepAR.setVideoElement (see startExternalVideo function below)

//     //     deepAR.switchEffect(
//     //       0,
//     //       "slot",
//     //       "./effects/alien_galaxy_background",
//     //       function () {
//     //         // effect loaded
//     //       }
//     //     );
//     //   },
//     // });

//     // deepAR.onCameraPermissionAsked = function () {
//     //   console.log("camera permission asked");
//     // };

//     // deepAR.onCameraPermissionGranted = function () {
//     //   console.log("camera permission granted");
//     // };

//     // deepAR.onCameraPermissionDenied = function () {
//     //   console.log("camera permission denied");
//     // };

//     // deepAR.onScreenshotTaken = function (photo) {
//     //   console.log("screenshot taken");
//     // };

//     // deepAR.onImageVisibilityChanged = function (visible) {
//     //   console.log("image visible", visible);
//     // };

//     // deepAR.onFaceVisibilityChanged = function (visible) {
//     //   console.log("face visible", visible);
//     // };

//     // deepAR.onVideoStarted = function () {
//     //   var loaderWrapper = document.getElementById("loader-wrapper");
//     //   loaderWrapper.style.display = "none";
//     // };

//     // deepAR.downloadFaceTrackingModel("lib/models-68-extreme.bin");
//     return (
//       <div>
//         <canvas
//           class="deepar"
//           id="deepar-canvas"
//           oncontextmenu="event.preventDefault()"
//         ></canvas>
//         <div id="loader-wrapper">
//           <span class="loader"></span>
//         </div>
//       </div>
//     );
//   }
// }

// export default DeepAR;
