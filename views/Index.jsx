const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class MyFirstComponent extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <div style={myStyle}>
          <h1>See All The Pokemon!</h1>
        </div>
        <ul>
          {pokemon.map((mon) => (
            <li>
              <a href={`/pokemon/${mon._id}`}>
                {mon.name[0].toUpperCase() + mon.name.slice(1)}
              </a>
              <br />
              <form action={`/pokemon/${mon._id}?_method=DELETE`} method="POST">
                <button type="submit">Delete</button>
              </form>
              <a href={`/pokemon/${mon._id}/edit`}>Edit Pokemon</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = MyFirstComponent;
