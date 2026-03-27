let students = [];
let count = 1;

const generateId = () => {
  return "STU-" + String(count++).padStart(3, "0");
};

module.exports = {
  students,
  generateId
};