<template>
  <section
    class="w-full max-w-2xl flex flex-col items-center mt-8 px-2 sm:px-4"
  >
    <div
      class="w-full bg-white border border-neutral-200 rounded-xl shadow p-5 animate-comp-fade"
    >
      <h2
        class="text-lg sm:text-xl font-bold text-neutral-800 mb-5 flex items-center gap-2"
      >
        <span class="text-red-600 text-base sm:text-lg">💻</span>
        Compétences techniques
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Langages -->
        <div>
          <h3
            class="text-neutral-700 font-bold text-base mb-2 flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-red-600 text-base"
              >code</span
            >
            Langages
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Java
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Python
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              C++
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              C#
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              JavaScript
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Kotlin
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              SQL
            </li>
          </ul>
        </div>
        <!-- Frameworks & librairies -->
        <div>
          <h3
            class="text-neutral-700 font-bold text-base mb-2 flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-red-600 text-base"
              >construction</span
            >
            Frameworks & APIs
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Spring Boot
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Vue.js 3
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Node.js
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              .NET
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Supabase
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Kotlin Android
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Java API
            </li>
          </ul>
        </div>
        <!-- Bases de données -->
        <div>
          <h3
            class="text-neutral-700 font-bold text-base mb-2 flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-red-600 text-base"
              >storage</span
            >
            Bases de données
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              MySQL
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              PostgreSQL
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Supabase
            </li>
          </ul>
        </div>
        <!-- Outils & Cloud -->
        <div>
          <h3
            class="text-neutral-700 font-bold text-base mb-2 flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-red-600 text-base"
              >build</span
            >
            Outils & Cloud
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Git
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              GitHub
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              VS Code
            </li>
            <li
              class="bg-neutral-100 px-3 py-1 rounded-full text-neutral-800 text-sm shadow-sm"
            >
              Postman
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucun JS nécessaire ici.
</script>

<style scoped>
@keyframes compfade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-comp-fade {
  opacity: 0;
  animation: compfade 0.7s 0.4s ease forwards;
}
</style>
