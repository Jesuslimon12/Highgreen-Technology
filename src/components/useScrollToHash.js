import { useEffect } from 'react'


const useScrollToHash = () => {
          const { hash } = window.location
  useEffect(() => {
    //TODO: setTimeout with 0 made it work in Safari - i dont know why
    setTimeout(() => {

      if (hash) {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'instant' })
          window.scrollBy(0, -55)
        }
      }
    }, 0)
  }, [])
}

export default useScrollToHash;