import Utils from '../../utils';
import BLManager from './manger';
import HTTPHandler from '../../utils/HTTPHandler';
import LHTLogger from '../../utils/logger';

export default class Index {
  async successRoute(request, response) {
    LHTLogger.info('TestController', 'successMethod', request.query, 'Guna R');
    const [error, testResponse] = await Utils.parseResponse(
      new BLManager().abcd(request.query)
    );
    if (!testResponse)
      return HTTPHandler.error(response, error, error ? error.message : '');
    return HTTPHandler.success(response, testResponse);
  }


  async createTask(request, response) {
    LHTLogger.info('createProject', 'Insider creating', request.body, 'Akshay');
    const [error, testResponse] = await Utils.parseResponse(
      new BLManager().createTask(request)
    );

    LHTLogger.info('createProject', 'After createtask ', testResponse);
    if (error || !testResponse) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, testResponse);
  }


  async deleteTask(request, response) {
    LHTLogger.info('createProject', 'Insider creating', request.body, 'Akshay');
    const [error, data] = await Utils.parseResponse(
      new BLManager().deleteTask(request)
    );

    LHTLogger.info('createProject', 'After delete User', data);
    if (error || !data) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, data);
  }
  

  async getTask(request, response) {
    LHTLogger.info('getProject', 'Insider creating', request.body, 'Akshay');
    const [error, data] = await Utils.parseResponse(
      new BLManager().getTask(request)
    );

    LHTLogger.info('get task', 'After createUser', data);
    if (error || !data) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, data);
  }

  async updateTask(request, response) {
    LHTLogger.info('update task', 'Before Updated', request.body);

    const [error, data] = await Utils.parseResponse(
      new BLManager().updateTask(request)
    );
    LHTLogger.info('updateUser', 'After Updating', data);
    if (error || !data) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, data);
  }


  async getUserDetails(request, response) {
    LHTLogger.info('getProject', 'Insider creating', request.body, 'Akshay');
    const [error, data] = await Utils.parseResponse(
      new BLManager().getUserDetails(request)
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
