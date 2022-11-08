import React from 'react';

function About() {
  return (
    <div name="sobre" className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas facere illum
          reprehenderit explicabo error eius ullam odit consequuntur sed voluptatibus,
          minus eum ipsum veniam quae temporibus voluptatem mollitia cum quasi magnam!
          Eos dolorem veritatis voluptatem ipsa tempore ut iste eum corporis error modi
          quidem quia iusto earum tempora, nobis cumque.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, doloribus
          laborum quaerat est unde asperiores magnam beatae consequatur perspiciatis
          error itaque eius amet blanditiis sed fugiat nam, aliquid voluptas expedita,
          consectetur vitae ab fugit repellendus. Quidem voluptatem eligendi ipsam atque,
          suscipit, placeat molestiae ea quaerat, sapiente amet ipsum nesciunt ducimus!
        </p>

      </div>
    </div>
  );
}

export default About;
