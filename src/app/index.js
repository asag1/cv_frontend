import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaMapMarker,
  FaGithubAlt
} from "react-icons/fa";
import Hearder from "./components/Header";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Expierence from "./components/Expierence";

import "./App.css";

const expierence = [
  {
    position: "Project Evaluation Analyst",
    employer: "Investment and Business Guarantees, Ltd (INVEGA)",
    year: "2018.07-present",
    discription:
      "finance analysis, risk analysis and business assessment, evaluation of potential projects"
  },
  {
    position: "Relationship manager in Corporate Client Financing Department",
    employer: "Citadele bank",
    year: "2009.11-2018.03",
    discription:
      "Work with business clients, sale of all bank products, finance analysis, risk analysis and business assessment, evaluation of potential projects and realization, loans control, debt collection."
  }
];
const skills = [
  { text: "Finance", level: "advanced" },
  { text: "Reading", level: "advanced" },
  { text: "Lenguage", level: "advanced" },
  { text: "Playing", level: "biginner" },
  { text: "Driving", level: "biginner" },
  { text: "Coding", level: "biginner" }
];

const education = [
  {
    degree: "phd",
    university: "Vilniaus",
    year: "2001-2001"
  },
  {
    degree: "Master",
    university: "Romerio",
    year: "2010-2010"
  }
];

const contacts = [
  {
    icon: FaMapMarker,
    text: "Vilnius, Lithuania",
    link:
      "https://www.google.com/maps/place/Vilnius/@54.6998479,24.9727564,10z/"
  },
  {
    icon: FaGithubAlt,
    text: "@Akvilina",
    link: "https://github.com/asag1"
  },
  {
    icon: FaLinkedinIn,
    text: "Linkedin.com/Akvilina.Galbuogyte",
    link: "https://www.linkedin.com/in/akvilinagalbuogyte/"
  },
  {
    icon: FaEnvelope,
    text: "akvilina.galbuogyte@gmail.com",
    link: "mailo:akvilina.galbuogyte@gmail.com?subject=Email from CV"
  },
  {
    icon: FaPhone,
    text: "+37067016249",
    link: "tel:+37067016249?subject=Phone from CV"
  }
];

function message() {
  alert("Alert message");
}

function App() {
  return (
    <div className="App">
      <Hearder />
      <main className="App--content">
        <div className="App--content-left">
          <Contacts items={contacts} />
          <Education items={education} />
          <Skills items={skills} />
        </div>
        <div className="App--content-right">
          <Expierence items={expierence} />
        </div>
      </main>
    </div>
  );
}

export default App;
