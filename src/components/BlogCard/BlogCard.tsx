import "./BlogCard.scss";

export interface BlogCardProps {
  headerImage: string;
  category: string;
  publishedAt: string;
  title: string;
  description: string;
  user: { avatar: string; name: string };
}

const BlogCard = ({
  headerImage,
  category,
  publishedAt,
  title,
  description,
  user,
}: BlogCardProps) => {
  return (
    <div className="blogCard">
      <img className="blogCard__headerImage" src={headerImage} alt="header" />
      <div className="blogCard__info">
        <span className="blogCard__info-category bodyS-bold">{category}</span>
        <span className="blogCard__info-publishedAt bodyS">
          {`Published ${publishedAt}`}
        </span>
        <span className="blogCard__info-title heading">{title}</span>
        <span className="blogCard__info-description bodyM">{description}</span>
        <div className="blogCard__info-userDisplay">
          <img
            className="blogCard__info-userDisplay-avatar"
            src={user.avatar}
            alt="avatar"
          />
          <div className="blogCard__info-userDisplay-name bodyS-bold">
            {user.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
