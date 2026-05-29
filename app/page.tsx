import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

export default async function Home() {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <main style={{ padding: 40, fontFamily: "Arial", direction: "rtl" }}>
      <h1>لوحة ترتيب المواقع</h1>
      <p>هنا أحفظ كل مواقعي ولوحات التحكم وروابط GitHub.</p>

      <div style={{ display: "grid", gap: 16, marginTop: 30 }}>
        {projects?.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 20,
              background: "#fff",
              color: "#111",
            }}
          >
            <h2>{project.name}</h2>
            <p>الحالة: {project.status}</p>
            <p>الاستضافة: {project.hosting}</p>
            <p>الإيميل: {project.login_email}</p>
            <p>{project.notes}</p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={project.website_url} target="_blank">فتح الموقع</a>
              <a href={project.dashboard_url || "#"} target="_blank">فتح اللوحة</a>
              <a href={project.github_url} target="_blank">فتح GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}