import prisma from '../../prisma/connect';

export const createStory = async (content, userId) => {
  return prisma.story.create({
    data: {
      content,
      userId,
    },
  });
};

export const getStoriesByUserId = async (userId) => {
  return prisma.story.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
};

export const deleteExpiredStories = async () => {
  const expirationTime = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return prisma.story.deleteMany({
    where: { createdAt: { lt: expirationTime } },
  });
};