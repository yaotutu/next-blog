"use client";

import MarkdownIt from "markdown-it";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import pinyin from "pinyin";
import { useState } from "react";
import "react-markdown-editor-lite/lib/index.css";
import "react-quill/dist/quill.bubble.css";
import styles from "./writePage.module.scss";
const mdParser = new MarkdownIt(/* Markdown-it options */);

const plugins = [
  "header",
  "font-bold",
  "font-italic",
  "font-underline",
  "font-strikethrough",
  "list-unordered",
  "list-ordered",
  "block-quote",
  "block-wrap",
  "block-code-inline",
  "block-code-block",
  "table",
  "link",
  "clear",
  "logger",
  "mode-toggle",
  "full-screen",
  "tab-insert",
];
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  // if (status === "unauthenticated") {
  //   router.push("/");
  // }

  const slugifyEnglish = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const slugifyChinese = (title) => {
    // 将中文转换为拼音
    const pinyinTitle = pinyin(title, {
      style: pinyin.STYLE_NORMAL, // 使用普通拼音风格（不带声调）
      heteronym: false, // 仅返回一个拼音
    })
      .flat()
      .join(" "); // 将拼音数组转化为字符串

    // 使用之前的 slugify 逻辑生成 slug
    return pinyinTitle
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // 移除非字母、数字、空格和连字符的字符
      .replace(/[\s_-]+/g, "-") // 替换空格和下划线为连字符
      .replace(/^-+|-+$/g, ""); // 移除开头或结尾的连字符
  };

  const handleSubmit = async () => {
    const bodyData = {
      title,
      desc: value,
      img: "",
      slug: slugifyChinese(title),
      catSlug: catSlug || "style", //If not selected, choose the general category
    };
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(bodyData),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  const handleEditorChange = ({ html, text }) => {
    setValue(html);
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <MdEditor
          onChange={handleEditorChange}
          renderHTML={(text) => mdParser.render(text)}
          plugins={plugins}
          style={{
            width: "100%",
          }}
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
