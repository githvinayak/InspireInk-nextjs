import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { FaEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import Link from "next/link";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  //const { status, data: session } = useSession();
  const { slug } = params;
  const data = await getData(slug);
  // const userEmail = session?.user?.email;
  // const authorEmail = data?.user?.email;
  // const isCurrentUserAuthor = authorEmail === userEmail

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data?.title}</h1>
            <div className={styles.align}>
                <div className={styles.user}>
                  {data?.user?.image && (
                    <div className={styles.userImageContainer}>
                      <Image
                        src={data.user.image}
                        alt=''
                        fill
                        className={styles.avatar}
                      />
                    </div>
                  )}
                  <div className={styles.userTextContainer}>
                    <span className={styles.username}>{data?.user.name}</span>
                    <span className={styles.date}>
                      {data?.createdAt.toString().slice(0, 10)}
                    </span>
                  </div>
                </div>
               <div className="flex gap-2">
                { data?.user?.role === "ADMIN" &&(<Link
                  href={`/posts/update-blog/${slug}`}
                  className={styles.views}
                >
                  <GrEdit />
                  Edit
                </Link>)}
                <span className={styles.views}>
                  <FaEye /> {data?.views}
                </span>
              </div>
            </div>
          </div>
          {data?.img && (
            <div className={styles.imageContainer}>
              <Image src={data.img} alt='' fill className={styles.image} />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            />
            <div className={styles.comment}>
              <Comments postSlug={slug} post={data} />
            </div>
          </div>
          <Menu cat={data.catSlug} />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
