import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "Làm thế nào để đăng ký nhận bản tin?",
      answer: "Bạn có thể đăng ký nhận bản tin bằng cách điền email vào form đăng ký ở cuối trang chủ hoặc trong các bài viết."
    },
    {
      question: "Tôi có thể đóng góp bài viết không?",
      answer: "Có, chúng tôi luôn chào đón các cộng tác viên. Vui lòng liên hệ qua email contribute@example.com để biết thêm chi tiết."
    },
    {
      question: "Làm sao để tìm kiếm bài viết?",
      answer: "Bạn có thể sử dụng thanh tìm kiếm ở góc trên bên phải của trang web để tìm kiếm bài viết theo từ khóa."
    },
    {
      question: "Tần suất cập nhật bài viết mới?",
      answer: "Chúng tôi cập nhật bài viết mới hàng ngày, với ít nhất 3-5 bài viết mỗi tuần."
    },
    {
      question: "Làm thế nào để theo dõi các cập nhật mới?",
      answer: "Bạn có thể theo dõi chúng tôi qua các kênh mạng xã hội hoặc đăng ký nhận bản tin để không bỏ lỡ các cập nhật mới nhất."
    },
    {
      question: "Tôi có thể chia sẻ bài viết không?",
      answer: "Có, bạn có thể chia sẻ bài viết qua các nút chia sẻ mạng xã hội có sẵn trong mỗi bài viết."
    },
    {
      question: "Làm thế nào để báo cáo lỗi hoặc góp ý?",
      answer: "Bạn có thể gửi báo cáo lỗi hoặc góp ý thông qua trang Liên hệ hoặc gửi email trực tiếp đến support@example.com."
    },
    {
      question: "Chính sách bảo mật thông tin cá nhân?",
      answer: "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Chi tiết có thể xem trong Chính sách Quyền riêng tư của chúng tôi."
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Câu hỏi thường gặp</h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-neutral-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-neutral-500 transition-transform ${
                      openItems.includes(index) ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                    openItems.includes(index) ? 'max-h-40 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Không tìm thấy câu trả lời?</h2>
            <p className="text-neutral-600 mb-4">
              Nếu bạn không tìm thấy câu trả lời cho thắc mắc của mình, vui lòng liên hệ 
              với chúng tôi qua:
            </p>
            <ul className="list-disc list-inside text-neutral-600">
              <li>Email: support@example.com</li>
              <li>Điện thoại: +84 123 456 789</li>
              <li>
                <a href="/contact" className="text-primary hover:text-primary-dark">
                  Trang liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;