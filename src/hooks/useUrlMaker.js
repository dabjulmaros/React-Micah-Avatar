import { useState, useEffect } from "react";

export const useUrlMaker = () => {
  const [url, setUrl] = useState("");
  const [seed, setSeed] = useState("");
  const [backRad, setBackRad] = useState("");
  const [margin, setMargin] = useState("");
  const [BC, setBC] = useState("");
  const [SC, setSC] = useState("");
  const [earrings, setEarrings] = useState("");
  const [eyebrows, setEyebrows] = useState("");
  const [ears, setEars] = useState("");
  const [eyes, setEyes] = useState("");
  const [beard, setbeard] = useState("");
  const [glasses, setGlasses] = useState("");
  const [mouth, setMouth] = useState("");
  const [nose, setNouse] = useState("");
  const [shirt, setShirt] = useState("");
  const [hair, setHair] = useState("");

  useEffect(() => {
    setUrl(
      `https://avatars.dicebear.com/api/micah/${seed}.svg?&${backRad}${margin}${BC}${SC}${earrings}${eyebrows}${ears}${eyes}${beard}${glasses}${mouth}${nose}${shirt}${hair}`
    );
  }, [
    seed,
    backRad,
    margin,
    BC,
    SC,
    earrings,
    eyebrows,
    ears,
    eyes,
    beard,
    glasses,
    mouth,
    nose,
    shirt,
    hair,
  ]);

  return {
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
  };
};
