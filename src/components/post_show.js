import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index'
import { Link } from 'react-router-dom';
class PostsShow extends Component {
    constructor(props) {
        super(props)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);

    }
    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        });
    }
    render() {
        const { post } = this.props;
        if (!post) {
            return <div>Loading..</div>
        }
        return (
            <div>
                <Link to="/">Back to index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >Delete post</button>
                <h1>{post.title}</h1>
                <h2>
                    {post.categories}
                </h2>
                <p>
                    {post.content}
                </p>
            </div>
        )
    }
}
const mapStateToProps = ({ posts }, ownProps) => {
    return { post: posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)