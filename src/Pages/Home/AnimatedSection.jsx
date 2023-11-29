import Animation from "../../../public/Main-animation.json";
import Lottie from "lottie-react";
import Container from "../../Components/Shared/Container";

const AnimatedSection = () => {
    return (
       <div>
        <Container>
        <div className="flex flex-col md:flex-row items-center justify-center my-20">
            <div className="md:w-1/2">
                <Lottie
                    animationData={Animation}
                    loop={true}
                    className="w-full h-auto md:pl-14"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Discover the Beauty of Bangladesh with Us</h2>
                <p className="text-gray-700">
                    Embark on a journey with our expert guides to explore the rich culture, breathtaking landscapes, and hidden treasures of Bangladesh. We are passionate about showcasing the beauty and wonders of our beloved country.
                </p>
            </div>
        </div>
        </Container>
       </div>
    );
};

export default AnimatedSection;
