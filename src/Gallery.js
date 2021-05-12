const Gallery = ( {imagesInSession} ) => {
  return(
    <div id="gallery">
      <div id="photoGrid">
        {imagesInSession.map( ( data, i ) => <div key={`photo:${i}`}><img src={data}/></div> )}
      </div>
    </div>
  );
};

export default Gallery;
