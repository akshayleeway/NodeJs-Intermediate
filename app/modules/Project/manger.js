import LHTLogger from '../../utils/logger';
import Project from '../../models/Project';
import { apiFailureMessage } from '../../common/constants';

export default class Manger {
  async abcd() {
    // API business logic
    LHTLogger.info('testModule:successMethod', 'Api success', {}, 'Guna R');
    return true;
  }

  async createProject(requestData) {
    LHTLogger.info('JobManager:createProject', 'createProject', 'Akshay');

    LHTLogger.info('JobManager:createdProject', 'createdProject', 'Akshay');

    const project = await Project.findOne({
      name: requestData.body.name,
    });

    // console.log('Project', project);
    if (project) {
      throw apiFailureMessage.PROJECT_EXISTS;
    }

    return new Project({ ...requestData.body }).save();
  }

  async deleteProject(requestData) {
    LHTLogger.info('JobManager:delete Project', 'delete Project', 'Akshay');

    LHTLogger.info('JobManager:delete Project', 'delete Project', 'Akshay');

    const project = await Project.findOne({
      name: requestData.body.name,
    });

    // console.log('Project', project);
    if (!project) {
      throw apiFailureMessage.PROJECT_DOESNT_EXISTS;
    }

    return Project.findOneAndDelete({ name: requestData.body.name });
  }

  async getProject() {
    LHTLogger.info('JobManager:get Project', 'get Project', 'Akshay');

    return Project.find();
  }

  async updateProject(requestData) {
    LHTLogger.info('JobManager:update  Project', 'update Project', 'Akshay');

    let project = await Project.findOne({ _id: requestData.body.id });

    if (!project) {
      throw apiFailureMessage.PROJECT_DOESNT_EXISTS;
    }

    LHTLogger.info('JobManager:After Update Project', 'After Update  Project', 'Akshay');

    let updatedData = await Project.findOneAndUpdate(
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
