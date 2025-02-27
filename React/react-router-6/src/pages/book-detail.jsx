import { useParams, useSearchParams } from "react-router-dom";

function BookDetail() {
  const params = useParams();
  const [searchParmas, setParams]= useSearchParams();

  console.log("params and search params", params, searchParmas.get("bookName"))
  let bookName = searchParmas.get("bookName")
  return (
    <div className="text-center p-20">
      <h2>Book Detail</h2>
      <p>book Id: {params.index}</p>
      <p>Book Name: {bookName}</p>
      <p>Book Author: {searchParmas.get("bookAuthor")}</p>
      <button onClick={() => setParams({bookName: `${bookName}（已读）`, readedTiem: "2022-10-04"})}>修改图书名字</button>
    </div>
  );
}

export default BookDetail;