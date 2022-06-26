import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addQuery } from "../../redux/actions/booksAction";
import { fetchBooks } from "../../redux/asyncActions/fetchBooks";
import "./form.sass";

const categories = [
  {
    value: "",
    label: "All",
  },
  {
    value: "biography",
    label: "Biography",
  },
  {
    value: "computers",
    label: "Computers",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "medical",
    label: "Medical",
  },
  {
    value: "poetry",
    label: "Poetry",
  },
];

function Form() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("relevance");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    if (e.target.name === "sort") setSort(e.target.value);
    if (e.target.name === "categories") setCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = {
      title: title,
      subject: category ? `+subject:${category}` : "",
      sort: title || category ? `&orderBy=${sort}` : `orderBy=${sort}`,
      startIndex: 0,
      maxResult: 30,
      author: "",
    };
    setTitle("");
    dispatch(addQuery(query));
    dispatch(fetchBooks(query));
    if (location !== "/") navigate("/");
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form--input-container">
        <input
          placeholder="Search for books"
          type="text"
          className="search-form--input"
          name="title"
          onChange={handleInputChange}
          value={title}
        />
        <button className="search-form--btn" type="submit">
          <i className="icon icon-search">&#9906;</i>
        </button>
      </div>
      <div className="search-form--filters">
        <div className="search-form--categories">
          <label>Categories</label>
          <select
            name="categories"
            onChange={handleSelectChange}
            value={category}
          >
            {categories.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="search-form--sort">
          <label>Sort</label>
          <select name="sort" onChange={handleSelectChange} value={sort}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Form;
