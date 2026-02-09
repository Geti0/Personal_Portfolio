export function useTypingEffect(
  elementRef: Ref<HTMLElement | null>,
  text: string,
  speed = 50,
  delay = 1000,
) {
  onMounted(() => {
    const el = elementRef.value
    if (!el) return

    el.textContent = ''
    el.style.opacity = '1'
    let index = 0

    setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          el.textContent += text.charAt(index)
          index++
        }
        else {
          clearInterval(interval)
        }
      }, speed)
    }, delay)
  })
}

export function useTerminalTyping(
  commands: string[],
  speed = 40,
  lineDelay = 800,
  initialDelay = 500,
) {
  const lines = ref<{ text: string; isComplete: boolean }[]>([])
  const isTyping = ref(false)

  onMounted(() => {
    setTimeout(() => {
      typeCommands()
    }, initialDelay)
  })

  async function typeCommands() {
    isTyping.value = true
    for (const cmd of commands) {
      const line = { text: '', isComplete: false }
      lines.value.push(line)

      for (let i = 0; i < cmd.length; i++) {
        line.text += cmd.charAt(i)
        await sleep(speed)
      }
      line.isComplete = true
      await sleep(lineDelay)
    }
    isTyping.value = false
  }

  function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return { lines, isTyping }
}
