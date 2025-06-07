<script>
  // Smooth scroll untuk semua tautan yang mengarah ke ID (#)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Redireksi ke WhatsApp saat tombol diklik
  document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector("button");

    if (contactButton) {
      contactButton.addEventListener("click", () => {
        // Ganti dengan nomor WhatsApp bisnis Anda
        const phoneNumber = "6282192030110"; 
        const message = encodeURIComponent("Halo, saya ingin bertanya tentang layanan laundry Anda.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      });
    } else {
      console.warn("Tombol tidak ditemukan. Pastikan elemen <button> ada di HTML.");
    }
  });
</script>
