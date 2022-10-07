import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['bus', 'apple', 'trian']);
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
      {/* <div className='list'>
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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>Oct 6, 2022</p>
      </div> */}
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
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>Title</h4>
      <p>Date</p>
      <p>Detail</p>
    </div>
  );
}

export default App;
