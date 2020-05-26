import Link from 'next/link';


const card = (props) => (
    <div className="card mb-3 text-center">
    <h6 className="card-header">{props.data.title}</h6>
    <img src={`./images/${props.data.poster}`} className="img-responsive" alt="Card image" />
    <div className="card-body">
    <Link href="/details"><a className="btn btn-secondary">More Info</a></Link>
    </div>
  <style jsx>{`
        .img-responsive{
            height: 100%; width: 100%; display: block;
        }
      `}</style>
  </div>
);

export default card;
