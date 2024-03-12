import React, { useState } from "react";
import useSWR from 'swr';
import { useSession } from "next-auth/react";

const Like = ({post}) => {
   const { data: session } = useSession();
  const currentUserId = session?.user?.id;
  const [isLiked, setIsLiked] = useState(post?.likes?.includes(currentUserId) || false);
  //const  likeCount = post.likes.length;

  const { mutate } = useSWR(`/api/posts/${post.slug}`);

  const handleLike = async () => {
    const res = await fetch('/api/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postSlug: post.slug, like: !isLiked }),
    });

    if (res.ok) {
      setIsLiked(!isLiked);
      mutate(); // Invalidate the cache for the post data
    }
  };


  return (
    <>
      <div>
      {/* Blog post content */}
      <button onClick={handleLike}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
    </>
  );
};

export default Like;
