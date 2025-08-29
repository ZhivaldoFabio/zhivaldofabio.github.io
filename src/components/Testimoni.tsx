// src/components/Testimoni.tsx

const testimoni = [
  {
    name: "Dr. Andi Wijaya",
    status: "Dosen UKDW",
    profilePic: "/assets/profile-andi.jpg",
    review: "This internet is so fast and stable, perfect for my online lectures and research meetings!",
  },
  {
    name: "Prof. Siti Rahmawati",
    status: "Dosen UGM",
    profilePic: "/assets/profile-siti.jpg",
    review: "I can rely on this connection for all my academic needs. Highly recommended for educators!",
  },
  {
    name: "Budi Santoso",
    status: "Freelance Designer",
    profilePic: "/assets/profile-budi.jpg",
    review: "Super stable and fast internet, even when uploading large design files. Love it!",
  },
  {
    name: "Maria Lestari",
    status: "Mahasiswa UII",
    profilePic: "/assets/profile-maria.jpg",
    review: "Streaming, video calls, and online classes run smoothly. Great value for students!",
  },
  {
    name: "Rizky Pratama",
    status: "Dosen UNY",
    profilePic: "/assets/profile-rizky.jpg",
    review: "Internetnya stabil banget, cocok untuk mengajar daring dan webinar!",
  },
];

const Testimoni = () => (
  <div className="flex gap-6 overflow-x-auto py-6">
    {testimoni.map((item, idx) => (
      <div
        key={idx}
        className="shadow-2xl bg-blue-600/50 rounded-xl min-w-[300px] max-w-xs flex flex-col items-center p-6 text-white"
      >
        <img
          src={item.profilePic}
          alt={item.name}
          className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white"
        />
        <div className="font-bold text-lg mb-1">{item.name}</div>
        <div className="text-sm mb-3 opacity-80">{item.status}</div>
        <div className="italic text-center">{item.review}</div>
      </div>
    ))}
  </div>
);

export default Testimoni;