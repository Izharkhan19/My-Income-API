const router = require("express").Router();
const { getAdobeAuth } = require("../controllers/adobe");
const {
  getExpence,
  addExpence,
  deleteExpence,
} = require("../controllers/expence");
const {
  addIncome,
  getIncomes,
  deleteIncome,
  getIncomeDetailById,
} = require("../controllers/income");

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.get("/get-incomes", getIncomes);
router.get("/getIncomeByid", getIncomeDetailById);
router.post("/add-income", addIncome);
router.delete("/delete-income/:id", deleteIncome);

router.get("/get-expenses", getExpence);
router.post("/add-expense", addExpence);
router.delete("/delete-expense/:id", deleteExpence);

router.post("/get-access-token", getAdobeAuth);

module.exports = router;
