import {Component, Fragment} from 'react';
import './App.css';
import { Card } from "./component/Card";
import navbar from "./component/navbar"


class App extends Component{
  constructor(){
    super();

    this.state={
      rockets :[]
    }
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then((response) => response.json())
  .then(rockets => this.setState({rockets: rockets}))
  }

  render(){
  return (
    
    <div className="container">
      <div className="row">
      {this.state.rockets.map((rocket)=>(
        <Fragment>
        <Card rocket={rocket} />
        <div class="modal fade" id={`popup${rocket.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{rocket.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div id={`carousel${rocket.id}Controls`} class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={rocket.flickr_images[0]} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={rocket.flickr_images[1]} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={`#carousel${rocket.id}Controls`} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target={`#carousel${rocket.id}Controls`} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="row rocket-info">
<div className="col-sm-4">
  <h4>Diameter</h4>
  <p>{rocket.diameter.feet} Feet</p>
</div>
<div className="col-sm-4">
  <h4>Mass</h4>
  <p>{rocket.mass.kg/1000} Tonne</p>
</div>
<div className="col-sm-4">
  <h4>First Flight</h4>
  <p>{rocket.first_flight}</p>
</div>
<div className="col-sm-4">
  <h4>Active</h4>
  <p>{rocket.active ? `Yes` : `No`}</p>
</div>
<div className="col-sm-4">
  <h4>Cost/Launch</h4>
  <p>${rocket.cost_per_launch/1000000} Million</p>
</div>
</div>
<p>{rocket.description}</p>
<a href={rocket.wikipedia} className="btn btn-primary btn-block" target="_blank">Learn More !</a>
      </div>
    </div>
  </div>
</div>
</Fragment>
      ))}
    </div>
    </div>
  );
  }
}

export default App;
