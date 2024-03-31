import React from 'react';

export default function ProfileCard({ pic, name, job, voicePart, semestersInNoteworthy, major }) {
  return (
    <div className="rounded-lg overflow-hidden max-w-xs mx-auto border-4 border-gray-400">
      <div className="image-content relative bg-blue-400 py-3">
        <div className="h-40 w-40 bg-gray-400 rounded-full flex items-center justify-center mx-auto">
          <img src={pic} alt="" className="card-img object-cover rounded-full" />
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-white">
        <h2 className="text-xl font-bold text-blue-400">{name}</h2>
        <h3 className="text-lg font-medium text-blue-400">{job}</h3>
        <p className="text-sm text-center"><b>Voice Part:</b> {voicePart}</p>
        <p className="text-sm text-center"><b>Semester in Noteworthy:</b> {semestersInNoteworthy}</p>
        <p className="text-sm text-center"><b>Major:</b> {major}</p>
        <button className="bg-blue-400 hover:bg-blue-300 text-white text-base font-medium py-2 px-4 rounded transition duration-300 ease-in-out mt-4">View More</button>
      </div>
    </div>
  );
}
