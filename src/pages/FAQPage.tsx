import React, { useState } from 'react';
import { ChevronDown, Search, MessageSquare } from 'lucide-react';

const FAQPage: React.FC = () => {
  const categories = [
    {
      name: 'Chung',
      faqs: [
        {
          question: "Làm thế nào để đăng ký nhận bản tin?",
          answer: "Bạn có thể đăng ký nhận bản tin bằng cách điền email vào form đăng ký ở cuối trang chủ hoặc trong các bài viết. Chúng tôi sẽ gửi cho bạn những cập nhật mới nhất hàng tuần."
        },
        {
          question: "Tần suất cập nhật bài viết mới?",
          answer: "Chúng tôi cập nhật bài viết mới hàng ngày, với ít nhất 3-5 bài viết chất lượng mỗi tuần. Các bài viết được lựa chọn kỹ càng và biên tập chuyên nghiệp trước khi xuất bản."
        }
      ]
    },
    {
      name: 'Nội dung',
      faqs: [
        {
          question: "Tôi có thể đóng góp bài viết không?",
          answer: "Có, chúng tôi luôn chào đón các cộng tác viên. Để trở thành cộng tác viên, bạn cần gửi email đến contribute@example.com với thông tin về lĩnh vực chuyên môn và một số bài viết mẫu của bạn."
        },
        {
          question: "Làm sao để tìm kiếm bài viết?",
          answer: "Bạn có thể sử dụng thanh tìm kiếm ở góc trên bên phải của trang web để tìm kiếm bài viết theo từ khóa. Ngoài ra, bạn cũng có thể duyệt bài viết theo danh mục hoặc tags."
        }
      ]
    },
    {
      name: 'Tương tác',
      faqs: [
        {
          question: "Làm thế nào để theo dõi các cập nhật mới?",
          answer: "Bạn có thể theo dõi chúng tôi qua các kênh mạng xã hội (Facebook, Twitter, LinkedIn) hoặc đăng ký nhận bản tin để không bỏ lỡ các cập nhật mới nhất."
        },
        {
          question: "Tôi có thể chia sẻ bài viết không?",
          answer: "Có, mỗi bài viết đều có các nút chia sẻ mạng xã hội. Bạn có thể dễ dàng chia sẻ bài viết lên Facebook, Twitter, LinkedIn hoặc sao chép link để chia sẻ."
        }
      ]
    },
    {
      name: 'Hỗ trợ',
      faqs: [
        {
          question: "Làm thế nào để báo cáo lỗi hoặc góp ý?",
          answer: "Bạn có thể gửi báo cáo lỗi hoặc góp ý thông qua trang Liên hệ hoặc gửi email trực tiếp đến support@example.com. Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc."
        },
        {
          question: "Chính sách bảo mật thông tin cá nhân?",
          answer: "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn theo quy định của pháp luật. Chi tiết có thể xem trong Chính sách Quyền riêng tư của chúng tôi."
        }
      ]
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleItem = (question: string) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredFAQs = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category =>
    selectedCategory === 'all' || category.name === selectedCategory
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="FAQ Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Câu hỏi thường gặp
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Tìm hiểu thêm về Atlassian Blog thông qua các câu hỏi thường gặp. 
            Nếu bạn không tìm thấy câu trả lời cần thiết, đừng ngần ngại liên hệ với chúng tôi.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Tìm kiếm câu hỏi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Tất cả
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.map((category, categoryIndex) => (
            category.faqs.length > 0 && (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="border border-neutral-200 rounded-lg overflow-hidden 
                        hover:border-primary transition-colors"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between 
                          hover:bg-neutral-50"
                        onClick={() => toggleItem(faq.question)}
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-500 transition-transform ${
                            openItems.includes(faq.question) ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          openItems.includes(faq.question) ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                          <p className="text-neutral-600">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="max-w-2xl mx-auto mt-20 text-center">
          <div className="bg-neutral-50 rounded-lg p-8">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Vẫn còn thắc mắc?</h2>
            <p className="text-neutral-600 mb-6">
              Nếu bạn không tìm thấy câu trả lời cho thắc mắc của mình, 
              vui lòng liên hệ với chúng tôi qua:
            </p>
            <div className="space-y-2 text-left max-w-md mx-auto">
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span>Email: support@example.com</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span>Điện thoại: +84 123 456 789</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;