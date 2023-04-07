import "./MemeGeneratorForm.css";
import React from "react";

export default function MemeGeneratorForm(props) {
  return (
    <div className="form">
      <form className="form__container">
        <section className="form__input1">
          <input
            type="text"
            placeholder="Top Text"
            className="input1"
            onChange={props.handleTopTextChange}
          />
        </section>
        <section className="form__input2">
          <input
            type="text"
            placeholder="Bottom Text"
            className="input2"
            onChange={props.handleBottomTextChange}
          />
        </section>

        <section className="form__btnContainer">
          <button onClick={props.handleClick} className="form__btn">
            Get new meme image 🖼️
          </button>
        </section>
      </form>
    </div>
  );
}
