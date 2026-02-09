<template>
  <div>
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
  { label: 'Home', href: '#profile' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Project', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
</script>
