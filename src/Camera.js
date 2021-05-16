import './camStyles.css';
import Camera, { DEVICE, FACING_MODE, PLACEMENT } from 'react-camera-ios';
const constraints = { audio: false, video: { width: 1280, height: 720 } };
//main
// const x = await getDevices( );
const CamBox = ( {lastImg, setLatestImg, deviceList} ) => {
  console.log(FACING_MODE);
  console.log(deviceList);
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
