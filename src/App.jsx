import { Intro } from "./components/Intro.jsx";
import { NavBar } from './components/NavBar.jsx';
import ProfileCard from "./components/ProfileCard.jsx";
import pic from "./assets/noteworthy-bear.png";

function App() {
  return (
    <div className='m-0 max-w-full'>
      <NavBar />
      <Intro />
      <ProfileCard
        pic={pic}
        name="Lorem"
        job="Lorem"
        voicePart="Lorem"
        semestersInNoteworthy="Lorem"
        major="Lorem"
      />

    </div>
  )
}

export default App
