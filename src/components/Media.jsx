import Carousel from "./Carousel";

export default function Media() {
  const flyers = [
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/10/Halloween-Flyer-768x1086.png",
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/11/West-Coast-Showcase-F23-Flyer.jpg",
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2023/12/Flyer-NW-Show-F23-768x994.png",
    "https://noteworthy.studentorg.berkeley.edu/wp-content/uploads/2024/01/Welcome-Back-Sp2024-768x994.png"
  ];

  return (
    <div id="media" className="h-fit pb-10">
      <h1 className='text-center text-5xl text-blue-400 font-bold pb-6'>Media</h1>
      <div className="flex place-content-evenly">
        <Carousel
          slides={flyers}
        />
      </div>
    </div>
  )
}
