{
  const HARI_PER_TAHUN = 365;
  const HARI_PER_BULAN = 30;

  const inputA = 400;

  const tahun = Math.floor(inputA / HARI_PER_TAHUN);
  const sisaSetelahTahun = inputA % HARI_PER_TAHUN;
  const bulan = Math.floor(sisaSetelahTahun / HARI_PER_BULAN);
  const hari = sisaSetelahTahun % HARI_PER_BULAN;

  console.log(`${tahun} tahun ${bulan} bulan ${hari} hari`);
}

{
  const HARI_PER_TAHUN = 365;
  const HARI_PER_BULAN = 30;

  const inputB = 366;

  const tahun = Math.floor(inputB / HARI_PER_TAHUN);
  const sisaSetelahTahun = inputB % HARI_PER_TAHUN;
  const bulan = Math.floor(sisaSetelahTahun / HARI_PER_BULAN);
  const hari = sisaSetelahTahun % HARI_PER_BULAN;

  console.log(`${tahun} tahun ${bulan} bulan ${hari} hari`);
}
