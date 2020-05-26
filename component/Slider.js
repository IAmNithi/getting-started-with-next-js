const slider = (props) => (
<div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 carousel-img" src="./images/tros-hero-image.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src="./images/battle_of_hoth.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src="./images/the_clone_wars.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  <style jsx>
    {`
    .carousel{
        border-radius: 7px;
        overflow: hidden;
    }
    `}
  </style>
</div>
);

export default slider;
