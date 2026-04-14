import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  const { data: { user } } = await locals.supabase.auth.getUser()

  if (!user) redirect(303, '/login')

  return { user }
}