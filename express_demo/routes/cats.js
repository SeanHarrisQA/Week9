const router = require("express").Router();
const cats = [];
const catModel = require("../db");

// app.get( url , callback using (req, res))
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
  //   const { id } = req.params;
  //   const removed = cats.splice(id, 1);
  //   res.json(removed);
});

router.patch("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await catModel.findByIdAndUpdate(id, req.query, {
      returnDocument: "after",
    });
    // const catToUpdate = cats[id];
    res.json(updated);
  } catch {
    return next({ message: "No cat with that id", status: 404 });
  }
});

module.exports = router;
// module.exports = {
//   router,
// };
