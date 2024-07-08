import React from "react";
import BlackjackImage from '../assets/Blackjack.png';
import ProjectCard from "./ProjectCard";
import MinesweerperPicture from '../assets/MinesweeperPicture.png'
function Projects() {
  const Blackjack = {
    name: 'Blackjack',
    image: BlackjackImage,
    description: 'My Blackjack game developed in Java, the objective is to get as close as possible to 21 points without exceeding it.' +
    'The game involves a player and a dealer, both receiving cards from a deck of cards. Cards have different values: numbered cards from 2 to 10 have their face value, face cards (jack, queen, king) are valued at 10, and aces can be either 1 or 11 depending on which value benefits the hand more.',
    seeCode: "https://github.com/DARPZZ/Blacjack-real",
    caption: "BlackJack",
  };

  const Minesweeper = {
    name: 'Mine sweeper',
    image: MinesweerperPicture,
    description: 'In your Minesweeper game developed in C#, the objective is to clear a board without detonating any hidden mines. The game involves a grid of cells, where some cells contain mines and others are safe to click. The challenge is to use logic and deduction to uncover all safe cells without triggering any mines.',
    seeCode: "https://github.com/DARPZZ/Minesweeper",
    caption: "Mine sweeper",
  };

  return (
    <div className="flex items-center justify-center md:items-start flex-col h-full w-full px-8">
      <h1 className="text-3xl pb-16  font-extrabold underline">Projects</h1>
      <div className="mt-4 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex justify-center ">
            <ProjectCard project={Blackjack}></ProjectCard>
          </div>
          <div className="flex justify-center">
            <ProjectCard project={Minesweeper}></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
