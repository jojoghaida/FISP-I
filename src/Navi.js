//main
const Navi = ( {cameraPower, setTab} ) => {
  return(
    <div id="navi">
      <div id="naviContent">
        <div onClick={( ) => setTab("CAMERA")}>CAM</div>
        <div onClick={( ) => setTab("META")}>META</div>
        <div onClick={( ) => setTab("GALLERY")}>PHOTOS</div>
        <div onClick={( ) => setTab("DOC")}>DOC</div>
      </div>
    </div>
  );
};
export default Navi;
