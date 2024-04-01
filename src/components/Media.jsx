import Carousel from "./Carousel";

export default function Media() {
  const flyers = [
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/10/Halloween-Flyer-768x1086.png",
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/11/West-Coast-Showcase-F23-Flyer.jpg",
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/12/Flyer-NW-Show-F23-768x994.png",
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2024/01/Welcome-Back-Sp2024-768x994.png",
  ];

  return (
    <div id="media" className="h-fit pb-20">
      <h1 className="text-center text-5xl text-blue-400 font-bold pb-6">
        Media
      </h1>
      <div className="flex place-content-evenly">
        <Carousel slides={flyers} />
        <div className="h-96 aspect-video flex flex-col">
          <h1 className="text-center text-blue-400 text-2xl font-bold pb-3">
            Videos
          </h1>
          <iframe
            src="https://www.youtube.com/embed/n0p8MxT8AxI"
            title='Noteworthy "Bet On It", Zac Efron - Welcome Back to A Cappella Fall 2022'
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="aspect-video flex-1"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
