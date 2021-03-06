import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";
import React from "react";

function App() {
  let titArray = [
    "μ―μ―π± μΈμμ· λͺ¨μμ§",
    "λ¬Έμ±ν μ½λ‘λγπ¦ ",
    "λ μ¨κ° λ²μ¨ λ₯λ€π₯",
  ];
  let likeArray = [0, 0, 0];

  let [title, setTitle] = useState(titArray);
  let [like, setLike] = useState(likeArray);
  let [modal, setModal] = useState(false);
  let [titIndex, setTitIndex] = useState(0);
  let [inputValue, setInputValue] = useState("");

  function changeTitle() {
    let newTitle = [...title];
    newTitle[0] = "μ λͺ© λ³κ²½ν κΊΌλ·!";
    setTitle(newTitle);
  }

  function sortDesc() {
    let newTitle = [...title];
    setTitle(newTitle.sort());
  }

  function showModal() {
    modal == true ? setModal(false) : setModal(true);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ujinlog</h4>
      </div>
      <button onClick={changeTitle}>change title</button>
      <button onClick={sortDesc}>κΈμμ μ λ ¬</button>
      {title.map((tit, idx) => {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
                showModal();
                setTitIndex(idx);
              }}
            >
              {tit}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let newLike = [...like];
                  newLike[idx] += 1;
                  setLike(newLike);
                }}
              >
                μ’μμπ€
              </span>
              {like[idx]}
            </h4>
            <p>6μ 9μΌ λ°ν</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(idx, 1);
                setTitle(copy);
                let copy2 = [...like];
                copy2.splice(idx, 1);
                setLike(copy2);
              }}
            >
              μ­μ 
            </button>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputValue === "") {
            alert("λ΄μ©μ μλ ₯ν΄μ£Όμμ!π·π»ββοΈ");
          } else {
            let copy = [...title];
            copy.unshift(inputValue);
            setTitle(copy);
            let copy2 = [...like];
            copy2.unshift(0);
            setLike(copy2);
          }
          return setInputValue("");
        }}
      >
        μλ ₯
      </button>

      <Profile />

      {modal == true ? (
        <Modal title={title} titIndex={titIndex} changeTitle={changeTitle} />
      ) : null}
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "μ΄λ¦", name2: "ujin", age: 26 };
  }

  // μ΄λ²€νΈνΈλ€λ¬μ bind μ κ±°νκ³  μΆμΌλ©΄ ν¨μλ§λ€ λ νμ΄νν¨μλ‘ μμ± ν¨μ = () => {}
  changeName() {
    this.setState({ name: "λ³λͺ", name2: "μ μ΄" });
  }

  render() {
    return (
      <div>
        <h3>νλ‘ν</h3>
        <p>
          λ΄ {this.state.name}μ {this.state.name2} , {this.state.age}μΈλ.
        </p>
        <button onClick={this.changeName.bind(this)}>λ³λͺ λ²νΌ</button>
      </div>
    );
  }
}

export default App;
