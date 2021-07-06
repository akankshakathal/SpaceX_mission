export const Card=(prop)=>(
    <div className="col-sm-6">
        <div className="card" key={prop.rocket.id}>
  <img src={prop.rocket.flickr_images[1]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prop.rocket.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#popup${prop.rocket.id}`}>Read more</a>
  </div>
</div>
</div>
);