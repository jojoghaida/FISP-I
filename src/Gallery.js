const Gallery = ( {imagesInSession} ) => {
  return(
    <div id="gallery">
      {imagesInSession.map( data => <div><img src={data}/></div> )}
    </div>
  );
};

export default Gallery;
