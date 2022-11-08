import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/lucas-fmp/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/lucas-fmp',
    },
    {
      id: 3,
      child: (
        <>
          Email
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:lucasfernandomacedo13@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          WhatsApp
          <FaWhatsapp size={30} />
        </>
      ),
      href: 'https://api.whatsapp.com/send?phone=5534997744390&text=Ol%C3%A1%20Lucas%2C%20tudo%20bem%3F',
      style: 'rounded-br-md',
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {
          links.map(({
            id, child, href, style,
          }) => (
            <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default SocialLinks;
