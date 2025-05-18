import React from 'react';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Tuyên bố miễn trừ trách nhiệm</h1>
          
          <div className="prose prose-lg">
            <p className="lead text-xl text-neutral-600 mb-8">
              Vui lòng đọc kỹ tuyên bố miễn trừ trách nhiệm này trước khi sử dụng website của chúng tôi.
            </p>

            <h2>1. Thông tin chung</h2>
            <p>
              Thông tin trên website này chỉ mang tính chất tham khảo. Chúng tôi không 
              đảm bảo tính chính xác, đầy đủ hoặc phù hợp của thông tin cho mục đích cụ thể của bạn.
            </p>

            <h2>2. Ý kiến và quan điểm</h2>
            <p>
              Các ý kiến và quan điểm được trình bày trên website là của tác giả và không 
              nhất thiết phản ánh quan điểm chính thức của chúng tôi.
            </p>

            <h2>3. Liên kết ngoài</h2>
            <p>
              Website có thể chứa các liên kết đến trang web khác. Chúng tôi không chịu 
              trách nhiệm về nội dung hoặc chính sách bảo mật của các trang web này.
            </p>

            <h2>4. Tư vấn chuyên môn</h2>
            <p>
              Nội dung trên website không thay thế cho tư vấn chuyên môn. Vui lòng tham khảo 
              ý kiến chuyên gia trước khi đưa ra quyết định quan trọng.
            </p>

            <h2>5. Rủi ro sử dụng</h2>
            <p>
              Việc sử dụng website và thông tin trên đó là hoàn toàn do bạn tự chịu rủi ro. 
              Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh.
            </p>

            <h2>6. Cập nhật</h2>
            <p>
              Chúng tôi có thể cập nhật tuyên bố này mà không cần thông báo trước. Việc 
              tiếp tục sử dụng website đồng nghĩa với việc bạn chấp nhận những thay đổi đó.
            </p>

            <h2>7. Liên hệ</h2>
            <p>
              Nếu bạn có câu hỏi về tuyên bố miễn trừ trách nhiệm này, vui lòng liên hệ: 
              legal@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;