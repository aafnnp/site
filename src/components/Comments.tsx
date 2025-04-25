"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// 创建Supabase客户端
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Comment {
  id: number;
  created_at: string;
  post_slug: string;
  author: string;
  content: string;
}

export default function Comments({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 获取评论
  useEffect(() => {
    async function fetchComments() {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_slug", postSlug)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Get comments error:", error);
        return;
      }

      setComments(data || []);
    }

    fetchComments();
  }, [postSlug]);

  // 提交评论
  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim() || !author.trim()) {
      setError("Please fill in your name and content.");
      return;
    }

    setLoading(true);
    setError("");

    const { data, error: submitError } = await supabase
      .from("comments")
      .insert([
        {
          post_slug: postSlug,
          author: author.trim(),
          content: newComment.trim(),
        },
      ])
      .select();

    setLoading(false);

    if (submitError) {
      console.error("Submit Failed:", submitError);
      setError("Submit Failed, Please try again later.");
      return;
    }

    // 添加新评论到列表
    if (data && data.length > 0) {
      setComments([data[0], ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="text-xl font-bold mb-4">Comments</h3>

      {/* 评论表单 */}
      <form onSubmit={submitComment} className="mb-8">
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* 评论列表 */}
      <div>
        {comments.length === 0 ? (
          <p className="text-gray-500">No Comments！</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b py-4">
              <div className="flex items-center mb-2">
                <span className="font-bold">{comment.author}</span>
                <span className="text-gray-500 text-sm ml-2">
                  {new Date(comment.created_at).toLocaleString("zh-CN")}
                </span>
              </div>
              <p className="whitespace-pre-line">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
