import "./App.css";
import headerImage from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";
import BlogCard from "./components/BlogCard/BlogCard";

function App() {
  const user = {
    avatar: avatar,
    name: "Greg Hooper",
  };
  return (
    <div className="main">
      <BlogCard
        headerImage={headerImage}
        category="Learning"
        publishedAt="21 Dec 2023"
        title="HTML & CSS foundations"
        description="These languages are the backbone of every website, defining structure, content, and presentation."
        user={user}
      />
    </div>
  );
}

export default App;
