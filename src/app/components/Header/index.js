import React, { useState, useEffect } from "react";
import "./index.css";

function Header(props) {


  
  const [name, setName] = useState("Akvilina");
  const [surname, setSurame] = useState("Galbuogyte");
  const [aboutMe, setAboutMe] = useState("Project Evaluation Analyst");

  useEffect(() => {
    const updateInfo = async () => {
      const personInfo = await fetch("//localhost:8080/api/person/info").then(
        result => result.json()
      );

      setName(personInfo.firstName);
      setSurame(personInfo.secondName);
      setAboutMe(personInfo.aboutMe);
    };
    updateInfo();
  }, []);

  return (
    <header className="Header">
      <h1 className="Header-title">
        {name} {surname}
      </h1>
      <hr className="Header--separator" />
      <h2 className="Header--subtitle">{aboutMe}</h2>
    </header>
  );
}
export default Header;
