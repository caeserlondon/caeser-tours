import expresss from 'express';

const router = expresss.Router();

import { signup, signin } from '../controllers/user.js';

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
