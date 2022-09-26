const React = require("react");

const Edit = (props) => {
  return (
    <div style={{fontFamily: "Tahoma", margin: "1rem"}}>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
      <label>Title:</label>
        <input type="text" name="title" defaultValue={log.title} /><br/>
        <label>Entry:</label>
        <input type="textarea" name="entry" defaultValue={log.entry} /><br/>
        <label>Ship Is Broken:</label>
        <input type="checkbox" name="shipIsBroken" defaultValue={log.shipIsBroken} /><br/>
        <input style={{marginTop: "10px"}} type="submit" name="" value="Create Log" />
      </form>
    </div>
)}

    module.exports = Edit