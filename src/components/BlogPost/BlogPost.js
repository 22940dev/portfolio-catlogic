import './BlogPost.css';

function BlogPost({
  published_at: publishedAt,
  description,
  social_image: socialImage,
  tag_list: tagList,
  title,
  url,
}) {
  return (
    <li className="blog__item">
      <a
        className="blog__image-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={socialImage}
          alt={title}
          className="blog__image"
        />
      </a>
      <time className="blog__date" dateTime={publishedAt}>{publishedAt}</time>
      <h2 className="blog__title">{title}</h2>
      <p className="blog__text">{description}</p>
      <a
        className="blog__link blog__link_text"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more at Dev.to
      </a>
      <ul className="blog__tags">
        {tagList.map((el) => (
          <li key={el} className="blog__tag">{el}</li>
        ))}
      </ul>
    </li>
  );
}

export default BlogPost;
