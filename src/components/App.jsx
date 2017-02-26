class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('cheese');
  }

  getYouTubeVideos(query) {
    console.log(query);
    var options = {
      key: this.props.API_KEY,
      query: query,
      part: 'snippet',
      max: 5,
      type: 'video'
    };

      this.props.searchYouTube(options, (videos) => {
        this.setState({
          currentVideo: videos[0],
          videoList: videos
        });
      });
      {console.log(this.state)}
  }

  handleClick(newVideo) {
    this.setState({
      currentVideo: newVideo
    });
  }

  render() {
    return (
    <div>
      <Nav searchInput={this.getYouTubeVideos.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList click={this.handleClick.bind(this)} videos={this.state.videoList} />
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


// Initialize the state of App to keep track of all the videos in the video list and the
// current video in the player. Pass this state down as props to its children components.
// Continue to use the example data.

// Make it so that when the title of a VideoListEntry is clicked,
// that video is displayed in the player.
// Do not add state to any of the functional components.

// initialize state of App to keep track of vids in list and vid in player.