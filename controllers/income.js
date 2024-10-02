const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, date, category, description } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !amount || !date || !category || !description) {
      return res.status(400).json({ message: "All Fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive mmuber!" });
    }

    await income.save();
    res.status(200).json({ message: "Income Added." });
  } catch (error) {
    console.log("ERROR :", error);
    res.status(500).json({ message: "Server Error   ." });
  }
  // console.log("income :", income)
};

exports.getIncomes = async (req, res) => {
  try {
    console.log("Hello");
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    console.log("ERROR :", error);
    res.status(500).json({ message: "Server Error." });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const incomes = await IncomeSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Income Deleted." });
  } catch (error) {
    console.log("ERROR :", error);
    res.status(500).json({ message: "Server Error." });
  }
};

exports.getIncomeDetailById = async (req, res) => {
  console.log("req.body", req.body);
  const { id } = req.body;

  //   try {
  //     const income = await IncomeSchema.findOne({ _id: id });
  //     console.log("incomes", income);
  //     res.status(200).json(income);
  //   } catch (error) {
  //     console.log("ERROR :", error);
  //     res.status(500).json({ message: "Server Error." });
  //   }
};
