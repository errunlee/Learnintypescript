import { Suspense, lazy, useRef } from "react";
import Loading from "./Loading";
const Youtubeform = lazy(() => import("./reacthookFrom/Youtubeform"));
const MyInput = lazy(() => import("./forwardRef/MyInput"));

const LazyImport = () => {
  const inpRef = useRef<HTMLInputElement>(null!);

  const handle = () => {
    inpRef.current?.focus();
  };
  return (
    <Suspense fallback={<Loading />}>
      <h1>
        This is by <b>Lazy import</b>
      </h1>
      <MyInput ref={inpRef} />
      <button onClick={handle}>focus</button>
      <Youtubeform />
    </Suspense>
  );
};

export default LazyImport;
