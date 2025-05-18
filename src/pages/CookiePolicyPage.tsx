import React from 'react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Chính sách Cookie</h1>
          
          <div className="prose prose-lg">
            <p className="lead text-xl text-neutral-600 mb-8">
              Chính sách này giải thích cách chúng tôi sử dụng cookie và các công nghệ 
              tương tự trên website của mình.
            </p>

            <h2>1. Cookie là gì?</h2>
            <p>
              Cookie là các tệp nhỏ được lưu trữ trên thiết bị của bạn khi truy cập website. 
              Chúng giúp website ghi nhớ các tương tác và tùy chọn của bạn.
            </p>

            <h2>2. Loại cookie chúng tôi sử dụng</h2>
            <h3>Cookie cần thiết</h3>
            <p>
              Các cookie này cần thiết cho hoạt động của website và không thể tắt trong 
              hệ thống của chúng tôi.
            </p>

            <h3>Cookie phân tích</h3>
            <p>
              Giúp chúng tôi hiểu cách người dùng tương tác với website thông qua việc 
              thu thập và báo cáo thông tin.
            </p>

            <h3>Cookie chức năng</h3>
            <p>
              Cho phép website cung cấp chức năng và cá nhân hóa nâng cao.
            </p>

            <h2>3. Quản lý cookie</h2>
            <p>
              Bạn có thể kiểm soát và/hoặc xóa cookie theo ý muốn. Chi tiết xem tại 
              aboutcookies.org. Bạn có thể xóa tất cả cookie đã có trên máy tính và cài 
              đặt hầu hết các trình duyệt để ngăn không cho cài đặt cookie.
            </p>

            <h2>4. Cookie của bên thứ ba</h2>
            <p>
              Chúng tôi cũng sử dụng cookie của bên thứ ba cho phân tích và marketing. 
              Các cookie này có thể theo dõi hoạt động của bạn trên các website khác.
            </p>

            <h2>5. Thay đổi chính sách</h2>
            <p>
              Chúng tôi có thể cập nhật chính sách cookie này theo thời gian. Chúng tôi 
              khuyến khích người dùng thường xuyên xem lại chính sách này.
            </p>

            <h2>6. Liên hệ</h2>
            <p>
              Nếu bạn có câu hỏi về cách chúng tôi sử dụng cookie, vui lòng liên hệ: 
              privacy@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;