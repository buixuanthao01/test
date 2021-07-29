import express from 'express';
import { create , list , productById , read} from '../controller/product';
const router = express.Router();

router.post('/products',create);
router.get('/products',list);
router.get('/product/:productId',read)
router.param('/productId',productById);


module.exports = router; 