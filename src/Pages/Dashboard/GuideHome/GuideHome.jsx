import useTourGuide from "../../../Hooks/useTourGuide";

const GuideHome = () => {
    const [tourGuide] = useTourGuide();
    console.log(tourGuide);

    // Function to handle form submission for adding a guide's profile
    const handleAddGuideProfile = (e) => {
        e.preventDefault();
        // Logic for adding a guide's profile
        console.log('Form submitted for adding guide profile');
    };

    return (
        <div>
            {tourGuide && (
                <div >
                    
                    <img
                        src={tourGuide.img}
                        alt={tourGuide.name}
                        style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                    <h2>{tourGuide.name}</h2>
                    <p>{tourGuide.experience}</p>
                    <p>{tourGuide.languages}</p>
                    <p>{tourGuide.specialties}</p>
                    <p>{tourGuide.description}</p>
                    <p>{tourGuide.specialties}</p>
                </div>
            )}

            <div>
                <h2>Add Guide's Profile</h2>
                <form onSubmit={handleAddGuideProfile}>
                    {/* Add form fields for guide's profile */}
                    {/* For example: */}
                    <label>Name:</label>
                    <input type="text" name="name" />

                    {/* Add other form fields based on the Tour Guide's Profile Page */}

                    {/* Submit Button */}
                    <button type="submit">Add Profile</button>
                </form>
            </div>
        </div>
    );
};

export default GuideHome;
