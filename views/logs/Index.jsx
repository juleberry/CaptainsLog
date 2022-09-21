const React = require("react");

const Index = (props) => {
  return (
    <div>
      <h1>Log Index Page</h1>
      <ul>
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
