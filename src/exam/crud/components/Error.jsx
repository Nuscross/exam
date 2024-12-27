import { Link, useRouteError } from "react-router-dom";

const Error = () => {

  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="error">
        <p className="title">404</p>
        <p className="sub-title">Page Not Found</p>
        <p>Sorry, We couldn't find the page you're looking for.</p>
        <Link to="/" className="btn-back btn-primary">GO BACK HOME</Link>
      </div>
    )
  }

  return (
    <div className="error">
      <p className="sub-title">There was something error</p>
      <p>Please try again later.</p>
    </div>
  )

}

export default Error;