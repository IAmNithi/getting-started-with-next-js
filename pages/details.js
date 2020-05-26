import Layout from "../component/Layout";
import movieList from '../public/JSON/movies.json';

function char(characters) {
  return (
      <>
      {characters.map((post,index) => (
        <span className="pr-2" key={index}>
            {post},
        </span>
      ))}
      </>
  )
}

const Details = (props) => (
  <Layout>
    <div className="jumbotron">
        <img src="./images/star_wars_episode_1_hero.jpg" className="hero-image" />
</div>
    <div className="row">
    <div className="col-md-4">
    <div className="card mb-3">
        <img src="./images/star_wars_episode_1_poster.png" className="img-responsive" alt="Card image" />
    </div>
      </div>
      <div className="col-md-8">
        <h3>{movieList.movies[0].title}</h3>
        <p>{movieList.movies[0].description}</p>
        <h5 className="text-center">MAIN CHARACTERS</h5> 
        <h6>{char(movieList.movies[0].main_characters)}</h6>
      </div>
    </div>
<style jsx>{`
.jumbotron{
    padding: 0px !important;
    overflow: hidden;
}
.hero-image{
    width: 100%;
}
.img-responsive{
    height: 100%; width: 100%; display: block;
}
`}</style>
  </Layout>
);

export default Details;
