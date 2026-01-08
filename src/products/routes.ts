// import { Router, Request, Response } from 'express';

// const router = Router();

// router.get('/', async (_req: Request, res: Response) => {
//   res.json({
//     data: [],
//     message: 'Products fetched with pagination, filters, caching'
//   });
// });

// export default router;
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: [],
    message: 'Products fetched successfully'
  });
});

export default router;

