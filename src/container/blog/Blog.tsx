import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container-content">
        <div className="gpt3__blog-container-content-groupA">
          <Article img_source={blog01} article_date="Dec 26, 2022" article_title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
        <div className="gpt3__blog-container-content-groupB">
          <Article img_source={blog02} article_date="Dec 26, 2022" article_title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article img_source={blog03} article_date="Dec 26, 2022" article_title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article img_source={blog04} article_date="Dec 26, 2022" article_title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article img_source={blog05} article_date="Dec 26, 2022" article_title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
