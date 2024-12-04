import { Link } from "react-router-dom"

function PageHeader() {
  return (
    <div className="header-container flex items-center ">
      <h2 className="page-header__title mx-10">My Favorite Books</h2>
      <Link className="w-32" to="/list" >Book List</Link>
      <Link className="w-32" to="/notes">Reading Notes</Link>
    </div>
  );
}

export default PageHeader;