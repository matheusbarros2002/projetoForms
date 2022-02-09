const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { state } = req.params;
        try {
            console.log("aa");
            return res.json(state)
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
}