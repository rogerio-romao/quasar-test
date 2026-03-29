import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Wires up Intersection Observer to add `.visible` to all `.reveal` elements
 * inside the given section element, triggering the CSS reveal animation.
 */
export function useReveal (sectionRef) {
  let observer = null

  onMounted(() => {
    const root = sectionRef?.value ?? document

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    root.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
