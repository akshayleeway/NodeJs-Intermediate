/**
 * Created by Developer on 04/04/23.
 */
import ValidationManger from '../middleware/adminValidation';
import Project from '../app/modules/Project';
import Task from '../app/modules/Task';
import User from '../app/modules/User';
import { stringConstants } from '../app/common/constants';

// index.js
const swaggerUi = require('swagger-ui-express');
import swaggerDocument from '../config/swagger.json';


export default (app) => {
  app.get('/', (_req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

  app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.post('/create-project', new Project().createProject);

  app.get(
    '/projects',
    ValidationManger.validateUser,
    new Project().getProject
  );

  app.put('/projects', new Project().updateProject);

  app.delete('/projects', new Project().deleteProject);

    app.get('/task',  ValidationManger.validateUser,new Task().getUserDetails);
 

  app.post('/create-task',  new Task().createTask);

  app.get('/task', ValidationManger.validateUser, new Task().getTask);

  app.put('/task', new Task().updateTask);

  app.delete('/task', new Task().deleteTask);

  app.post('/create-user',ValidationManger.validateUser, new User().createUser);

  app.get('/user', ValidationManger.validateUser, new User().getUser);
};
