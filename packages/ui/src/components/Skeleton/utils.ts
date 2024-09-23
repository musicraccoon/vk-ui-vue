import { shallowRef, watchEffect, type Ref } from "vue";
import { millisecondsInSecond } from "date-fns/constants";

/**
 * Синхронизирует анимацию скелетонов с помощью временных отрезков
 *
 * ## visibilitychange
 *
 * В синхронизацию не заложен механизм перехода на оптимизации браузеров при
 * переходе на другую вкладку, поскольку нет уверенности в реальности таких
 * кейсов со скелетонами. Если такой кейс принесут, необходимо обработать
 * событие `visibilitychange` используя функцию `syncAnimation`
 *
 * https://developer.chrome.com/blog/page-lifecycle-api/
 *
 * @param duration длительность анимации в секундах
 */
export const useSkeletonSyncAnimation = (
  disableAnimation: Ref<boolean>,
  duration: number | undefined = 1.5
) => {
  const isAnimationStarted = shallowRef(false);
  const timer = shallowRef<ReturnType<typeof setTimeout>>();

  const syncAnimation = () => {
    clearTimeout(timer.value);
    isAnimationStarted.value = false;

    const durationInMilliseconds = duration * millisecondsInSecond;
    const delay =
      durationInMilliseconds - (performance.now() % durationInMilliseconds);

    timer.value = setTimeout(() => (isAnimationStarted.value = true), delay);

    return () => clearTimeout(timer.value);
  };

  watchEffect(() => {
    if (disableAnimation.value) {
      isAnimationStarted.value = false;
      return;
    }

    if (isAnimationStarted.value) {
      return;
    }

    return syncAnimation();
  });

  return isAnimationStarted;
};

/**
 * Вычисляет позицию скелетона
 */
export const useSkeletonPosition = (rootRef: Ref<HTMLElement | undefined>) => {
  const skeletonGradientLeft = shallowRef("0");
  const prevSkeletonGradientLeft = "0";

  const updatePosition = () => {
    const el = rootRef.value;
    if (!el) {
      return;
    }

    const value = -(
      el.getBoundingClientRect().left -
      document.body.getBoundingClientRect().left
    );
    const gradientValue = value === 0 ? "0" : `${value}px`;
    if (prevSkeletonGradientLeft !== gradientValue) {
      skeletonGradientLeft.value = gradientValue;
    }
  };

  watchEffect(updatePosition);

  window.addEventListener("resize", updatePosition);
  // useGlobalEventListener(window, "resize", updatePosition);

  return skeletonGradientLeft;
};
