import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Chính sách quyền riêng tư</h1>
          
          <div className="prose prose-lg">
            <p className="lead text-xl text-neutral-600 mb-8">
              Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin 
              cá nhân của bạn khi sử dụng website của chúng tôi.
            </p>

            <h2>1. Thông tin chúng tôi thu thập</h2>
            <p>
              Chúng tôi thu thập các thông tin sau đây:
            </p>
            <ul>
              <li>Thông tin cá nhân (tên, email) khi bạn đăng ký nhận bản tin</li>
              <li>Thông tin về thiết bị và trình duyệt của bạn</li>
              <li>Dữ liệu về cách bạn tương tác với website</li>
            </ul>

            <h2>2. Cách chúng tôi sử dụng thông tin</h2>
            <p>
              Chúng tôi sử dụng thông tin thu thập để:
            </p>
            <ul>
              <li>Cung cấp và cải thiện dịch vụ</li>
              <li>Gửi thông tin và cập nhật qua email</li>
              <li>Phân tích và tối ưu hóa website</li>
            </ul>

            <h2>3. Bảo mật thông tin</h2>
            <p>
              Chúng tôi cam kết bảo vệ thông tin của bạn bằng các biện pháp bảo mật 
              phù hợp và không chia sẻ thông tin với bên thứ ba khi chưa được sự đồng ý.
            </p>

            <h2>4. Quyền của người dùng</h2>
            <p>
              Bạn có quyền:
            </p>
            <ul>
              <li>Truy cập thông tin cá nhân của mình</li>
              <li>Yêu cầu chỉnh sửa hoặc xóa thông tin</li>
              <li>Từ chối nhận email marketing</li>
            </ul>

            <h2>5. Cập nhật chính sách</h2>
            <p>
              Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi thay đổi sẽ 
              được thông báo trên website.
            </p>

            <h2>6. Liên hệ</h2>
            <p>
              Nếu bạn có câu hỏi về chính sách quyền riêng tư, vui lòng liên hệ chúng tôi 
              qua email: privacy@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;