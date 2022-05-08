import expresss from 'express';

const router = expresss.Router();

import { signup } from '../controllers/user.js';

router.post('/signup', signup);

export default router;
