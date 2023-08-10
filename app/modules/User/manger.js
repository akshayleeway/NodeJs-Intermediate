import LHTLogger from '../../utils/logger';
import User from '../../models/User';
import { apiFailureMessage } from '../../common/constants';
const jwt = require('jsonwebtoken');
const secretKey =
  '9bfe60120bff251210dc7c9181508f138d08c899d58375b3d837293330727b587d467170df859a64211d796b2ff290fda4b56f64fcf37f694c14a237c59b7cfb'; // Replace this with your actual secret key

export default class Manger {
  async abcd() {
    // API business logic
    LHTLogger.info('testModule:successMethod', 'Api success', {}, 'Guna R');
    return true;
  }

  async createUser(requestData) {
    let data = {};
    LHTLogger.info('JobManager:createProject', 'createProject', 'Akshay');

    LHTLogger.info('JobManager:createdProject', 'createdProject', 'Akshay');

    const project = await User.findOne({
      email: requestData.body.email,
    });

    // console.log('Project', project);
    if (project) {
      throw apiFailureMessage.PROJECT_EXISTS;
    }

    if( requestData.body.userType == 'admin'){

   const token =  await this.generate( requestData.body.userType);
   data.token = token ;
    }
    const userData = await new User({ ...requestData.body }).save();
    data.userData = userData;
    return  {data  };
  }

  async  generate(request) {
    const sampleUserData = { userType: request };

    const token = jwt.sign(sampleUserData, secretKey, { expiresIn: '2h' });

    return token;
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
