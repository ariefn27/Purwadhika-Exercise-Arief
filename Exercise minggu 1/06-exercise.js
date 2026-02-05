const tanggal1 = new Date("2022-01-20");
const tanggal2 = new Date("2022-01-22");

const selisihMs = Math.abs(tanggal2 - tanggal1);

// 1000 - Milidetik per detik
// 60 - Detik per menit
// 60 - Menit per jam
// 24 - Jam per hari
const MS_PER_HARI = 1000 * 60 * 60 * 24;
const selisihHari = Math.floor(selisihMs / MS_PER_HARI);

// Test
console.log(selisihHari);
