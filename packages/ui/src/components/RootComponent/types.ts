import type { HTMLAttributes } from "vue";

export interface RootComponentProps extends /* @vue-ignore */ HTMLAttributes {
  as?: string;
  hidden?: boolean;
}
