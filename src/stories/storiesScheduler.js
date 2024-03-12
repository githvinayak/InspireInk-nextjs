import cron from 'node-cron';
import { deleteExpiredStories } from '../stories/storiesService';

cron.schedule('0 0 * * *', async () => {
  await deleteExpiredStories();
});