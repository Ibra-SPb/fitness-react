export const baseMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  ViewPort: { once: true, amount: 0.5 },
};

export const sliderLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const sliderRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideUp = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const whithDelay = (index: number, base: number = 0.2, duration: number = 0.5) => {
  return {
    delay: index * base,
    duration,
  };
};
