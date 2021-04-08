export default function debounce<T extends () => unknown>(
  fn: T,
  timeout = 300
): <A>(...args: A[]) => void {
  let timer: ReturnType<typeof setTimeout>;

  return <A>(...args: A[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
}
