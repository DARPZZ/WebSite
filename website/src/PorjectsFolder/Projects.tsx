import React from "react";
import BlackjackImage from "../assets/Blackjack.png";
import ProjectCard from "./ProjectCard";
import MinesweerperPicture from "../assets/MinesweeperPicture.png";
import SnakePicture from "../assets/Snake.png";
import SensorPicture from "../assets/Sensor.png";

import NameGuidePicture from "../assets/NameGuide.png";
import WalkAppPicture from "../assets/WalkApp.jpg";
import HousePricesPic from "../assets/HousePricesPic.jpg";
import Recipthelper from "../assets/Recipthelper.png";
import re from "../assets/re.png";
import csPicture from "../assets/csPicture.png"
function Projects() {
  const startGithub = "https://github.com/DARPZZ/";
  //#region Projects
  const Blackjack = {
    name: "Blackjack",
    image: BlackjackImage,
    description:
      "My Blackjack game developed in Java, the objective is to get as close as possible to 21 points without exceeding it. " +
      "The game involves a player and a dealer, both receiving cards from a deck of cards. Cards have different values: numbered cards from 2 to 10 have their face value, face cards (jack, queen, king) are valued at 10, and aces can be either 1 or 11 depending on which value benefits the hand more.",
    seeCode: `${startGithub}Blacjack-real`,
    caption: "BlackJack",
    youtubeLink: "9xZgLO2P3XI",
  };
  const HousePrices = {
    name: "House prices",
    image: HousePricesPic,
    description:
      "Built with .NET MAUI, this app uses your current location to display real-time housing prices and market trends in the area. Instantly see what properties are worth wherever you are.",
    seeCode: `${startGithub}HousePriceing`,
    caption: "House prices",
  };

  const minesweeper = {
    name: "Mine sweeper",
    image: MinesweerperPicture,
    description:
      "In my Minesweeper game developed in C#, the objective is to clear a board without detonating any hidden mines. The game involves a grid of cells, where some cells contain mines and others are safe to click. The challenge is to use logic and deduction to uncover all safe cells without triggering any mines.",
    seeCode: `${startGithub}Minesweeper`,
    caption: "Mine sweeper",
    youtubeLink: "cn81ERY_OZI",
  };

  const snakeGame = {
    name: "Snake game",
    image: SnakePicture,
    description:
      "Snake game developed in Java, the objective is to control a snake to eat food pellets and grow longer without colliding with itself or the walls. The game involves a snake that moves across a grid, eating food to score points and increase its length. The challenge is to maneuver the snake effectively while avoiding obstacles and hazards.",
    seeCode: `${startGithub}Snake-game`,
    caption: "Snake game",
    youtubeLink: "dIuudb07AI0",
  };

  const sensor = {
    name: "Sensor",
    image: SensorPicture,
    description:
      "In this Python-based program, I created a  rotating sensor that measures distances to objects around it.",
    seeCode: `${startGithub}radar-graph`,
    caption: "Sensor",
    youtubeLink: "mQEmvks-Yds",
  };

  const ReciptHelper = {
    name: "Recipt Helper",
    image: Recipthelper,
    description:
      "Built with React and Remix, this web application helps you securely store and organize your purchase receipts in one place. Whether something breaks, needs a warranty claim, or a return, you’ll always know where to find your proof of purchase.",
    seeCode: `${startGithub}ReciptHelper`,
    caption: "Recipt Helper",
    visitWebSite: "https://darpzz.github.io/ReciptHelper/",
  };

  const discord = {
    name: "Discord bot",
    image: csPicture,
    description:
      "My Discord bot, written in Python, provides real-time match updates and information across different sports to users on Discord. It also includes a CS2 player stats feature, allowing users to check key performance data — including kills, deaths, win rate, and K/D ratio — all through Discord commands.",
    seeCode: `${startGithub}Discord_BOT`,
    caption: "Discord bot",
  };
  const walkApp = {
    name: "Walk app",
    image: WalkAppPicture,
    description:
      "My app is written in MAUI and intergrates Google maps. The aim of the app is the walk the hole city around",
    seeCode: `${startGithub}CityRoundApp`,
    caption: "Walk App",
  };
  const extensionWeb = {
    name: "Web extension",
    image: re,
    description: "A collection of all my cross web browser extensions",
    extension: "#/see/extensions",
    caption: "Web extension",
  };

  //#endregion
  return (
    <div className=" flex items-center justify-center  flex-col h-full w-full px-5">
      <div className="">
        <h1 className="text-5xl 4xl:text-8xl pb-8 font-extrabold leading-relaxed font-Alegreya text-green-400 ">
          Projects
        </h1>
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 4xl:gap-6">
          <ProjectCard project={HousePrices}></ProjectCard>
          <ProjectCard project={discord}></ProjectCard>
          <ProjectCard project={ReciptHelper}></ProjectCard>
          <ProjectCard project={extensionWeb}></ProjectCard>
          <ProjectCard project={walkApp}></ProjectCard>
          <ProjectCard project={sensor}></ProjectCard>
          <ProjectCard project={Blackjack}></ProjectCard>
          <ProjectCard project={minesweeper}></ProjectCard>
          <ProjectCard project={snakeGame}></ProjectCard>

          {/* <ProjectCard project={Blackjack}></ProjectCard>
          <ProjectCard project={minesweeper}></ProjectCard>
          <ProjectCard project={snakeGame}></ProjectCard>
          <ProjectCard project={sensor}></ProjectCard>
          <ProjectCard project={ReciptHelper}></ProjectCard>
          <ProjectCard project={discord}></ProjectCard>
          <ProjectCard project={walkApp}></ProjectCard>
          <ProjectCard project={HousePrices}></ProjectCard>
          <ProjectCard project={extensionWeb}></ProjectCard> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
