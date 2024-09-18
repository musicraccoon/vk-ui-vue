import { useAppRoot } from "../../composables/useAppRoot";
import { Size } from "../../lib/adaptivity";
import type { GroupContainerProps, GroupMode } from "./types";

export const useGroupMode = ({
  forceMode,
  sizeX,
  isInsideModal,
}: {
  forceMode: GroupContainerProps["mode"];
  sizeX: Size | "none";
  isInsideModal: boolean;
}): GroupMode => {
  const { layout } = useAppRoot()!;

  if (forceMode) {
    return forceMode;
  }

  if (isInsideModal) {
    return "plain";
  }

  if (layout) {
    return layout;
  }

  if (sizeX !== "none") {
    return sizeX === "regular" ? "card" : "plain";
  }

  return "none";
};
