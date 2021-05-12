import './camStyles.css';
import Camera, { DEVICE, FACING_MODE, PLACEMENT } from 'react-camera-ios';
const constraints = { audio: false, video: { width: 1280, height: 720 } };
async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
};
//main
const CamBox = ( {lastImg, setLatestImg} ) => {
  getDevices( );
  console.log(FACING_MODE);
  return(
    <div id="cameraView">
      <Camera
        device={DEVICE.MOBILE}
        facingMode={FACING_MODE.ENVIRONMENT}
        placement={PLACEMENT.COVER}
        quality="1"
        onError={error => console.log(error)}
        onTakePhoto={dataUrl => setLatestImg(dataUrl)}
      />
    <div id="lastImgPreview">
        <img src={`${lastImg}`}/>
      </div>
    </div>
  );
}; export default CamBox;
