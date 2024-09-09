import React from 'react'
import { TVPanel } from './AppleTVComponents/TVPanel'
import Slider from 'react-slick';

export const AppleTV = () => {

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
      };

  return (
    <div className='relative w-full h-full pb-6' style={{overflow: 'hidden'}}>
        <Slider {...settings} className=''>
            <TVPanel buttonText="See the schedule" genre="" desc="Live MLB games, every Friday." bgImage="baseball.jpg" />
            <TVPanel buttonText="Stream now" genre="Comedy" desc="The shady side of paradise." bgImage="bad-monkey.jpg" />
            <TVPanel buttonText="Stream now" genre="Drama" desc="Experience Ridley Scott's extended epic." bgImage="napolean.jpg" />
            <TVPanel buttonText="See the schedule" genre="" desc="Watch Messi, every club, and every match-live." bgImage="season-pass.jpg" />
            <TVPanel buttonText="Stream now" genre="Action" desc="Worst. Heist. Ever." bgImage="instigators.jpg" />
            <TVPanel buttonText="Stream now" genre="Crime" desc="Presume nothing." bgImage="presumed-innocent.jpg" />
            <TVPanel buttonText="Stream now" genre="Drama" desc="Within us all lies the courage to change our destiny." bgImage="pachinko.jpg" />
            <TVPanel buttonText="Stream now" genre="Drama" desc="16 Emmy® Nominations Including Best Drama" bgImage="morning-show.jpg" />
            <TVPanel buttonText="Stream now" genre="Documentary" desc="All that glitters isn't gold." bgImage="kpop-idols.jpg" />
        </Slider>
    </div>

  )
}
