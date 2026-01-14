import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeamIntroduction.css";

const TeamIntroduction = () => {
  const navigate = useNavigate();
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Lê Phi Dương",
      id_number: "SE184447",
      role: "Thành viên nhóm",
      color: "#764ba2",
      content: "Tham gia thuyết trình về nội dung thời kỳ quá độ của Việt Nam dưới sự lãnh đạo của Bác Hồ."
    },
    {
      id: 2,
      name: "Bùi Đăng Khoa",
      id_number: "SE170432",
      role: "Thành viên nhóm",
      color: "#667eea",
      content: "Tham gia thuyết trình về nội dung thời kỳ quá độ của Việt Nam dưới sự lãnh đạo của Bác Hồ."
    },
    {
      id: 3,
      name: "Mai Xuân Anh Vũ",
      id_number: "SA170145",
      role: "Thành viên nhóm",
      color: "#f093fb",
      content: "Tham gia thuyết trình về nội dung thời kỳ quá độ của Việt Nam dưới sự lãnh đạo của Bác Hồ."
    }
  ];

  const toggleMember = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <div className="team-container">
      <button className="team-back-button" onClick={() => navigate("/")}>
        ← Quay lại
      </button>

      <div className="team-content">
        <div className="team-header">
          <h1>👥 Giới Thiệu Thành Viên Nhóm</h1>
          <p className="team-subtitle">Thuyết Trình: Tư Tưởng Hồ Chí Minh Thời Kỳ Quá Độ</p>
          <div className="header-divider"></div>
        </div>

        <div className="team-members-list">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`team-member-card ${expandedMember === member.id ? "expanded" : ""}`}
            >
              <div
                className="member-header"
                onClick={() => toggleMember(member.id)}
                style={{ borderLeftColor: member.color }}
              >
                <div className="member-header-left">
                  <div
                    className="member-avatar"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-id">MSSV: {member.id_number}</p>
                  </div>
                </div>
                <div className="member-toggle">
                  <span
                    className={`toggle-arrow ${
                      expandedMember === member.id ? "open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </div>

              <div className="member-content">
                <div className="content-inner">
                  <h4>Vai Trò</h4>
                  <p>{member.role}</p>

                  <h4>Mô Tả</h4>
                  <p>{member.content}</p>

                  <h4>Nội Dung Thuyết Trình</h4>
                  <ul>
                    <li>
                      <strong>Thời kỳ quá độ (1945 - 1955):</strong> Giai đoạn chuyển tiếp từ nước độc lập tới xây dựng CNXH
                    </li>
                    <li>
                      <strong>Các chính sách cải cách:</strong> Ruộng đất, giáo dục, y tế, kinh tế
                    </li>
                    <li>
                      <strong>Tư tưởng Hồ Chí Minh:</strong> Độc lập, tự do, hạnh phúc cho nhân dân
                    </li>
                    <li>
                      <strong>Các thành tựu:</strong> Xây dựng nước mới, phục hồi đất nước
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="presentation-overview">
          <h2>📌 Tổng Quan Nội Dung Thuyết Trình</h2>
          <div className="overview-content">
            <div className="overview-item">
              <h3>🎯 Mục Tiêu</h3>
              <p>
                Giới thiệu về thời kỳ quá độ của Việt Nam và tư tưởng Hồ Chí Minh trong giai đoạn này,
                cùng các chính sách cải cách quan trọng.
              </p>
            </div>

            <div className="overview-item">
              <h3>📚 Nội Dung Chính</h3>
              <ul>
                <li>Bối cảnh lịch sử thời kỳ quá độ</li>
                <li>Tư tưởng Hồ Chí Minh về xây dựng quốc gia</li>
                <li>Các chính sách cải cách kinh tế, xã hội</li>
                <li>Những thành tựu và thách thức</li>
                <li>Ảnh hưởng đến Việt Nam hiện đại</li>
              </ul>
            </div>

            <div className="overview-item">
              <h3>🎓 Ý Nghĩa</h3>
              <p>
                Giúp hiểu rõ hơn về giai đoạn quan trọng trong lịch sử Việt Nam
                và những nguyên tắc lãnh đạo của Bác Hồ.
              </p>
            </div>
          </div>
        </section>

        <div className="team-footer">
          <p>✨ Thuyết trình về Tư Tưởng Hồ Chí Minh Thời Kỳ Quá Độ</p>
          <p style={{ marginTop: "10px", fontSize: "0.9em", color: "#999" }}>
            Cập nhật: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroduction;
