import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";

const HomeSectionCarousel = ({Data,SectionName}) => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4.5 },
    };


    const slidePrev = () => {
        carouselRef.current.slidePrev();
        setActiveIndex(activeIndex - 1);
    }
    const slideNext = () => {
        carouselRef.current.slideNext();
        setActiveIndex(activeIndex + 1);
    }


    const items = Data.slice(0, 12).map((item) => (
        <HomeSectionCard WomenClothData={item} />
    ));

    return (
        <div className="px-4 lg:px-8 border">
            <h3 className="text-2xl font-extrabold text-gray-800 py-5">{SectionName}</h3>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    activeIndex={activeIndex}
                />

                {/* NEXT BUTTON */}
                {activeIndex !== items.length - 4 && (<Button
                    onClick= { slideNext }
                    variant="contained"
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        width: "7rem",
                        right: "0rem",
                        transform: "translateX(50%) rotate(90deg)",
                    }} color="white"
                >
                    <ChevronLeftIcon sx={{ transform: "rotate(90deg)" }} />
                </Button>)}

                {/* PREV BUTTON */}
                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            width: "7rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(90deg)",
                        }} color="white"
                    >
                        <ChevronLeftIcon sx={{ transform: "rotate(-90deg)" }} />
                    </Button>)
                }
            </div>
        </div>
    );
};

export default HomeSectionCarousel;

