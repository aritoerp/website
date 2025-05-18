import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Điều khoản sử dụng</h1>
          
          <div className="prose prose-lg">
            <p className="lead text-xl text-neutral-600 mb-8">
              Bằng cách truy cập và sử dụng website này, bạn đồng ý tuân theo các điều khoản 
              và điều kiện sau đây.
            </p>

            <h2>1. Điều khoản sử dụng</h2>
            <p>
              Website này được vận hành bởi Atlassian Blog. Khi sử dụng website, bạn đồng ý 
              tuân thủ các quy định và điều kiện được đề ra.
            </p>

            <h2>2. Quyền sở hữu trí tuệ</h2>
            <p>
              Tất cả nội dung trên website (bao gồm văn bản, hình ảnh, logo) đều thuộc 
              quyền sở hữu của chúng tôi và được bảo vệ bởi luật bản quyền.
            </p>

            <h2>3. Giới hạn trách nhiệm</h2>
            <p>
              Chúng tôi không chịu trách nhiệm về:
            </p>
            <ul>
              <li>Thiệt hại phát sinh từ việc sử dụng website</li>
              <li>Tính chính xác của thông tin từ bên thứ ba</li>
              <li>Sự gián đoạn hoặc lỗi kỹ thuật của website</li>
            </ul>

            <h2>4. Quy định về bình luận</h2>
            <p>
              Khi đăng bình luận, bạn phải:
            </p>
            <ul>
              <li>Không vi phạm pháp luật</li>
              <li>Không xúc phạm người khác</li>
              <li>Không spam hoặc quảng cáo</li>
            </ul>

            <h2>5. Thay đổi điều khoản</h2>
            <p>
              Chúng tôi có quyền thay đổi điều khoản này mà không cần thông báo trước. 
              Việc tiếp tục sử dụng website sau khi thay đổi đồng nghĩa với việc bạn 
              chấp nhận những thay đổi đó.
            </p>

            <h2>6. Luật áp dụng</h2>
            <p>
              Điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam.
            </p>

            <h2>7. Liên hệ</h2>
            <p>
              Nếu bạn có câu hỏi về điều khoản sử dụng, vui lòng liên hệ: terms@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;