import { useMemo } from "react";

import debounce from "../utils/debounce";
import throttle from "../utils/throttle";

export const useDebounce = (cb, delay, deps) => {
  return useMemo(() => debounce(cb, delay), deps);
};

export const useThrottle = (cb, cooldown, deps) => {
  return useMemo(() => throttle(cb, cooldown), deps);
};
