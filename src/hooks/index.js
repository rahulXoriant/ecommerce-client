import { useMemo } from "react";

import debounce from "../utils/debouncer";

export const useDebounce = (cb, delay, deps) => {
  return useMemo(() => debounce(cb, delay), deps);
}
