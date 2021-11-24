import {useParams} from 'react-router-dom';

function CategoryDescription() {
  let {nameCategory} = useParams();
  return (
    <div>
      <a href="/cat">Назад</a>
      <h1>Category: {nameCategory} </h1>
      
    </div>
  );
}

export default CategoryDescription;