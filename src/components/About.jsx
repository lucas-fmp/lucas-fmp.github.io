import React from 'react';

function About() {
  return (
    <div name="sobre" className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre mim
          </p>
        </div>

        <p className="text-xl mt-8">
          Desenvolvedor Back-end, com conhecimento
          também em desenvolvimento web e mobile.
          Bacharelando em Ciência da Computação no
          CEUB - Brasília.
        </p>

        <br />

        <p className="text-xl">
          Formado no curso de Desenvolvimento Web
          da Trybe, onde realizei mais de 40 projetos que
          colocaram em prática todos os conhecimentos
          por lá ensinados, como React, Node, Python,
          Docker e diversas outros frameworks e
          ferramentas, além de diversos conteúdos de
          softskills e metodologias ágeis.
        </p>

      </div>
    </div>
  );
}

export default About;
