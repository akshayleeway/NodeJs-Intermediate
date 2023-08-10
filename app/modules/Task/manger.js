import LHTLogger from '../../utils/logger';
import Task from '../../models/task';
import { apiFailureMessage } from '../../common/constants';

export default class Manger {
  async abcd() {
    // API business logic
    LHTLogger.info('testModule:successMethod', 'Api success', {}, 'Guna R');
    return true;
  }

  async createTask(requestData) {
    LHTLogger.info('JobManager:createProject', 'create task ', 'Akshay');

    LHTLogger.info('JobManager:createdProject', 'created task', 'Akshay');

    const project = await Task.findOne({
      title: requestData.body.title,
    });

    // console.log('Project', project);
    if (project) {
      throw apiFailureMessage.TASK_EXISTS;
    }

    return new Task({ ...requestData.body }).save();
  }


  async deleteTask(requestData) {
    LHTLogger.info('JobManager:delete Project', 'delete task', 'Akshay');

    LHTLogger.info('JobManager:delete Project', 'delete task', 'Akshay');

    const project = await Task.findOne({
      title: requestData.body.title,
    });

    // console.log('Project', project);
    if (!project) {
      throw apiFailureMessage.TASK_DOESNT_EXISTS;
    }

    return Task.findOneAndDelete({ title: requestData.body.title });
  }

  async getTask() {
    LHTLogger.info('JobManager:get Project', 'get task', 'Akshay');

    return Task.find();
  }


async getUserDetails (requestData){
  LHTLogger.info('JobManager:get Project', 'get specific task', 'Akshay');
  const tasks = await Task.find({ assignee: requestData.body.assignee });
  // .populate('assignee');
  return tasks;
}
  

  async updateTask(requestData) {
    LHTLogger.info('JobManager:update  Project', 'update task', 'Akshay');

    let project = await Task.findOne({ _id: requestData.body.id });
    if (!project) {
      throw apiFailureMessage.TASK_DOESNT_EXISTS;
    }

    let updatedData = await Task.findOneAndUpdate(
      { _id: requestData.body.id },
      requestData.body,
      { new: true }
    );
    return updatedData;
  }


  async failureMethod() {
    const error = new Error();
    error.statusCode = 404; // optional custom status code
    // LHTLogger.error("testModule:failureMethod", "Api Faliure", {}, "", error.stack, "Guna R");
    throw error;
  }
}
