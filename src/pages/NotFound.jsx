export const NotFound = () => {
  return (
    <div className="">
      <div>
        <h1 className="">404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Please check the URL or return to the homepage.</p>
        <p>If you believe this is an error, please contact support.</p>
        <p>Thank you for your understanding!</p>
        {/* Add any additional content here */}
      </div>

      <a href="/">Go to Homepage</a>
      <style jsx>{`
        div {
          text-align: center;
          margin-top: 50px;
        }
        h1 {
          font-size: 2em;
          color: #ff0000;
        }
        p {
          font-size: 1.2em;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
