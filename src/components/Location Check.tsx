import { useState } from 'react';

type CityOption = {
  label: string;
  value: string;
};

// Dummy city options for dropdown
const cityOptions: CityOption[] = [
  { label: 'New York', value: 'new-york' },
  { label: 'Los Angeles', value: 'los-angeles' },
  { label: 'Chicago', value: 'chicago' },
  { label: 'Houston', value: 'houston' },
  { label: 'Miami', value: 'miami' },
];

const LocationCheck: React.FC = () => {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [cityDropdown, setCityDropdown] = useState(false);
  const [filteredCities, setFilteredCities] =
    useState<CityOption[]>(cityOptions);

  const handleCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    setCityDropdown(true);
    setFilteredCities(
      cityOptions.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleCitySelect = (option: CityOption) => {
    setCity(option.label);
    setCityDropdown(false);
  };

  const handleStreetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    alert(`Searching for: ${city}, ${street}`);
  };

  const handleMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(
            `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
          );
          // You can use a reverse geocoding API here to get city/street
        },
        (error) => {
          alert('Unable to retrieve your location');
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 p-4 py-10 border border-gray-200 rounded-lg w-full">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCityInput}
            onFocus={() => setCityDropdown(true)}
            onBlur={() => setTimeout(() => setCityDropdown(false), 100)}
            className="w-full p-2 bg-gray-100 rounded focus:outline-sky-500"
          />
          {cityDropdown && filteredCities.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 z-10 max-h-40 overflow-y-auto">
              {filteredCities.map((option) => (
                <div
                  key={option.value}
                  className="p-2 cursor-pointer"
                  onMouseDown={() => handleCitySelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Street Name"
          value={street}
          onChange={handleStreetInput}
          className="flex-2 p-2 bg-gray-100 rounded focus:outline-sky-500"
        />
        <button
          onClick={handleSearch}
          className="cursor-pointer rounded p-2 px-4 bg-blue-600"
        >
          Search
        </button>
        <button
          onClick={handleMyLocation}
          className="cursor-pointer rounded p-2 px-4 bg-blue-400"
        >
          My Location
        </button>
      </div>
      <div className="w-full mt-6" style={{ height: 400 }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 8 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011769.8917461338!2d109.24123213403652!3d-7.871389717821552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x6d1b92b2cac8b3f0!2sSpecial%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1756386518937!5m2!1sen!2sid"
        />
      </div>
    </div>
  );
};

export default LocationCheck;
