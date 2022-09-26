const express = require("express");
const React = require("react");

const Index = (props) => {
  return (
    <div style={{fontFamily: "Tahoma", margin: "1rem", backgroundColor: "#FCF5E5", padding: ".5rem"}}>
      <h1 style={{ color: "#873e23", textAlign: "center"}}>Captain's Log</h1>
      <p style={{ textAlign: "center"}}>
      <a href="/logs/new">Create a New Log</a></p>
      <ul style={{listStyleType: "square"}}>
        {props.logs.map((log, index) => {
          return (
            <li style={{ padding: ".5rem" }} key={index}>
              <a href={`/logs/${log._id}`}> {log.title}</a>
              <br />
              {log.entry}
              <br />
              {log.shipIsBroken ? `Ship is Broken` : `Ship is not Broken`}
              <br />
              <a href={`/logs/${log._id}/edit`}>Edit Log</a>
              <br />
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST" >
              <input type="submit" value="DELETE" />
              </form>
            </li>
          );
        })}
      </ul>
    </div>

  );
};

module.exports = Index;
