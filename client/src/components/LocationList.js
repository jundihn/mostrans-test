import Link from "next/link";

const LocationList = ({ locations }) => {
  return (
    <ul className="list-disc pl-5">
      {locations.map((location) => (
        <li key={location.id} className="mb-2">
          <Link
            href={`/character-by-location?location=${location.name}`}
            className="text-blue-500 hover:underline"
          >
            {location.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocationList;
