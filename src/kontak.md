---
layout: layouts/page.njk
title: Hubungi Kami
permalink: /kontak/
description: "Kontak Sekolah Al-Ishlah: Alamat, Telepon, Email, Jam Kerja, dan Peta Lokasi."
---

Hubungi kami melalui saluran informasi di bawah ini atau kirimkan pesan langsung melalui formulir kontak. Tim administrasi kami akan segera menanggapi pertanyaan Anda.

---

<div class="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">

  <!-- Left: Contact info -->
  <div class="space-y-6">
    <h3 class="text-xl font-bold text-navy">Informasi Kontak</h3>
    <p class="text-sm text-gray-500 leading-relaxed">
      Sekretariat pendaftaran Sekolah Al-Ishlah melayani informasi seputar pendaftaran santri baru, administrasi, dan kemitraan pada waktu operasional berikut.
    </p>
    
    <div class="space-y-4">
      <div class="flex items-start space-x-3 text-sm text-gray-650">
        <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <div>
          <span class="block font-bold text-navy">Alamat Sekolah:</span>
          <span class="block text-gray-500 mt-1">{{ settings.contact.address }}</span>
        </div>
      </div>

      <div class="flex items-start space-x-3 text-sm">
        <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <div>
          <span class="block font-bold text-navy">Telepon / WhatsApp:</span>
          <span class="block text-gray-500 mt-1">{{ settings.contact.phone }}</span>
        </div>
      </div>

      <div class="flex items-start space-x-3 text-sm">
        <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <div>
          <span class="block font-bold text-navy">Alamat Email:</span>
          <span class="block text-gray-500 mt-1">{{ settings.contact.email }}</span>
        </div>
      </div>
    </div>

    <!-- Map placeholder / decorative -->
    <div class="border border-gray-100 rounded-3xl p-6 bg-cream/15 relative overflow-hidden">
      <span class="block font-bold text-navy mb-2">Peta Lokasi</span>
      <p class="text-xs text-gray-400 leading-relaxed mb-4">
        Sekretariat kami terletak strategis di pusat kota dan mudah diakses menggunakan kendaraan roda dua maupun roda empat.
      </p>
      <div class="h-32 bg-primary/5 rounded-xl border border-dashed border-primary/20 flex items-center justify-center text-primary">
        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>
        <span class="text-xs font-bold uppercase tracking-wider">Buka Google Maps</span>
      </div>
    </div>
  </div>

  <!-- Right: Message Form -->
  <div class="bg-cream/15 p-6 rounded-3xl border border-gray-100">
    <h3 class="text-xl font-bold text-navy mb-6">Kirim Pesan</h3>
    <form class="space-y-4" action="#" method="POST">
      <div>
        <label for="name" class="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Nama Lengkap</label>
        <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors">
      </div>
      
      <div>
        <label for="email" class="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Alamat Email</label>
        <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors">
      </div>
      
      <div>
        <label for="message" class="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Pesan Anda</label>
        <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
      </div>

      <button type="submit" class="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl text-sm transition-colors shadow-md shadow-primary/10">
        Kirim Pesan Sekarang
      </button>
    </form>
  </div>

</div>
