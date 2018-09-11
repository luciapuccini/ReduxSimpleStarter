import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Link } from 'react-router-dom'
//import SelectedPostsList from './components/selected_posts_list.js'

class PostsIndex extends Component {
    componentDidMount() {
        if (!this.props.post) {
            this.props.fetchPosts();
        }
    }
    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        title: {post.title}
                    </Link>
                </li >
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add new post
                    </Link>
                </div>
                <h2>Posts</h2>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPosts }, dispatch)
}
const mapStateToProps = (state) => {
    return { posts: state.posts }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);