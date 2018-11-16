import React from "react";
import axios from 'axios';
import { connect } from "react-redux";

const ConnectedList = ({ articles }, props) => (
  <ul className="list-group list-group-flush">
    {articles.map((el, i) => (
      <li className="list-group-item" key={i}>
        {el.title}        
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({ articles: state.articles });
const List = connect(mapStateToProps)(ConnectedList);

export default List;