import sneakers from '../assets/images/category/sneakers.png';
import boots from '../assets/images/category/boots.png';
import sliders from '../assets/images/category/sliders.png';
import heels from '../assets/images/category/heels.png';
import formalShoes from '../assets/images/category/formal-shoes.png';
import hikingShoes from '../assets/images/category/hiking-shoes.png';

export const getCategoryLogo = (categoryName) => {
  switch (categoryName) {
    case 'Sneakers':
      return sneakers;
    case 'Boots':
      return boots;
    case 'Sliders':
      return sliders;
    case 'Heels':
      return heels;
    case 'Formal Shoes':
      return formalShoes;
    case 'Hiking Shoes':
      return hikingShoes;
    default:
      break;
  }
};
