import { Suspense, lazy, useRef } from "react";
import Loading from "./Loading";
import Page from "./rtk-query/Page";
import KidneyForm from "./rtk-query/KidneyForm";
const Youtubeform = lazy(() => import("./reacthookFrom/Youtubeform"));
const MyInput = lazy(() => import("./forwardRef/MyInput"));

const LazyImport = () => {
  const inpRef = useRef<HTMLInputElement>(null!);

  const handle = () => {
    inpRef.current?.focus();
  };
  return (
    <Suspense fallback={<Loading />}>
      <KidneyForm />
      {/* <Page />
      <h1>
        This is by <b>Lazy import</b>
      </h1>
      <MyInput ref={inpRef} />
      <button onClick={handle}>focus</button>
      <Youtubeform /> */}
    </Suspense>
  );
};

export default LazyImport;
