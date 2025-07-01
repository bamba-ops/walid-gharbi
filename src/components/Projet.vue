<template>
  <section class="w-full max-w-5xl mx-auto mt-12 px-2 mb-12 sm:px-4">
    <h2
      class="text-lg sm:text-xl font-bold text-neutral-900 mb-8 flex items-center gap-2"
    >
      <span class="text-red-600 text-base sm:text-lg">📺</span> Mes projets
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="flex flex-col items-center group"
      >
        <a
          :href="project.demo || project.github"
          target="_blank"
          rel="noopener"
          class="block w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm hover:shadow-lg transition group"
        >
          <div class="relative">
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full aspect-video object-cover group-hover:scale-[1.025] transition duration-200"
            />
            <div
              class="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              >
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                  <circle cx="27" cy="27" r="27" fill="rgba(0,0,0,0.13)" />
                  <polygon points="21,16 21,38 40,27" fill="#000" />
                </svg>
              </div>
            </div>
            <div class="absolute bottom-3 right-3 z-10">
              <span
                class="bg-black text-white text-xs px-4 py-1.5 rounded-full font-semibold shadow group-hover:bg-neutral-800 transition"
              >
                Voir le projet
              </span>
            </div>
          </div>
        </a>
        <div class="w-full flex flex-col gap-1 mt-3 px-2">
          <div class="flex items-center gap-2">
            <span class="text-base text-neutral-900 font-semibold truncate">{{
              project.title
            }}</span>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="ml-2 hover:underline text-neutral-500 flex items-center gap-1 text-xs font-bold"
            >
              <span class="material-symbols-outlined text-base align-middle"
                >code</span
              >
              Code
            </a>
          </div>
          <div class="text-neutral-500 text-xs mb-1">
            <span class="truncate">{{ project.stack }}</span>
          </div>
          <div class="text-neutral-700 text-sm">
            {{ project.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Spy Grocery",
    img: "/spygrocery.gif",
    description:
      "Site web qui compare les prix des produits à travers plusieurs supermarchés au Québec pour aider les utilisateurs à trouver les meilleures offres.",
    role: "Développeur full-stack",
    stack: "Vue.js 3, Node.js, Supabase, PostgreSQL, Python",
    github: "https://github.com/bamba-ops/spy-grocery",
    demo: "",
  },
  {
    title: "Booklique",
    img: "https://i.postimg.cc/SK5xVqJW/image.png",
    description:
      "Application mobile Android pour échanger, réserver et vendre des livres d’occasion. Recherche avancée, messagerie, réservations en temps réel.",
    role: "Développeur principal",
    stack: "Kotlin Android, Java Spring Boot, MySQL",
    github: "https://github.com/bamba-ops/booklique",
    demo: "",
  },

  {
    title: "Spy Live",
    img: "https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test/spylive_logo.png",
    description:
      "Plateforme qui automatise les ventes en live sur TikTok grâce à l’écoute des lives (WebSocket) et la génération de liens Stripe lors d’un commentaire client.",
    role: "Développeur full-stack",
    stack: "Vue.js 3, Node.js, Supabase",
    github: "https://github.com/bamba-ops/spy-live",
    demo: "",
  },
];
</script>
