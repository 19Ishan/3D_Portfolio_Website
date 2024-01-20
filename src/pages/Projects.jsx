import React from 'react'
import CTA from '../components/CTA';  

import { arrow } from '../assets/icons';
import { Link } from 'react-router-dom';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I have worked on various technologies and frameworks during my journey of learning. And I have given my best to make them work. Although the number is less, but I have learned a lot.
        Here are some of the projects I have worked on. Feel free to check them out.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <p className='mt-2'>
                <h5 className = 'text-m font-poppins font-semibold'>
                  {project.techStack}
                </h5></p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                {/* <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link> */}
                {/* <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Projects
