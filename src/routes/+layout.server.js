// Get session data on the server and pass it to the client
export const load = async ({ locals, depends }) => {
  depends('supabase:auth')
  const { data: { user } } = await locals.supabase.auth.getUser()
  return { user }
}