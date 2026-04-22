import { beforeEach, describe, expect, it, vi } from "vitest";

const mockGetUser = vi.fn();

vi.mock("@/src/lib/supabase/server", () => {
  return {
    createServerSupabaseClient: () => ({
      auth: {
        getUser: mockGetUser,
      },
    }),
  };
});

import { getCurrentUser } from "../../../src/domain/auth/supabase-auth-service";

describe("getCurrentUser", () => {
  beforeEach(() => {
    mockGetUser.mockReset();
  });

  it("应返回规范化后的用户信息", async () => {
    mockGetUser.mockResolvedValue({
      data: {
        user: {
          id: "user_123",
          email: "  TEST@Example.COM  ",
        },
      },
      error: null,
    });

    await expect(getCurrentUser()).resolves.toEqual({
      id: "user_123",
      email: "test@example.com",
    });
  });

  it("匿名用户应返回 null", async () => {
    mockGetUser.mockResolvedValue({
      data: {
        user: null,
      },
      error: null,
    });

    await expect(getCurrentUser()).resolves.toBeNull();
  });

  it("SDK 或网络错误应抛出异常", async () => {
    mockGetUser.mockResolvedValue({
      data: {
        user: null,
      },
      error: new Error("network failure"),
    });

    await expect(getCurrentUser()).rejects.toThrow("network failure");
  });
});
