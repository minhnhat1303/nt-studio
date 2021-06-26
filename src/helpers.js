const getScrollHeight = () => {
  let sh = window.screen.height
  let cst = document.documentElement.scrollTop
  return 0.8 * sh + cst
}

export const aos = (hiddenClass, arr) => {
  let H = getScrollHeight()
  arr.forEach(
    item => {
      let h = item.offsetTop
      if (H > h && item.classList.contains(hiddenClass)) {
        item.classList.remove(hiddenClass)
      }
    }
  )
}

export const aosForList = (hiddenClass, arr) => {
  let H = getScrollHeight()
  arr.forEach(
    item => {
      let h = item.offsetTop
      console.log(item.classList)
      if (H > h && item.classList.contains(hiddenClass)) {
        console.log('herer', item)
      }
    }
  )
}