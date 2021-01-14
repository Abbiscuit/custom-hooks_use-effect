import React from "react";
import { Pending } from "./Pending";
import { ReloadButton } from "./ReloadButton";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const { data: blogs, isPending, errorMessage } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  // Arrayにてcustom hooksよりリターンされる場合は、下記のようにdescructuringして使用する。その場合、1番目の"blogs"はdataの位置で命名指定使用する。
  // const [blogs, isPending, errorMessage] = useFetch(
  //   "https://jsonplaceholder.typicode.com/users"
  // );

  return (
    <div>
      <ReloadButton
        style={{
          backgroundColor: "skyblue",
          border: "none",
          padding: "4px 16px",
          marginBottom: 16
        }}
      />
      {isPending && <Pending msg="Loading..." />}

      {errorMessage && <Pending msg={errorMessage} />}

      {blogs && blogs.map((blog) => <div key={blog.id}>{blog.username}</div>)}
    </div>
  );
}
