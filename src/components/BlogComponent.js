import "./blogsection.css";
import blogTag from "../images/blog-tag.png";
import BlogElememnt from "./BlogElement";
import picOne from "../images/blogPic1.png";
import picTwo from "../images/blogPic2.png";
import picThree from "../images/blogPic3.png";
const BlogSection = () => {
  const photos = [picOne, picTwo, picThree];
  return (
    <section className="blog">
      <img src={blogTag} alt="blog tag" className="blog-tag" />
      <h1>
        Blog <span>&</span> News
      </h1>
      <div className="atricle-container">
        {photos.map((photo, index) => (
          <div key={index} className="each-article">
            <BlogElememnt src={photo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
