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
    LHTLogger.info('JobManager:createProject', 'createProject', 'Akshay');

    LHTLogger.info('JobManager:createdProject', 'createdProject', 'Akshay');

    const project = await Task.findOne({
      title: requestData.body.title,
    });

    // console.log('Project', project);
    if (project) {
      throw apiFailureMessage.PROJECT_EXISTS;
    }

    return new Task({ ...requestData.body }).save();
  }


  async deleteTask(requestData) {
    LHTLogger.info('JobManager:delete Project', 'delete Project', 'Akshay');

    LHTLogger.info('JobManager:delete Project', 'delete Project', 'Akshay');

    const project = await Task.findOne({
      title: requestData.body.title,
    });

    // console.log('Project', project);
    if (!project) {
      throw apiFailureMessage.PROJECT_DOESNT_EXISTS;
    }

    return Task.findOneAndDelete({ title: requestData.body.title });
  }

  async getTask() {
    LHTLogger.info('JobManager:get Project', 'get Project', 'Akshay');

    return Task.find();
  }


async getUserDetails (requestData){
  LHTLogger.info('JobManager:get Project', 'get Project', 'Akshay');
  const tasks = await Task.find({ assignee: requestData.body.assignee });
  // .populate('assignee');
  return tasks;
}
  

  async updateTask(requestData) {
    LHTLogger.info('JobManager:update  Project', 'update Project', 'Akshay');

    let project = await Task.findOne({ id: requestData.param.id });
    if (!project) {
      throw apiFailureMessage.PROJECT_DOESNT_EXISTS;
    }

    let updatedData = await Task.findOneAndUpdate(
      { id: requestData.param.id },
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
