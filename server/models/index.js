const employeeDb=require('./employee');
const leaveDb = require('./leave');
const  projectDb=require('./project');
const timesheetDb=require('./timesheet');
const projectManagerDb = require('./projectmanager');
const review=require('./review')

module.exports={
    employee: employeeDb,
    leave: leaveDb,
    project: projectDb,
    timesheet:timesheetDb,
    projectManager: projectManagerDb
}