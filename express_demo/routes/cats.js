const router = require("express").Router();
const cats = [];

// app.get( url , callback using (req, res))
router.get("/getAll", (req, res) => {
  res.json(cats);
});

router.post("/create", (req, res) => {
  const newCat = req.body;
  cats.push(newCat);
  res.status(201).json(cats[cats.length - 1]);
});

router.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  const removed = cats.splice(id, 1);
  res.json(removed);
});

router.patch("/update/:id", (req, res, next) => {
  const { id } = req.params;
  if (id >= cats.length)
    return next({ message: "No cat with that id", status: 404 });
  const { name, hasWhiskers, evil, length } = req.query;
  const catToUpdate = cats[id];
  if (name) catToUpdate.name = name;
  if (hasWhiskers) catToUpdate.hasWhiskers = hasWhiskers;
  if (evil) catToUpdate.evil = evil;
  if (length) catToUpdate.length = length;
  res.json(catToUpdate);
});

module.exports = router;
// module.exports = {
//   router,
// };
