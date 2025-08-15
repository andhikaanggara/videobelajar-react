export default function Crud() {
  // data yang di simpan dalam usestate
  const [bio, setBio] = useState([
    { id: 1, nama: "Andhika", umur: 24 },
    { id: 2, nama: "Caoi", umur: 2 },
  ]);

  // data input agar bisa dirubah
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState();

  // memory untuk ubah mode
  const [editId, setEditId] = useState(null);

  // fungsi tambah atau edit data
  const handleSubmit = (e) => {
    e.preventDefault();

    // fungsi menolak jika nama / umur tidak di isi
    if (!nama || !umur) {
      alert("mohon isi semua");
      return;
    }

    // fungsi dalam mode edit
    if (editId) {
      setBio(
        bio.map((bios) => (bios.id === editId ? { ...bios, nama, umur } : bios))
      );
      setEditId(null);
    }
    // fungsi dalam mode tambah
    else {
      const newBio = {
        id: bio.length + 1,
        nama,
        umur,
      };
      setBio([...bio, newBio]);
    }
    setNama(""), setUmur("");
  };

  // fungsi untuk masuk mode edit dan menambah data lama pada input
  const handleEdit = (id) => {
    const bios = bio.find((bios) => bios.id === id);
    setNama(bios.nama);
    setUmur(bios.umur);
    setEditId(bios.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakeen ?")) {
      setBio(bio.filter((bios) => bios.id !== id));
    }
  };

  return (
    <div>
      <h1>{editId ? "Edit Nama" : "Tambah Nama"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="border"
        />
        <br />
        <input
          type="string"
          placeholder="Umur"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
          className="border"
        />
        <br />
        <button type="submit" className="border px-1 mb-3">
          {editId ? "Update" : "Tambah"}
        </button>
      </form>
      <h2>Hasil</h2>
      {bio.map((bios) => (
        <div
          key={bios.id}
          className="flex gap-4 justify-end w-60 items-center mb-1 border-b-1"
        >
          <h2>{bios.nama}</h2>
          <p>{bios.umur}</p>
          <button
            onClick={() => handleEdit(bios.id)}
            className="border rounded-lg p-1"
          >
            Edit
          </button>
          <button onClick={() => handleDelete(bios.id)}>Hapus</button>
        </div>
      ))}
    </div>
  );
}
