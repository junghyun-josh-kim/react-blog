import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['bus', 'apple', 'trian']);
  let [like, setLike] = useState(0);

  return (
    <div className='App'>
      <div className='nav-bar'>
        <h4 style={{ fontSize: '22px' }}>Maple Tech</h4>
      </div>
      <button
        onClick={() => {
          let titleSort = [...title];
          titleSort.sort();
          setTitle(titleSort);
        }}
      >
        ABCD...
      </button>
      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle[0] = 'TITLE1';
          setTitle(newTitle);
        }}
      >
        Today's Recommendation
      </button>
      <div className='list'>
        <h4>
          {title[0]}{' '}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{' '}
          {like}
        </h4>
        <p>Oct 6, 2022</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>Oct 6, 2022</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>Oct 6, 2022</p>
      </div>
    </div>
  );
}

export default App;
