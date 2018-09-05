import React, { Component } from 'react';
import _ from 'lodash'
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import VideoListItem from './components/video_list_item';
const APY_KEY = 'AIzaSyBEtCGbQRi08dJpIkdhdbruYilN6Cm40bI';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboard');
    }
    videoSearch(term) {
        YTSearch({ key: APY_KEY, term: term },
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            } //callback
        );
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                />

            </div>
        );
    }
}

//Take this component HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

