import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * 获取运行环境中的 Supabase 基础配置。
 */
function getSupabaseEnv(): { url: string; anonKey: string } {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("缺少 Supabase 环境变量配置");
  }

  return { url, anonKey };
}

/**
 * 创建浏览器端 Supabase Client（Task4 轻量工厂）。
 */
export function createBrowserSupabaseClient(): SupabaseClient {
  const { url, anonKey } = getSupabaseEnv();
  return createClient(url, anonKey);
}
