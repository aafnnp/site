import { createServerSupabaseClient } from "@/src/lib/supabase/server";

export interface CurrentUser {
  id: string;
  email: string | null;
}

/**
 * 读取当前登录用户，并返回领域层需要的规范化结构。
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  const user = data.user;

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: normalizeEmail(user.email),
  };
}

/**
 * 统一邮箱格式，避免大小写和空白导致的比较问题。
 */
function normalizeEmail(email: string | null | undefined): string | null {
  if (!email) {
    return null;
  }

  return email.trim().toLowerCase();
}
