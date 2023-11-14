import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname, hash } = useLocation();
  

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    document.documentElement.scrollTo(0, pathname.offsetTop);
    if (hash) {
      setTimeout(() => {0
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
   
  }, [pathname, hash]);
}

export default ScrollToTop;