const React = require('react');

const New = (props) => {
  return (
    <div style={{fontFamily: "Tahoma", margin: "1rem"}}>
      <h1 style={{ color: "#873e23", textAlign: "center"}}>New Log</h1>
      {
      /* In here goes your form for creating a new Log */
      <form action="/logs" method="POST">
        <label>Title:</label>
        <input type="text" name="title" /><br/>
        <label>Entry:</label>
        <input type="textarea" name="entry" /><br/>
        <label>Ship Is Broken:</label>
        <input type="checkbox" name="shipIsBroken" /><br/>
        <input style={{marginTop: "10px"}} type="submit" name="" value="Create Log" />
      </form>
      }
      <p><a href="/logs">Return to Main Log</a></p>
    </div>
  )
}

module.exports = New;