import Index from './Index';
import Utils from '../../utils';
import BLManager from './manager';
import HTTPHandler from '../../utils/HTTPHandler';
import LHTLogger from '../../utils/logger';

// Mock the dependencies
jest.mock('../../utils/HTTPHandler');
jest.mock('../../utils/logger');
jest.mock('./manager');
jest.mock('../../utils');

describe('Index class', () => {
  let indexInstance;
  let request;
  let response;

  beforeEach(() => {
    indexInstance = new Index();
    request = { query: {}, body: {} };
    response = {};
  });

  describe('successRoute method', () => {
    it('should handle success route', async () => {
      Utils.parseResponse.mockResolvedValueOnce([null, 'testResponse']);

      await indexInstance.successRoute(request, response);

      expect(HTTPHandler.success).toHaveBeenCalledWith(response, 'testResponse');
    });

    it('should handle error', async () => {
      Utils.parseResponse.mockResolvedValueOnce(['error', null]);

      await indexInstance.successRoute(request, response);

      expect(HTTPHandler.error).toHaveBeenCalledWith(response, 'error', 'error');
    });
  });

  describe('createProject method', () => {
    it('should create project', async () => {
      Utils.parseResponse.mockResolvedValueOnce([null, 'testResponse']);

      await indexInstance.createProject(request, response);

      expect(HTTPHandler.success).toHaveBeenCalledWith(response, 'testResponse');
    });

    it('should handle error', async () => {
      Utils.parseResponse.mockResolvedValueOnce(['error', null]);

      await indexInstance.createProject(request, response);

      expect(HTTPHandler.error).toHaveBeenCalledWith(response, 'error');
    });
  });

  // Similar tests can be added for other methods like deleteProject, getProject, updateProject, and failureRoute
});
