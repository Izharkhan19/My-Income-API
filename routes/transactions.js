const router = require("express").Router()
const { getExpence, addExpence, deleteExpence } = require("../controllers/expence")
const { addIncome, getIncomes, deleteIncome } = require("../controllers/income")

router.get('/', (req, res) => {
    res.send("Hello World")
})
router.get('/get-incomes', getIncomes)
router.post('/add-income', addIncome)
router.delete('/delete-income/:id', deleteIncome)

router.get('/get-expenses', getExpence)
router.post('/add-expense', addExpence)
router.delete('/delete-expense/:id', deleteExpence)

module.exports = router