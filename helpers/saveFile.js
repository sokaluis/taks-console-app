const fs = require("fs");

const file = "./db/data.json";

const saveFileDB = (data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 3));
};

const readDB = () => {
  if (!fs.existsSync(file)) {
    return null;
  }
  const info = fs.readFileSync(file, { encoding: "utf-8" });
  const data = JSON.parse(info);
  return data;
};

module.exports = {
  saveFileDB,
  readDB,
};
