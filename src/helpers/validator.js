const { response } = require("express");

class Validator {
    static validateTasks(task) {
        let response = {passed:true, error:""};
        if (!task.title) {
            response.passed = false;
            response.error = "Title is a mandatory field,Enter the Task title";
            return  response;
        } else if (!task.description) {
            response.passed = false;
            response.error = "Description is a mandatory field,Enter the Task Description";
            return  response;
        } else {
            return response;
        }
    }
    static dataTypecheck(task) {
        let response = {passed:true, error:""};
        if (task.title && !(typeof(task.title) == "string")) {
            response.passed = false;
            response.error = "Title is a string field";
        } else if (task.description && !(typeof(task.description) == "string")) {
            response.passed = false;
            response.error = "Description is a string field";
        } else if (task.completed && !(typeof(task.completed)== "boolean")) {
            response.passed = false;
            response.error = "completed is a boolean field";
        }
        return response;
    }
}

module.exports = Validator;