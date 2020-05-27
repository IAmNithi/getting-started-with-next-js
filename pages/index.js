import Layout from "../component/Layout";
import Card from "../component/Card";
import Slider from "../component/Slider";
import movieList from "../public/JSON/movies.json";

function Blog() {
  return (
    <div className="row">
      {movieList.movies.map((post, index) => (
        <div className="col-md-4 col-sm-12" key={index}>
          <Card data={post} />
        </div>
      ))}
    </div>
  );
}

const Index = (props) => (
  <Layout>
    <div>
      <Slider />
      {Blog()}
    </div>
  </Layout>
);

export default Index;
