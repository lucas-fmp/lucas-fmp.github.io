import React from 'react';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import docker from '../assets/docker.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import jest from '../assets/jest.png';
import mysql from '../assets/mysql.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import sequelize from '../assets/sequelize.png';
import tailwind from '../assets/tailwind.png';
import typescript from '../assets/typescript.png';

function Experience() {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-300',
    },
    {
      id: 2,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-400',
    },
    {
      id: 3,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-400',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-cyan-400',
    },
    {
      id: 5,
      src: redux,
      title: 'Redux',
      style: 'shadow-violet-500',
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-cyan-200',
    },
    {
      id: 7,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-violet-700',
    },
    {
      id: 8,
      src: jest,
      title: 'Jest',
      style: 'shadow-rose-300',
    },
    {
      id: 9,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
    {
      id: 10,
      src: docker,
      title: 'Docker',
      style: 'shadow-blue-500',
    },
    {
      id: 11,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-400',
    },
    {
      id: 12,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-sky-700',
    },
    {
      id: 13,
      src: node,
      title: 'Node.js',
      style: 'shadow-lime-300',
    },
    {
      id: 14,
      src: sequelize,
      title: 'Sequelize',
      style: 'shadow-blue-400',
    },
  ];

  return (
    <div
      name="experiência"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiência
          </p>
          <p className="py-6">
            Essas são algumas das tecnologias que eu trabalho
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {
            techs.map(({
              id, src, title, style,
            }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Experience;
