<template>
  <div class="min-h-screen bg-white flex flex-col items-center">
    <!-- Header YouTube style -->
    <nav
      class="w-full h-14 bg-white flex items-center px-3 sm:px-8 border-b border-neutral-200 sticky top-0 z-10"
    >
      <div class="flex items-center gap-2">Walid Gharbi</div>

      <div class="flex items-center gap-4 ml-auto">
        <!-- Bouton email -->
        <a
          href="mailto:w.gharbi.tangerine@gmail.com"
          class="bg-neutral-100 hover:bg-red-600 hover:text-white rounded-full p-2 transition flex items-center group"
          title="Envoyer un email"
        >
          <span class="w-6 h-6 flex items-center justify-center">
            <!-- Logo Gmail SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="22"
              height="22"
            >
              <path
                fill="#4285F4"
                d="M44 39c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V13c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26z"
              />
              <path
                fill="#34A853"
                d="M44 39V17.5L24 33 4 17.5V39c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4z"
              />
              <path
                fill="#FBBC05"
                d="M44 13v4.3L24 28 4 17.3V13c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4z"
              />
              <path
                fill="#EA4335"
                d="M24 28L4 17.3V13c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v4.3L24 28z"
              />
            </svg>
          </span>
          <span
            class="hidden sm:inline ml-1 text-xs font-semibold group-hover:text-white"
            >Email</span
          >
        </a>
      </div>
    </nav>

    <!-- Banner with fade-in animation -->
    <div class="w-full flex justify-center mt-6 sm:mt-10">
      <div
        class="w-[95vw] max-w-3xl h-36 sm:h-48 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-400 to-red-700 relative fadein"
        style="animation-delay: 0.1s"
      >
        <!-- Avatar -->
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQFDZJijW06bkw/profile-displayphoto-crop_800_800/B4EZfHuYF.HcAU-/0/1751402514112?e=1756944000&v=beta&t=P_58Mt_WLDfjHzxiYndTdzCGT7hq6K2C3LUOXPoMMHk"
          alt="Walid Gharbi"
          class="absolute left-1/2 -bottom-16 sm:-bottom-20 -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg object-cover bg-white avatar-fade"
          style="animation-delay: 0.7s"
        />
      </div>
    </div>
    <div class="h-20 sm:h-24"></div>

    <!-- Infos chaîne -->
    <div class="w-full max-w-2xl flex flex-col items-center text-center px-4">
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-2xl sm:text-3xl font-bold text-neutral-900 title-fade">
          Walid Gharbi
        </h1>
        <div
          class="flex flex-col sm:flex-row items-center gap-1 text-neutral-500 text-sm info-fade"
        >
          <span>Développeur d'application web & mobile</span>
          <span class="hidden sm:inline">•</span>
          <span>Montréal</span>
        </div>
        <!-- <button
          class="mt-2 bg-black text-white px-6 py-1.5 rounded-full font-semibold hover:bg-neutral-800 transition-all text-sm sm:text-base shadow btn-fade"
        >
          S'abonner
        </button>-->
      </div>
      <!-- À propos -->
      <div
        class="mt-6 sm:mt-8 bg-neutral-50 border border-neutral-200 rounded-xl shadow p-5 w-full bio-fade"
      >
        <h2 class="text-lg sm:text-xl font-bold text-neutral-800 mb-1">
          À propos
        </h2>
        <p class="text-neutral-700 text-sm sm:text-base leading-relaxed">
          Bonjour, je m’appelle
          <span class="font-semibold text-neutral-900">Walid Gharbi</span
          >.<br />
          Développeur d'application web et mobile basé à Montréal, diplômé en
          technique informatique du Collège Rosemont.<br />
          J’aime créer des applications modernes, efficaces et centrées sur
          l’utilisateur.<br />
          Polyvalent (Vue.js, Node.js, Kotlin, etc.), rigoureux, curieux et à
          l’écoute, je travaille en équipe pour apporter de vraies solutions.<br />
          <span class="block mt-2">N’hésitez pas à me contacter !</span>
        </p>
      </div>
    </div>
    <!-- Mets les autres composants ici -->
    <Competence />
    <Projet />
    <Contact />
  </div>
</template>

<script setup>
import Competence from "@/components/Competence.vue";
import Projet from "@/components/Projet.vue";
import Contact from "@/components/Contact.vue";
</script>

<style scoped>
/* Animation fade-in simple */
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeup {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadein {
  animation: fadein 0.7s ease forwards;
}
.avatar-fade {
  opacity: 0;
  animation: fadeup 0.8s 0.6s ease forwards;
  transition: transform 0.2s;
}
.avatar-fade:hover {
  transform: scale(1.07) translateY(-2px);
  box-shadow: 0 8px 32px #e55b2b44;
}
.title-fade {
  opacity: 0;
  animation: fade 0.7s 1s ease forwards;
}
.info-fade {
  opacity: 0;
  animation: fade 0.7s 1.2s ease forwards;
}
.btn-fade {
  opacity: 0;
  animation: fade 0.7s 1.4s ease forwards;
  transition: transform 0.13s, box-shadow 0.13s;
}
.btn-fade:hover {
  transform: scale(1.06);
  box-shadow: 0 2px 14px #1112;
}
.bio-fade {
  opacity: 0;
  animation: fadeup 0.8s 1.7s ease forwards;
}
</style>
