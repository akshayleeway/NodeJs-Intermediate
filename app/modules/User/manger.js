import LHTLogger from '../../utils/logger';
import User from '../../models/User';
import { apiFailureMessage } from '../../common/constants';


export default class Manger {
  async abcd() {
    // API business logic
    LHTLogger.info('testModule:successMethod', 'Api success', {}, 'Guna R');
    return true;
  }


  async createUser(requestData) {
    LHTLogger.info('JobManager:createProject', 'createProject', 'Akshay');

    LHTLogger.info('JobManager:createdProject', 'createdProject', 'Akshay');

    const project = await User.findOne({
      email: requestData.body.email,
    });

    // console.log('Project', project);
    if (project) {
      throw apiFailureMessage.PROJECT_EXISTS;
    }

    return new User({ ...requestData.body }).save();
  }


  async getUser() {
    LHTLogger.info('JobManager:get Project', 'get Project', 'Akshay');

    return User.find();
  }

  async failureMethod() {
    const error = new Error();
    error.statusCode = 404; // optional custom status code
    // LHTLogger.error("testModule:failureMethod", "Api Faliure", {}, "", error.stack, "Guna R");
    throw error;
  }
}
