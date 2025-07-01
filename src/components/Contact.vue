<template>
  <footer
    class="w-full bg-white border-t border-neutral-200 mt-20 pt-14 pb-10 flex justify-center"
  >
    <div class="w-full max-w-lg flex flex-col items-center gap-8 px-4">
      <!-- Bouton CV -->
      <a
        href="/cv-walid-gharbi.pdf"
        download
        class="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full font-semibold text-base shadow-lg hover:bg-neutral-900 active:scale-95 transition-all duration-150 animate-cv"
      >
        <!--<span class="material-symbols-outlined text-lg">download</span>-->
        Télécharger mon CV
      </a>

      <!-- Email -->
      <div
        class="flex items-center gap-2 text-neutral-700 text-base animate-cv"
        style="animation-delay: 0.13s"
      >
        <a
          href="mailto:w.gharbi.tangerine@gmail.com"
          class="underline hover:text-red-600 transition"
          >w.gharbi.tangerine@gmail.com</a
        >
      </div>

      <!-- Réseaux sociaux -->
      <div
        class="flex flex-wrap gap-6 justify-center mt-2 animate-cv"
        style="animation-delay: 0.22s"
      >
        <!-- GitHub -->
        <a
          href="https://github.com/bamba-ops"
          target="_blank"
          class="group flex flex-col items-center text-neutral-700 hover:text-red-600 transition"
        >
          <svg
            class="w-7 h-7 mb-1 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7-1.1.7-1.1C7 16.1 4.3 15.1 4.3 10.8c0-1 .4-1.8 1-2.4-.1-.3-.4-1.2.1-2.6 0 0 .8-.3 2.5 1a8.4 8.4 0 014.5 0c1.7-1.3 2.5-1 2.5-1 .5 1.4.2 2.3.1 2.6.6.6 1 1.4 1 2.4 0 4.4-2.7 5.2-5.2 5.5.2.2.3.5.3 1v1.5c0 .4.2.7.8.6A12 12 0 0012 .3"
            ></path>
          </svg>
          <span class="text-xs font-semibold">GitHub</span>
        </a>
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/ton-linkedin"
          target="_blank"
          class="group flex flex-col items-center text-neutral-700 hover:text-red-600 transition"
        >
          <svg
            class="w-7 h-7 mb-1 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21H17v-6.1c0-1.5-1.3-1.5-1.3 0V21h-4V8.9h4v1.6c.7-1.3 4-1.5 4 1.2V21zm-13.8-13A2.2 2.2 0 015.2 5c1.2 0 2.1 1 2.1 2.1 0 1.2-.9 2.1-2.1 2.1S3 8.3 3 7.1c0-1.1.9-2.1 2.1-2.1zm2 13H3V8.9h4v11zm15-18H2C1.5 2 1 2.5 1 3v18c0 .5.5 1 1 1h20c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1z"
            ></path>
          </svg>
          <span class="text-xs font-semibold">LinkedIn</span>
        </a>
        <!-- TikTok -->
        <a
          href="https://www.tiktok.com/@ton-tiktok"
          target="_blank"
          class="group flex flex-col items-center text-neutral-700 hover:text-red-600 transition"
        >
          <svg
            class="w-7 h-7 mb-1 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path
              d="M28.666 11.547v3.093c-2.543.013-4.647-.716-6.338-2.164v8.508c0 5.294-4.185 7.709-8.15 7.709-3.09 0-7.209-1.719-7.209-7.556v-8.198h4.185v8.198c0 2.64 1.445 3.735 3.24 3.735 2.031 0 3.965-1.24 3.965-3.635v-15.238h4.184c.08 2.267 1.472 5.642 6.122 5.448z"
            />
          </svg>
          <span class="text-xs font-semibold">TikTok</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Rien à ajouter ici.
</script>

<style scoped>
@keyframes cvfade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-cv {
  opacity: 0;
  animation: cvfade 0.7s ease forwards;
}
</style>
