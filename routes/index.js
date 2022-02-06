const router = require("express").Router();
const userRoute = require("./api/user-routes");
const thoughtRoute = require("./api/thought-routes");

router.use("/users", userRoute);
router.use("/thought", thoughtRoute);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
