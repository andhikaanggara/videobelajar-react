// array function
const KaliDua = (angka) => {
  return angka * 2;
};

const tambahTiga = (angka) => angka + 3;

const sapa = (nama) => "Hallo, " + nama;

const persegiLuas = (sisi) => sisi * sisi;

const selamatPagi = () => "Selamat Pagi";

// array data
const angka = [1, 2, 3, 4, 5];
const hasil = angka.map((isi) => {
  return isi * 2;
});

// DaftarNama.jsx
export default function DaftarNama() {
  const namaSiswa = ["Dika", "Agus", "Ujang", "Rohim"];
  return (
    <ul>
      {namaSiswa.map((nama, index) => (
        <li key={index}>{nama}</li>
      ))}
    </ul>
  );
}

// ListMurid.jsx
export default function ListMurid(){
  const murid = [
    { id: "A1", nama: "Siti" },
    { id: "A2", nama: "Bayu" },
    { id: "A3", nama: "Rohimah" },
    { id: "A4", nama: "Rafi" },
  ];
  return (
    <ul>
      {murid.map((item)=>(
        <li key={item.id}>{item.nama}</li>
      ))}
    </ul>
  )
}

export default function ListProduct(){
  const produk = [
    { id: "P1", nama: "Laptop", harga: 8500000 },
    { id: "P2", nama: "Headset", harga: 350000 },
    { id: "P3", nama: "Mouse", harga: 150000 },
    { id: "P4", nama: "Keyboard", harga: 250000 },
  ];
return (
  <div>
    <h2>Daftar Produk</h2>
  <ul>
    {produk.map((item)=>(
      <li key={item.id}>{item.nama} - Rp. {item.harga.toLocaleString("id-ID")}</li>
    ))}
  </ul>
  </div>
)  
}

// obj destructuring
const {nama, harga, stok} = barang;
console.log(`${nama} - Rp. ${harga.toLocaleString("id-ID")} - ${stok}`)

// obj destructuring dalam map
export default function ListProdukRapi (){
  const produk = [
    { id: "P1", nama: "Laptop", harga: 8500000 },
    { id: "P2", nama: "Headset", harga: 350000 },
    { id: "P3", nama: "Mouse", harga: 150000 },
    { id: "P4", nama: "Keyboard", harga: 250000 },
  ];
  return(
    <ul>
      {produk.map(({id, nama, harga})=>(
        <li key={id}>{nama} - Rp. {harga.toLocaleString("id-ID")}</li>
      ))}
    </ul>
  )
}

export default function ListProdukStok(){
  const produk = [
    { id: "P1", nama: "Laptop", harga: 8500000, stok: 10 },
    { id: "P2", nama: "Headset", harga: 350000, stok: 0 },
    { id: "P3", nama: "Mouse", harga: 150000, stok: 5 },
    { id: "P4", nama: "Keyboard", harga: 250000, stok: 0 },
  ];
  return (
    <ul>
      {produk.map(({id, nama, harga, stok}) => (
        <li key={id}>{nama} - Rp. {harga.toLocaleString("id-ID")} - {stok>0 ? "[Tersedia]":"[Habis]" }</li>
      ))}
    </ul>
  )
}

// props
// ProdukItem.jsx
export default function ProdukItem({nama, harga, stok}){
    return (
    <li>
      {nama} - Rp. {harga.toLocaleString("id-ID")} - {stok > 0 ? "[Tersedia]" : "[Habis]"}
    </li>
  )
}

// ListProdukProps.jsx
import ProdukItem from "./ProdukItem.jsx"

export default function ListProdukProps(){
  const produk = [
    { id: "P1", nama: "Laptop", harga: 8500000, stok: 10 },
    { id: "P2", nama: "Headset", harga: 350000, stok: 0 },
    { id: "P3", nama: "Mouse", harga: 150000, stok: 5 },
    { id: "P4", nama: "Keyboard", harga: 250000, stok: 0 },
  ];
  return(
    <ul>
      {produk.map(({id, nama, harga, stok})=>(
        <ProdukItem key={id} nama={nama} harga={harga} stok={stok}/>
      ))}
    </ul>
  )
}

// -------------------

// SiswaItem.jsx
export default function SiswaItem ({nama, nilai}){
  return(
    <li>
      {nama} - Nilai: {nilai} - {nilai >= 70 ? "[Lulus]" : "[Tidak Lulus]"}
    </li>
  )
}

// ListSiswaProps.jsx
export default function ListSiswaProps(){
  const siswa = [
    { id: 1, nama: "Dika", nilai: 85 },
    { id: 2, nama: "Rani", nilai: 62 },
    { id: 3, nama: "Budi", nilai: 45 },
    { id: 4, nama: "Siska", nilai: 78 },
  ];

return  (
  <div>
    <h2>Daftar Nilai Siswa</h2>
  <ul>
    {siswa.map(({id, nama, nilai})=>(
      <SiswaItem key={id} nama={nama} nilai={nilai}/>
    ))}
  </ul>
  </div>
)
}