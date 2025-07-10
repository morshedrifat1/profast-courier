import { Search } from "lucide";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useLoaderData } from "react-router";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Toast from "../../components/Toast";
const Coverage = () => {
  const warehouses = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [targetPosition, setTargetPosition] = useState(null);
  const icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const FlyToLocation = ({ targetPosition }) => {
    const map = useMap();

    if (targetPosition) {
      map.flyTo(targetPosition, 12);
    }

    return null;
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const found = warehouses.find(
      (loc) =>
        loc.district.trim().toLowerCase() === searchText.trim().toLowerCase()
    );

    if (found) {
      setTargetPosition([found.latitude, found.longitude]);
    } else {
      Toast({type:'info',message:'No warehouse found'})
    }
  };
  return (
    <div className="px-5">
      <div className="max-w-375 mx-auto px-5 py-10 bg-white mt-8 mb-20 rounded-2xl md:p-15 lg:px-25 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-Heading font-extrabold">
          We are available in 64 districts
        </h1>
        <form onSubmit={handleSearch} className="mt-8 sm:mt-12 lg:w-1/2">
          <div>
            <div className="relative mt-1.5">
              <input
                type="text"
                placeholder="Search here"
                className="pl-10 bg-border/30 w-full p-2 rounded-full text-base text-inputText font-medium focus:outline-0 mt-1 placeholder:text-border"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <BiSearch
                size={17}
                className="absolute top-1/2 -translate-y-1/3 left-3 text-borderOutline "
              />
              <input
                className="bg-primary rounded-full py-1.5 px-8 text-base-200 text-lg font-bold absolute right-0 top-1"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        {/* Separator Line */}
        <div className="border-t-2 border-dashed border-gray-300 mt-10"></div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-Heading mt-10">
          We deliver almost all over Bangladesh
        </h1>
        <div className="mt-8 sm:mt-10">
          <MapContainer
            className="rounded-lg z-0 h-70 sm:h-120"
            center={[23.8103, 90.4125]}
            zoom={8}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <FlyToLocation targetPosition={targetPosition} />
            {warehouses?.map((loc, index) => (
              <Marker
                key={index}
                position={[loc?.latitude, loc?.longitude]}
                icon={icon}
              >
                <Popup>
                  <strong>{loc?.district}</strong> <br />
                  Availability: {loc?.covered_area.join(',')}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
