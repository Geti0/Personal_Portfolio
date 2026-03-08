<template>
  <section id="recommendation" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[900px] mx-auto text-center">
      <div class="section-label mb-4">RECOMMENDATION</div>
      <div class="flex flex-col items-center gap-6">
        <div class="w-full md:w-3/4 lg:w-2/3 rounded-xl shadow-lg overflow-hidden bg-gray-50 p-6">
          <div class="flex-1 text-left">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Recommendation Letter</h3>
            <p class="text-gray-700 mb-4">
              "It is my pleasure to recommend Getuar Kelmendi for his outstanding work and dedication during his time at Besa Solutions. Getuar consistently demonstrated exceptional technical skills, professionalism, and a strong commitment to delivering high-quality results. His contributions were invaluable to our team, and I am confident he will excel in any future endeavor."
            </p>
            <div class="text-gray-500 text-sm">- Mentor, Besa Solutions</div>
            <button @click="showModal = true" class="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition font-semibold shadow">
              View Full Letter
            </button>
          </div>
          <transition name="fade">
            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative animate-fadeIn border border-accent">
                <button @click="showModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-accent text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-accent">&times;</button>
                <h4 class="text-2xl font-bold mb-6 text-accent text-center">Full Recommendation Letter</h4>
                <div class="text-left text-gray-800 text-lg leading-relaxed max-h-[60vh] overflow-y-auto pr-2 space-y-5">
                  <p>To Whom It May Concern,</p>
                  <p>I am pleased to recommend Getuar as a developer and teammate. As his direct manager over the past year and a half, I have had a close view of both his technical growth and his character as a professional.</p>
                  <p>Getuar joined our organization as an intern in November 2024 and, through consistent dedication and a genuine willingness to grow, quickly advanced to a junior developer role. That progression tells you a lot about who he is, someone who takes ownership of his own development and earns every step forward.</p>
                  <p>Throughout his time with us, Getuar showed himself to be a true team player. He collaborates naturally, supports those around him, and approaches every project with a positive, can-do attitude. Beyond his interpersonal strengths, he has shown a willingness to step outside his comfort zone. Originally a backend developer, he proactively expanded into front-end work, embracing new technologies and adapting quickly. A good example of this was the ease with which he set up integrations with external APIs our team had never worked with before, always delivering.</p>
                  <p>He works self-reliantly and accurately, requiring minimal oversight while still communicating effectively with the broader team. On top of that, he is simply easy to work with; sociable, approachable, and the kind of colleague people genuinely enjoy having around.</p>
                  <p>Getuar is a talented, driven, and a collaborative developer, and I have no doubt he will be a valuable asset to his next team.</p>
                  <p class="font-semibold mt-6">Sincerely,<br/>Artan Fetahaj<br/>CTO, Softbear.nl</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showModal = ref(false);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.animate-fadeIn {
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}

/* Custom scrollbar for modal */
.max-h-\[60vh\]::-webkit-scrollbar {
  width: 8px;
}
.max-h-\[60vh\]::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}
.max-h-\[60vh\]::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>
