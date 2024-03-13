const ExpenseSchema = require("../models/expenseModel");

exports.addExpence = async (req, res) => {

    const {
        title,
        amount,
        date,
        category,
        description
    } = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
    })

    try {
        if (!title ||
            !amount ||
            !date ||
            !category ||
            !description) {
            return res.status(400).json({ message: "All Fields are required!" })
        }
        if (amount <= 0 || !amount === "number") {
            return res.status(400).json({ message: "Amount must be a positive mmuber!" })
        }

        await expense.save()
        res.status(200).json({ message: "Expense Added." })

    } catch (error) {
        console.log("ERROR :", error)
        res.status(500).json({ message: "Server Error   ." })

    }
    // console.log("expense :", expense)

}

exports.getExpence = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200).json(expenses)
    } catch (error) {
        console.log("ERROR :", error)
        res.status(500).json({ message: "Server Error." })
    }
}

exports.deleteExpence = async (req, res) => {
    const { id } = req.params
    try {
        const expenses = await ExpenseSchema.findByIdAndDelete(id)
        res.status(200).json({ message: "Expense Deleted." })
    } catch (error) {
        console.log("ERROR :", error)
        res.status(500).json({ message: "Server Error." })
    }
}