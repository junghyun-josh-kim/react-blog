import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['bus', 'apple', 'train']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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
      {title.map(function (a, i) {
        return (
          <div
            className='list'
            key={i}
          >
            <h4
              onClick={() => {
                modal == true ? setModal(false) : setModal(true);
              }}
            >
              {title[i]}
            </h4>
            <span
              onClick={() => {
                let likeCopy = [...like];
                likeCopy[i] = likeCopy[i] + 1;
                setLike(likeCopy);
              }}
            >
              👍
            </span>{' '}
            {like[i]}
            <p>Oct 6, 2022</p>
          </div>
        );
      })}
      {modal == true ? <Modal title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div
      className='modal'
      style={{ backgroundColor: 'red' }}
    >
      <h4>{props.title}</h4>
      <p>Date</p>
      <p>Detail</p>
      <button>Edit Title</button>
    </div>
  );
}

export default App;
