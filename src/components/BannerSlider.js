import { useState } from 'react';

export const BannerSlider = () => {

    const images = [
        "https://f.nooncdn.com/mpcms/EN0002/assets/83f48917-939f-4a0a-8407-0c970d921746.png",
        "https://f.nooncdn.com/mpcms/EN0002/assets/3ececf77-4746-42cb-a122-94c0c710a052.png",
        "https://f.nooncdn.com/mpcms/EN0002/assets/277e1332-823f-47b2-9fa2-7d40634ae714.png",
      ];
      const [bgImage, setBgImage] = useState(0);
     
      const nextImg = () => {
        setBgImage(bgImage === images.length - 1 ? 0 : bgImage + 1);
      }
    
      const prevImg = () => {
        setBgImage(bgImage === 0 ? images.length - 1 : bgImage - 1);
      }
      
    return (
        <div className="sliderContainer">
          <div className='sliderImage'>
            <img src={images[bgImage]}/>
          </div>
          <button className='next' onClick={nextImg}>&#8594;</button>
          <button className='prev' onClick={prevImg}>&#8592;</button>
        </div>
    )
}