export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  export  const decideID = (id: string, closeMenu?) => {
      
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    
  };
