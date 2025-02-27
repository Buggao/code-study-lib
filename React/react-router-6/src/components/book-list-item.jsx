import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
function BookListItem({ name, author}) {
  let randomValue = Math.floor(Math.random() * 10);

  const navigate = useNavigate();
  const handleItemClick = () => {
      navigate(`/bookDetail/${randomValue}?bookName=${name}&bookAuthor=${author}`);
  };

  return (
    <div className="book-list-item cursor-pointer" onClick={() => handleItemClick()}>
      <div className="book-list-item-cover">
        <img src={`https://picsum.photos/200?random=${randomValue}`} alt="Book Cover" />
      </div>
      <div className="book-list-item-details">
        <h3 className="book-list-item-title">{name}</h3>
        <p className="book-list-item-author">{author}</p>
      </div>
    </div>
  )
}

// 添加 prop 类型验证
BookListItem.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};


export default BookListItem;