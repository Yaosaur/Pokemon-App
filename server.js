const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");
require("dotenv").config();
const port = process.env.PORT || 3003;
const methodOverride = require("method-override");
const pokemonData = require("./utilities/pokemonData");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon/seed", async (req, res) => {
  await Pokemon.deleteMany({});
  await Pokemon.insertMany(pokemonData);
  res.redirect("/pokemon");
});

app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", { pokemon: allPokemon });
  });
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, () => {
    res.redirect("/pokemon");
  });
});

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

app.delete("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/pokemon");
  });
});

app.get("/pokemon/:id/edit", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    if (!error) {
      res.render("Edit", { pokemon: foundPokemon });
    } else {
      res.send({ message: error.message });
    }
  });
});

app.put("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, pokemon) => {
      res.redirect(`/pokemon/${req.params.id}`);
    }
  );
});

app.listen(port, () => {
  console.log("I am listening on port", port);
});
