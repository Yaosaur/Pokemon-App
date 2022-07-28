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
            <li>{mon.name[0].toUpperCase() + mon.name.slice(1)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = MyFirstComponent;
