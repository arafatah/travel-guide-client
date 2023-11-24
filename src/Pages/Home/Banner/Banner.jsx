import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../../Components/Shared/Container";
const Banner = () => {
  return (
    <div>
      <Container>
        <div style={{ maxWidth: "1500px", margin: "auto" }}>
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}	 >
            <div>
              <img
                className="object-cover"
                src="https://i.ibb.co/C0L1Xs5/pexels-nina-uhlikova-725255.jpg"
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://i.ibb.co/YZtkNHT/pexels-adil-ahnaf-17893929.jpg"
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://i.ibb.co/jL50BWY/pexels-chandi-saha-18595717.jpg"
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://i.ibb.co/JxPZHnC/pexels-ashis-sarker-18755750.jpg"
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://i.ibb.co/pym277b/pexels-riccardo-307008.jpg"
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://i.ibb.co/34dhBTH/pexels-andrei-tanase-1271619.jpg"
              />
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
