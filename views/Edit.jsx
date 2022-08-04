const React = require("react");

class Edit extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h1>Edit Pokemon Page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" />
          <br />
          Image URL: <input type="text" name="img" />
          <br />
          <input type="submit" name="" value="Edit Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
