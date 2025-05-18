import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@example.com',
      description: 'Phản hồi trong vòng 24 giờ'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Điện thoại',
      content: '+84 123 456 789',
      description: 'Thứ 2 - Thứ 6, 9:00 - 17:00'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Địa chỉ',
      content: '123 Đường ABC, Quận XYZ',
      description: 'Thành phố Hồ Chí Minh, Việt Nam'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn. Hãy liên hệ với chúng tôi 
            qua các kênh dưới đây hoặc điền vào form liên hệ.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 
                rounded-full text-primary mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-neutral-900 font-medium mb-2">{info.content}</p>
              <p className="text-neutral-600">{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 
                      rounded-full text-green-600 mb-4">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      Cảm ơn bạn đã liên hệ!
                    </h3>
                    <p className="text-green-700">
                      Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 
                          focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 
                          focus:ring-primary focus:border-primary transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Chủ đề
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 
                          focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Nhập chủ đề"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Nội dung
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 
                          focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Nhập nội dung tin nhắn"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border 
                        border-transparent rounded-lg shadow-sm text-base font-medium text-white 
                        bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-primary transition-colors"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Gửi tin nhắn
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Thông tin thêm</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">Giờ làm việc</h3>
                      <p className="text-neutral-600">
                        Thứ 2 - Thứ 6: 9:00 - 17:00<br />
                        Thứ 7: 9:00 - 12:00<br />
                        Chủ nhật: Nghỉ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">Khu vực hoạt động</h3>
                      <p className="text-neutral-600">
                        Chúng tôi có văn phòng tại Hà Nội và Thành phố Hồ Chí Minh, 
                        phục vụ khách hàng trên toàn quốc.
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-medium mb-4">Câu hỏi thường gặp</h3>
                    <ul className="space-y-4">
                      <li>
                        <h4 className="font-medium mb-1">Thời gian phản hồi?</h4>
                        <p className="text-neutral-600">
                          Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-medium mb-1">Cần hỗ trợ khẩn cấp?</h4>
                        <p className="text-neutral-600">
                          Gọi hotline: +84 123 456 789
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Vị trí của chúng tôi</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197276!2d106.69843661533417!3d10.778789792319489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2sNguyen%20Hue%20Walking%20Street!5e0!3m2!1sen!2s!4v1625647641800!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;