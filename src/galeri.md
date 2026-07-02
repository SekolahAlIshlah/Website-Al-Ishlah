---
layout: layouts/page.njk
title: Galeri Kegiatan
permalink: /galeri/
description: "Lihat galeri foto dokumentasi sarana prasarana dan aktivitas harian santri di Sekolah Al-Ishlah."
---

Dokumentasi keceriaan belajar, fasilitas, serta berbagai momentum istimewa santri kami di Sekolah Al-Ishlah.

---

## Momen Kegiatan Kami

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
  {% for item in collections.gallery | reverse %}
  <div class="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover-lift flex flex-col justify-between">
    
    <!-- Abstract pattern placeholder image -->
    <div class="aspect-video bg-primary/5 text-primary flex flex-col items-center justify-center rounded-2xl overflow-hidden mb-4 relative">
      <!-- Radial gradient -->
      <div class="absolute inset-0 bg-primary/10 opacity-25 bg-[radial-gradient(#0D683E_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
      <!-- SVG Icon -->
      <svg class="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      <span class="inline-block px-2.5 py-1 bg-white/95 text-primary text-[9px] font-bold rounded-full shadow-sm mt-3 relative z-10 uppercase tracking-wider">
        {{ item.data.category }}
      </span>
    </div>

    <!-- Details -->
    <div>
      <h3 class="text-base font-bold text-navy leading-snug">{{ item.data.title }}</h3>
      <span class="block text-[10px] font-semibold text-gray-400 mt-1 uppercase tracking-wide">
        {{ item.date | dateDisplay }}
      </span>
    </div>

  </div>
  {% endfor %}
</div>
