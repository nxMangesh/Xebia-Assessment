import express from 'express';
import services from '../services/render';

const route = express.Router();

route.get('/', services.homeRoutes);

route.get('/add-user', services.addUserRoutes);

route.get('/update-user', services.updateUserRoutes);

export default route;