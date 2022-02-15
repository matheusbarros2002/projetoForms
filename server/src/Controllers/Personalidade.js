const axios = require("axios");

module.exports = {
  async index(req, res) {
    const { state } = req.body;
    try {
      const response = await axios.post(
        "http://localhost:3000/avaliacao-comportamental",
        {
           body: {
            state,
          },
        }
      );
      console.log("aa", state);
      return res.json(response);
    } catch (error) {
      console.log("errorr:", error);
      return res.json(error);
    }
  },
};
