const React = require("react");

const Show = (props) => {
  return (
    <div style={{fontFamily: "Tahoma", margin: "1rem"}}>
      <h1>Log</h1>
      {props.log.title}
      {props.log.entry}
      <br />
      {props.log.shipIsBroken ? `Ship is Broken` : `Ship is Not Broken`}<br />
      <a href="/logs">Return</a>
      </div>
  );
};

module.exports = Show;