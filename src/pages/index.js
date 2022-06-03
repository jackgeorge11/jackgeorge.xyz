import React, { useState } from "react";
import "../styles/index.scss";
import Button from "../components/Button";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Themes from "../components/Themes";

export default function Index() {
  const clients = [
    {
      img: "https://9vtbackslash5.com/icons/icon-512x512.png?v=4f0253e8404268a2f7210ab7b3a0116e",
      text: "9vtbackslash5.com",
      link: "https://www.9vtbackslash5.com",
    },
    {
      img: "https://connecme2.com/icons/icon-256x256.png?v=94445f0dfe71e869888300998d854241",
      text: "connecme2.com",
      link: "https://connecme2.com",
    },
    {
      img: "https://cdn11.bigcommerce.com/s-nr8446z2hv/product_images/Untitled-1.png?t=1600877620",
      text: "bobointriguingobjects.com",
      link: "https://bobointriguingobjects.com/",
    },
    {
      img: "https://becketcerny.com/icons/icon-512x512.png?v=c0779451316903e276772f69c579b1fa",
      text: "becketcerny.com",
      link: "https://becketcerny.com",
    },
    {
      img: "https://evatellier.com/icons/icon-512x512.png?v=c13969da4d6f77a59f20749ee1083a67",
      text: "evatellier.com",
      link: "https://evatellier.com",
    },
    {
      img: "https://alexscher.com/images/favicon.png",
      text: "alexscher.com",
      link: "https://alexscher.com",
    },
    {
      img: "https://courtdesignsinc.com/cd-favicon.png",
      text: "courtdesignsinc.com",
      link: "https://courtdesignsinc.com",
    },
  ];

  const [themes, setThemes] = useState({
    default: true,
    pop: false,
    earth: false,
    browns: false,
    grey: false,
    reds: false,
    bumble: false,
    gelato: false,
    grenouie: false,
    poland: false,
    gormeh: false,
  });

  const colorList = [
    "gormeh",
    "bumble",
    "gelato",
    "grey",
    "reds",
    "pop",
    "grenouie",
    "earth",
    "poland",
    "browns",
    "default",
  ];

  const color = (c) => {
    setThemes({
      default: c === "default" ? true : false,
      pop: c === "pop" ? true : false,
      earth: c === "earth" ? true : false,
      browns: c === "browns" ? true : false,
      grey: c === "grey" ? true : false,
      reds: c === "reds" ? true : false,
      bumble: c === "bumble" ? true : false,
      gelato: c === "gelato" ? true : false,
      grenouie: c === "grenouie" ? true : false,
      poland: c === "poland" ? true : false,
      gormeh: c === "gormeh" ? true : false,
    });
  };

  console.log(
    themes,
    Object.keys(themes).filter((t) => themes[t] === true)
  );

  return (
    <div className={`${colorList.filter((t) => themes[t] === true)[0]} app`}>
      <main className="home">
        <h1>Jack George</h1>
        <h2>Creative, designer, experimentor</h2>
        <h4 className="muted contact">
          Email{" "}
          <a className="muted fw-700" href="mailto:jack@jackgeorge.xyz">
            jack@jackgeorge.xyz
          </a>{" "}
          for inquiries.
        </h4>
        {clients.map((client, i) => (
          <Button client={client} i={i} />
        ))}
        <p className="muted">© Jack George, 2022</p>
      </main>
      <Banner />
      <Info disp={themes.default} />
      <Themes themes={themes} color={color} colorList={colorList} />
    </div>
  );
}
