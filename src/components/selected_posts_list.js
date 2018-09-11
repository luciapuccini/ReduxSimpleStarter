import React, { Component } from 'react'
import { connect } from 'react-redux';
import SelectedPostsSelector from '../selectors/selected_posts'

class SelectPosts extends Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.posts.map(post => {
                        return <li className="list-group-item" key={post.id}>{post.title} </li>
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {
        posts: SelectedPostsSelector(state)
    }
}
export default connect(mapStateToProps)(SelectPosts)