import { onMounted, onUnmounted, ref } from '@vue/composition-api'

export const useScroll = () => {
  const lastScrollPosition = ref(0)
  const scrollStatus = ref(0)
  function handleScroll() {
    scrollStatus.value = window.scrollY > lastScrollPosition.value ? 1 : -1
    lastScrollPosition.value = window.scrollY
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  return { scrollStatus }
}
