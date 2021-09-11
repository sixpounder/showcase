export enum IntersectionStatus {
  Visible,
  Invisible
}

/**
 * Creates an observer for `el` to keep track of when it enters or leaves viewport
 * @param el - The element to observe
 * @param callback - The function fired up when the observer sees a change
 * @returns The created observer. To dispose of it, call the `disconnect` method.
 */
export function useElementViewportObserver(el: HTMLElement, callback: (status: IntersectionStatus) => void): IntersectionObserver {
  const io = new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio !== 0) {
      // Element enters the viewport
      callback(IntersectionStatus.Visible);
    } else {
      // Element leaves the viewport
      callback(IntersectionStatus.Invisible);
    }
  }, {
    threshold: 0
  });

  io.observe(el);

  return io;
}
