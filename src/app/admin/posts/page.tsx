import { AdminPageTitle, AdminShell } from "@/components/admin/admin-shell";
import { PostsManager } from "@/components/admin/posts-manager";
import { requireAdmin } from "@/lib/auth";
import { getAdminPosts } from "@/lib/admin-data";

export const dynamic = "force-dynamic";
export default async function AdminPostsPage() { const [session, posts] = await Promise.all([requireAdmin(), getAdminPosts()]); return <main><AdminShell email={session.email}><AdminPageTitle title="Blog posts" description="Publish practical articles that can support your SEO and help customers understand your services." /><PostsManager initialItems={posts} /></AdminShell></main>; }
