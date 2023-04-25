const router = require("express").Router();
const cats = [];
const catModel = require("../db");

router.get("/getAll", async (req, res, next) => {
  try {
    const cats = await catModel.find();
    res.json(cats);
  } catch {
    return next({ status: 404, message: "oops" });
  }
});

router.post("/create", async ({ body }, res, next) => {
  try {
    const created = await catModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, message: "oops" });
  }
});

router.delete("/remove/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const removed = await catModel.findByIdAndDelete(id);
    res.json(removed);
  } catch {
    return next({ status: 404, message: "oops" });
  }
});

router.patch("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await catModel.findByIdAndUpdate(id, req.query, {
      // Mongo returns the object before it was update this makes it return
      // the object after it is updated
      returnDocument: "after",
    });
    res.json(updated);
  } catch {
    return next({ message: "No cat with that id", status: 404 });
  }
});

module.exports = router;
