import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../css/ArticleCard.css';

const ArticleCard = props => (
  <div className="box">
    <article className="columns">
      <span className="column is-2">
        <div>
          <img src={props.avatarUrl} alt="User Avatar" />
        </div>
        <section className="voteSection">
          <a className="is-danger is-small" onClick={props.voteOnArticles.bind(null, props.id, 'up')} >
            <i className="fa fa-arrow-up row" />
          </a>
          <span className="row tag is-medium bold">{props.votes}</span>
          <a className="is-danger is-small" onClick={props.voteOnArticles.bind(null, props.id, 'down')} >
            <i className="fa fa-arrow-down row" />
          </a>
        </section>
      </span>
      <div className="media-content">
        <div className="content">
          <NavLink to={`/article/${props.id}`} className="title is-3">{props.title}</NavLink>
        </div>
        <div>Created By: {props.article.created_by}</div>
        <div>Comments: {props.article.comments}</div>
      </div>
    </article>
  </div>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired,
};

export default ArticleCard;
