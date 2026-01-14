import { useNavigate } from "react-router-dom";
import "./ALReport.css";

const ALReport = () => {
  const navigate = useNavigate();

  return (
    <div className="al-report-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Quay lại
      </button>

      <div className="al-report-content">
        <h1>� Báo Cáo: Sử Dụng AI Để Tìm Kiếm Nội Dung Hình Ảnh Về Tư Tưởng Hồ Chí Minh Thời Kỳ Quá Độ</h1>

        <section className="report-section">
          <h2>1. Giới Thiệu Chung</h2>
          <p>
            Dự án này tập trung vào việc ứng dụng công nghệ Artificial Intelligence (AI) và Machine Learning (ML)
            để tìm kiếm, phân loại và phân tích nội dung hình ảnh liên quan đến tư tưởng Hồ Chí Minh 
            trong thời kỳ quá độ (từ khi Việt Nam độc lập năm 1945 đến khi xây dựng hoàn toàn Chủ Nghĩa Xã Hội).
          </p>
          <p>
            Thời kỳ quá độ là giai đoạn quan trọng khi Bác Hồ lãnh đạo đất nước từ chế độ cộng hòa 
            sang chế độ xã hội chủ nghĩa, phản ánh những tư tưởng và chính sách cải cách cơ bản.
          </p>
        </section>

        <section className="report-section">
          <h2>2. Mục Đích Của Dự Án</h2>
          <div className="objectives">
            <div className="objective-item">
              <h4>🎯 Tìm Kiếm Hình Ảnh Thông Minh</h4>
              <p>
                Sử dụng AI để tìm kiếm các hình ảnh liên quan đến tư tưởng Hồ Chí Minh trong thời kỳ quá độ 
                từ các nguồn công khai (database hình ảnh, thư viện số, tài liệu lịch sử).
              </p>
            </div>

            <div className="objective-item">
              <h4>📊 Phân Loại Nội Dung</h4>
              <p>
                Phân loại các hình ảnh theo chủ đề: chính trị, kinh tế, xã hội, quân sự, ngoại giao, v.v.
              </p>
            </div>

            <div className="objective-item">
              <h4>📈 Phân Tích Và Trích Xuất Thông Tin</h4>
              <p>
                Trích xuất thông tin từ hình ảnh, nhận dạng khuôn mặt, địa điểm, sự kiện để tạo ngữ cảnh lịch sử.
              </p>
            </div>

            <div className="objective-item">
              <h4>💾 Xây Dựng Dữ Liệu Lịch Sử</h4>
              <p>
                Tạo một kho dữ liệu hình ảnh đa phương tiện phục vụ cho nghiên cứu và giáo dục.
              </p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2>3. Công Nghệ AI Được Sử Dụng</h2>
          <div className="technologies">
            <div className="tech-item">
              <h4>🤖 Computer Vision (Thị Giác Máy Tính)</h4>
              <ul>
                <li><strong>Image Recognition:</strong> Nhận dạng các đối tượng, người, địa điểm trong hình ảnh</li>
                <li><strong>Face Detection:</strong> Phát hiện và nhận dạng khuôn mặt của các lãnh đạo, nhân vật lịch sử</li>
                <li><strong>Object Detection:</strong> Xác định các vật thể quan trọng (lá cờ, tượng, công trình, v.v.)</li>
                <li><strong>Scene Understanding:</strong> Hiểu bối cảnh ảnh để xác định thời gian, địa điểm</li>
              </ul>
            </div>

            <div className="tech-item">
              <h4>🔎 Natural Language Processing (Xử Lý Ngôn Ngữ Tự Nhiên)</h4>
              <ul>
                <li><strong>Image Captioning:</strong> Tự động tạo mô tả text cho hình ảnh</li>
                <li><strong>Semantic Search:</strong> Tìm kiếm hình ảnh dựa trên ý nghĩa từ khóa, không chỉ text trùng khớp</li>
                <li><strong>Keyword Extraction:</strong> Trích xuất các từ khóa quan trọng từ metadata hình ảnh</li>
              </ul>
            </div>

            <div className="tech-item">
              <h4>📊 Machine Learning Models</h4>
              <ul>
                <li><strong>Convolutional Neural Networks (CNN):</strong> Phân tích đặc trưng hình ảnh chi tiết</li>
                <li><strong>Transfer Learning:</strong> Sử dụng mô hình đã được huấn luyện trước để phân loại hình ảnh</li>
                <li><strong>Clustering:</strong> Nhóm các hình ảnh tương tự lại với nhau</li>
                <li><strong>Time Series Analysis:</strong> Phân tích sự phát triển của các chủ đề qua thời gian</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2>4. Quá Trình Thực Hiện</h2>
          <div className="workflow">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Thu Thập Dữ Liệu</h4>
                <p>
                  Sưu tập hình ảnh từ nhiều nguồn: thư viện Quốc Hội Việt Nam, Viện Lịch Sử Quân Sự, 
                  Bảo tàng Hồ Chí Minh, các kho tư liệu lịch sử, báo chí cũ số hóa.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Tiền Xử Lý Hình Ảnh</h4>
                <p>
                  Chuẩn hóa độ phân giải, cải thiện chất lượng ảnh cũ, loại bỏ nhiễu, 
                  tách tài liệu từ nền, chuẩn hóa kích thước.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Nhãn Dữ Liệu</h4>
                <p>
                  Chuyên gia lịch sử gán nhãn cho hình ảnh: thời gian, địa điểm, nhân vật, sự kiện, 
                  chủ đề liên quan đến tư tưởng Hồ Chí Minh.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Đặc Trưng Hóa Hình Ảnh</h4>
                <p>
                  Sử dụng CNN pre-trained để trích xuất các đặc trưng quan trọng từ mỗi hình ảnh, 
                  tạo vector đại diện cho ảnh.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h4>Huấn Luyện Mô Hình Phân Loại</h4>
                <p>
                  Huấn luyện các mô hình ML để phân loại hình ảnh theo: chủ đề, thời gian, 
                  loại sự kiện, mức độ liên quan đến tư tưởng Hồ Chí Minh.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">06</div>
              <div className="step-content">
                <h4>Xây Dựng Hệ Thống Tìm Kiếm</h4>
                <p>
                  Xây dựng search engine cho phép tìm kiếm hình ảnh dựa trên: từ khóa, 
                  mô tả tự nhiên, hình ảnh tương tự, các bộ lọc.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">07</div>
              <div className="step-content">
                <h4>Tạo Bối Cảnh Lịch Sử</h4>
                <p>
                  Kết nối hình ảnh với các tư liệu sử, bài viết, thời dòng lịch sử 
                  để người dùng hiểu rõ bối cảnh của từng hình ảnh.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2>5. Các Chủ Đề Hình Ảnh Chính</h2>
          <div className="themes-grid">
            <div className="theme-card">
              <h4>🏛️ Hoạt Động Chính Trị</h4>
              <p>
                Hình ảnh về các sự kiện chính trị quan trọng: thành lập Đảng Cộng Sản, 
                Cách Mạng Tháng Tám, tuyên bố độc lập, các hội nghị lãnh đạo.
              </p>
            </div>

            <div className="theme-card">
              <h4>👥 Hội Họp Và Đại Hội</h4>
              <p>
                Ảnh các cuộc hội họp, đại hội đảng, hội nghị chính phủ, tiếp xúc với nhân dân 
                trong thời kỳ quá độ.
              </p>
            </div>

            <div className="theme-card">
              <h4>⚔️ Sự Kiện Quân Sự</h4>
              <p>
                Các cuộc chiến đấu, tiếp quản chính quyền, lực lượng vũ trang, 
                các hoạt động hỗ trợ chiến tranh.
              </p>
            </div>

            <div className="theme-card">
              <h4>🌾 Chính Sách Kinh Tế - Xã Hội</h4>
              <p>
                Ảnh về cải cách ruộng đất, phát triển kinh tế, giáo dục, y tế, 
                tái thiết đất nước sau chiến tranh.
              </p>
            </div>

            <div className="theme-card">
              <h4>🌐 Ngoại Giao Và Quan Hệ Quốc Tế</h4>
              <p>
                Cuộc thăm chính thức, ký hiệp ước, gặp gỡ với các nhà lãnh đạo quốc tế, 
                xây dựng liên minh quốc tế.
              </p>
            </div>

            <div className="theme-card">
              <h4>📢 Tuyên Truyền Và Giáo Dục</h4>
              <p>
                Ảnh về các hoạt động tuyên truyền, dạy học, nâng cao nhận thức cách mạng 
                trong cộng đồng.
              </p>
            </div>

            <div className="theme-card">
              <h4>👨‍👩‍👧‍👦 Tiếp Xúc Với Nhân Dân</h4>
              <p>
                Bác Hồ với nông dân, công nhân, trẻ em, thương binh, các tầng lớp xã hội 
                khác nhau.
              </p>
            </div>

            <div className="theme-card">
              <h4>🏘️ Xây Dựng Cơ Sở Hạ Tầng</h4>
              <p>
                Ảnh công trình xây dựng: nhà, đường xá, cơ sở sản xuất, các công trình 
                công cộng trong giai đoạn quá độ.
              </p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2>6. Ứng Dụng Của Hệ Thống</h2>
          <ul className="applications">
            <li>📚 <strong>Nghiên Cứu Lịch Sử:</strong> Giúp nhà nghiên cứu tìm kiếm và phân tích tài liệu hình ảnh nhanh chóng</li>
            <li>🎓 <strong>Giáo Dục:</strong> Cung cấp tài nguyên hình ảnh chất lượng cao cho giáo dục lịch sử</li>
            <li>🏛️ <strong>Bảo Tồn Di Sản:</strong> Số hóa, phân loại và bảo quản tài liệu lịch sử</li>
            <li>📰 <strong>Báo Chí Và Truyền Thông:</strong> Hỗ trợ tìm ảnh minh họa cho các bài viết lịch sử</li>
            <li>🖼️ <strong>Triển Lãm Và Bảo Tàng:</strong> Tổ chức triển lãm chuyên đề về tư tưởng Hồ Chí Minh</li>
            <li>💻 <strong>Kỹ Thuật Số Hóa:</strong> Phục vụ các dự án số hóa di sản văn hóa quốc gia</li>
          </ul>
        </section>

        <section className="report-section">
          <h2>7. Những Thách Thức Gặp Phải</h2>
          <div className="challenges-list">
            <div className="challenge-item">
              <h4>⚠️ Chất Lượng Hình Ảnh</h4>
              <p>
                Nhiều tài liệu lịch sử từ thời kỳ quá độ bị hư hỏng, mờ, hoặc độ phân giải thấp. 
                Cần sử dụng super-resolution AI để cải thiện chất lượng.
              </p>
            </div>

            <div className="challenge-item">
              <h4>⚠️ Thiếu Dữ Liệu Huấn Luyện</h4>
              <p>
                Số lượng hình ảnh đã được gán nhãn có sẵn còn hạn chế. Cần đầu tư thêm 
                vào quá trình nhãn dữ liệu thủ công.
              </p>
            </div>

            <div className="challenge-item">
              <h4>⚠️ Độ Chính Xác Của AI</h4>
              <p>
                AI có thể nhầm lẫn hoặc bỏ sót các chi tiết lịch sử tinh tế. Cần xác minh 
                kết quả AI bằng chuyên gia lịch sử.
              </p>
            </div>

            <div className="challenge-item">
              <h4>⚠️ Vấn Đề Bản Quyền Và Quyền Riêng Tư</h4>
              <p>
                Cần xác định rõ quyền sử dụng hình ảnh, bản quyền tác giả, 
                đảm bảo tuân thủ luật pháp về bảo vệ di sản.
              </p>
            </div>

            <div className="challenge-item">
              <h4>⚠️ Bias Lịch Sử</h4>
              <p>
                Cần tránh mô hình AI bị ảnh hưởng bởi những thiên kiến lịch sử hoặc chính trị, 
                đảm bảo tính khách quan.
              </p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2>8. Kết Quả Kỳ Vọng</h2>
          <div className="results">
            <div className="result-item">
              <h4>✅ Kho Dữ Liệu Hình Ảnh Toàn Diện</h4>
              <p>
                Một cơ sở dữ liệu hình ảnh được phân loại và được gán tag AI về tư tưởng 
                Hồ Chí Minh trong thời kỳ quá độ.
              </p>
            </div>

            <div className="result-item">
              <h4>✅ Công Cụ Tìm Kiếm Thông Minh</h4>
              <p>
                Một ứng dụng cho phép tìm kiếm hình ảnh bằng các cách khác nhau: 
                từ khóa, hình ảnh tương tự, bộ lọc nâng cao.
              </p>
            </div>

            <div className="result-item">
              <h4>✅ Bối Cảnh Lịch Sử Phong Phú</h4>
              <p>
                Mỗi hình ảnh đi kèm với thông tin lịch sử chi tiết, tài liệu liên quan, 
                và giải thích về tư tưởng Bác Hồ thể hiện qua ảnh.
              </p>
            </div>

            <div className="result-item">
              <h4>✅ Hỗ Trợ Nghiên Cứu Và Giáo Dục</h4>
              <p>
                Cung cấp tài nguyên mạnh mẽ cho nhà nghiên cứu, giáo viên, 
                sinh viên học tập về lịch sử Việt Nam.
              </p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2>9. Hướng Phát Triển Trong Tương Lai</h2>
          <ul className="future-direction">
            <li>🚀 Mở rộng phạm vi dữ liệu bao gồm cả video, âm thanh từ thời kỳ quá độ</li>
            <li>🚀 Sử dụng AI tạo sinh (Generative AI) để tái tạo màu sắc cho ảnh đen trắng</li>
            <li>🚀 Xây dựng mô hình hiểu biết sâu hơn về tư tưởng qua phân tích hình ảnh</li>
            <li>🚀 Tích hợp với công nghệ VR/AR để trải nghiệm lịch sử theo cách mới</li>
            <li>🚀 Phát triển ứng dụng di động cho phép mọi người truy cập kho dữ liệu</li>
            <li>🚀 Hợp tác quốc tế để tìm kiếm thêm tài liệu hình ảnh từ nước ngoài</li>
          </ul>
        </section>

        <section className="report-section">
          <h2>10. Kết Luận</h2>
          <p>
            Việc ứng dụng AI và Machine Learning để tìm kiếm và phân loại nội dung hình ảnh 
            về tư tưởng Hồ Chí Minh thời kỳ quá độ không chỉ là một dự án công nghệ mà còn 
            là một nỗ lực bảo tồn và phát huy di sản lịch sử quốc gia.
          </p>
          <p>
            Hệ thống này sẽ giúp làm cho lịch sử trở nên dễ tiếp cận hơn, 
            cho phép mọi người khám phá và học hỏi từ các tài liệu lịch sử quý giá. 
            Đây là minh chứng cho sức mạnh của công nghệ AI khi được áp dụng một cách có ý nghĩa 
            vào bảo vệ và quảng bá giá trị lịch sử và văn hóa.
          </p>
        </section>

        <div className="report-footer">
          <p>📝 Báo cáo này được cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}</p>
        </div>
      </div>
    </div>
  );
};

export default ALReport;
