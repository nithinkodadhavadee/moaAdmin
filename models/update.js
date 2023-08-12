const env = require('dotenv').config();
const axios = require('axios');
const { readDb } = require('./read');

let updateDb = async function (updateVal, updateData) {
  try {
    let data = await readDb();
    data[updateVal] = updateData;
    console.log(data);
    await axios.put(process.env.JSONBIN_URL, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": process.env.MASTER_KEY
      }
    })

  } catch (error) {
    console.log(error)
  }
}

module.exports = { updateDb }

