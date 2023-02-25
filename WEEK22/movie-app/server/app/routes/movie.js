const express = require("express");
const router = express.Router();
const checkLogin = require("../middleware/checkLogin");

const MovieController = require("../controllers/MovieController");

module.exports = () => {
  //ADD NEW MOVIE
  router.post("/", MovieController.addNewMovie);

  //GET ALL MOVIES
  router.get("/", MovieController.getAllMovies);

  //GET MOVIE BY ID
  router.get("/:id", MovieController.getMovieById);

  //UPDATE MOVIE
  router.put("/:id", MovieController.updateMovie);

  //DELETE
  router.delete("/:id", MovieController.deleteMovie);

  return router;
};
