import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nguyễn Văn A',
      role: 'Tổng biên tập',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Hơn 10 năm kinh nghiệm trong lĩnh vực báo chí và truyền thông số.'
    },
    {
      name: 'Trần Thị B',
      role: 'Trưởng ban Công nghệ',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Chuyên gia công nghệ với nhiều năm kinh nghiệm tại các tập đoàn công nghệ hàng đầu.'
    },
    {
      name: 'Lê Văn C',
      role: 'Biên tập viên',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Nhà báo trẻ với niềm đam mê viết về công nghệ và những xu hướng mới.'
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Cộng đồng',
      description: 'Xây dựng một cộng đồng học hỏi và chia sẻ kiến thức tích cực.'
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Chất lượng',
      description: 'Cam kết mang đến những nội dung chất lượng và có giá trị thực tiễn.'
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Đam mê',
      description: 'Làm việc với niềm đam mê và sự tận tâm với độc giả.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Team working"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Về Atlassian Blog
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Chúng tôi là nền tảng chia sẻ kiến thức hàng đầu về công nghệ, quản lý dự án 
              và phát triển phần mềm tại Việt Nam. Sứ mệnh của chúng tôi là kết nối và 
              nâng cao kiến thức cho cộng đồng công nghệ Việt Nam.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Sứ mệnh của chúng tôi</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Chúng tôi tin rằng kiến thức nên được chia sẻ rộng rãi và dễ dàng tiếp cận. 
              Thông qua nền tảng của mình, chúng tôi kết nối các chuyên gia với những người 
              học hỏi, tạo ra một môi trường trao đổi kiến thức lành mạnh và hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Đội ngũ của chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Mail className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-lg text-neutral-300 mb-8">
              Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp từ độc giả. Hãy chia sẻ 
              với chúng tôi những suy nghĩ của bạn.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark 
                transition-colors duration-200"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;