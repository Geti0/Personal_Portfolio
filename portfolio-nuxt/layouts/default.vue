<template>
  <div>
    <AnimatedBackground />
    <NavDesktopNav :links="navLinks" />
    <NavMobileNav :links="navLinks" />
    <main>
      <slot />
    </main>
    <FooterSection :links="navLinks" />
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
</script>
