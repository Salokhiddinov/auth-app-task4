import { Link } from "react-router-dom";

function EmptyUserList() {
  return (
    <form>
      <h2>Ooops! No access to user's list</h2>
      <p>To access list, please log in</p>
        <Link to="/log-in" className="btn btn-secondary">Log in</Link>
    </form>
  );
}
export default EmptyUserList;
