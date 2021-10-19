const Xendit = require("xendit-node");
const axios = require("axios");
const { success, badRequest, failed } = require("../utils/response");

module.exports = {
  async getInvoices(req, res) {
    axios
      .get("https://api.xendit.co/v2/invoices", {
        headers: {
          Authorization:
            "Basic eG5kX2RldmVsb3BtZW50X3JYQXgybFFnNzJVaWtVZTlJdDFtSWhuNUF1b0JMdWpaM2p6OGJ6MmhRMTN2dVltZjNKZHJBMmRBWXM6",
          "Content-Type": "application/json",
          Cookie:
            "incap_ses_1112_2182539=ZY+pYkSLuRPxHUYpl55uD2OEbWEAAAAAdJ2iYPnP5qh15RjsNxrYUA==; incap_ses_1115_2182539=O2MuRwV8lSTXWQobDEd5D7U+bWEAAAAA5m++qdXCkaYzBDBwQ4ZqPQ==; incap_ses_1122_2182539=yX8TXyFvEX7X/1lQciWSD6gebWEAAAAAqxmnuD2Xko4JxshXJvAl3w==; nlbi_2182539=7mH1C/dbyAjWmJL8jjCKbQAAAAAewe2+3ae04eOByWGj7QeV; visid_incap_2182539=+44gTV0zRmC6DQLJseYbXuHvbGEAAAAAQUIPAAAAAABfdITVQc2kF+vTEAfjoZzn",
        },
        params: req.query,
      })
      .then((response) => {
        return success(res, response.data);
      })
      .catch((error) => {
        console.log("error", error);
        return failed(res, error);
      });
  },
};
