import BookListItem from "../components/book-list-item.jsx";

function BookList() {

    const bookList = [
        {name: "禅与摩托车维修艺术", author: "Martin Fowler"},
        {name: "小王子", author: "Antoine de Saint-Exupéry"},
        {name: "寂静的春天", author: "We Know his name"}
    ]


    return (
        <div className="p-20 flex items-center justify-center gap-4">
            {
                bookList.map((book, index) => (
                    <BookListItem
                        key={index} 
                        name={book.name} 
                        author={book.author} 
                        // 存在问题 为什么这里些onClick不会生效呢？
                        // onClick={() => handleItemClick(book)} 
                    />
                ))
            }
        </div>
    );
}

export default BookList;