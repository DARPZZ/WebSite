
import React from "react";
import BlackjackImage from "../assets/Blackjack.png";
import ProjectCard from "./ProjectCard";
import MinesweerperPicture from "../assets/MinesweeperPicture.png";
import SnakePicture from "../assets/Snake.png";
import SensorPicture from "../assets/Sensor.png";
import DiscordPicture from '../assets/Discord bot.png'
import NameGuidePicture from "../assets/NameGuide.png";
import WalkAppPicture from "../assets/WalkApp.jpg"
function Projects() {
  //#region Projects
  const Blackjack = {
    name: "Blackjack",
    image: BlackjackImage,
    description:
      "My Blackjack game developed in Java, the objective is to get as close as possible to 21 points without exceeding it." +
      "The game involves a player and a dealer, both receiving cards from a deck of cards. Cards have different values: numbered cards from 2 to 10 have their face value, face cards (jack, queen, king) are valued at 10, and aces can be either 1 or 11 depending on which value benefits the hand more.",
    seeCode: "https://github.com/DARPZZ/Blacjack-real",
    caption: "BlackJack",
    youtubeLink: '9xZgLO2P3XI',
  };

  const minesweeper = {
    name: "Mine sweeper",
    image: MinesweerperPicture,
    description:
      "In my Minesweeper game developed in C#, the objective is to clear a board without detonating any hidden mines. The game involves a grid of cells, where some cells contain mines and others are safe to click. The challenge is to use logic and deduction to uncover all safe cells without triggering any mines.",
    seeCode: "https://github.com/DARPZZ/Minesweeper",
    caption: "Mine sweeper",
    youtubeLink: 'cn81ERY_OZI',
  };

  const snakeGame = {
    name: "Snake game",
    image: SnakePicture,
    description:
      "Snake game developed in Java, the objective is to control a snake to eat food pellets and grow longer without colliding with itself or the walls. The game involves a snake that moves across a grid, eating food to score points and increase its length. The challenge is to maneuver the snake effectively while avoiding obstacles and hazards.",
    seeCode: "https://github.com/DARPZZ/Snake-game",
    caption: "Snake game",
    youtubeLink: 'dIuudb07AI0',
  };

  const sensor = {
    name: "Sensor",
    image: SensorPicture,
    description:
      "In this Python-based program, I created a  rotating sensor that measures distances to objects around it.",
    seeCode: "https://github.com/DARPZZ/radar-graph",
    caption: "Sensor",
    youtubeLink: 'mQEmvks-Yds',
  };

  const nameGuide = {
    name: "Name guide",
    image: NameGuidePicture,
    description:
      "Name guide is designed to help people find baby names based on preferences and likes from others. It provides a platform where users can explore and discover baby names that resonate with their personal tastes and interests.",
    seeCode: "https://github.com/DARPZZ/Baby-names",
    caption: "Name guide",
    youtubeLink: 'xEMd6BL3_5E',
  };

  const discord = {
    name: "Discord bot",
    image: DiscordPicture,
    description:
      "My Discord bot, written in Python, serves the purpose of providing real-time match updates and information across different sports to users on Discord.",
    seeCode: "https://github.com/DARPZZ/Discord_BOT",
    caption: "Discord bot",
  };
  const walkApp=
  {
    name: "Walk app",
    image: WalkAppPicture,
    description: "My app is written in maui and intergrates Google maps. The aim of the app is the walk the hole city around",
    seeCode: "https://github.com/DARPZZ/CityRoundApp",
    caption: "Walk App"
  }

  //#endregion
  return (
    <div className=" flex items-center justify-center  flex-col h-full w-full px-5">
      <div className="">
        <h1 className="text-5xl pb-8 font-extrabold font-serif text-green-400 ">Projects</h1>
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectCard project={Blackjack}></ProjectCard>
          <ProjectCard project={minesweeper}></ProjectCard>
          <ProjectCard project={snakeGame}></ProjectCard>
          <ProjectCard project={sensor}></ProjectCard>
          <ProjectCard project={nameGuide}></ProjectCard>
          <ProjectCard project={discord}></ProjectCard>
          <ProjectCard project={walkApp}></ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default Projects;
