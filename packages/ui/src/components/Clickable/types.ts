import { FocusVisibleModeProps } from "../../composables/useFocusVisibleClassName";
import { RootComponentProps } from "../RootComponent/types";
import { StateProps } from "./useState";

export interface ClickableProps
  extends RootComponentProps,
    FocusVisibleModeProps,
    StateProps {}
