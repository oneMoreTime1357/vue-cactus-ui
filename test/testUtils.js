import { nextTick } from '@vue/composition-api'

export const sleep = (time = 0) =>
  new Promise((resolve) => setTimeout(resolve, time))

// in order to test transitions, we need to use
// await rAF() after firing transition events.
export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null)
        await nextTick()
      })
    })
  })
}
