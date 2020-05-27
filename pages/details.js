import Layout from "../component/Layout";
import movieList from "../public/JSON/movies.json";
import { withRouter } from "next/router";

let movieDetails = null;

function char(characters) {
  return (
    <>
      {characters.map((post, index) => (
        <span className="pr-2" key={index}>
          {post},
        </span>
      ))}
    </>
  );
}
function getMovieDetails(movieNumber){
    movieList.movies.forEach(element => {
        if(element.episode_number == movieNumber){
          movieDetails = element;
        }
    });
}

function Details({ router: { query } }) {
  const object = query.episode;
  return (
    <Layout>
      {getMovieDetails(object)}
        {movieDetails != null ?
        <>
        <div className="jumbotron">
        <img
          src={`./images/${movieDetails.hero_image}`}
          className="hero-image"
        />
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <img
              src={`./images/${movieDetails.poster}`}
              className="img-responsive"
              alt="Card image"
            />
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="text-center">{movieDetails.title}</h3>
          <p>{movieDetails.description}</p>
          <h5 className="text-center">MAIN CHARACTERS</h5>
          <h6 className="text-center">
            {char(movieDetails.main_characters)}
          </h6>
        </div>
      </div>
      </> : 
      <h1 className="text-center">Page Not Found!!!</h1>
      }
      <style jsx>{`
        .jumbotron {
          padding: 0px !important;
          overflow: hidden;
        }
        .hero-image {
          width: 100%;
        }
        .img-responsive {
          height: 100%;
          width: 100%;
          display: block;
        }
      `}</style>
    </Layout>
  );
}

export default withRouter(Details);
