import { ref, watchEffect } from "vue";
import type { Events, Ref } from "vue";
import type { Wave } from "./types";
import { getOffsetRect } from "../../lib/offset";

const DELAY = 70;
const WAVE_LIVE = 225;

export const useRipple = (
  needRipple: boolean,
  hasPointerContext?: boolean
): {
  clicks: Ref<Wave[]>;
  onPointerdown?: (e: Events["onPointerdown"]) => void;
  onPointercancel?: (e: Events["onPointercancel"]) => void;
} => {
  const clicks = ref<Wave[]>([]);

  /**
   * Коллекция нажатий и таймеров задержки появления волны
   */
  const pointerDelayTimers = new Map<number, ReturnType<typeof setTimeout>>();

  watchEffect((onCleanup) => {
    const clicksTimeoutId =
      clicks.value.length > 0
        ? setTimeout(() => (clicks.value = []), WAVE_LIVE)
        : null;

    onCleanup(() => {
      if (clicksTimeoutId) {
        clearTimeout(clicksTimeoutId);
      }
    });
  });

  const addClick = (x: number, y: number, pointerId: number) => {
    const dateNow = Date.now();
    const filteredClicks = clicks.value.filter(
      (click) => click.id + WAVE_LIVE > dateNow
    );
    clicks.value = [...filteredClicks, { x, y, id: dateNow, pointerId }];
    pointerDelayTimers.delete(pointerId);
  };

  const onPointerDown = (e: Events["onPointerdown"]) => {
    const { top, left } = getOffsetRect(e.currentTarget);

    const x = e.clientX - (left ?? 0);
    const y = e.clientY - (top ?? 0);

    pointerDelayTimers.set(
      e.pointerId,
      setTimeout(() => addClick(x, y, e.pointerId), DELAY)
    );
  };

  const onPointerCancel = (e: Events["onPointercancel"]) => {
    const timer = pointerDelayTimers.get(e.pointerId);
    clearTimeout(timer);
    pointerDelayTimers.delete(e.pointerId);
  };

  // TODO: перенести из @vkontakte/vkjs hasMouse
  const reallyNeedRipple =
    (!false || hasPointerContext === false) && needRipple;

  return {
    clicks,
    onPointerdown: reallyNeedRipple ? onPointerDown : undefined,
    onPointercancel: reallyNeedRipple ? onPointerCancel : undefined,
  };
};
