const Footer = (props) => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <p>Copyright © 2020 Kalanithi Sethuraman</p>
        <div className="social-media-icons">
          <a href="#">
            <i className="fa fa-empire"></i>
          </a>
          <a href="#">
            <i className="fa fa-rebel"></i>
          </a>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        footer {
          margin-top: 50px;
        }

        footer::before {
          content: "";
          display: block;
          width: 65%;
          margin-bottom: 20px;
          border-top: 1px solid #dedede;
          margin-left: auto;
          margin-right: auto;
        }

        footer p {
          float: left;
          color: #999;
          letter-spacing: 0.3px;
          font-size: 12px;
          padding-bottom: 20px;
        }

        footer .social-media-icons {
          float: right;
        }

        footer .social-media-icons i {
          font-size: 24px;
          color: #999;
          transition: 0.5s ease-in-out;
        }

        footer .social-media-icons a:first-child {
          margin-right: 20px;
        }

        footer .social-media-icons a:last-child:hover i {
          color: #af0b0c;
        }

        footer .social-media-icons a:first-child:hover i {
          color: #333;
        }
      `}
    </style>
  </footer>
);

export default Footer;
