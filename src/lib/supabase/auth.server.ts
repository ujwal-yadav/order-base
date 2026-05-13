import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createSupabaseServerClient } from "./server";
import type { Profile } from "./types";

export const getSession = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { user };
});

export const getProfile = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { profile: null as Profile | null };

  const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();

  return { profile: data as Profile | null };
});

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signup = createServerFn({ method: "POST" })
  .inputValidator(authSchema)
  .handler(async ({ data }) => {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      return { success: false as const, error: error.message };
    }

    return { success: true as const };
  });

export const login = createServerFn({ method: "POST" })
  .inputValidator(authSchema)
  .handler(async ({ data }) => {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      return { success: false as const, error: error.message };
    }

    return { success: true as const };
  });

export const logout = createServerFn({ method: "POST" }).handler(async () => {
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  return { success: true };
});

const profileSchema = z.object({
  businessName: z.string().min(2),
  instagramHandle: z.string().min(1),
});

export const upsertProfile = createServerFn({ method: "POST" })
  .inputValidator(profileSchema)
  .handler(async ({ data }) => {
    const supabase = createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { success: false as const, error: "Not authenticated" };
    }

    const handle = data.instagramHandle.startsWith("@")
      ? data.instagramHandle
      : `@${data.instagramHandle}`;

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      business_name: data.businessName,
      instagram_handle: handle,
    });

    if (error) {
      return { success: false as const, error: error.message };
    }

    return { success: true as const };
  });
