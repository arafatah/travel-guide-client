import Container from "../../Components/Shared/Container";

const OfferAnnouncement = () => {
    return (
        <div className="container mx-auto my-64 ">
            <Container>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white mb-2">Exciting Offer Inside!</h2>
            <p className="text-white">
                Limited time offer! Book your next adventure now and enjoy exclusive discounts. Don't miss out on this opportunity to create unforgettable memories.
            </p>
            <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue active:bg-blue-200">
                Explore Offers
            </button>
            </div>
            </Container>
            
            
        </div>
    );
};

export default OfferAnnouncement;
