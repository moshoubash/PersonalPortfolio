import React from 'react'
const Landing = () => {
  return (
    <section className='landing-section'>
        <div className='landing-left-section'>
            <h1>Hi, I'am <span className='name'>Mohammad Shoubash</span>. A <span className='major'>Full Stack Developer</span> Based in <span className='location'>Jordan</span> <i class="fa-solid fa-location-dot location-icon"></i></h1>
            <a href='https://drive.google.com/file/d/1dN1FoVFnYfrikFeRkcADo0ypIIDhAKzg/view?usp=drive_link' className='cv-btn'><i class="fa-solid fa-download download-icon"></i> Download CV</a>
            <ul className='social-networks'>
              <li><a href="https://wa.me/+962782953585"><i class="fa-brands fa-whatsapp"></i></a></li>
              <li><a href="https://www.linkedin.com/in/mohammadshoubash/"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="https://github.com/moshoubash/"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="mailto:mohammedshobash2002@gmail.com"><i class="fa-solid fa-envelope-open"></i></a></li>
            </ul>
        </div>
        <div className='landing-right-section'>
            <div className='picture-box'>
              <img src="src/assets/mo.png" width="90%" alt="person"/>
            </div>
        </div>
    </section>
  )
}

export default Landing