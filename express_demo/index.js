"use strict";
const express = require("express");
const app = express();
// Order of links matters in express, everything written in express
// needs to be between const app = express and app.lister(...)

// This is middleware, it parses the body into json, the logger isn't
// something express developer would ususally write they would use a
// boiler plate version
const logger = (req, res, next) => {
  console.log("Host:", req.host);
  console.log("Method", req.method);
  console.log("Path:", req.path);
  // has to call the next function otherwise the request won't finish
  return next();
};
app.use(logger);
app.use(express.json());

const catRoutes = require("./routes/cats");
// This uses the cat routes, and will append /cats in front of the requests
// i.e /getAll /create etc.
app.use("/cats", catRoutes);

// Where next is called with an error it will come straight here, error
// handling is unique in having 4 parameters, need to pass next in the
// parameters even though it may not be used, it will only be used if
// you want to chain error handlers
app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

// End of express code
const server = app.listen(4494, () =>
  console.log("server started on " + server.address().port)
);
