function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const prosesPerhitunganL = `Proses perhitungan: 0.5 * ${alas} + ${tinggi}`;

    if (isNaN(alas) || isNaN(tinggi)) {
      document.getElementById('prosesPerhitunganL').textContent = '';
      document.getElementById('hasilLuas').textContent = 'Masukkan angka valid untuk alas dan tinggi.';
    } else {
      const luas = 0.5 * alas * tinggi;
      document.getElementById('prosesPerhitunganL').textContent = prosesPerhitunganL;
      document.getElementById('hasilLuas').textContent = `Luas segitiga: ${luas}`;
    }
  }
  

  

  function resetFormLuas() {
    document.getElementById('kalkulatorLuas').reset();
    document.getElementById('prosesPerhitunganL').textContent = '';
    document.getElementById('hasilLuas').textContent = '';
  }
  

function hitungKeliling() {

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("kalkulatorLuas");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      hitungKeliling();
    });
  });


    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);
    const prosesPerhitungan = `Proses perhitungan: ${sisi1} + ${sisi2} + ${sisi3}`;

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
      document.getElementById('prosesPerhitunganKeliling').textContent = '';
      document.getElementById('hasilKeliling').textContent = 'Masukkan angka valid untuk panjang sisi.';
    } else {
      const keliling = sisi1 + sisi2 + sisi3;
      document.getElementById('prosesPerhitunganKeliling').textContent = prosesPerhitungan;
      document.getElementById('hasilKeliling').textContent = `Keliling segitiga: ${keliling}`;
    }
  }

  function resetFormLuas() {
    document.getElementById('calculator-form').reset();
    document.getElementById('prosesPerhitunganKeliling').textContent = '';
    document.getElementById('hasilKeliling').textContent = '';
  }
  