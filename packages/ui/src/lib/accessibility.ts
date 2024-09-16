export const FOCUSABLE_ELEMENTS_LIST: string[] = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([hidden]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([hidden]):not([aria-hidden])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "audio",
  "video",
  "[contenteditable]",
  '[tabindex]:not([tabindex="-1"])',
];

export enum Keys {
  Enter = "Enter",
  Space = "Space",
  Tab = "Tab",
  Escape = "Escape",
  Home = "Home",
  End = "End",
  Delete = "Delete",
  Backspace = "Backspace",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  PageUp = "PageUp",
  PageDown = "PageDown",
}

const EVENT_KEY_TO_COMMON_KEY_MAP = new Map([
  ["Enter", Keys.Enter],
  ["Space", Keys.Space],
  ["Spacebar", Keys.Space],
  [" ", Keys.Space],
  ["Tab", Keys.Tab],
  ["Escape", Keys.Escape],
  ["Home", Keys.Home],
  ["End", Keys.End],
  ["ArrowLeft", Keys.ArrowLeft],
  ["ArrowRight", Keys.ArrowRight],
  ["ArrowUp", Keys.ArrowUp],
  ["ArrowDown", Keys.ArrowDown],
  ["PageUp", Keys.PageUp],
  ["PageDown", Keys.PageDown],
]);

export const pressedKey = <T extends KeyboardEvent>(e: T): Keys | null => {
  const foundKey = EVENT_KEY_TO_COMMON_KEY_MAP.get(e.key);
  return foundKey ? foundKey : null;
};

export const FOCUS_ALLOW_LIST_KEYS: Set<string> = new Set<string>([
  Keys.Tab,
  Keys.ArrowLeft,
  Keys.ArrowRight,
  Keys.ArrowUp,
  Keys.ArrowDown,
  Keys.Backspace,
  Keys.Delete,
]);

export const isKeyboardFocusingStarted = <T extends KeyboardEvent>(
  e: T
): boolean => {
  return FOCUS_ALLOW_LIST_KEYS.has(e.key);
};

export const shouldTriggerClickOnEnterOrSpace = (e: KeyboardEvent): boolean => {
  const el = e.target as HTMLElement;
  const { tagName } = el;

  const role = el.getAttribute("role");

  const isValidKeyboardEventTarget: boolean =
    el.isContentEditable !== true &&
    tagName !== "INPUT" &&
    tagName !== "TEXTAREA" &&
    (role === "button" || role === "link" || role === "menuitem");

  const isNativeAnchorEl = tagName === "A" && el.hasAttribute("href");
  const keyPressed = pressedKey(e);

  return (
    isValidKeyboardEventTarget &&
    // trigger buttons on Space
    ((keyPressed === Keys.Space && role === "button") ||
      // trigger non-native links and buttons on Enter
      (keyPressed === Keys.Enter && !isNativeAnchorEl))
  );
};
