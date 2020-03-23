import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";
import propTypes from "prop-types";

class AddBlog extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      author: this.state.author,
      title: this.state.title,
      body: this.state.body
    };
    console.log("post", post);
    this.props.createPost(post);
    this.setState({ author: "", title: "", body: "" });
  }

  render() {
    const { author, title, body } = this.state;
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div style={{ float: "right" }}>
            <h1>Add Blog</h1>
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={author}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <textarea
              name="body"
              placeholder="Body"
              value={body}
              onChange={this.onChange}
            />
            <br />
            <button type="submit">Post it</button>
          </div>
        </form>
      </div>
    );
  }
}

AddBlog.propTypes = {
  createPost: propTypes.func.isRequired
};

export default connect(
  null,
  { createPost } //propType
)(AddBlog);