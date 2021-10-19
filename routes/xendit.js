const router = require("express").Router();
const xenditController = require("../controller/xendit");

router.get("/invoices", xenditController.getInvoices);

module.exports = router;
