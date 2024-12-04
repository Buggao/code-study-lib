import { useLocation } from "react-router-dom";

function BookDetail() {
  const location = useLocation();
  const {state } = location
  console.log("BookDetail", state );
  return (
    <div className="text-center p-20">
      <h2>Book Detail</h2>
      <p>Book Name:</p>
    </div>
  );
}

export default BookDetail;