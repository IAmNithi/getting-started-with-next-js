import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>Star Wars</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
    <Footer />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  </div>
);

export default Layout;