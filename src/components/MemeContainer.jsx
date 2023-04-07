import "./MemeContainer.css";
import React from "react";
import memeData from "./memeData";
import MemeGeneratorForm from "./MemeGeneratorForm";

export default function MemeContainer() {
  //Initialise the initial state of the url
  // const [memeUrl, setMemeUrl] = React.useState(
  //   `${memeData.data.memes[5]["url"]}`
  // );

  //Create an object called "meme" with three properties
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");

  const [topTextValue, setTopTextValue] = React.useState("");
  const [bottomTextValue, setBottomTextValue] = React.useState("");

  //Event handler function to get the value of the top text
  function getTopText(event) {
    setTopText(event.target.value);
  }

  //Event handler function to get the value of the bottom text
  function getBottomText(event) {
    setBottomText(event.target.value);
  }

  //onClick function to Update the state of the url
  function changeMemeUrl(event) {
    event.preventDefault();
    // get random urls
    const randNum = Math.floor(Math.random() * allMemeImages.data.memes.length);
    const url = allMemeImages.data.memes[randNum]["url"];

    //Set the top text , bottom text and url with the values inputed by the user and the image available
    setMeme((prevValue) => ({
      ...prevValue,
      topText: topText,
      bottomText: bottomText,
      randomImage: url,
    }));

    //set the tetxvalue
    setTopTextValue(topText);
    setBottomTextValue(bottomText);
  }

  // define state for the meme image width
  const [memeWidth, setMemeWidth] = React.useState(0);
  const [memeHeight, setMemeHeight] = React.useState(0);

  // find the image object that matches the random image url and get its width
  React.useEffect(() => {
    const imageObj = allMemeImages.data.memes.find(
      (elem) => elem.url === meme.randomImage
    );
    if (imageObj) {
      setMemeWidth(imageObj.width);
      setMemeHeight(imageObj.height);
    }
  }, [meme.randomImage, allMemeImages.data.memes]);

  return (
    <div className="meme__container">
      <MemeGeneratorForm
        handleClick={changeMemeUrl}
        handleTopTextChange={getTopText}
        handleBottomTextChange={getBottomText}
        topTextValue={topTextValue}
        bottomTextValue={bottomTextValue}
      />
      <section className="meme__image-container">
        {topTextValue && (
          <div className="meme__text meme__text--top">{topTextValue}</div>
        )}
        {bottomTextValue && (
          <div className="meme__text meme__text--bottom">{bottomTextValue}</div>
        )}
        <img
          className="meme__Image"
          src={`${meme.randomImage}`}
          width={memeWidth}
          height={memeHeight}
        />
      </section>
    </div>
  );
}
