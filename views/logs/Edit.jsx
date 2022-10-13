const React = require("react");

const Edit = (props) => {
  return (
    <div style={{fontFamily: "Tahoma", margin: "1rem", backgroundColor: "#FCF5E5", padding: ".5rem"}}>
      <h2 style={{ color: "#873e23" }}>Edit Log</h2>
      <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
      <label htmlFor="title">Title:</label>
        <input type="text" name="title" defaultValue={props.log.title} /><br/>
        <label htmlFor="entry">Entry:</label>
        <textarea name="entry" defaultValue={props.log.entry} /><br/>
        <label htmlFor="shipIsBroken">Ship Is Broken:</label>
        <input type="checkbox" name="shipIsBroken" defaultValue={props.log.shipIsBroken} /><br/>
        <input style={{marginTop: "10px"}} type="submit" value="Create Log" />
      </form><br />
      <a href="/logs">Cancel</a>
    </div>
)}

    module.exports = Edit