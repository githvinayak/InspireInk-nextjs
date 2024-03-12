import { getAuthSession } from "@/lib/auth";
import prisma from "../../../../prisma/connect";

export const GET = async (req,res) => {
  const session = await getAuthSession();
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { postSlug, like } = req.body;
  const userEmail = session.user.email;

  try {
    const post = await prisma.post.findUnique({
      where: { slug: postSlug },
      select: { likes: true },
    });

    if (like) {
      // Add user ID to the likes array if not already present
      if (!post.likes.includes(userEmail)) {
        await prisma.post.update({
          where: { slug: postSlug },
          data: { likes: { push: userEmail } },
        });
      }
    } else {
      // Remove user ID from the likes array
      await prisma.post.update({
        where: { slug: postSlug },
        data: { likes: post.likes.filter((email) => email !== userEmail) },
      });
    }

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}