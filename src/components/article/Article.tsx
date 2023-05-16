import "./article.css";

interface Props {
  img_source: string;
  article_date: string;
  article_title: String;
}
const Article = ({ img_source, article_date, article_title }: Props) => {
  return (
    <div className="gpt3__article-container">
      <div className="gpt3__article-container-img">
        <img src={img_source} alt="article_image" />
      </div>
      <div className="gpt3__article-container-info">
        <div className="gpt3__article-container-info-sub__container-td">
          <p>{article_date}</p>
          <h2>{article_title}</h2>
        </div>
        <div className="gpt3__article-container-info-sub__container-l">
         <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
