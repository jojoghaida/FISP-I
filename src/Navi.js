const Navi = ( {cameraPower, setTab} ) => {
  return(
    <div id="navi">
      <div id="naviContent">
        <div onClick={( ) => setTab("CAMERA")}>CAM</div>
        <div onClick={( ) => setTab("GALLERY")}>PHOTOS</div>
      </div>
    </div>
  );
};
export default Navi;
