import React from 'react'

export default function Carousel(props) {
  return (
    <div className="container text-center my-3">
    <h3>{props.Name}</h3>
    <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
        <div className="carousel-inner w-100" role="listbox">
            <div className="carousel-item row no-gutters active">
                <div className="col-3 float-left"><img className="img-fluid" src={props.img1} alt=""/></div>
                <div className="col-3 float-left"><img className="img-fluid" src={props.img2} alt=""/></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/888?text=3" alt=""/></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/111/fff?text=4" alt=""/></div>
            </div>
            <div className="carousel-item row no-gutters">
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280?text=5" alt=""/></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/555?text=6" alt=""/></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/333/fff?text=7" alt=""/></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/bbb?text=8" alt=""/></div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

  
</div>
  )
}
