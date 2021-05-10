import Camera, { DEVICE, FACING_MODE, PLACEMENT } from 'react-camera-ios';
import './camStyles.css';
const constraints = { audio: false, video: { width: 1280, height: 720 } };
async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  console.log(devices);
}
const CamBox = ( ) => {
    getDevices()
  return(
    <div id="cameraView">
      <Camera
            device={DEVICE.MOBILE}
            facingMode={FACING_MODE.ENVIRONMENT}
            placement={PLACEMENT.COVER}
            quality="1"
            onError={error => console.log(error)}
            onTakePhoto={dataUrl => console.log(dataUrl)}
          />
    </div>
  );
};

export default CamBox;
