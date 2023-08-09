/**
 * Created by Developer on 04/04/23.
 */
import ValidationManger from '../middleware/validation';
import Project from '../app/modules/Project';
import Task from '../app/modules/Task';
import User from '../app/modules/User';
import { stringConstants } from '../app/common/constants';

// index.js
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');

export default (app) => {
  app.get('/', (_req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.post('/create-project', new Project().createProject);

  app.get(
    '/projects',
    ValidationManger.validateToken,
    new Project().getProject
  );

  app.put('/projects', new Project().updateProject);

  app.delete('/projects', new Project().deleteProject);

    app.get('/task', new Task().getUserDetails);


  app.post('/create-task', new Task().createTask);

  app.get('/task', ValidationManger.validateToken, new Task().getTask);

  app.put('/task', new Task().updateTask);

  app.delete('/task', new Task().deleteTask);

  app.post('/create-user', new User().createUser);

  app.get('/user', ValidationManger.validateToken, new User().getUser);
};
