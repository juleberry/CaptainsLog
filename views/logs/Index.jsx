const React = require("react");

const Index = (props) => {
  return (
    <div style={{fontFamily: "Tahoma", margin: "1rem"}}>
      <h1>Captain's Log</h1>
      <a href="/logs/new">Create a New Log!</a>
      <ul style={{listStyleType: "square"}}>
        {props.logs.map((log, index) => {
          return (
            <li key={index}>
              <a href={`/logs/${log._id}`}> {log.title}</a>
              <br />
              {log.entry}
              <br />
              {log.shipIsBroken ? `Ship is Broken` : `Ship is not Broken`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

module.exports = Index;
