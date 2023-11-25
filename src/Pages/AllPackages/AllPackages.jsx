import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../../Components/Shared/Container";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-4 gap-6">
          {packages.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            packages.map((pack) => <Card key={pack._id} pack={pack}></Card>)
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllPackages;
