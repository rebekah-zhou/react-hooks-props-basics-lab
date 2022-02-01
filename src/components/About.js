import React from "react";
import Links from "./Links"

function DisplayP(props) {
  return props.bio ? (<p>{props.bio}</p>) : null
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {props.bio ? (<p>{props.bio}</p>) : null} */}
      <DisplayP bio={props.bio} />
      {/* <p>{props.bio ? props.bio: null}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}


export default About;
