// 1. Deklarasi array daftarBuku menggunakan const (variabel tidak bisa ditetapkan ulang)
const daftarBuku = [
  { judul: "Dasar Pemrograman Web", harga: 85000, stok: 12 },    
  { judul: "Algoritma dan Logika", harga: 95000, stok: 0 },      
  { judul: "Basis Data untuk Pemula", harga: 120000, stok: 5 },  
  { judul: "Jaringan Komputer", harga: 110000, stok: 8 }        
];

// 2. Perulangan for: mengulang untuk setiap buku dalam array daftarbuku
//    i < daftarBuku.length artinya berhenti saat i sama dengan jumlah buku (4)
for (let i = 0; i < daftarBuku.length; i++) { 

// 3. Percabangan if...else: menentukan keterangan berdasarkan stok
  let keterangan;               // variabel untuk menyimpan keterangan apakah buku tersedia atau habis
  if (daftarBuku[i].stok > 0) { //if: jika stok buku ke-1 lebih dari 0,maka jalankan blok kode berikut
    keterangan = "Tersedia";    // maka keterangan diisi tersedia
  } else {                      //jika tidak, jalankan blok berikutnya          
    keterangan = "Habis";       // maka keterangan diisi habis
  }
// cetak informasi buku ke console, menampilakn nomor uurut, judul,harga,stok dan keterangan
  console.log((i + 1) + ". " + daftarBuku[i].
  judul + " - Rp" + daftarBuku[i]. 
  harga + " - Stok: " + daftarBuku[i].stok + " (" + keterangan + ")");
}

// 4. Fungsi hitungTotalAset: menerima array buku, mengembalikan total nilai seluruh stok
function hitungTotalAset(buku) {            
  let total = 0;                                       // fungsi untuk penampung total yang awalnya 0
  for (let i = 0; i < buku.length; i++) {              // perulangan untuk memeriksa setiap buku, i dari 0 sampai 3
    total = total + (buku[i].harga * buku[i].stok);    // harga dikali stok, lalu ditambahkan total
  }
  return total;                                        // kembalikan  total nilai
}

// memanggil fungsi hitungtotalasset dengan parameter daftarbuku, lalu mencetak hasilnya di console
console.log("Total nilai aset: Rp" + hitungTotalAset(daftarBuku)) 

// 5. Hitung jumlah judul buku yang stoknya habis
let jumlahHabis = 0;                             // menghitung jumlah buku yang stoknya habis, awalnya 0
for (let i = 0; i < daftarBuku.length; i++) {    // Perulangan untuk memeriksa setiap buku, i dari 0 sampai 3
  if (daftarBuku[i].stok === 0) {                // jika stok buku ke-1 sama dengan 0, maka jalankan blok kode berikut
    jumlahHabis++;                              // jika stok habis, maka jumlah Habis ditambah 1
  }
}
console.log("Jumlah buku habis: " + jumlahHabis);     // Menampilkan jumlah buku yang habis ke console, hasilnya 1