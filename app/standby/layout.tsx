export default function StandbyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F3F6FA",
        padding: "40px 20px",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 48, margin: "0 0 16px", color: "#2E3A4A" }}>
          Site en cours de validation
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, color: "#3E4B5A" }}>
          Notre site est actuellement en cours de validation avec nos partenaires.
          Nous serons très bientôt en ligne.
        </p>
        <p style={{ marginTop: 22, fontSize: 14, opacity: 0.7 }}>
          Merci pour votre compréhension.
        </p>
      </div>
    </main>
  );
}
