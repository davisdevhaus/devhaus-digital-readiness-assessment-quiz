import { AnimationItem } from 'lottie-web';
import type App from 'src/types/app';

import loadAnimationById from '$utils/animations/loadAnimationById';

export default async function onMounted(app: App, wf: Window['Webflow'], lottieDelay: number) {
  const loadingSection = document.getElementById('loading-screen') as HTMLElement;
  const confettiSection = document.querySelector('.assess-quiz_lottie-confetti') as HTMLElement;
  const anim = await loadAnimationById(wf, 'loading-lottie-wrapper');
  const confettiAnim = await loadAnimationById(wf, 'confetti-lottie-wrapper');
  confettiSection.style.display = 'none';
  confettiAnim.pause();
  anim.goToAndPlay(0);
  app.animWrapper = anim.wrapper as HTMLElement;
  app.animConfetti = anim as AnimationItem;

  app.mountQuestion(-1);
  window.addEventListener('resize', () => {
    app.setProgressBar();
    app.store.isMobile = window.innerWidth < 768;
  });

  setTimeout(() => {
    loadingSection.style.opacity = '0';
    app.sectionTransitionIn('#first-page', 1000);
  }, lottieDelay);
  setTimeout(() => {
    loadingSection.style.display = 'none';
  }, lottieDelay + 300);
}
