// src/components/ALReport.jsx
import { useNavigate } from "react-router-dom";
import shot3 from "../assets/Screenshot 2026-01-15 150608.png";
import shot4 from "../assets/Screenshot 2026-01-15 150643.png";
import "./ALReport.css";

const ALReport = () => {
  const navigate = useNavigate();

  return (
    <div className="al-report-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Quay lại Roadmap
      </button>

      <div className="al-report-content">
        <h1>⚡ Báo Cáo: Ứng Dụng AI Trong Dự Án</h1>

        {/* PHẦN 1: MỤC ĐÍCH */}
        <section className="report-section">
          <h2>1. Mục Đích Sử Dụng AI</h2>
          <p>
            Dự án tận dụng sức mạnh của Trí tuệ nhân tạo (AI) để giải quyết hai bài toán lớn: <strong>Xử lý nội dung giáo dục</strong> và <strong>Lập trình giao diện phức tạp</strong>.
          </p>
          <div className="objectives">
            <div className="objective-item">
              <h4>📚 Tóm Tắt & Chuẩn Hóa Nội Dung</h4>
              <p>
                Sử dụng AI để phân tích các đoạn văn bản dài từ giáo trình "Tư tưởng Hồ Chí Minh". AI giúp tóm tắt, chắt lọc các ý chính (Key points) và chuyển đổi ngôn ngữ hàn lâm thành các gạch đầu dòng ngắn gọn, dễ hiểu để hiển thị trên Modal.
              </p>
            </div>

            <div className="objective-item">
              <h4>📐 Tính Toán Hình Học SVG</h4>
              <p>
                Sử dụng AI để tính toán chính xác toạ độ (x, y) của các đỉnh ngôi sao và vị trí các nút (nodes) dựa trên công thức lượng giác, đảm bảo hình vẽ cân đối hoàn hảo trên mọi màn hình.
              </p>
            </div>

            <div className="objective-item">
              <h4>🎬 Xử Lý Animation Phức Tạp</h4>
              <p>
                Tạo ra logic chuyển động (Motion Path) để icon "Người lữ hành" di chuyển bám sát theo đường viền ngôi sao thay vì đi theo đường thẳng, sử dụng các kỹ thuật CSS tiên tiến như <code>offset-path</code>.
              </p>
            </div>
          </div>
        </section>

        {/* PHẦN 2: CÔNG NGHỆ & KỸ THUẬT */}
        <section className="report-section" style={{ borderBottom: "none" }}>
          <h2>2. Kỹ Thuật AI Đã Áp Dụng</h2>
          <div className="technologies">
            <div className="tech-item">
              <h4>🤖 LLM (Large Language Models)</h4>
              <p>
                Đóng vai trò là trợ lý đa năng: vừa là <strong>Biên tập viên</strong> (soạn thảo, tóm tắt nội dung lịch sử), vừa là <strong>Lập trình viên</strong> (viết hàm toán học vẽ SVG và CSS Animation).
              </p>
            </div>

            <div className="tech-item">
              <h4>✨ CSS Motion Path Module</h4>
              <p>
                Kỹ thuật cho phép phần tử DOM di chuyển dọc theo một đường dẫn SVG bất kỳ. AI giúp đồng bộ hoá đường dẫn vẽ ngôi sao và đường dẫn chuyển động của nhân vật.
              </p>
            </div>

            <div className="tech-item">
              <h4>🔄 React State Logic</h4>
              <p>
                Quản lý trạng thái chuyển động, tính toán độ trễ (delay) và điều phối các sự kiện tương tác để trải nghiệm người dùng mượt mà nhất.
              </p>
            </div>
          </div>
        </section>

        {/* PHẦN 3: CHỨNG MINH PROMPTS TÓM TẮT */}
        <section className="report-section image-gallery">
          <h2>3. Chứng Minh Prompts Tóm Tắt Nội Dung</h2>
          <p>
            2 ảnh chụp màn hình để chứng minh nguồn gốc tư liệu (prompts và kết quả tóm tắt) đã dùng trong quá trình soạn nội dung.
          </p>
          <div className="gallery-grid">
            {[
              {
                src: shot3,
                title: "Prompt: Bảng tổng hợp",
                caption: "Ảnh chụp kết quả bảng 5 chặng (ngắn gọn) dùng làm nguồn dữ liệu roadmapData."
              },
              {
                src: shot4,
                title: "Prompt: Nội dung bullet cho card",
                caption: "Ảnh chụp lệnh yêu cầu tạo bullet ngắn cho từng card roadmap, chứng minh nguồn tóm tắt."
              }
            ].map((item) => (
              <figure className="gallery-card" key={item.title}>
                <div className="gallery-media">
                  <img src={item.src} alt={item.title} loading="lazy" />
                </div>
                <figcaption>
                  <div className="gallery-title">{item.title}</div>
                  <p>{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="report-footer">
          <p>📝 Nội dung và mã nguồn được xây dựng với sự hỗ trợ của công nghệ AI. Cập nhật: {new Date().toLocaleDateString("vi-VN")}</p>
        </div>
      </div>
    </div>
  );
};

export default ALReport;