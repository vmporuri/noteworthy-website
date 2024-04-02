import memberData from "../assets/members.json";
import { IoIosClose } from "react-icons/io";

export default function Modal({ isVisible, memberNum, closeModal }) {
  const member = memberData[memberNum];

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed z-50 w-screen h-screen flex place-content-center place-items-center bg-black bg-opacity-75">
      <div className="fixed border-gray-400 border-8 rounded-2xl m-3 w-11/12 h-3/4 bg-white flex ">
        <img src={member.image} className="m-5" />
        <a className="absolute top-0 right-0" onClick={closeModal}>
          <IoIosClose className="size-8 text-gray-600" />
        </a>
        <div className="flex flex-col m-5 overflow-hidden">
          <h1 className="font-sans text-blue-400 text-5xl font-bold">
            {member.name}
          </h1>
          <h2 className="font-sans text-blue-400 text-2xl font-bold mb-3">
            {member.role}
          </h2>
          <p>
            <b>Voice Part:</b> {member.voicePart}
          </p>
          <p>
            <b>Semesters in Noteworthy:</b> {member.semestersInNoteworthy}
          </p>
          <p>
            <b>Semesters in Berkeley:</b> {member.semestersInBerkeley}
          </p>
          <p>
            <b>Major:</b> {member.major}
          </p>
          <p>
            <b>Interests:</b> {member.interests}
          </p>
          <p>
            <b>Bio:</b> {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
