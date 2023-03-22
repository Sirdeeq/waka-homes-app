import React from "react";
import PropTypes from "prop-types";

function ArticleCard({ image, imageAlt, category, title, date, views, price }) {
  return (
    <article className="flex flex-col bg-gray-900">
      <a href="/" rel="noopener noreferrer" aria-label={title}>
        <img
          alt={imageAlt}
          className="object-cover w-full h-52 bg-gray-500"
          src={image}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a href="/" rel="noopener noreferrer" aria-label={title}>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {title}
          </h3>
        </a>
        <a
          href="/"
          className="text-xs tracking-wider uppercase hover:underline text-violet-400"
        >
          {category}
        </a>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
          <span>{date}</span>
          <span>{views} views</span>
          <span>{price}</span>
        </div>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default ArticleCard;
