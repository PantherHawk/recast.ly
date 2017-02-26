// TODO: Render the `Class App` component to the DOM

// class App extends RenderComponent () {
//   constructor(props) {
//     super(props);
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props.videos);
//   }
//   render() {
//     <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videos} />
//     </div>
//   </div>
//   }
// }
// class VideoList extends React.Component () {
//   render() {
//     this.props;
//     console.log(this);
//   }
// }

ReactDOM.render(<App searchYouTube={window.searchYouTube} API_KEY={window.YOUTUBE_API_KEY}/>, document.getElementById('app'));