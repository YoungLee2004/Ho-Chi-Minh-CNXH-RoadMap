import { useParams } from "react-router-dom";
import { stagesData } from "../data/stagesData";

export default function Stage() {
  const { id } = useParams();
  const stage = stagesData.find((item) => item.id === Number(id));

  if (!stage) {
    return <h2 style={{ padding: "40px" }}>Không tìm thấy chặng</h2>;
  }

  const gradient = `linear-gradient(135deg, ${stage.theme.primary}, ${stage.theme.secondary})`;

  return (
    <div
      style={{
        padding: "56px 24px 80px",
        background: "linear-gradient(180deg, #fefaf6 0%, #f6f8fb 100%)",
        minHeight: "100vh",
        color: "#1a1a1a",
      }}
    >
      <div
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 14px 36px rgba(0,0,0,0.08)",
          overflow: "hidden",
          border: `2px solid ${stage.theme.primary}22`,
        }}
      >
        <div
          style={{
            background: gradient,
            color: "#fff",
            padding: "28px 32px",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.4 }}>
            {stage.isDestination ? "Đích đến" : `Chặng ${stage.id}`}
          </div>
          <h1 style={{ margin: "6px 0 4px", fontSize: 30 }}>{stage.title}</h1>
          {stage.subtitle && (
            <p style={{ margin: 0, opacity: 0.9 }}>{stage.subtitle}</p>
          )}
        </div>

        <div style={{ padding: "28px 32px", display: "grid", gap: 18 }}>
          {stage.image && (
            <img
              src={stage.image}
              alt={stage.title}
              style={{
                width: "100%",
                maxHeight: 360,
                objectFit: "cover",
                borderRadius: 14,
              }}
            />
          )}

          <p style={{ margin: 0, fontSize: 17 }}>{stage.shortDesc}</p>

          {stage.sections?.length ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              {stage.sections.map((section, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid #e8e8e8",
                    background: "#fafbff",
                  }}
                >
                  <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{section.heading}</h3>
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
                    {section.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          {stage.bullets?.length ? (
            <div>
              <h3 style={{ margin: "0 0 8px" }}>Ý chính</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
                {stage.bullets.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {stage.quote && (
            <div
              style={{
                padding: "14px 16px",
                borderLeft: `4px solid ${stage.theme.primary}`,
                background: "#fff7f0",
                fontStyle: "italic",
              }}
            >
              “{stage.quote}”
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
