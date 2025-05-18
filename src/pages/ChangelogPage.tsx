import React from 'react';

const ChangelogPage: React.FC = () => {
  const changes = [
    {
      version: "1.2.0",
      date: "2024-03-15",
      changes: [
        "Thêm tính năng tìm kiếm nâng cao",
        "Cải thiện hiệu suất tải trang",
        "Sửa lỗi hiển thị trên thiết bị di động"
      ]
    },
    {
      version: "1.1.0",
      date: "2024-02-28",
      changes: [
        "Thêm tính năng đăng ký nhận bản tin",
        "Cập nhật giao diện người dùng",
        "Thêm trang danh mục mới"
      ]
    },
    {
      version: "1.0.0",
      date: "2024-02-01",
      changes: [
        "Ra mắt phiên bản đầu tiên",
        "Tính năng đọc bài viết cơ bản",
        "Hệ thống bình luận",
        "Chia sẻ mạng xã hội"
      ]
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Nhật ký thay đổi</h1>
          
          <div className="space-y-12">
            {changes.map((release, index) => (
              <div key={release.version} className="relative pl-8 pb-8">
                {/* Timeline line */}
                {index !== changes.length - 1 && (
                  <div className="absolute left-[11px] top-[34px] bottom-0 w-[2px] bg-neutral-200"></div>
                )}
                
                {/* Version dot */}
                <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full border-2 border-primary bg-white"></div>
                
                <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-primary">v{release.version}</h2>
                    <time className="text-neutral-500">{release.date}</time>
                  </div>
                  
                  <ul className="space-y-3">
                    {release.changes.map((change, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 mr-3"></span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogPage;