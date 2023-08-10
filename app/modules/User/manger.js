import LHTLogger from '../../utils/logger';
import User from '../../models/User';
import { apiFailureMessage } from '../../common/constants';
import secretKey  from '../../../config/env/development';
const jwt = require('jsonwebtoken');


export default class Manger {
  async abcd() {
    // API business logic
    LHTLogger.info('testModule:successMethod', 'Api success', {}, 'Guna R');
    return true;
  }

  async createUser(requestData) {
    let data = {};
    LHTLogger.info('JobManager:createProject', 'create user', 'Akshay');

    LHTLogger.info('JobManager:createdProject', 'created user', 'Akshay');

    const project = await User.findOne({
      email: requestData.body.email,
    });

    // console.log('Project', project);
    if (project) {
      throw apiFailureMessage.USER_EXISTS;
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

    const token = jwt.sign(sampleUserData, secretKey.JWT_SECRET_KEY, { expiresIn: '2h' });

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
