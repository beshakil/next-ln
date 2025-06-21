import Carousel from "react-multi-carousel";
import toLetImage from "../../assets/webp/toLet.webp";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ToLetDetailsSlide = () => {

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <div className="absolute shadow left-0 p-1 cursor-pointer z-10 bg-white rounded-full border border-gray-200" onClick={() => onClick()}>
                <IoIosArrowBack className="text-2xl text-priColor" />
            </div>
        );
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <div className="absolute shadow right-0 md:right-1 p-1 cursor-pointer z-10 bg-white rounded-full border border-gray-200" onClick={() => onClick()}>
                <IoIosArrowForward className="text-2xl text-priColor" />
            </div>
        );
    };

    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                ssr={true}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        // slidesToSlide: 3,
                        // partialVisibilityGutter: 95
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        // partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        // partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div className="relative w-full md:w-[260px] h-full md:h-[260px] mx-0 md:mx-2">
                    <Image className="object-cover rounded-lg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={toLetImage} alt="toLetImage" />
                </div>
                <div className="relative w-full md:w-[260px] h-full md:h-[260px] mx-0 md:mx-2">
                    <Image className="object-cover rounded-lg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={toLetImage} alt="toLetImage" />
                </div>
                <div className="relative w-full md:w-[260px] h-full md:h-[260px] mx-0 md:mx-2">
                    <Image className="object-cover rounded-lg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={toLetImage} alt="toLetImage" />
                </div>
                <div className="relative w-full md:w-[260px] h-full md:h-[260px] mx-0 md:mx-2">
                    <Image className="object-cover rounded-lg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={toLetImage} alt="toLetImage" />
                </div>
                <div className="relative w-full md:w-[260px] h-full md:h-[260px] mx-0 md:mx-2">
                    <Image className="object-cover rounded-lg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={toLetImage} alt="toLetImage" />
                </div>
                <div className="relative w-full md:w-[260px] h-full md:h-[260px] mx-0 md:mx-2">
                    <Image className="object-cover rounded-lg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={toLetImage} alt="toLetImage" />
                </div>
            </Carousel>
        </div>
    );
};

export default ToLetDetailsSlide;