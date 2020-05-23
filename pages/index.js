import Layout from "../component/Layout";
import Card from '../component/Card';
import movieList from '../public/JSON/movies.json';

function Blog() {
  return (
    <>
      {movieList.movies.map(post => (
        <div className="col-md-4 col-sm-12">
        <Card />
        </div>
      ))}
      </>
  )
}

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to StarWars</h1>
      {Blog()}
    </div>
  </Layout>
);

export default Index;
