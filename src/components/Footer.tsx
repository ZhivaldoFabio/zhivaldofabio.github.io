import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBuilding,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const cabangKantor = [
  {
    kota: 'Yogyakarta',
    alamat: 'Jl. Pramuka no. 28 UH',
    cabang: 'Pusat',
    whatsapp: ['08123456789', '08123456781'],
    phone: '022-1234567',
  },
  {
    kota: 'Jakarta',
    alamat: 'Jl. Contoh No. 456',
    cabang: 'Cabang',
    whatsapp: '08123456789',
    phone: '022-1234567',
  },
 
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto gap-8 px-4">
        {/* Left Section */}
        <div className="flex-1 min-w-[220px] max-w-xs flex flex-col">
          <div className="mb-4 overflow-hidden h-10 w-32">
            <img
              src="./src/assets/Logo_Wuzznet.svg"
              alt="Wuzznet Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mb-4">
            <p>
              Wuzznet adalah platform informasi terkini seputar teknologi,
              internet, dan pengetahuan.
            </p>
          </div>
          <strong>Our Social Media:</strong>
          <div className="flex gap-3 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="info@wuzznet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors flex gap-2"
            >
              <MdOutlineEmail size={20} /> info@wuzznet.com
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-2 min-w-[250px] max-w-md flex flex-row gap-1">
          {cabangKantor.map((cabang, idx) => (
            <div key={idx} className="flex flex-wrap mb-4 rounded-lg p-4 gap-2">
              <div className="flex items-center gap-2 mb-1">
                <FaBuilding size={40} className="text-white" />
                <div className="flex flex-col">
                  <span className="font-semibold">{cabang.kota}</span>
                  <span className="text-xs py-1 rounded">
                    Kantor {cabang.cabang}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <FaMapMarkerAlt className="text-white" />
                <span>{cabang.alamat}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <FaWhatsapp className="text-green-400" />
                <div className="flex flex-col">
                  {Array.isArray(cabang.whatsapp) ? (
                    cabang.whatsapp.map((wa, i) => <span key={i}>{wa}</span>)
                  ) : (
                    <span>{cabang.whatsapp}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-white" />
                <span>{cabang.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[180px] max-w-xs">
          <div className="mb-4">
            <a
              href="/blog"
              className="text-white font-bold text-lg hover:text-blue-600 transition block mb-2"
            >
              Blog Kami
            </a>
          </div>
          <nav>
            <ul className="list-none p-0 m-0">
              <li>
                <a
                  href="/publikasi"
                  className="text-white hover:text-blue-600 transition block mb-2"
                >
                  Publikasi
                </a>
              </li>
              <li>
                <a
                  href="/informasi-berita"
                  className="text-white hover:text-blue-600 transition block mb-2"
                >
                  Informasi dan Berita
                </a>
              </li>
              <li>
                <a
                  href="/internet-teknologi"
                  className="text-white hover:text-blue-600 transition block mb-2"
                >
                  Internet dan Teknologi
                </a>
              </li>
              <li>
                <a
                  href="/pengetahuan"
                  className="text-white hover:text-blue-600 transition block"
                >
                  Pengetahuan
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
