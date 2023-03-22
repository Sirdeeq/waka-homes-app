import PropertyType from "./PropertyType"
const buildings = [
  {
    name: "Hotels",
    image: "/assets/blank.png",
    nametext: "hotels",
    number: 0,
  },
  {
    name: "Apartments",
    image: "/assets/blank.png",
    nametext: "apartments",
    number: 0,
  },
  {
    name: "Resorts",
    image: "/assets/blank.png",
    nametext: "resorts",
    number: 0,
  },
  {
    name: "Villas",
    image: "/assets/blank.png",
    nametext: "villas",
    number: 0,
  },
  {
    name: "Cabins",
    image: "/assets/blank.png",
    nametext: "cabins",
    number: 0,
  },
  {
    name: "Cottages",
    image: "/assets/blank.png",
    nametext: "cottages",
    number: 0,
  },
  {
    name: "Glamping",
    image: "/assets/blank.png",
    nametext: "glamping",
    number: 0,
  },
  {
    name: "Serviced Apartments",
    image: "/assets/blank.png",
    nametext: "serviced apartments",
    number: 0,
  },
  {
    name: "Vacation Homes",
    image: "/assets/blank.png",
    nametext: "Vacation Homes",
    number: 0,
  },
  {
    name: "Guest Houses",
    image: "/assets/blank.png",
    nametext: "Guest Houses",
    number: 0,
  },
  {
    name: "Serviced Apartments",
    image: "/assets/blank.png",
    nametext: "serviced apartments",
    number: 0,
  },
  {
    name: "Vacation Homes",
    image: "/assets/blank.png",
    nametext: "Vacation Homes",
    number: 0,
  },
];

  function BuildingList() {
    return (
      <div>
        <PropertyType listproperty={buildings} />
      </div>
    );
  }

  export default BuildingList;
