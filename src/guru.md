---
layout: layouts/page.njk
title: Guru & Ustadz
permalink: /guru/
description: "Mengenal guru-guru dan ustadz/ustadzah yang berdedikasi tinggi mendidik santri di Sekolah Al-Ishlah."
---

Lembaga Pendidikan Al-Ishlah bangga didampingi oleh staf pengajar yang kompeten di bidangnya, memiliki rekam jejak akhlak mulia, serta memiliki dedikasi tinggi dan kasih sayang yang mendalam bagi pendidikan keagamaan anak-anak.

---

## Daftar Pengajar Kami

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
  {% for teacher in collections.teachers | sortOrder %}
  <div class="bg-cream/15 border border-gray-100 rounded-3xl p-6 text-center hover-lift relative overflow-hidden group">
    <!-- Avatar circular frame -->
    <div class="w-36 h-36 bg-primary/10 rounded-full mx-auto mb-6 flex items-end justify-center overflow-hidden relative">
      <div class="absolute bottom-0 w-24 h-24 bg-primary rounded-t-full scale-90 opacity-20"></div>
      <svg class="w-20 h-20 text-primary relative z-10 translate-y-1.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    </div>
    
    <h3 class="text-lg font-bold text-navy">{{ teacher.data.title }}</h3>
    <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider mt-1">
      {{ teacher.data.role }}
    </span>
    
    <div class="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400">
      <span class="block font-semibold uppercase tracking-wide">Mata Pelajaran:</span>
      <span class="block text-gray-500 font-medium mt-1">{{ teacher.data.subject }}</span>
    </div>
  </div>
  {% endfor %}
</div>
