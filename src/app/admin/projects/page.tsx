import { AdminPageTitle, AdminShell } from "@/components/admin/admin-shell";
import { ProjectsManager } from "@/components/admin/projects-manager";
import { requireAdmin } from "@/lib/auth";
import { getAdminProjects } from "@/lib/admin-data";

export const dynamic = "force-dynamic";
export default async function AdminProjectsPage() { const [session, projects] = await Promise.all([requireAdmin(), getAdminProjects()]); return <main><AdminShell email={session.email}><AdminPageTitle title="Projects" description="Add portfolio projects with a title, short description, category and live URL." /><ProjectsManager initialItems={projects} /></AdminShell></main>; }
