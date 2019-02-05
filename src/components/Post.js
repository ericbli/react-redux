import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);     //
    this.props.history.push('/');                //跳转到
  }
  render() {

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}
 //获取单个帖子mapStateToProps是原件获得state数据的函数
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;  
  return {
    post: state.posts.find(post => post.id === id)    //find循环post找到id的post返回
  }
}
//dispatch让reducer删除 mapDispatchToProps连接元件特性和action
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
