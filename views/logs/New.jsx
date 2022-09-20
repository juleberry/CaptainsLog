const React = require('react');

const New = (props) => {
  return (
    <div>
      <h1>New Log</h1>
      {
      /* In here goes your form for creating a new Log */
      <form action="/logs" method="POST">
        <label>Title:</label>
        <input type="text" name="title" /><br/>
        <label>Entry:</label>
        <input type="textarea" name="entry" /><br/>
        <label>Ship Is Broken:</label>
        <input type="checkbox" name="shipIsBroken" /><br/>
        <input type="submit" name="" value="Submit" />
      </form>
      }
    </div>
  )
}

module.exports = New;