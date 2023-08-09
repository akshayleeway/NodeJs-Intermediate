import Utils from '../../utils';
import BLManager from './manger';
import HTTPHandler from '../../utils/HTTPHandler';
import LHTLogger from '../../utils/logger';

export default class Index {


  async createUser(request, response) {
    LHTLogger.info('createProject', 'Insider creating', request.body, 'Akshay');
    const [error, testResponse] = await Utils.parseResponse(
      new BLManager().createUser(request)
    );

    LHTLogger.info('createProject', 'After createUser', testResponse);
    if (error || !testResponse) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, testResponse);
  }

  async getUser(request, response) {
    LHTLogger.info('getProject', 'Insider creating', request.body, 'Akshay');
    const [error, data] = await Utils.parseResponse(
      new BLManager().getUser(request)
    );

    LHTLogger.info('createProject', 'After createUser', data);
    if (error || !data) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, data);
  }
  
  async failureRoute(request, response) {
    LHTLogger.info('TestController', 'failureMethod', request.query, 'Guna R');
    const [error, testResponse] = await Utils.parseResponse(
      new BLManager().failureMethod(request.query)
    );
    if (!testResponse)
      return HTTPHandler.error(response, error, error ? error.message : '');
    return HTTPHandler.success(response, testResponse);
  }
}
