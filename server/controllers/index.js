const login = require("./loginController");
const employees = require("./employees");
const timesheet = require("./timesheet");
const project = require("./project");
const projectManager = require("./projectManager");
const review=require("./review");
module.exports = {
  login: login,
  employees: employees,
  timesheet: timesheet,
  project: project,
  projectManager: projectManager,
  review:review
};
