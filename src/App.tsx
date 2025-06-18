import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Factory, 
  Users, 
  Award, 
  Truck,
  Menu,
  X,
  ChevronDown,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const products = [
    {
      name: "Bàn Ghế Phòng Khách",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Thiết kế hiện đại, chất liệu gỗ cao cấp"
    },
    {
      name: "Tủ Bếp Gỗ Tự Nhiên",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Tủ bếp gỗ tự nhiên, bền đẹp theo thời gian"
    },
    {
      name: "Giường Ngủ Cao Cấp",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Giường ngủ gỗ tự nhiên, thiết kế sang trọng"
    },
    {
      name: "Tủ Quần Áo",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Tủ quần áo gỗ, không gian lưu trữ tối ưu"
    },
    {
      name: "Bàn Làm Việc",
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Bàn làm việc ergonomic, tăng năng suất"
    },
    {
      name: "Kệ Sách Gỗ",
      image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Kệ sách đa năng, tiết kiệm không gian"
    }
  ];

  const services = [
    {
      icon: <Factory className="w-12 h-12 text-teal-600" />,
      title: "Sản Xuất Theo Yêu Cầu",
      description: "Thiết kế và sản xuất nội thất theo đúng yêu cầu và phong cách của khách hàng"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Tư Vấn Thiết Kế",
      description: "Đội ngũ chuyên gia tư vấn thiết kế nội thất phù hợp với không gian sống"
    },
    {
      icon: <Truck className="w-12 h-12 text-teal-600" />,
      title: "Giao Hàng & Lắp Đặt",
      description: "Dịch vụ giao hàng tận nơi và lắp đặt chuyên nghiệp trên toàn quốc"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Bảo Hành Dài Hạn",
      description: "Cam kết bảo hành sản phẩm lên đến 5 năm với chất lượng đảm bảo"
    }
  ];

  const testimonials = [
    {
      name: "Anh Minh Tuấn",
      role: "Chủ nhà hàng",
      content: "Chất lượng sản phẩm tuyệt vời, đội ngũ thi công chuyên nghiệp. Rất hài lòng với dịch vụ của Lộc Phát.",
      rating: 5
    },
    {
      name: "Chị Lan Anh",
      role: "Gia đình trẻ",
      content: "Nội thất đẹp, giá cả hợp lý. Đặc biệt ấn tượng với dịch vụ tư vấn nhiệt tình của công ty.",
      rating: 5
    },
    {
      name: "Anh Đức Thành",
      role: "Văn phòng",
      content: "Giao hàng đúng hẹn, lắp đặt nhanh chóng. Sản phẩm chất lượng cao, đáng đồng tiền bát gạo.",
      rating: 5
    }
  ];

  const partners = [
    {
      name: "IKEA Vietnam",
      logo: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    {
      name: "Nitori",
      logo: "https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    {
      name: "Muji",
      logo: "https://images.pexels.com/photos/6585762/pexels-photo-6585762.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    {
      name: "West Elm",
      logo: "https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    {
      name: "CB2",
      logo: "https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    {
      name: "Pottery Barn",
      logo: "https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`transition-all duration-300 ${isHeaderFixed ? 'fixed-header shadow-lg' : 'relative'} bg-white z-50`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Lộc Phát</h1>
                <p className="text-sm text-gray-600">Premium Furniture</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Trang Chủ
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Giới Thiệu
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Sản Phẩm
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Dịch Vụ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Liên Hệ
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  Trang Chủ
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  Giới Thiệu
                </button>
                <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  Sản Phẩm
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  Dịch Vụ
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  Liên Hệ
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="section-bg py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="heading-sub uppercase tracking-wide">Nội Thất Cao Cấp</h2>
                <h1 className="heading-main">
                  Tạo Nên Không Gian Sống 
                  <span className="text-teal-600"> Hoàn Hảo</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Với hơn 15 năm kinh nghiệm trong ngành sản xuất nội thất gỗ, 
                  Lộc Phát cam kết mang đến những sản phẩm chất lượng cao, 
                  thiết kế tinh tế và dịch vụ chuyên nghiệp.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="btn-primary inline-flex items-center justify-center space-x-2 hover:-translate-y-1 transition-transform"
                >
                  <span>Xem Sản Phẩm</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300"
                >
                  Liên Hệ Ngay
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">15+</div>
                  <div className="text-sm text-gray-600">Năm Kinh Nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600">Khách Hàng</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">50+</div>
                  <div className="text-sm text-gray-600">Dự Án Lớn</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Zoom>
                  <img 
                    src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Nội thất cao cấp Lộc Phát"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl cursor-zoom-in"
                  />
                </Zoom>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-sub">Về Chúng Tôi</h2>
            <h3 className="heading-main">Câu Chuyện Lộc Phát</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Được thành lập từ năm 2008, Lộc Phát đã trở thành một trong những 
              thương hiệu nội thất gỗ uy tín hàng đầu tại Việt Nam.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Chất Lượng Đảm Bảo</h4>
                    <p className="text-gray-600">Sử dụng 100% gỗ tự nhiên cao cấp, quy trình sản xuất hiện đại và kiểm soát chất lượng nghiêm ngặt.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Đội Ngũ Chuyên Nghiệp</h4>
                    <p className="text-gray-600">Hơn 50 thợ mộc lành nghề và đội ngũ thiết kế giàu kinh nghiệm, luôn sáng tạo và tận tâm.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Uy Tín Hàng Đầu</h4>
                    <p className="text-gray-600">Được tin tưởng bởi hàng nghìn khách hàng và đối tác lớn trên toàn quốc.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Zoom>
                <img 
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Xưởng sản xuất"
                  className="w-full h-56 object-cover rounded-xl cursor-zoom-in"
                />
              </Zoom>
              <Zoom>
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Sản phẩm hoàn thiện"
                  className="w-full h-56 object-cover rounded-xl cursor-zoom-in mt-8"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-20 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-sub">Sản Phẩm</h2>
            <h3 className="heading-main">Bộ Sưu Tập Nội Thất</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Khám phá những sản phẩm nội thất gỗ cao cấp được chế tác tỉ mỉ, 
              mang đến vẻ đẹp và tiện nghi cho ngôi nhà của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group card-elevated hover:-translate-y-2 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Zoom>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                    />
                  </Zoom>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="text-teal-600 font-semibold hover:text-orange-500 transition-colors inline-flex items-center space-x-2">
                  <span>Xem Chi Tiết</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-sub">Dịch Vụ</h2>
            <h3 className="heading-main">Giải Pháp Toàn Diện</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Từ thiết kế, sản xuất đến lắp đặt, chúng tôi cung cấp 
              dịch vụ trọn gói cho mọi nhu cầu nội thất của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-sub">Khách Hàng Nói Gì</h2>
            <h3 className="heading-main">Phản Hồi Từ Khách Hàng</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elevated text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-sub">Đối Tác</h2>
            <h3 className="heading-main">Đối Tác Tin Cậy</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chúng tôi tự hào hợp tác với những thương hiệu uy tín hàng đầu trong ngành nội thất.
            </p>
          </div>

          <div className="space-y-8">
            {/* First row - 3 partners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {partners.slice(0, 3).map((partner, index) => (
                <div key={index} className="group">
                  <div className="w-48 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-4 group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - 3 partners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {partners.slice(3, 6).map((partner, index) => (
                <div key={index + 3} className="group">
                  <div className="w-48 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-4 group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-sub">Liên Hệ</h2>
            <h3 className="heading-main">Kết Nối Với Chúng Tôi</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hãy để chúng tôi giúp bạn tạo nên không gian sống hoàn hảo. 
              Liên hệ ngay để được tư vấn miễn phí.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Địa Chỉ</h4>
                  <p className="text-gray-600">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Điện Thoại</h4>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@locphatfurniture.com</p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ Tên</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số Điện Thoại</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tin Nhắn</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Nhập tin nhắn của bạn..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn-primary hover:scale-105 transition-transform"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Factory className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Lộc Phát</h3>
                  <p className="text-sm text-gray-400">Premium Furniture</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Tạo nên không gian sống hoàn hảo với nội thất gỗ cao cấp từ Lộc Phát.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Sản Phẩm</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bàn Ghế</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tủ Bếp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Giường Ngủ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tủ Quần Áo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Dịch Vụ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Thiết Kế</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sản Xuất</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lắp Đặt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bảo Hành</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+84 123 456 789</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@locphatfurniture.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>TP. Hồ Chí Minh</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Lộc Phát Furniture. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;