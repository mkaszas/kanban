import { useEffect } from 'react';

function useEvent(eventName, eventHandler, condition = true) {
  useEffect(() => {
    if (condition) {
      window.addEventListener(eventName, eventHandler);
    } else {
      window.removeEventListener(eventName, eventHandler);
    }
    return () => {
      window.removeEventListener(eventName, eventHandler);
    };
  }, [condition]);
}

function useClick(clickHandler, condition = true) {
  useEvent('click', clickHandler, condition);
}

export function useClickOutside(ref, clickHandler, condition = true) {
  useClick(e => !ref.current.contains(e.target) && clickHandler(), condition);
}

function useKeyDown(eventHandler, condition = true) {
  useEvent('keydown', eventHandler, condition);
}

export function useKeyDownOnly(keyCodes, eventHandler, condition = true) {
  useKeyDown(({ key }) => keyCodes.includes(key) && eventHandler(), condition);
}
