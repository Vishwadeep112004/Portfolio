import React from 'react'
import Section_Title from './Section_Title';
import Section_content from './Section_content';

function Main_section({id,title, content}) {
  return (
    <section id={id} className='section'>
        <Section_Title title={title} />
        <Section_content text={content} />
    </section>
  )
}

export default Main_section
