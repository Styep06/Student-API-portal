const { generateId } = require("../data/db");

const createStudent = ({ name, branch, year }) => {
  const now = new Date().toISOString();

  return {
    id: generateId(),
    name,
    branch,
    year: parseInt(year),
    createdAt: now,
    updatedAt: now
  };
};

module.exports = { createStudent };