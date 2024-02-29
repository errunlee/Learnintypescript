import React, { FormEvent, useEffect, useState } from "react";
import { useAddPostMutation, useGetPostsQuery } from "./api";

const Page = () => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");

  const [putPost] = useAddPostMutation();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      title,
      views,
    };
    putPost(payload);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Some error occured</h1>;

  return (
    <div className="border border-2 border-black flex flex-col px-4 m-3">
      {data?.map((item, index: number) => {
        return (
          <React.Fragment key={index}>
            <h1>-{item?.title}</h1>
            <p>Views: {item?.views}</p>
          </React.Fragment>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
          className="border border-black"
        />
        <input
          value={views}
          onChange={(e) => setViews(e.target.value)}
          type="text"
          placeholder="viewsi"
          className="border border-black px-2"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
