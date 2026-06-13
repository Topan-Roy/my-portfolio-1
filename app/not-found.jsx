export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#071013",
        color: "#fff",
        fontFamily: "sans-serif",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: 800, color: "#22d3ee", margin: 0 }}>
        404
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#94a3b8" }}>
        Page not found.
      </p>
      <a
        href="/"
        style={{
          marginTop: "1rem",
          padding: "0.75rem 2rem",
          borderRadius: "9999px",
          background: "linear-gradient(to right, #06b6d4, #10b981)",
          color: "#fff",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Go Home
      </a>
    </div>
  );
}
