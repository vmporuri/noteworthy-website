import { Intro } from "./components/Intro.jsx";
import { NavBar } from "./components/NavBar.jsx";
import Media from "./components/Media.jsx";
import Members from "./components/Members.jsx";
import Modal from "./components/Modal.jsx";
import { useState } from "react";

export default function App() {
  const [isModalVisble, setIsModalVisble] = useState(false);
  const [memberNum, setMemberNum] = useState(0);

  const openModal = (index) => {
    setIsModalVisble(true);
    setMemberNum(index);
  };

  const closeModal = () => {
    setIsModalVisble(false);
  };

  return (
    <div className="m-0 max-w-full">
      <NavBar />
      <Modal
        isVisible={isModalVisble}
        memberNum={memberNum}
        closeModal={closeModal}
      />
      <Intro />
      <Media />
      <Members openModal={openModal} />
    </div>
  );
}
