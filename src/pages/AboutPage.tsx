import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Về chúng tôi</h1>
          
          <div className="prose prose-lg">
            <p className="lead text-xl text-neutral-600 mb-8">
              Atlassian Blog là nền tảng chia sẻ kiến thức và xu hướng mới nhất trong lĩnh vực công nghệ, 
              quản lý dự án và phát triển phần mềm.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Sứ mệnh của chúng tôi</h2>
            <p>
              Chúng tôi tin rằng kiến thức nên được chia sẻ rộng rãi và dễ dàng tiếp cận. 
              Sứ mệnh của chúng tôi là tạo ra một cộng đồng nơi các chuyên gia có thể chia sẻ 
              kinh nghiệm và người học có thể tiếp cận những kiến thức chất lượng.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Đội ngũ của chúng tôi</h2>
            <p>
              Đội ngũ của chúng tôi bao gồm các chuyên gia có nhiều năm kinh nghiệm trong 
              lĩnh vực công nghệ, quản lý dự án và phát triển phần mềm. Chúng tôi cam kết 
              mang đến những nội dung chất lượng và có giá trị thực tiễn.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Giá trị cốt lõi</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Chất lượng:</strong> Mọi bài viết đều được biên tập kỹ lưỡng và 
                đảm bảo tính chính xác.
              </li>
              <li>
                <strong>Thực tiễn:</strong> Tập trung vào những kiến thức và kỹ năng có 
                thể áp dụng ngay vào công việc.
              </li>
              <li>
                <strong>Cập nhật:</strong> Luôn theo dõi và chia sẻ những xu hướng mới 
                nhất trong ngành.
              </li>
              <li>
                <strong>Cộng đồng:</strong> Xây dựng môi trường trao đổi và học hỏi 
                lành mạnh.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Liên hệ với chúng tôi</h2>
            <p>
              Chúng tôi luôn mong muốn lắng nghe ý kiến đóng góp từ độc giả. Nếu bạn có 
              bất kỳ câu hỏi hoặc đề xuất nào, đừng ngần ngại liên hệ với chúng tôi qua 
              trang <a href="/contact" className="text-primary hover:text-primary-dark">Liên hệ</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;