import prisma from '../../prisma/connect';

export const createStory = async (content, userEmail) => {
  return prisma.story.create({
    data: {
      content,
      userEmail,
    },
  });
};

export const getStoriesByUserId = async (userEmail) => {
  return prisma.story.findMany({
    where: { userEmail },
    orderBy: { createdAt: 'desc' },
  });
};

export const deleteExpiredStories = async () => {
  const expirationTime = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return prisma.story.deleteMany({
    where: { createdAt: { lt: expirationTime } },
  });
};