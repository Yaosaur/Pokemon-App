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
          <h1>Gotta Catch 'Em All</h1>
        </div>
        <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src={pokemon.img} />
        <nav>
          <a href="/pokemon">Back</a>
        </nav>
      </div>
    );
  }
}

module.exports = MyFirstComponent;
