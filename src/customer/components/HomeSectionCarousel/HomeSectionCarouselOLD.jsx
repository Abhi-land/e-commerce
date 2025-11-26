import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import { WomenClothData } from "../../../Data/WomenClothData";


const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },

    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = (e) => setActiveIndex(e.slide);

    const items = WomenClothData.slice(0, 12).map((item => <HomeSectionCard WomenClothData={item} />))
    return (
        <div className="px-4 lg:px-8" >
            <div className="relative p-5 " >
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    responsive={responsive}
                    activeIndex={activeIndex}
                />


                {activeIndex !== items.length - 5 && (<Button onClick={slideNext} variant="contained" className="z-50" sx={{ position: 'absolute', top: '8rem', width: "7rem", right: '0rem', transform: 'translateX(50%) rotate(90deg)' }} color="white" aria-label="next"  >
                    <ChevronLeftIcon sx={{ transform: 'translateX(50%) rotate(90deg)' }} />
                </Button>)}

                {activeIndex > 0 && (<Button onClick={slidePrev} variant="contained" className="z-50" sx={{ position: 'absolute', top: '8rem', width: "7rem", left: '0rem', transform: 'translateX(-50%) rotate(90deg)' }} color="white" aria-label="next" >
                    <ChevronLeftIcon sx={{ transform: 'translateX(50%) rotate(-90deg)' }} />
                </Button>)}
            </div>

        </div>
    )
}

export default HomeSectionCarousel;