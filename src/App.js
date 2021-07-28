import './App.css';
import wallpaper from "./wallpaper.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:'solid 1 black',maxWidth:'100vw'}}>

<h1 className="title red">Bouain Do</h1>

<br/>

<img src={wallpaper} alt = "" width = "300" height = "300"/>

{/* <br /> */}

<img src={"./nature.jpg"} alt="" width = "300" height = "300"/>

</div>

<video width="320" height="240" controls/>

<source src="myVideo.mp4" type="video/mp4" />

      </header>
    </div>
  );
}

export default App;
