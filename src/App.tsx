import React, { useEffect, useState, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {
  Play,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Users,
  Award,
  Shield,
  Cog,
  Truck,
  Clock,
  ChevronLeft,
  ChevronRight,
  Target,
  Eye,
  Heart,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  ArrowUp,
  Globe,
  ChevronDown,
  CheckCircle,
  Settings,
  TrendingUp,
  Handshake,
  DollarSign
} from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// Translation data
const translations: Record<string, any> = {
  vie: {
    // Header
    banner: 'Trang Chủ',
    aboutUs: 'Giới Thiệu',
    coreValues: 'Giá Trị Cốt Lõi',
    whyChooseUs: 'Tại Sao Chọn Chúng Tôi',
    factoryTour: 'Tham Quan Nhà Máy',
    clientsPartners: 'Khách Hàng & Đối Tác',
    contact: 'Liên Hệ',

    // Banner Section
    companyName: 'LỘC PHÁT FURNITURE',
    companySlogan: 'Chất Lượng - Uy Tín - Đồng Hành',
    bannerDescription: 'Chuyên sản xuất, thi công và xuất khẩu đồ gỗ nội thất chất lượng cao, phục vụ đối tác doanh nghiệp trong và ngoài nước.',
    watchStory: 'Xem Câu Chuyện',

    // About Section
    aboutTitle: 'GIỚI THIỆU CÔNG TY',
    aboutDescription1: 'Công ty TNHH Như Lộc Phát là đơn vị chuyên sản xuất, thi công và xuất khẩu đồ gỗ nội thất, phục vụ đối tác doanh nghiệp trong và ngoài nước.',
    aboutDescription2: 'Với nhà máy kết hợp giữa công nghệ hiện đại và đội ngũ thợ lành nghề, chúng tôi mang đến giải pháp gỗ linh hoạt, chất lượng cao, đáp ứng mọi yêu cầu của đối tác.',
    aboutDescription3: 'Chúng tôi đồng hành cùng khách hàng từ ý tưởng đến hoàn thiện, mang đến sản phẩm chất lượng cao, đúng tiến độ, đúng cam kết.',
    learnMore: 'Tìm Hiểu Thêm',

    // Core Values
    mission: 'SỨ MỆNH',
    missionDesc: 'Mang đến sản phẩm gỗ chất lượng qua tay nghề vững vàng, công nghệ hiện đại và tư duy đồng hành. Nâng cao giá trị sản phẩm và sự tin cậy trong hợp tác.',
    vision: 'TẦM NHÌN',
    visionDesc: 'Trở thành đối tác chiến lược hàng đầu trong sản xuất và thi công gỗ, được tin cậy bởi chất lượng, dịch vụ chuyên nghiệp và khả năng đáp ứng linh hoạt cho doanh nghiệp toàn cầu.',
    philosophy: 'TRIẾT LÝ',
    philosophyDesc: 'Chất lượng tạo uy tín – Con người mang lại giá trị - Đổi mới thúc đẩy phát triển. Chúng tôi tập trung vào quy trình tối ưu và đội ngũ chuyên môn để đảm bảo mỗi sản phẩm đều đạt chuẩn cả về kỹ thuật lẫn thẩm mỹ.',
    coreValuesTitle: 'Giá Trị Cốt Lõi của LỘC PHÁT FURNITURE',
    qualityControl: 'KIỂM SOÁT CHẤT LƯỢNG',
    qualityControlDesc: 'Quy trình sản xuất được theo dõi sát sao để đảm bảo yêu cầu kỹ thuật và thẩm mỹ.',
    humanDevelopment: 'PHÁT TRIỂN CON NGƯỜI',
    humanDevelopmentDesc: 'Chúng tôi đầu tư vào tay nghề, kỹ năng và sự gắn bó của đội ngũ.',
    technologyApplication: 'ỨNG DỤNG CÔNG NGHỆ',
    technologyApplicationDesc: 'Máy móc CNC và thiết bị hiện đại giúp nâng cao hiệu quả và độ chính xác.',
    flexibleCooperation: 'LINH HOẠT TRONG HỢP TÁC',
    flexibleCooperationDesc: 'Chủ động điều chỉnh theo nhu cầu và thực tế từng đơn hàng.',
    clearCommitment: 'CAM KẾT RÕ RÀNG',
    clearCommitmentDesc: 'Minh bạch, đúng tiến độ và đồng hành lâu dài cùng đối tác.',

    // Why Choose Us
    whyChooseUsTitle: 'Tại Sao Chọn LỘC PHÁT FURNITURE',
    whyChooseUsDesc: 'Chúng tôi cam kết mang đến giải pháp gỗ nội thất tối ưu với chất lượng vượt trội và dịch vụ chuyên nghiệp.',
    sustainableQuality: 'Chất Lượng Sản Phẩm Bền Vững',
    sustainableQualityDesc: 'Kiểm soát chặt chẽ từ nguyên liệu đến hoàn thiện, đảm bảo sản phẩm đồng nhất và tinh tế.',
    stableCapacity: 'Năng Lực Sản Xuất ỔN ĐỊNH',
    stableCapacityDesc: 'Máy móc CNC hiện đại và đội ngũ thợ nghề lâu năm, đáp ứng tốt đơn hàng số lượng lớn, đảm bảo tiến độ.',
    transparentProcess: 'Quy Trình Minh Bạch, Chuyên Nghiệp',
    transparentProcessDesc: 'Đảm bảo tiến độ, linh hoạt và liên tục phối hợp với khách hàng.',
    longTermPartnership: 'Cam Kết Đồng Hành Lâu Dài',
    longTermPartnershipDesc: 'Hỗ trợ toàn diện để khách hàng yên tâm sử dụng sản phẩm.',
    competitivePrice: 'Giá Cả Cạnh Tranh',
    competitivePriceDesc: 'Cân bằng giữa chất lượng và chi phí, mang lại giá trị tối ưu cho khách hàng.',
    guaranteedSchedule: 'Tiến Độ Đảm Bảo',
    guaranteedScheduleDesc: 'Lập kế hoạch chi tiết và quản lý chặt chẽ để giao hàng đúng hạn.',

    // Factory Tour
    factoryTourTitle: 'Khám Phá Cơ Sở Sản Xuất',
    factoryTourDesc: 'Tham quan ảo nhà máy hiện đại của chúng tôi với công nghệ CNC tiên tiến và đội ngũ thợ lành nghề.',

    // Clients & Partners
    Partners: "Khách Hàng & Đối Tác",
    partnersTitle: 'Được Tin Tưởng Bởi Các Đối Tác',
    partnersDesc: 'Chúng tôi tự hào hợp tác với các doanh nghiệp uy tín trong và ngoài nước.',

    // Contact
    getInTouch: 'Liên Hệ Với Chúng Tôi',
    contactDesc: 'Sẵn sàng thảo luận về dự án của bạn? Liên hệ với chúng tôi ngay hôm nay để được tư vấn.',
    ourLocation: 'Vị Trí Của Chúng Tôi',
    locationAddress: '123 Đại Lộ Công Nghiệp\nKhu Sản Xuất\nThành Phố, Tỉnh 12345',
    name: 'Họ Tên',
    email: 'Email',
    phone: 'Điện Thoại',
    message: 'Tin Nhắn',
    namePlaceholder: 'Họ tên của bạn',
    emailPlaceholder: 'email@cua-ban.com',
    phonePlaceholder: 'Số điện thoại của bạn',
    messagePlaceholder: 'Hãy cho chúng tôi biết về dự án của bạn...',
    sendMessage: 'Gửi Tin Nhắn',

    // Footer
    contactInfo: 'LIÊN HỆ',
    factoryAddress: 'Địa chỉ Nhà Máy:',
    factoryAddressDetail: 'Khu Công Nghiệp, Thành phố Hồ Chí Minh, Việt Nam',
    showroomAddress: 'Địa chỉ Showroom:',
    showroomAddressDetail: 'Trung tâm Thành phố, Thành phố Hồ Chí Minh, Việt Nam',
    phoneLabel: 'Điện thoại:',
    emailLabel: 'Email:',
    products: 'SẢN PHẨM',
    table: 'Bàn',
    chair: 'Ghế',
    cabinet: 'Tủ & Kệ',
    bed: 'Giường & Tủ Đầu Giường',
    lavabo: 'Tủ Lavabo & Lavabo',
    policies: 'CHÍNH SÁCH',
    generalPolicy: 'Chính Sách & Quy Định Chung',
    buyingGuide: 'Hướng Dẫn Mua Hàng',
    privacyPolicy: 'Chính Sách Bảo Mật',
    shippingPolicy: 'Chính Sách Vận Chuyển',
    returnPolicy: 'Chính Sách Đổi Trả',
    copyright: 'Bản quyền 2024 © Tất cả quyền được bảo lưu. Thiết kế bởi Lộc Phát Furniture'
  },
  eng: {
    // Header
    banner: 'Home',
    aboutUs: 'About Us',
    coreValues: 'Core Values',
    whyChooseUs: 'Why Choose Us',
    factoryTour: 'Factory Tour',
    clientsPartners: 'Clients & Partners',
    contact: 'Contact',

    // Banner Section
    companyName: 'LOC PHAT FURNITURE',
    companySlogan: 'Quality - Reputation - Partnership',
    bannerDescription: 'Specializing in manufacturing, construction and export of high-quality wooden furniture, serving business partners domestically and internationally.',
    watchStory: 'Watch Our Story',

    // About Section
    aboutTitle: 'COMPANY INTRODUCTION',
    aboutDescription1: 'Nhu Loc Phat Co., Ltd. is a unit specializing in manufacturing, construction and export of wooden furniture, serving business partners domestically and internationally.',
    aboutDescription2: 'With a factory that combines modern technology and skilled craftsmen, we bring flexible, high-quality wood solutions that meet all partner requirements.',
    aboutDescription3: 'We accompany customers from ideas to completion, bringing high-quality products, on schedule, and on commitment.',
    learnMore: 'Learn More',

    // Core Values
    mission: 'MISSION',
    missionDesc: 'Bringing quality wood products through solid craftsmanship, modern technology and partnership mindset. Enhance product value and trust in cooperation.',
    vision: 'VISION',
    visionDesc: 'To become a leading strategic partner in wood production and construction, trusted for quality, professional service and flexible responsiveness to global businesses.',
    philosophy: 'PHILOSOPHY',
    philosophyDesc: 'Quality creates reputation – People bring value - Innovation drives development. We focus on optimal processes and professional teams to ensure each product meets both technical and aesthetic standards.',
    coreValuesTitle: 'Core Values of LOC PHAT FURNITURE',
    qualityControl: 'QUALITY CONTROL',
    qualityControlDesc: 'Production processes are closely monitored to ensure technical and aesthetic requirements.',
    humanDevelopment: 'HUMAN DEVELOPMENT',
    humanDevelopmentDesc: 'We invest in the skills, abilities and commitment of our team.',
    technologyApplication: 'TECHNOLOGY APPLICATION',
    technologyApplicationDesc: 'CNC machinery and modern equipment help improve efficiency and accuracy.',
    flexibleCooperation: 'FLEXIBLE COOPERATION',
    flexibleCooperationDesc: 'Proactively adjust according to the needs and reality of each order.',
    clearCommitment: 'CLEAR COMMITMENT',
    clearCommitmentDesc: 'Transparent, on schedule and long-term partnership with partners.',

    // Why Choose Us
    whyChooseUsTitle: 'Why Choose LOC PHAT FURNITURE',
    whyChooseUsDesc: 'We are committed to providing optimal wooden furniture solutions with superior quality and professional service.',
    sustainableQuality: 'Sustainable Product Quality',
    sustainableQualityDesc: 'Strict control from raw materials to completion, ensuring uniform and refined products.',
    stableCapacity: 'Stable Production Capacity',
    stableCapacityDesc: 'Modern CNC machinery and long-term skilled craftsmen, well meeting large orders, ensuring schedule.',
    transparentProcess: 'Transparent, Professional Process',
    transparentProcessDesc: 'Ensuring schedule, flexibility and continuous coordination with customers.',
    longTermPartnership: 'Long-term Partnership Commitment',
    longTermPartnershipDesc: 'Comprehensive support so customers can use products with peace of mind.',
    competitivePrice: 'Competitive Pricing',
    competitivePriceDesc: 'Balance between quality and cost, bringing optimal value to customers.',
    guaranteedSchedule: 'Guaranteed Schedule',
    guaranteedScheduleDesc: 'Detailed planning and strict management to deliver on time.',

    // Factory Tour
    factoryTourTitle: 'Explore Our Production Facility',
    factoryTourDesc: 'Take a virtual tour of our modern factory with advanced CNC technology and skilled craftsmen.',

    // Clients & Partners
    Partners: 'Clients & Partners',
    partnersTitle: 'Trusted by Partners',
    partnersDesc: 'We are proud to partner with reputable businesses domestically and internationally.',

    // Contact
    getInTouch: 'Get In Touch',
    contactDesc: 'Ready to discuss your project? Contact us today for a consultation.',
    ourLocation: 'Our Location',
    locationAddress: '123 Industrial Avenue\nManufacturing District\nCity, State 12345',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: 'Your phone number',
    messagePlaceholder: 'Tell us about your project...',
    sendMessage: 'Send Message',

    // Footer
    contactInfo: 'CONTACT',
    factoryAddress: 'Factory Address:',
    factoryAddressDetail: 'Industrial Zone, Ho Chi Minh City, Vietnam',
    showroomAddress: 'Showroom Address:',
    showroomAddressDetail: 'City Center, Ho Chi Minh City, Vietnam',
    phoneLabel: 'Phone:',
    emailLabel: 'Email:',
    products: 'PRODUCTS',
    table: 'Tables',
    chair: 'Chairs',
    cabinet: 'Cabinets & Shelves',
    bed: 'Beds & Nightstands',
    lavabo: 'Lavabo Cabinets & Lavabos',
    policies: 'POLICIES',
    generalPolicy: 'General Policies & Regulations',
    buyingGuide: 'Buying Guide',
    privacyPolicy: 'Privacy Policy',
    shippingPolicy: 'Shipping Policy',
    returnPolicy: 'Return Policy',
    copyright: 'Copyright 2024 © All rights Reserved. Design by Loc Phat Furniture'
  }
};

const whyChooseUsData = [
  {
    icon: CheckCircle,
    titleKey: 'sustainableQuality',
    descKey: 'sustainableQualityDesc'
  },
  {
    icon: Settings,
    titleKey: 'stableCapacity',
    descKey: 'stableCapacityDesc'
  },
  {
    icon: Shield,
    titleKey: 'transparentProcess',
    descKey: 'transparentProcessDesc'
  },
  {
    icon: Handshake,
    titleKey: 'longTermPartnership',
    descKey: 'longTermPartnershipDesc'
  },
  {
    icon: DollarSign,
    titleKey: 'competitivePrice',
    descKey: 'competitivePriceDesc'
  },
  {
    icon: Clock,
    titleKey: 'guaranteedSchedule',
    descKey: 'guaranteedScheduleDesc'
  }
];

const factoryImages = [
  'https://arito-assets-cdn.pages.dev/5.1.png',
  'https://arito-assets-cdn.pages.dev/5.2.png',
  'https://arito-assets-cdn.pages.dev/5.3.png',
  'https://arito-assets-cdn.pages.dev/5.4.png',
  'https://arito-assets-cdn.pages.dev/5.5.png',
  'https://arito-assets-cdn.pages.dev/5.6.png',
];

// Danh sách đối tác mới
const partnerList = [
  {
    name: 'CH',
    img: 'https://arito-assets-cdn.pages.dev/6-ch.jpg',
  },
  {
    name: 'Phuc Thang',
    img: 'https://arito-assets-cdn.pages.dev/6-phuc-thang.png',
  },
  {
    name: "Poopy's of Macon",
    img: 'https://arito-assets-cdn.pages.dev/6-poopy-s-of-macon.png',
  },
  {
    name: 'Wild wood',
    img: 'https://arito-assets-cdn.pages.dev/6-wildwood.png',
  },
  {
    name: 'Woodbride',
    img: 'https://arito-assets-cdn.pages.dev/6-woodbride.jpg',
  },
];

// Language options with flag images
const languageOptions = [
  { code: 'vie', label: 'Tiếng Việt', flag: 'https://flagcdn.com/w40/vn.png' },
  { code: 'eng', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' }
];

// Extend window type for fullpage_api
declare global {
  interface Window {
    fullpage_api?: any; // You can define a more specific type for fullpage_api if available
  }
}

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('vie');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(64); // default 64px

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Sử dụng matchMedia để phát hiện mobile chính xác hơn
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Xóa watermark sau 5s
    const timeout = setTimeout(() => {
      Array.from(document.getElementsByClassName('fp-watermark')).forEach(el => el.remove());
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const t = translations[currentLanguage];

  const switchLanguage = (lang: string) => {
    if (lang === currentLanguage) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentLanguage(lang);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 200);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % factoryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + factoryImages.length) % factoryImages.length);
  };

  const scrollToTop = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(1);
    }
  };

  const currentLanguageOption = languageOptions.find(lang => lang.code === currentLanguage);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Language Switcher (flags) */}
        <div className="fixed top-6 right-6 z-[101] flex space-x-3">
          {languageOptions.map(option => (
            <button
              key={option.code}
              onClick={() => switchLanguage(option.code)}
              className={`rounded-full border-2 transition-all duration-200 p-1 bg-white shadow-md ${currentLanguage === option.code ? 'border-teal-600 scale-110' : 'border-transparent opacity-70 hover:opacity-100'}`}
              aria-label={option.label}
            >
              <img src={option.flag} alt={option.label} className="w-8 h-8 rounded-full object-cover" />
            </button>
          ))}
        </div>

        {/* Language Transition Overlay */}
        {isTransitioning && (
          <div className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Globe className="w-8 h-8 text-teal-600 animate-spin" />
              <span className="text-lg font-medium text-gray-700">
                {currentLanguage === 'vie' ? 'Switching to English...' : 'Đang chuyển sang Tiếng Việt...'}
              </span>
            </div>
          </div>
        )}

        {/* Fixed Header */}
        <header ref={headerRef} className="fixed-header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 w-full max-w-full">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 leading-tight">Lộc Phát Furniture</h1>
                  <p className="text-xs text-teal-600 leading-tight">Premium Wood Manufacturing</p>
                </div>
              </div>

              <nav className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => window.fullpage_api && window.fullpage_api.moveTo(1)}
                  className="text-sm font-medium transition-colors hover:text-teal-600 text-gray-600 whitespace-nowrap"
                >
                  {t.banner}
                </button>
                <button
                  onClick={() => window.fullpage_api && window.fullpage_api.moveTo(2)}
                  className="text-sm font-medium transition-colors hover:text-teal-600 text-gray-600 whitespace-nowrap"
                >
                  {t.aboutUs}
                </button>
                <button
                  onClick={() => window.fullpage_api && window.fullpage_api.moveTo(3)}
                  className="text-sm font-medium transition-colors hover:text-teal-600 text-gray-600 whitespace-nowrap"
                >
                  {t.coreValues}
                </button>
                <button
                  onClick={() => window.fullpage_api && window.fullpage_api.moveTo(4)}
                  className="text-sm font-medium transition-colors hover:text-teal-600 text-gray-600 whitespace-nowrap"
                >
                  {t.whyChooseUs}
                </button>
                <button
                  onClick={() => window.fullpage_api && window.fullpage_api.moveTo(5)}
                  className="text-sm font-medium transition-colors hover:text-teal-600 text-gray-600 whitespace-nowrap"
                >
                  {t.factoryTour}
                </button>
                <button
                  onClick={() => window.fullpage_api && window.fullpage_api.moveTo(6)}
                  className="text-sm font-medium transition-colors hover:text-teal-600 text-gray-600 whitespace-nowrap"
                >
                  {t.clientsPartners}
                </button>
                <button
                  onClick={() => window.fullpage_api && window.fullpage_api.moveTo(7)}
                  className="text-sm font-medium transition-colors hover:text-teal-600 text-gray-600 whitespace-nowrap"
                >
                  {t.contact}
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Sticky Contact Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
          <a
            href="https://wa.me/1234567890" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:info@locphatfurniture.com" // Replace with actual email
            className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>

        {isMobile ? (
          // Layout mobile: header luôn fixed, thêm padding-top cho nội dung
          <div className="flex flex-col overflow-visible" style={{ paddingTop: `${headerHeight}px` }}>
            {/* Banner Section */}
            <div className="relative overflow-hidden flex items-center justify-center min-h-[60vh] bg-gray-900 px-2 py-10">
              <div className="absolute inset-0">
                <img
                  src="https://arito-assets-cdn.pages.dev/1.png"
                  alt="Loc Phat Furniture Core Team"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            {/* About Us Section */}
            <div className="bg-gray-50 flex flex-col px-2 py-10">
              <div className={`max-w-7xl mx-auto px-2 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="relative">
                  <img
                    src="https://arito-assets-cdn.pages.dev/2.png"
                    alt="Wood processing facility"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div>
                  <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2 block">About</span>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.aboutTitle}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {t.aboutDescription1}
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {t.aboutDescription2}
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {t.aboutDescription3}
                  </p>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    {t.learnMore}
                  </button>
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-white flex flex-col px-2 py-10">
              <div className={`max-w-7xl mx-auto px-2 sm:px-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {/* Top Three Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t.missionDesc}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.vision}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t.visionDesc}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.philosophy}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t.philosophyDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <img
                      src="https://t3.ftcdn.net/jpg/03/98/21/92/360_F_398219280_uBjN5sCil1YJpZIet1Q3AVqws6VFUYPF.jpg"
                      alt="Team collaboration"
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 break-words">
                      {t.coreValuesTitle}
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-orange-500 mb-2">{t.qualityControl}</h4>
                        <p className="text-gray-600">{t.qualityControlDesc}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-500 mb-2">{t.humanDevelopment}</h4>
                        <p className="text-gray-600">{t.humanDevelopmentDesc}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-500 mb-2">{t.technologyApplication}</h4>
                        <p className="text-gray-600">{t.technologyApplicationDesc}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-500 mb-2">{t.flexibleCooperation}</h4>
                        <p className="text-gray-600">{t.flexibleCooperationDesc}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-500 mb-2">{t.clearCommitment}</h4>
                        <p className="text-gray-600">{t.clearCommitmentDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gray-50 flex flex-col px-2 py-10">
              <div className={`max-w-7xl mx-auto px-2 sm:px-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="text-center mb-10 md:mb-16">
                  <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 block">{t.whyChooseUs}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">{t.whyChooseUsTitle}</h2>
                  <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    {t.whyChooseUsDesc}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {whyChooseUsData.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t[item.titleKey]}</h3>
                      <p className="text-gray-600 leading-relaxed">{t[item.descKey]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Factory Tour Section - New Grid Layout with Animation */}
            <div className="bg-white flex flex-col px-2 py-10">
              <div className={`max-w-7xl mx-auto px-2 sm:px-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="text-center mb-10 md:mb-16">
                  <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 block">{t.factoryTour}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">{t.factoryTourTitle}</h2>
                  <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    {t.factoryTourDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {factoryImages.slice(0, 6).map((img, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-2xl group shadow-lg cursor-zoom-in"
                      style={{ pointerEvents: 'auto' }} // Đảm bảo nhận sự kiện chuột
                    >
                      <Zoom>
                        <img
                          src={img}
                          alt={`Factory ${idx + 1}`}
                          className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-auto" // Đảm bảo ảnh nhận sự kiện
                        />
                      </Zoom>
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Clients & Partners Section */}
            <div className="section bg-gray-50 flex flex-col items-center px-2 py-10 md:min-h-0">
              <div className={`max-w-7xl mx-auto px-2 sm:px-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="text-center mb-10 md:mb-16">
                  <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 block">{t.Partners}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">{t.partnersTitle}</h2>
                  <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    {t.partnersDesc}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {partnerList.map((partner) => (
                    <div
                      key={partner.name}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center justify-center"
                    >
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="w-28 h-28 object-contain rounded-xl mb-4 border border-gray-200 bg-gray-50"
                      />
                      <p className="text-base font-medium text-gray-700 text-center">{partner.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Footer Section (Merged) */}
            <div className="section bg-white flex flex-col items-center px-2 py-8 md:min-h-0">
              <div className={`max-w-4xl w-full mx-auto flex flex-col gap-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {/* Contact Section */}
                <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch justify-between bg-white p-0 md:p-0 border-0">
                  <div className="flex-1 flex items-center justify-center bg-gray-50 p-6 min-w-[220px] mb-6 lg:mb-0">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{t.ourLocation}</h3>
                      <p className="text-gray-600 whitespace-pre-line text-sm">{t.locationAddress}</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-teal-50 to-teal-100 p-6 flex items-center justify-center">
                    <form className="w-full max-w-sm space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">{t.name}</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                            placeholder={t.namePlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">{t.email}</label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                            placeholder={t.emailPlaceholder}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">{t.phone}</label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                          placeholder={t.phonePlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">{t.message}</label>
                        <textarea
                          rows={3}
                          className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none text-sm"
                          placeholder={t.messagePlaceholder}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold text-base transition-colors"
                      >
                        {t.sendMessage}
                      </button>
                    </form>
                  </div>
                </div>
                {/* Footer Section */}
                <div className="w-full bg-gray-100 px-2 py-8">
                  <div className="max-w-7xl mx-auto px-2 sm:px-6 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">L</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Lộc Phát Furniture</h3>
                            <p className="text-xs text-teal-600">Premium Wood Manufacturing</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs text-gray-600 mb-4">
                          <p>• MST: 3701770732</p>
                          <p>• Ngày cấp: 25/08/2010</p>
                          <p>• Sở Kế hoạch & Đầu tư TP.HCM</p>
                        </div>
                        <div className="flex space-x-2">
                          <a href="#" className="w-8 h-8 bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors rounded">
                            <Facebook className="w-4 h-4 text-white" />
                          </a>
                          <a href="#" className="w-8 h-8 bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors rounded">
                            <Youtube className="w-4 h-4 text-white" />
                          </a>
                          <a href="#" className="w-8 h-8 bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition-colors rounded">
                            <Linkedin className="w-4 h-4 text-white" />
                          </a>
                          <a href="#" className="w-8 h-8 bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors rounded">
                            <Instagram className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-teal-600 pb-1 inline-block">{t.contactInfo}</h4>
                        <div className="space-y-2 text-xs text-gray-600">
                          <div>
                            <p className="font-medium">{t.factoryAddress}</p>
                            <p>{t.factoryAddressDetail}</p>
                          </div>
                          <div>
                            <p className="font-medium">{t.showroomAddress}</p>
                            <p>{t.showroomAddressDetail}</p>
                          </div>
                          <p><span className="font-medium">{t.phoneLabel}</span> 0908 759 399</p>
                          <p><span className="font-medium">{t.emailLabel}</span> info@locphat-furniture.com</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-teal-600 pb-1 inline-block">{t.products}</h4>
                        <div className="space-y-1 text-xs text-gray-600">
                          <p>{t.table}</p>
                          <p>{t.chair}</p>
                          <p>{t.cabinet}</p>
                          <p>{t.bed}</p>
                          <p>{t.lavabo}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-teal-600 pb-1 inline-block">{t.policies}</h4>
                        <div className="space-y-1 text-xs text-gray-600">
                          <p>{t.generalPolicy}</p>
                          <p>{t.buyingGuide}</p>
                          <p>{t.privacyPolicy}</p>
                          <p>{t.shippingPolicy}</p>
                          <p>{t.returnPolicy}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-300">
                      <p className="text-center text-gray-600 text-xs">
                        {t.copyright}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> // <--FIX: Added this closing </div> for the mobile layout wrapper
        ) : (
          <ReactFullpage
            scrollingSpeed={1000}
            navigation={true}
            navigationPosition={'right'}
            showActiveTooltip={true}
            sectionsColor={['#ffffff', '#f8fafc', '#ffffff', '#f8fafc', '#ffffff', '#f8fafc', '#ffffff', '#f8fafc']} // FIX: Corrected ## to #
            scrollOverflow={false} // Set to true if content within a section might exceed viewport height
            autoScrolling={true}
            fitToSection={true}
            render={({ state, fullpageApi }) => {
              if (fullpageApi) { // Make sure fullpageApi is available
                window.fullpage_api = fullpageApi;
              }
              return (
                <ReactFullpage.Wrapper>
                  {/* Banner Section */}
                  <div className="section relative overflow-hidden flex items-center justify-center" style={{ paddingTop: `${headerHeight}px` }}>
                    <div className="absolute inset-0">
                      <img
                        src="https://arito-assets-cdn.pages.dev/1.png"
                        alt="Loc Phat Furniture Core Team"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    {/* You can add text overlay content here if needed for the banner */}
                  </div>

                  {/* About Us Section */}
                  <div className="section bg-gray-50 flex items-center" style={{ paddingTop: `${headerHeight}px` }}>
                    <div className={`max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <div className="relative">
                        <img
                          src="https://arito-assets-cdn.pages.dev/2.png"
                          alt="Wood processing facility"
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-2xl flex items-center justify-center">
                          <Award className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div>
                        <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2 block">About</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.aboutTitle}</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {t.aboutDescription1}
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {t.aboutDescription2}
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {t.aboutDescription3}
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                          {t.learnMore}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Core Values Section */}
                  <div className="section bg-white flex items-center" style={{ paddingTop: `${headerHeight}px` }}>
                    <div className={`max-w-7xl mx-auto px-6 py-12 md:py-20 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission}</h3>
                          <p className="text-gray-600 leading-relaxed">
                            {t.missionDesc}
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                            <Eye className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.vision}</h3>
                          <p className="text-gray-600 leading-relaxed">
                            {t.visionDesc}
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                            <Target className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.philosophy}</h3>
                          <p className="text-gray-600 leading-relaxed">
                            {t.philosophyDesc}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                          <img
                            src="https://t3.ftcdn.net/jpg/03/98/21/92/360_F_398219280_uBjN5sCil1YJpZIet1Q3AVqws6VFUYPF.jpg"
                            alt="Team collaboration"
                            className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 break-words">
                            {t.coreValuesTitle}
                          </h2>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold text-orange-500 mb-2">{t.qualityControl}</h4>
                              <p className="text-gray-600">{t.qualityControlDesc}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-orange-500 mb-2">{t.humanDevelopment}</h4>
                              <p className="text-gray-600">{t.humanDevelopmentDesc}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-orange-500 mb-2">{t.technologyApplication}</h4>
                              <p className="text-gray-600">{t.technologyApplicationDesc}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-orange-500 mb-2">{t.flexibleCooperation}</h4>
                              <p className="text-gray-600">{t.flexibleCooperationDesc}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-orange-500 mb-2">{t.clearCommitment}</h4>
                              <p className="text-gray-600">{t.clearCommitmentDesc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="section bg-gray-50 flex items-center" style={{ paddingTop: `${headerHeight}px` }}>
                    <div className={`max-w-7xl mx-auto px-6 py-12 md:py-20 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <div className="text-center mb-10 md:mb-16">
                        <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 block">{t.whyChooseUs}</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">{t.whyChooseUsTitle}</h2>
                        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                          {t.whyChooseUsDesc}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {whyChooseUsData.map((item, index) => (
                          <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                              <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t[item.titleKey]}</h3>
                            <p className="text-gray-600 leading-relaxed">{t[item.descKey]}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Factory Tour Section */}
                  <div className="section bg-white flex items-center" style={{ paddingTop: `${headerHeight}px` }}>
                    <div className={`max-w-7xl mx-auto px-6 py-12 md:py-20 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <div className="text-center mb-10 md:mb-16">
                        <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 block">{t.factoryTour}</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">{t.factoryTourTitle}</h2>
                        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                          {t.factoryTourDesc}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {factoryImages.slice(0, 6).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative overflow-hidden rounded-2xl group shadow-lg cursor-zoom-in"
                            style={{ pointerEvents: 'auto' }} // Đảm bảo nhận sự kiện chuột
                          >
                            <Zoom>
                              <img
                                src={img}
                                alt={`Factory ${idx + 1}`}
                                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-auto" // Đảm bảo ảnh nhận sự kiện
                              />
                            </Zoom>
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clients & Partners Section */}
                  <div className="section bg-gray-50 flex items-center" style={{ paddingTop: `${headerHeight}px` }}>
                    <div className={`max-w-7xl mx-auto px-6 py-12 md:py-20 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <div className="text-center mb-10 md:mb-16">
                        <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 block">{t.Partners}</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">{t.partnersTitle}</h2>
                        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                          {t.partnersDesc}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                        {partnerList.map((partner) => (
                          <div
                            key={partner.name}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center justify-center"
                          >
                            <img
                              src={partner.img}
                              alt={partner.name}
                              className="w-24 h-24 object-contain rounded-xl mb-3 border border-gray-200 bg-gray-50"
                            />
                            <p className="text-sm font-medium text-gray-700 text-center">{partner.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact & Footer Section (Merged) */}
                  <div className="section bg-white flex flex-col items-center justify-center" style={{ paddingTop: `${headerHeight}px` }}>
                    <div className={`max-w-4xl w-full mx-auto px-6 py-12 flex flex-col gap-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      {/* Contact Section */}
                      <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch justify-between bg-white p-0 border-0">
                        <div className="flex-1 flex items-center justify-center bg-gray-50 p-6 min-w-[220px] mb-6 lg:mb-0 rounded-lg">
                          <div className="text-center">
                            <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{t.ourLocation}</h3>
                            <p className="text-gray-600 whitespace-pre-line text-sm">{t.locationAddress}</p>
                          </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-teal-50 to-teal-100 p-6 flex items-center justify-center rounded-lg">
                          <form className="w-full max-w-sm space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">{t.name}</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                                  placeholder={t.namePlaceholder}
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">{t.email}</label>
                                <input
                                  type="email"
                                  className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                                  placeholder={t.emailPlaceholder}
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">{t.phone}</label>
                              <input
                                type="tel"
                                className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                                placeholder={t.phonePlaceholder}
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">{t.message}</label>
                              <textarea
                                rows={3}
                                className="w-full px-3 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none text-sm"
                                placeholder={t.messagePlaceholder}
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold text-base transition-colors"
                            >
                              {t.sendMessage}
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* Footer Section (as part of the last section) */}
                      <div className="w-full bg-gray-100 px-2 py-8 mt-auto rounded-lg"> {/* mt-auto pushes footer to bottom if section is taller */}
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 w-full">
                          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-1">
                              <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center rounded-md">
                                  <span className="text-white font-bold text-lg">L</span>
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900">Lộc Phát Furniture</h3>
                                  <p className="text-xs text-teal-600">Premium Wood Manufacturing</p>
                                </div>
                              </div>
                              <div className="space-y-2 text-xs text-gray-600 mb-4">
                                <p>• MST: 3701770732</p>
                                <p>• Ngày cấp: 25/08/2010</p>
                                <p>• Sở Kế hoạch & Đầu tư TP.HCM</p>
                              </div>
                              <div className="flex space-x-2">
                                <a href="#" className="w-8 h-8 bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors rounded">
                                  <Facebook className="w-4 h-4 text-white" />
                                </a>
                                <a href="#" className="w-8 h-8 bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors rounded">
                                  <Youtube className="w-4 h-4 text-white" />
                                </a>
                                <a href="#" className="w-8 h-8 bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition-colors rounded">
                                  <Linkedin className="w-4 h-4 text-white" />
                                </a>
                                <a href="#" className="w-8 h-8 bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors rounded">
                                  <Instagram className="w-4 h-4 text-white" />
                                </a>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-teal-600 pb-1 inline-block">{t.contactInfo}</h4>
                              <div className="space-y-2 text-xs text-gray-600">
                                <div>
                                  <p className="font-medium">{t.factoryAddress}</p>
                                  <p>{t.factoryAddressDetail}</p>
                                </div>
                                <div>
                                  <p className="font-medium">{t.showroomAddress}</p>
                                  <p>{t.showroomAddressDetail}</p>
                                </div>
                                <p><span className="font-medium">{t.phoneLabel}</span> 0908 759 399</p>
                                <p><span className="font-medium">{t.emailLabel}</span> info@locphat-furniture.com</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-teal-600 pb-1 inline-block">{t.products}</h4>
                              <div className="space-y-1 text-xs text-gray-600">
                                <p>{t.table}</p>
                                <p>{t.chair}</p>
                                <p>{t.cabinet}</p>
                                <p>{t.bed}</p>
                                <p>{t.lavabo}</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-teal-600 pb-1 inline-block">{t.policies}</h4>
                              <div className="space-y-1 text-xs text-gray-600">
                                <p>{t.generalPolicy}</p>
                                <p>{t.buyingGuide}</p>
                                <p>{t.privacyPolicy}</p>
                                <p>{t.shippingPolicy}</p>
                                <p>{t.returnPolicy}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 pt-4 border-t border-gray-300">
                            <p className="text-center text-gray-600 text-xs">
                              {t.copyright}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;