import React, {FunctionComponent} from 'react'
import { Link } from 'react-router-dom'
const About:FunctionComponent = () => {

    const header1: string  = "Wybierz swojego"
    const header2: string = 'Bohatera'
    const paragraph1: string = "Niezależnie od tego, czy lubisz rzucać się w sam środek walki, wspierać sojuszników lub robić coś pomiędzy, na Summoner's Rift na pewno znajkdzie się dla CIebie miejsce"




    return (
        <div className='about'>
          <div className="about--headers">
            <h3 className='global--header__italics global--header__S'>{header1}</h3>
            <h1 className='global--header__italics global--header__L'>{header2}</h1>
            <p className='global--paragraph__centered'>{paragraph1}</p>
            <div className="about--buttons">
              <Link to='/' className='global--button global--button__secondary'>Poznaj więcej bohaterów</Link>
              <Link to='/' className='global--button  global--button__primary'>Graj teraz</Link>

            </div>
          </div>
         
          <div className="about--container">
            <div className="about--content__left"></div>
            <div className="about--content__right"></div>
          </div>
        </div>
    )
}

export default About;