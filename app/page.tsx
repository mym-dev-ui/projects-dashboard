const projects = [
  {
    name: "cares-main-L",
    website: "#",
    dashboard: "#",
    github: "https://github.com/mym-dev-ui/cares-main-L",
    status: "تحت التطوير",
  },
  {
    name: "FirewallApp-B",
    website: "#",
    dashboard: "#",
    github: "https://github.com/mym-dev-ui/FirewallApp-B",
    status: "تحت التطوير",
  },
  {
    name: "sendly-app-BNA-G",
    website: "#",
    dashboard: "#",
    github: "https://github.com/mym-dev-ui/sendly-app-BNA-G",
    status: "تحت التطوير",
  },
]

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", direction: "rtl" }}>
      <h1>لوحة ترتيب المواقع</h1>
      <p>هنا أحفظ كل مواقعي ولوحات التحكم وروابط GitHub.</p>

      <div style={{ display: "grid", gap: 16, marginTop: 30 }}>
        {projects.map((project) => (
          <div
            key={project.name}
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

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={project.website}>فتح الموقع</a>
              <a href={project.dashboard}>فتح اللوحة</a>
              <a href={project.github} target="_blank">فتح GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}