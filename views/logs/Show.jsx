const React = require("react");

const Show = (props) => {
  return (
    <div style={{fontFamily: "Tahoma", margin: "1rem", backgroundColor: "#FCF5E5", padding: ".5rem", textAlign: "center"}}>
      <h1 style={{ color: "#873e23"}}>Log Details</h1>
      <h3>{props.log.title}</h3>
      <h4 style={{ fontStyle: "italic" }}>{props.log.entry}</h4>
      <h5>Condition: {props.log.shipIsBroken ? `Ship is Broken` : `Ship is Not Broken`}</h5>
      <p><a href="/logs">Return</a></p>
      </div>
  );
};

module.exports = Show;