import { SocialIcons } from "./SocialIcons.jsx";

export function Intro() {
  return (
    <div id="home" className="h-screen flex flex-row items-center gap-8">
      <img
        src="https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/08/nw7-scaled-e1694912890695.jpg"
        alt="Vest Picture"
        className="h-2/3" />
      <div className="flex flex-col place-content-center gap-5">
        <h1 className="font-sans text-blue-400 text-6xl font-bold">Noteworthy</h1>
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
