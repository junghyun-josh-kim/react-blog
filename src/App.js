import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['bus', 'apple', 'train']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

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
                setModalTitle(i);
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
            <button
              onClick={() => {
                let titleCopy = [...title];
                titleCopy.splice(i, 1);
                setTitle(titleCopy);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <input
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          let titleCopy = [...title];
          titleCopy.unshift(inputValue);
          setTitle(titleCopy);
        }}
      >
        Post
      </button>
      {modal == true ? (
        <Modal
          title={title}
          modalTitle={modalTitle}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div
      className='modal'
      style={{ backgroundColor: 'skyblue' }}
    >
      <h4>{props.title[props.modalTitle]}</h4>
      <p>Date</p>
      <p>Detail</p>
      <button>Edit Title</button>
    </div>
  );
}

export default App;
