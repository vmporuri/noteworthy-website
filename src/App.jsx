import { Intro } from "./components/Intro.jsx";
import { NavBar } from './components/NavBar.jsx';
import Media from "./components/Media.jsx";
import Members from "./components/Members.jsx";

function App() {
  return (
    <div className='m-0 max-w-full'>
      <NavBar />
      <Intro />
      <Media />
      <Members />
    </div>
  )
}

export default App
