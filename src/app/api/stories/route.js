import { createStory, getStoriesByUserId } from '../../../stories/storiesService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { content, userId } = req.body;
    const story = await createStory(content, userId);
    res.status(201).json(story);
  } else if (req.method === 'GET') {
    const { userId } = req.query;
    const stories = await getStoriesByUserId(userId);
    res.status(200).json(stories);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}