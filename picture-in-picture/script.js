// const videoElement = document.getElementById('video');
// const button = document.getElementById('button');

// //prompt to select media stream, pass to video element, then play
// async function selectMediaStream() {
//   try{
//     const mediaStream = await navigator.mediaDevices.getDisplayMedia();
//     videoElement.srcObject = mediaStream;
//     videoElement.onloadedmetadata = () => {
//       videoElement.play();
//     }
//   } catch (error) {
//     //Catch Error Here 
//     console.log('whoops, error here:', error);
//   }
// }

// //on load 
// selectMediaStream();



const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;

    // Remove the onloadedmetadata event and play directly
    videoElement.play();
  } catch (error) {
    // Catch Error Here 
    console.log('Whoops, error here:', error);
  }
}


button.addEventListener('click', async () => {
  //disable Button
  button.disabled = true;
  //start picture in picture 
  await videoElement.requestPictureInPicture();
  //reset Button
  button.disabled = false;
});

// on load 
selectMediaStream();
