# CLAUDE.md — Guardrail Proyek

Aturan yang berlaku untuk semua pekerjaan di repo ini. Detail lengkap ada di
`DESIGN.md`, `PRD.md`, dan `PROMPT.md` (satu folder ini).

## Stack

Astro 5 + React 19 (islands) + Tailwind 4. Entry: `src/pages/index.astro`.
Design token: `src/styles/global.css` — palet space, **pertahankan, jangan ganti**.

## Aturan keras

1. **GSAP satu-satunya library animasi**, khusus untuk `CardSwap`.
   Jangan install `framer-motion`, `three`, `tsparticles`, atau library animasi
   lain — semuanya sudah sengaja dicopot.
2. **Tidak ada WebGL atau canvas loop.** Background bintang cukup CSS/SVG.
3. **Semua gambar lewat `astro:assets`** dari `src/assets/`.
   `public/` hanya untuk favicon, `robots.txt`, dan audio.
4. **Hidrasi paling malas yang masih benar** — `client:visible` default,
   `client:load` hanya Navbar. Hindari `client:only`.
5. **Animasi hanya `transform` dan `opacity`.**
6. **`prefers-reduced-motion: reduce` wajib ditangani** di setiap komponen
   beranimasi.
7. Urutan pilihan teknik: CSS transition → `@keyframes` → scroll-driven CSS →
   JS kecil → library (butuh justifikasi tertulis di `DESIGN.md`).

## Anggaran performa

| Metrik | Batas |
|---|---|
| JS initial (gzip) | < 100 KB |
| Total transfer halaman pertama | < 500 KB |
| Gambar terbesar | < 200 KB |
| LCP / CLS / TBT | < 2,0 dtk / < 0,05 / < 150 ms |

Perubahan yang menembus batas ini butuh persetujuan eksplisit.

## Verifikasi

```bash
npm run build && npm run preview
```

Ukur dengan Lighthouse (Mobile, Incognito) sebelum menyatakan selesai. Laporkan
angka sebenarnya, termasuk kalau target tidak tercapai.

## Bahasa

Konten situs berbahasa Indonesia (`<html lang="id">`). Teks yang dibaca
pengunjung harus bisa dipahami orang non-teknis — hindari jargon.
