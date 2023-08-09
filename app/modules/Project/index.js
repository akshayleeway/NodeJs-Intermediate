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

  async createProject(request, response) {
    LHTLogger.info('createProject', 'Insider creating', request.body, 'Akshay');
    const [error, testResponse] = await Utils.parseResponse(
      new BLManager().createProject(request)
    );

    LHTLogger.info('createProject', 'After createUser', testResponse);
    if (error || !testResponse) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, testResponse);
  }

  async deleteProject(request, response) {
    LHTLogger.info('createProject', 'Insider creating', request.body, 'Akshay');
    const [error, data] = await Utils.parseResponse(
      new BLManager().deleteProject(request)
    );

    LHTLogger.info('createProject', 'After createUser', data);
    if (error || !data) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, data);
  }

  async getProject(request, response) {
    LHTLogger.info('getProject', 'Insider creating', request.body, 'Akshay');
    const [error, data] = await Utils.parseResponse(
      new BLManager().getProject(request)
    );

    LHTLogger.info('createProject', 'After createUser', data);
    if (error || !data) return HTTPHandler.error(response, error);
    return HTTPHandler.success(response, data);
  }

  async updateProject(request, response) {
    LHTLogger.info('update Project', 'Before Updated', request.body);

    const [error, data] = await Utils.parseResponse(
      new BLManager().updateProject(request)
    );
    LHTLogger.info('updateUser', 'After Updating', data);
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
