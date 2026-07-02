---
layout: layouts/page.njk
title: Berita & Kegiatan
permalink: /berita/
description: "Dapatkan informasi, kabar terbaru, dan dokumentasi kegiatan resmi di Sekolah Al-Ishlah."
---

Ikuti terus perkembangan, pengumuman, kabar terkini, serta rangkaian kegiatan seru santri kami di Sekolah Al-Ishlah.

---

## Kabar Terbaru

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
  {% for item in collections.news | reverse %}
  <div class="bg-white border border-gray-100 rounded-3xl overflow-hidden hover-lift shadow-sm flex flex-col justify-between">
    
    <!-- Abstract pattern card image fallback -->
    <div class="h-48 bg-primary/5 relative flex items-center justify-center text-primary overflow-hidden">
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-primary/10 opacity-20 bg-[linear-gradient(to_right,#0D683E_1px,transparent_1px),linear-gradient(to_bottom,#0D683E_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <!-- Icon -->
      <svg class="w-12 h-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 00-2-2v3a2 2 0 002-2V9z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11a2 2 0 100-4 2 2 0 000 4zm0 0v4m-3 0h6"></path>
      </svg>
    </div>

    <!-- Content -->
    <div class="p-6 flex-grow space-y-3">
      <span class="block text-xs font-semibold text-primary uppercase tracking-wider">
        {{ item.date | dateDisplay }}
      </span>
      <h3 class="text-xl font-bold text-navy leading-tight">
        <a href="{{ item.url }}" class="hover:text-primary transition-colors">{{ item.data.title }}</a>
      </h3>
      <p class="text-sm text-gray-500 leading-relaxed line-clamp-3">
        {{ item.data.summary }}
      </p>
    </div>

    <!-- Footer -->
    <div class="px-6 pb-6 pt-2">
      <a href="{{ item.url }}" class="inline-flex items-center space-x-1.5 text-sm font-bold text-primary hover:text-primary-light transition-colors group">
        <span>Baca Selengkapnya</span>
        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>

  </div>
  {% endfor %}
</div>
