import React, { useEffect } from "react";

//Hooks
import { useUrlMaker } from "../../hooks/useUrlMaker";
//style
import { Wrapper } from "./Controls.style";
//components
import Holder from "../Holder";
import NumInput from "../NumInput";
import TextInput from "../TextInput";
import ColorInput from "../ColorInput";
import ToggleDrop from "../ToggleDrop";
import Drop from "../Drop";

const Controls = ({ setUrl }) => {
  const {
    url,
    setSeed,
    setBackRad,
    setMargin,
    setBC,
    setSC,
    setEarrings,
    setEyebrows,
    setEars,
    setEyes,
    setbeard,
    setGlasses,
    setMouth,
    setNouse,
    setShirt,
    setHair,
  } = useUrlMaker();

  const colorArray = [
    "apricot",
    "coast",
    "topaz",
    "lavender",
    "sky",
    "salmon",
    "canary",
    "calm",
    "azure",
    "seashell",
    "mellow",
    "black",
    "white",
  ];

  useEffect(() => {
    setUrl(url);
  }, [url, setUrl]);

  return (
    <Wrapper>
      <Holder header="Base Options" status={false} icon="keyboard_arrow_down">
        <TextInput label="Seed: " placeHolder="Username" setValue={setSeed} />
        <NumInput
          {...{
            text: "Background Radius:",
            prop1: 0, //Default
            prop2: 0, //Min
            prop3: 50, //Max
            urlProp: "radius",
            setValue: setBackRad,
          }}
        />
        <NumInput
          {...{
            text: "Margin:",
            prop1: 0,
            prop2: 0,
            prop3: 25,
            urlProp: "margin",
            setValue: setMargin,
          }}
        />
        <ColorInput
          label="Background Color: "
          placeHolder="#b2b2b2"
          defaultVal="transparent"
          allowedValues={["transparent"]}
          setValue={setBC}
          useTimer={true}
          urlProp="backgroundColor"
        />
      </Holder>
      <Holder header="Style Options" status={true} icon="keyboard_arrow_down">
        <ColorInput
          label="Skin Color: "
          placeHolder="#b2b2b2"
          defaultVal="apricot"
          allowedValues={colorArray}
          setValue={setSC}
          useTimer={true}
          urlProp="baseColor"
        />
        <ToggleDrop
          label="Earrings"
          showToggle={true}
          defaultToggle={true}
          LabelStyle={"Earrings Style: "}
          dropArr={["hoop", "stud"]}
          urlProps={["earringsProbability", "earrings", "earringColor"]}
          colorLabel={"Earrings Color: "}
          colorPH="#b2b2b2"
          colorDefault="topaz"
          colorArr={colorArray}
          setState={setEarrings}
        />
        <ToggleDrop
          label="Eyebrows"
          showToggle={false}
          defaultToggle={true}
          LabelStyle={"Eyebrows Style: "}
          dropArr={["down", "eyelashesDown", "eyelashesUp", "up"]}
          urlProps={["eyebrows", "eyebrowColor"]}
          colorLabel={"Eyebrows Color: "}
          colorPH="#b2b2b2"
          colorDefault="black"
          colorArr={colorArray}
          setState={setEyebrows}
        />
        <hr />
        <Drop
          label={"Ears Style:"}
          dropArr={["attached"]}
          setValue={setEars}
          useTimer={true}
          urlProp={"ears"}
        />
        <ToggleDrop
          label="Eyes"
          showToggle={false}
          defaultToggle={true}
          LabelStyle={"Eyes Style: "}
          dropArr={["eyes", "eyesShadow", "round", "smiling"]}
          urlProps={["eyes", "eyeShadowColor"]}
          colorLabel={"Eye Shadow Color: "}
          colorPH="#b2b2b2"
          colorDefault="calm"
          colorArr={colorArray}
          setState={setEyes}
        />
        <ToggleDrop
          label="Facial Hair"
          showToggle={true}
          defaultToggle={false}
          LabelStyle={"Facial Hair Style: "}
          dropArr={["beard", "scruff"]}
          urlProps={["facialHairProbability", "facialHair", "facialHairColor"]}
          colorLabel={"Facial Hair Color: "}
          colorPH="#b2b2b2"
          colorDefault="topaz"
          colorArr={colorArray}
          setState={setbeard}
        />
        <ToggleDrop
          label="Glasses"
          showToggle={true}
          defaultToggle={false}
          LabelStyle={"Glasses Style: "}
          dropArr={["round", "square"]}
          urlProps={["glassesProbability", "glasses", "glassesColor"]}
          colorLabel={"Glasses Color: "}
          colorPH="#b2b2b2"
          colorDefault="apricot"
          colorArr={colorArray}
          setState={setGlasses}
        />
        <hr />
        <Drop
          label={"Mouth Style:"}
          dropArr={[
            "frown",
            "laughing",
            "nervous",
            "pucker",
            "sad",
            "smile",
            "smirk",
            "surprised",
          ]}
          setValue={setMouth}
          useTimer={true}
          urlProp={"mouth"}
        />
        <Drop
          label={"Nose Style:"}
          dropArr={["curve", "pointed", "round"]}
          setValue={setNouse}
          useTimer={true}
          urlProp={"nose"}
        />
        <ToggleDrop
          label="Shirt"
          showToggle={false}
          defaultToggle={true}
          LabelStyle={"Shirt Style: "}
          dropArr={["collared", "crew", "open"]}
          urlProps={["shirt", "shirtColor"]}
          colorLabel={"Shirt Color: "}
          colorPH="#b2b2b2"
          colorDefault="apricot"
          colorArr={colorArray}
          setState={setShirt}
        />
        <ToggleDrop
          label="Hair"
          showToggle={true}
          defaultToggle={true}
          LabelStyle={"Hair Style: "}
          dropArr={[
            "dannyPhantom",
            "dougFunny",
            "fonze",
            "full",
            "mrClean",
            "mrT",
            "pixie",
            "turban",
          ]}
          urlProps={["hairProbability", "hair", "hairColor"]}
          colorLabel={"Hair Color: "}
          colorPH="#b2b2b2"
          colorDefault="apricot"
          colorArr={colorArray}
          setState={setHair}
        />
      </Holder>
    </Wrapper>
  );
};

export default Controls;
