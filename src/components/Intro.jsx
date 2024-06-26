import { SocialIcons } from "./SocialIcons.jsx";

export function Intro() {
  return (
    <div id="home" className="h-screen flex justify-evenly items-center">
      <img
        src="https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/08/nw7-scaled-e1694912890695.jpg"
        alt="Vest Picture"
        className="h-3/4 rounded-3xl" />
      <div className="flex flex-col place-content-center gap-5 text-center w-1/2">
        <h1 className="font-sans text-blue-400 text-8xl font-bold">Noteworthy</h1>
        <h2 className="font-sans text-blue-400 text-4xl font-bold">
          ♫&ensp;In-<i>vest</i>-ed in A Capella!&ensp;♫
        </h2>
        <p className="font-sans text-lg">
          We’re a lower-voices a cappella group known for our fun performances and fresh takes on
          popular songs! It always feels sunny when we perform, and not just because of our golden
          vests!
        </p>
        <p className="font-sans text-lg">
          Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times,
          released an album entirely composed of original songs, and performed at the 2022 UC Berkeley
          commencement.
        </p>
        <SocialIcons />
      </div>
    </div>
  )
}
