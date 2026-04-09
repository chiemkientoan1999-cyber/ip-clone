import React, { useState, useRef, useEffect } from 'react';
import './App.css'; 

export default function AppleVn() {
  // BIẾN QUẢN LÝ TRANG: 'iphone', 'store', hoặc 'login'
  const [currentPage, setCurrentPage] = useState('iphone');
  const [activePair, setActivePair] = useState('pair-mac');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isBagOpen, setIsBagOpen] = useState(false); 

  // Refs cho trang iPhone
  const productCarouselRef = useRef(null);
  const featureCarouselRef = useRef(null);
  const exploreCarouselRef = useRef(null);

  // Refs cho trang Cửa Hàng
  const storeLatestRef = useRef(null);
  const storeSupportRef = useRef(null);
  const storeDifferenceRef = useRef(null);
  const storeAccessoriesRef = useRef(null);
  const storeAudioRef = useRef(null);
  const storeExperienceRef = useRef(null);
  const storeOffersRef = useRef(null);

  // Tự động đóng menu mobile khi phóng to màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const scrollCarousel = (ref, direction) => {
    const scrollAmount = 350;
    if (ref.current) {
      if (direction === 'left') {
        ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
    setIsBagOpen(false); // Đảm bảo đóng túi hàng khi mở menu mobile
  };

  // HÀM CHUYỂN TRANG
  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false);
    setIsBagOpen(false);
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi chuyển
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* THANH ĐIỀU HƯỚNG (NAVBAR) CHUNG CHO TẤT CẢ CÁC TRANG                       */}
      {/* ========================================================================= */}
      <nav className={`top-nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul className="top-nav-content container">
          
          <li className="nav-item">
            <a href="#" className="top-nav-logo" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>
              <img src="img/images.png" alt="Logo" />
            </a>
          </li>

          <li className="nav-item desktop-only">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }}>Cửa Hàng</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Mua Hàng</h4>
                  <ul>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }}>Mua Sắm Sản Phẩm Mới Nhất</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">Phụ Kiện</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Liên Kết Nhanh</h4>
                  <ul>
                    <li><a href="#">Tình Trạng Đơn Hàng</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                    <li><a href="#">Tài Chính</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Mua Tại Cửa Hàng Đặc Biệt</h4>
                  <ul>
                    <li><a href="#">Giáo Dục</a></li>
                    <li><a href="#">Doanh Nghiệp</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">Mac</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá Mac</h4>
                  <ul>
                    <li><a href="#">Khám Phá Tất Cả Mac</a></li>
                    <li><a href="#">MacBook Air</a></li>
                    <li><a href="#">MacBook Pro</a></li>
                    <li><a href="#">iMac</a></li>
                    <li><a href="#">Mac mini</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Mua Mac</h4>
                  <ul>
                    <li><a href="#">Mua Mac</a></li>
                    <li><a href="#">Phụ Kiện Mac</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Tìm Hiểu Thêm Về Mac</h4>
                  <ul>
                    <li><a href="#">Hỗ Trợ Mac</a></li>
                    <li><a href="#">AppleCare</a></li>
                    <li><a href="#">macOS</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">iPad</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá iPad</h4>
                  <ul>
                    <li><a href="#">Khám Phá Tất Cả iPad</a></li>
                    <li><a href="#">iPad Pro</a></li>
                    <li><a href="#">iPad Air</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPad mini</a></li>
                    <li><a href="#">Apple Pencil</a></li>
                    <li><a href="#">Bàn Phím</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Mua iPad</h4>
                  <ul>
                    <li><a href="#">Mua iPad</a></li>
                    <li><a href="#">Phụ Kiện iPad</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                    <li><a href="#">Tài Chính</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Tìm Hiểu Thêm Về iPad</h4>
                  <ul>
                    <li><a href="#">Hỗ Trợ iPad</a></li>
                    <li><a href="#">AppleCare</a></li>
                    <li><a href="#">iPadOS 18</a></li>
                    <li><a href="#">Apple Intelligence</a></li>
                    <li><a href="#">Giáo Dục</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>iPhone</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá iPhone</h4>
                  <ul>
                    <li><a href="#">Khám Phá Tất Cả iPhone</a></li>
                    <li><a href="#">iPhone 17 Pro</a></li>
                    <li><a href="#">iPhone Air</a></li>
                    <li><a href="#">iPhone 17</a></li>
                    <li><a href="#">iPhone 17e</a></li>
                    <li><a href="#">iPhone 16</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Mua iPhone</h4>
                  <ul>
                    <li><a href="#">Mua iPhone</a></li>
                    <li><a href="#">Phụ Kiện iPhone</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                    <li><a href="#">Tài Chính</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Tìm Hiểu Thêm Về iPhone</h4>
                  <ul>
                    <li><a href="#">Hỗ Trợ iPhone</a></li>
                    <li><a href="#">AppleCare</a></li>
                    <li><a href="#">iOS 18</a></li>
                    <li><a href="#">Apple Intelligence</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">Watch</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá Watch</h4>
                  <ul>
                    <li><a href="#">Khám Phá Tất Cả Apple Watch</a></li>
                    <li><a href="#">Apple Watch Series 10</a></li>
                    <li><a href="#">Apple Watch Ultra 2</a></li>
                    <li><a href="#">Apple Watch SE</a></li>
                    <li><a href="#">Apple Watch Hermès</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Mua Watch</h4>
                  <ul>
                    <li><a href="#">Mua Apple Watch</a></li>
                    <li><a href="#">Dây Đeo Apple Watch</a></li>
                    <li><a href="#">Phụ Kiện Apple Watch</a></li>
                    <li><a href="#">Tài Chính</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Tìm Hiểu Thêm Về Watch</h4>
                  <ul>
                    <li><a href="#">Hỗ Trợ Watch</a></li>
                    <li><a href="#">AppleCare</a></li>
                    <li><a href="#">watchOS 11</a></li>
                    <li><a href="#">Apple Fitness+</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">AirPods</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá AirPods</h4>
                  <ul>
                    <li><a href="#">Khám Phá Tất Cả AirPods</a></li>
                    <li><a href="#">AirPods 4</a></li>
                    <li><a href="#">AirPods Pro 2</a></li>
                    <li><a href="#">AirPods Max</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Mua AirPods</h4>
                  <ul>
                    <li><a href="#">Mua AirPods</a></li>
                    <li><a href="#">Phụ Kiện AirPods</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Tìm Hiểu Thêm Về AirPods</h4>
                  <ul>
                    <li><a href="#">Hỗ Trợ AirPods</a></li>
                    <li><a href="#">AppleCare</a></li>
                    <li><a href="#">Sức Khỏe Thính Giác</a></li>
                    <li><a href="#">Apple Music</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">TV & Nhà</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá TV & Nhà</h4>
                  <ul>
                    <li><a href="#">Khám Phá Phụ Kiện TV & Nhà</a></li>
                    <li><a href="#">Apple TV 4K</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Mua TV & Nhà</h4>
                  <ul>
                    <li><a href="#">Mua Apple TV 4K</a></li>
                    <li><a href="#">Mua Phụ Kiện TV & Nhà</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Tìm Hiểu Thêm Về TV & Nhà</h4>
                  <ul>
                    <li><a href="#">Hỗ Trợ Apple TV</a></li>
                    <li><a href="#">AppleCare</a></li>
                    <li><a href="#">Ứng Dụng Apple TV</a></li>
                    <li><a href="#">Apple Music</a></li>
                    <li><a href="#">Siri & AirPlay</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">Giải Trí</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá Giải Trí</h4>
                  <ul>
                    <li><a href="#">Khám Phá Giải Trí</a></li>
                    <li><a href="#">Apple One</a></li>
                    <li><a href="#">Apple TV+</a></li>
                    <li><a href="#">Apple Music</a></li>
                    <li><a href="#">Apple Arcade</a></li>
                    <li><a href="#">Apple Fitness+</a></li>
                    <li><a href="#">Apple Podcasts</a></li>
                    <li><a href="#">App Store</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Hỗ Trợ</h4>
                  <ul>
                    <li><a href="#">Hỗ Trợ Apple TV+</a></li>
                    <li><a href="#">Hỗ Trợ Apple Music</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">Phụ Kiện</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Mua Phụ Kiện</h4>
                  <ul>
                    <li><a href="#">Mua Tất Cả Phụ Kiện</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Nhà</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Khám Phá Phụ Kiện</h4>
                  <ul>
                    <li><a href="#">Sản Xuất Bởi Apple</a></li>
                    <li><a href="#">Beats</a></li>
                    <li><a href="#">AirTag</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item desktop-only">
            <a href="#">Hỗ Trợ</a>
            <div className="mega-menu">
              <div className="mega-menu-inner container">
                <div className="mega-column large-text">
                  <h4>Khám Phá Hỗ Trợ</h4>
                  <ul>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">TV</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Trợ Giúp</h4>
                  <ul>
                    <li><a href="#">Cộng Đồng</a></li>
                    <li><a href="#">Kiểm Tra Bảo Hành</a></li>
                    <li><a href="#">Sửa Chữa</a></li>
                  </ul>
                </div>
                <div className="mega-column small-text">
                  <h4>Chủ Đề Hữu Ích</h4>
                  <ul>
                    <li><a href="#">Mua AppleCare+</a></li>
                    <li><a href="#">Tài Khoản & Mật Khẩu Apple</a></li>
                    <li><a href="#">Thanh Toán & Gói Đăng Ký</a></li>
                    <li><a href="#">Trợ Năng</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          
          <li className={`nav-item ${isMenuOpen ? 'mobile-hide-when-open' : ''}`}>
            <a href="#" className="top-nav-icon">
              <svg viewBox="0 0 15 15" width="16" height="16"><path d="M14.29 13.58l-3.3-3.3a5.53 5.53 0 1 0-.71.7l3.3 3.3a.5.5 0 0 0 .71-.71zM5.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>
            </a>
          </li>

          <li className={`nav-item ${isMenuOpen ? 'mobile-hide-when-open' : ''}`}>
            <a href="#" className="top-nav-icon" onClick={(e) => { e.preventDefault(); setIsBagOpen(!isBagOpen); }}>
              <svg viewBox="0 0 15 15" width="16" height="16"><path d="M10.5 4.5V3a3 3 0 0 0-6 0v1.5H1v9h13v-9h-3.5zm-5-1.5a2 2 0 1 1 4 0v1.5h-4V3zM13 12.5H2v-7h2.5V7a.5.5 0 0 0 1 0V5.5h4V7a.5.5 0 0 0 1 0V5.5H13v7z"/></svg>
            </a>

            {/* === BẢNG DROP DOWN TÚI HÀNG === */}
            <div className={`bag-dropdown ${isBagOpen ? 'open' : ''}`}>
              <div className="bag-dropdown-content">
                <h2 className="bag-title">Túi của bạn trống.</h2>
                <p className="bag-subtitle">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>Đăng nhập</a> để xem bạn có sản phẩm nào đã lưu không
                </p>
                
                <div className="bag-profile-section">
                  <h4 className="bag-section-title">Hồ Sơ Của Tôi</h4>
                  <ul className="bag-menu-list">
                    <li>
                      <a href="#">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        Đơn hàng
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                        Mục Đã Lưu
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        Tài Khoản
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Đăng nhập
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item mobile-only">
            <a href="#" className="top-nav-icon" onClick={toggleMobileMenu}>
              {isMenuOpen ? (
                <svg viewBox="0 0 15 15" width="16" height="16"><path d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z" fill="currentColor"/></svg>
              ) : (
                <svg viewBox="0 0 18 18" width="16" height="16"><path d="M0 4h18v1H0zM0 13h18v1H0z"/></svg>
              )}
            </a>
          </li>
        </ul>

        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-list">
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }}>Cửa Hàng</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>Mac</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>iPad</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>iPhone</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>Watch</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>AirPods</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>TV & Nhà</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>Giải Trí</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>Phụ Kiện</a></li>
            <li><a href="#" onClick={toggleMobileMenu}>Hỗ Trợ</a></li>
          </ul>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* TRANG IPHONE (Chỉ hiển thị khi currentPage === 'iphone')                    */}
      {/* ========================================================================= */}
      <div style={{ display: currentPage === 'iphone' ? 'block' : 'none' }}>
        <div className="hero-section">
          <div className="hero-content container">
            <h1 className="large-title">iPhone</h1>
            
            <div className="model-nav-wrapper">
              <nav className="model-nav">
                <div className="model-item">
                  <div className="model-icon"><img src="img/apple-iphone-17-pro-2-removebg-preview.png" alt="iPhone 17 Pro" /></div>
                  <span>iPhone 17 Pro</span>
                </div>
                <div className="model-item">
                  <div className="model-icon"><img src="img/iPhone-Air-Xanh-Da-Troii-removebg-preview.png" alt="iPhone Air" /></div>
                  <span>iPhone Air</span>
                </div>
                <div className="model-item">
                  <div className="model-icon"><img src="img/iphone_17_tim_tinhtemobile_25576edc71294165a84e4bc6602f4be8-removebg-preview.png" alt="iPhone 17" /></div>
                  <span>iPhone 17</span>
                </div>
                <div className="model-item">
                  <div className="model-icon"><img src="img/iphone-17e-finish-unselect-gallery-1-202603_FMT_WHH-removebg-preview.png" alt="iPhone 17e" /></div>
                  <span>iPhone 17e</span>
                  <span className="new-tag">Mới</span>
                </div>
                <div className="model-item">
                  <div className="model-icon"><img src="img/iphone-16-co-gi-moi6-removebg-preview.png" alt="iPhone 16" /></div>
                  <span>iPhone 16</span>
                </div>
                <div className="model-item">
                  <div className="model-icon" style={{ border: '1px solid #ccc', borderRadius: '8px' }}><img src="img/Screenshot_2026-03-24_101952-removebg-preview.png" alt="So Sánh" /></div>
                  <span>So Sánh</span>
                </div>
                <div className="model-item">
                  <div className="model-icon"><img src="img/iphone_acc.avif" alt="Phụ Kiện" /></div>
                  <span>Phụ Kiện</span>
                </div>
                <div className="model-item">
                  <div className="model-icon"><img src="img/designed-to_last__f60bwgep88ya_large-removebg-preview.png" alt="Mua Sắm iPhone" /></div>
                  <span>Mua Sắm iPhone</span>
                </div>
                <div className="model-item">
                  <div className="model-icon"><img src="img/Apple-App-Store-compliance-hero-lp.jpg.news_app_ed-removebg-preview.png" alt="iOS" /></div>
                  <span>iOS</span>
                </div>
              </nav>
              <div className="model-nav-fade">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </div>

          </div>
        </div>

        <main className="container">
          <div className="section-header">
            <h2>Khám phá dòng sản phẩm.</h2>
            <a href="#">So sánh tất cả các phiên bản &gt;</a>
          </div>

          <div className="product-carousel" ref={productCarouselRef}>
            <div className="product-card">
              <div className="product-image-container">
                <img src="img/iphone_17pro__t1j902iw6kya_large_2x.jpg" alt="iPhone 17 Pro" className="product-img" />
              </div>
              <div className="color-swatches">
                <span className="swatch" style={{ backgroundColor: '#b59e83' }}></span>
                <span className="swatch" style={{ backgroundColor: '#a1a1a6' }}></span>
                <span className="swatch" style={{ backgroundColor: '#f2f1eb' }}></span>
                <span className="swatch" style={{ backgroundColor: '#4b4b4d' }}></span>
              </div>
              <h3>iPhone 17 Pro</h3>
              <p className="desc">Thiết kế sáng tạo cho hiệu năng và thời lượng pin vượt trội.</p>
              <p className="price">Từ 34.999.000đ hoặc 1.425.000đ/th.<br />trong 24 tháng</p>
              <div className="btn-group">
                <button className="btn-primary">Tìm hiểu thêm</button>
                <button className="btn-secondary">Mua &gt;</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src="img/iphone_air__b5qmgl05ojyq_large_2x.jpg" alt="iPhone Air" className="product-img" />
              </div>
              <div className="color-swatches">
                <span className="swatch" style={{ backgroundColor: '#cddceb' }}></span>
                <span className="swatch" style={{ backgroundColor: '#e3e4e5' }}></span>
                <span className="swatch" style={{ backgroundColor: '#4a4a4b' }}></span>
              </div>
              <h3>iPhone Air</h3>
              <p className="desc">iPhone mỏng nhất từng có.<br />Với sức mạnh pro bên trong.</p>
              <p className="price">Từ 31.999.000đ hoặc 1.303.000đ/th.<br />trong 24 tháng</p>
              <div className="btn-group">
                <button className="btn-primary">Tìm hiểu thêm</button>
                <button className="btn-secondary">Mua &gt;</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src="img/iphone_17__fb1277oq3eaa_large_2x.jpg" alt="iPhone 17" className="product-img" />
              </div>
              <div className="color-swatches">
                <span className="swatch" style={{ backgroundColor: '#92a3ce' }}></span>
                <span className="swatch" style={{ backgroundColor: '#a1c5c5' }}></span>
                <span className="swatch" style={{ backgroundColor: '#e8b3b7' }}></span>
                <span className="swatch" style={{ backgroundColor: '#f9f6ef' }}></span>
                <span className="swatch" style={{ backgroundColor: '#353438' }}></span>
              </div>
              <h3>iPhone 17</h3>
              <p className="desc">Thú vị hơn hẳn.<br />Bền bỉ hơn hẳn.</p>
              <p className="price">Từ 24.999.000đ hoặc 1.018.000đ/th.<br />trong 24 tháng</p>
              <div className="btn-group">
                <button className="btn-primary">Tìm hiểu thêm</button>
                <button className="btn-secondary">Mua &gt;</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src="img/iphone_17e__cq5ygzct314y_large_2x.jpg" alt="iPhone 17e" className="product-img" />
              </div>
              <div className="color-swatches">
                <span className="swatch" style={{ backgroundColor: '#fbd9d1' }}></span>
                <span className="swatch" style={{ backgroundColor: '#f9f6ef' }}></span>
                <span className="swatch" style={{ backgroundColor: '#353438' }}></span>
              </div>
              <p className="new-tag" style={{ marginTop: '-10px', marginBottom: '5px' }}>Mới</p>
              <h3 style={{ marginBottom: '10px' }}>iPhone 17e</h3>
              <p className="desc">Đủ tính năng.<br />Đầy giá trị.</p>
              <p className="price">Từ 17.999.000đ hoặc 733.000đ/th.<br />trong 24 tháng</p>
              <div className="btn-group">
                <button className="btn-primary">Tìm hiểu thêm</button>
                <button className="btn-secondary">Mua &gt;</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src="img/iphone_16__b6tkv86m2gc2_large_2x.jpg" alt="iPhone 16" className="product-img" />
              </div>
              <div className="color-swatches">
                <span className="swatch" style={{ backgroundColor: '#4a54a4' }}></span>
                <span className="swatch" style={{ backgroundColor: '#a1c5c5' }}></span>
                <span className="swatch" style={{ backgroundColor: '#e8b3b7' }}></span>
                <span className="swatch" style={{ backgroundColor: '#f9f6ef' }}></span>
                <span className="swatch" style={{ backgroundColor: '#353438' }}></span>
              </div>
              <h3>iPhone 16</h3>
              <p className="desc">Hiệu năng tuyệt vời.<br />Thiết kế bền bỉ.</p>
              <p className="price">Từ 21.999.000đ hoặc 896.000đ/th.<br />trong 24 tháng</p>
              <div className="btn-group">
                <button className="btn-primary">Tìm hiểu thêm</button>
                <button className="btn-secondary">Mua &gt;</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-nav">
            <button className="nav-btn" onClick={() => scrollCarousel(productCarouselRef, 'left')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button className="nav-btn" onClick={() => scrollCarousel(productCarouselRef, 'right')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>

          <div className="section-header">
            <h2>Ngắm nhìn cận cảnh.</h2>
          </div>
          
          <div className="guided-tour-banner">
            <div className="guided-tour-content">
              <h3>Chuyến Tìm Hiểu Về<br />iPhone 17 Pro, iPhone Air<br />và iPhone 17</h3>
              <a href="#" className="btn-dark">Xem phim</a>
            </div>
            <div className="guided-tour-image">
              <img src="img/guided_tour__dq7eb6kaepqq_large_1.webp" alt="Ngắm nhìn cận cảnh iPhone" />
            </div>
          </div>

          <div className="section-header">
            <h2>Vì sao Apple là nơi tốt nhất<br />để mua iPhone.</h2>
            <a href="#">Mua sắm iPhone &gt;</a>
          </div>
          
          <div className="feature-carousel" ref={featureCarouselRef}>
            <div className="feature-card">
              <div className="feature-text">
                <p className="feature-category">Apple Trade In</p>
                <h3>Tiết kiệm khi mua iPhone mới với chương trình trao đổi.</h3>
                <p className="feature-desc">Nhận 4.400.000đ-17.600.000đ dưới hình thức điểm tín dụng để mua iPhone 17, iPhone Air hoặc iPhone 17 Pro khi bạn trao đổi iPhone 13 trở lên.<sup>1</sup></p>
              </div>
              <div className="feature-image">
                <img src="img/Apple-Trade-In-iPhone_big.jpg.large.jpg" alt="Apple Trade In" /> 
              </div>
              <div className="feature-icon-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-text">
                <p className="feature-category">Tài Chính</p>
                <h3>Thanh Toán Hàng Tháng Thật Dễ Dàng.</h3>
                <p className="feature-desc">Bao gồm lựa chọn lãi suất 0%.<sup>2</sup></p>
              </div>
              <div className="feature-image">
                <img src="img/financing_49879ba79_2x.jpg" alt="Tài Chính Apple" />
              </div>
              <div className="feature-icon-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-text">
                <p className="feature-category">Giao Hàng Miễn Phí</p>
                <h3>Nhận sản phẩm đã đặt nhanh chóng và dễ dàng.</h3>
                <p className="feature-desc">Giao hàng tận cửa, luôn miễn phí.</p>
              </div>
              <div className="feature-image">
                <img src="img/deliver_9b8c5d64c_2x.jpg" alt="Giao Hàng Miễn Phí" />
              </div>
              <div className="feature-icon-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-text">
                <p className="feature-category">Mua Sắm Có Tư Vấn</p>
                <h3>Mua sắm trực tiếp với Chuyên Gia trực tuyến.</h3>
                <p className="feature-desc">Chọn iPhone mới cho bạn với sự hỗ trợ từ Chuyên Gia trực tuyến.</p>
              </div>
              <div className="feature-image">
                <img src="img/iphone-card-50-specialist-help-202512_GEO_EMEA_LANG_FR_FMT_WHH.jpg" alt="Tư Vấn Chuyên Gia" />
              </div>
              <div className="feature-icon-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-text">
                <p className="feature-category">Ứng Dụng Apple Store</p>
                <h3>Khám phá trải nghiệm mua sắm được thiết kế cho bạn.</h3>
                <p className="feature-desc">Sử dụng ứng dụng để có phương thức mua sắm cá nhân hơn.</p>
              </div>
              <div className="feature-image">
                <img src="img/Apple-App-Store-compliance-hero-lp.jpg.news_app_ed-removebg-preview.png" alt="Apple Store App" />
              </div>
              <div className="feature-icon-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
              </div>
            </div>
          </div>

          <div className="carousel-nav">
            <button className="nav-btn" onClick={() => scrollCarousel(featureCarouselRef, 'left')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button className="nav-btn" onClick={() => scrollCarousel(featureCarouselRef, 'right')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>

          <div className="section-header">
            <h2>Tìm hiểu iPhone.</h2>
          </div>
          
          <div className="explore-carousel" ref={exploreCarouselRef}>
              
            <div className="explore-card text-white">
              <img src="img/iphone-17-pro-max-witb-cosmicorange-202509_FMT_WHH-Picsart-BackgroundChanger.jpg" alt="Đổi Mới Sáng Tạo" className="explore-bg" />
              <div className="explore-content">
                <p className="explore-category">Đổi Mới Sáng Tạo</p>
                <h3>Đẹp và bền,<br />được mặc định trong<br />thiết kế.</h3>
              </div>
              <div className="explore-icon">+</div>
            </div>

            <div className="explore-card text-white">
              <img src="img/Screenshot 2026-03-24 232757.png" alt="Camera Tiên Tiến" className="explore-bg" />
              <div className="explore-content">
                <p className="explore-category">Camera Tiên Tiến</p>
                <h3>Hình dung những<br />tấm ảnh và video<br />tuyệt nhất của bạn.</h3>
              </div>
              <div className="explore-icon">+</div>
            </div>

            <div className="explore-card text-white">
              <img src="img/Untitled Project.jpg" alt="Chip Và Thời Lượng Pin" className="explore-bg" />
              <div className="explore-content">
                <p className="explore-category">Chip Và Thời Lượng Pin</p>
                <h3>Nhanh. Nhanh dài lâu.</h3>
              </div>
              <div className="explore-icon">+</div>
            </div>

            <div className="explore-card text-white">
              <img src="img/ios__02vczxaa3siu_large.jpg" alt="IOS và Apple Intelligence" className="explore-bg" />
              <div className="explore-content">
                <p className="explore-category">IOS Và Apple Intelligence</p>
                <h3>Diện mạo mới.<br />Còn diệu kỳ hơn.</h3>
              </div>
              <div className="explore-icon">+</div>
            </div>

            <div className="explore-card text-white">
              <img src="img/95134_image003_15380612.png" alt="Môi Trường" className="explore-bg" />
              <div className="explore-content">
                <p className="explore-category">Môi Trường</p>
                <h3>Được thiết kế thân thiện<br />với môi trường.</h3>
              </div>
              <div className="explore-icon">+</div>
            </div>

            <div className="explore-card text-white">
              <img src="img/privacy__cv4ztv5gebyq_large.jpg" alt="Quyền Riêng Tư" className="explore-bg" />
              <div className="explore-content">
                <p className="explore-category">Quyền Riêng Tư</p>
                <h3>Dữ liệu của bạn.<br />Ngay nơi bạn muốn.</h3>
              </div>
              <div className="explore-icon">+</div>
            </div>

            <div className="explore-card text-white">
              <img src="img/safety__faiti3j3g0mm_large.jpg" alt="Yên Tâm" className="explore-bg" />
              <div className="explore-content">
                <p className="explore-category">Yên Tâm</p>
                <h3>Các tính năng hữu ích.<br />Phòng khi cần kíp.</h3>
              </div>
              <div className="explore-icon">+</div>
            </div>
              
          </div>
          
          <div className="carousel-nav">
            <button className="nav-btn" onClick={() => scrollCarousel(exploreCarouselRef, 'left')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button className="nav-btn" onClick={() => scrollCarousel(exploreCarouselRef, 'right')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>

          <div className="section-header">
            <h2>Phụ kiện thiết yếu cho iPhone.</h2>
            <a href="#">Tất cả phụ kiện iPhone &gt;</a>
          </div>
          
          <div className="accessories-container">
            <div className="accessory-card">
              <div className="accessory-text">
                <span className="new-tag" style={{ marginBottom: '8px', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase' }}>Mới</span>
                <h3>Phụ kiện iPhone</h3>
                <p>Bảo vệ và cá nhân hóa iPhone bằng các phụ kiện mới như những chiếc ốp lưng đầy màu sắc, Dây Đeo Chéo và nhiều hơn nữa.</p>
                <a href="#">Mua sắm phụ kiện iPhone &gt;</a>
              </div>
              <div className="accessory-image-container">
                <img src="img/792f7726eb_accessoires-apple-iphone-17e-ipad-air-m4.jpg" alt="Phụ kiện iPhone" /> 
              </div>
            </div>

            <div className="accessory-card">
              <div className="accessory-text">
                <span className="new-tag" style={{ marginBottom: '8px', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase' }}>Mới</span>
                <h3>AirTag</h3>
                <p>Nay với loa có âm thanh lớn hơn 50% và phạm vi Tìm Chính Xác rộng hơn đến 1,5 lần, bạn có thể theo dõi những thứ quan trọng dễ dàng hơn bao giờ hết.</p>
                <a href="#">Mua &gt;</a>
              </div>
              <div className="accessory-image-container">
                <img src="img/apple-airtag-2-combo-x4_5_.png" alt="AirTag" /> 
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2>Nửa kia hoàn hảo</h2>
          </div>

          <div className="perfect-pair-wrapper">
            <div className="perfect-pair-section">
              <div className="accordion-container">
                <div 
                  className={`accordion-item ${activePair === 'pair-mac' ? 'active' : ''}`} 
                  onClick={() => setActivePair('pair-mac')}
                >
                  <div className="accordion-header">
                    iPhone và Mac <span className="icon">⌄</span>
                  </div>
                  <div className="accordion-content">
                  Với Phản Chiếu iPhone, bạn có thể xem và điều khiển màn hình iPhone trên máy Mac mà không cần phải chạm tay vào điện thoại. Các tính năng Thông Suốt cũng giúp bạn trả lời cuộc gọi hoặc tin nhắn từ iPhone ngay trên máy Mac. Bạn thậm chí còn có thể sao chép hình ảnh, video hoặc văn bản từ iPhone, sau đó dán tất cả vào một ứng dụng khác trên máy Mac của bạn. Và với iCloud, bạn có thể truy cập các tập tin từ một trong hai thiết bị này.
                  </div>
                </div>
                <div 
                  className={`accordion-item ${activePair === 'pair-watch' ? 'active' : ''}`} 
                  onClick={() => setActivePair('pair-watch')}
                >
                  <div className="accordion-header">
                    iPhone và Apple Watch <span className="icon">⌄</span>
                  </div>
                  <div className="accordion-content">
                    Để quên iPhone của bạn ở đâu đó? Các phiên bản Apple Watch mới nhất có thể hiển thị cho bạn biết phương hướng và khoảng cách gần đúng của điện thoại.15 Để chụp ảnh nhóm trên iPhone, hãy đứng vào khung hình cùng mọi người và dùng Apple Watch làm kính ngắm để chụp ảnh. Và sau khi bạn nhận cuộc gọi trên Apple Watch, chỉ cần chạm vào iPhone để tiếp tục cuộc trò chuyện trên điện thoại.
                  </div>
                </div>
                <div 
                  className={`accordion-item ${activePair === 'pair-airpods' ? 'active' : ''}`} 
                  onClick={() => setActivePair('pair-airpods')}
                >
                  <div className="accordion-header">
                    iPhone và AirPods <span className="icon">⌄</span>
                  </div>
                  <div className="accordion-content">
                    Thiết lập AirPods trên iPhone chỉ bằng một thao tác chạm. Bạn sẽ thích Âm Thanh Thích Ứng, tính năng tự động điều chỉnh kiểm soát tiếng ồn cho bạn để mang tới trải nghiệm nghe tốt nhất trong nhiều môi trường và hoạt động tương tác khác nhau suốt cả ngày.
                  </div>
                </div>
              </div>
              
              <div className="pair-image-display">
                <img src="img/Screenshot 2026-03-25 104004.png" alt="iPhone và Mac" className={`pair-img ${activePair === 'pair-mac' ? 'active' : ''}`} />
                <img src="img/watch__co62o3s4jn6u_large-Photoroom.png" alt="iPhone và Apple Watch" className={`pair-img ${activePair === 'pair-watch' ? 'active' : ''}`} />
                <img src="img/apple-airpods-pro-2-usb-c-10-Photoroom.png" alt="iPhone và AirPods" className={`pair-img ${activePair === 'pair-airpods' ? 'active' : ''}`} />
              </div>
            </div>
          </div>

          <div className="iphone-directory-section">
            <h2 className="directory-title">iPhone</h2>
            <div className="directory-grid">
              
              <div className="dir-column">
                <h3 className="dir-header">Khám Phá iPhone</h3>
                <ul className="dir-list-large">
                  <li><a href="#">Khám Phá Tất Cả iPhone</a></li>
                  <li><a href="#">iPhone 17 Pro</a></li>
                  <li><a href="#">iPhone Air</a></li>
                  <li><a href="#">iPhone 17</a></li>
                  <li><a href="#">iPhone 17e</a></li>
                  <li><a href="#">iPhone 16</a></li>
                </ul>
                <ul className="dir-list-normal mt-40">
                  <li><a href="#">So Sánh iPhone</a></li>
                  <li><a href="#">Chuyển Từ Android</a></li>
                </ul>
              </div>
              
              <div className="dir-column">
                <h3 className="dir-header">Mua iPhone</h3>
                <ul className="dir-list-normal">
                  <li><a href="#">Mua iPhone</a></li>
                  <li><a href="#">Phụ Kiện iPhone</a></li>
                  <li><a href="#">Apple Trade In</a></li>
                  <li><a href="#">Tài Chính</a></li>
                </ul>
              </div>
              
              <div className="dir-column">
                <h3 className="dir-header">Tìm Hiểu Thêm Về iPhone</h3>
                <ul className="dir-list-normal">
                  <li><a href="#">Hỗ Trợ iPhone</a></li>
                  <li><a href="#">AppleCare</a></li>
                  <li><a href="#">iOS 26</a></li>
                  <li><a href="#">Apple Intelligence</a></li>
                  <li><a href="#">Các Ứng Dụng Của Apple</a></li>
                  <li><a href="#">Quyền Riêng Tư Trên iPhone</a></li>
                  <li><a href="#">Tuyệt vời hơn với Mac</a></li>
                  <li><a href="#">iCloud+</a></li>
                  <li><a href="#">Ví, Pay</a></li>
                  <li><a href="#">Siri</a></li>
                </ul>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* ========================================================================= */}
      {/* TRANG ĐĂNG NHẬP (Chỉ hiển thị khi currentPage === 'login')                */}
      {/* ========================================================================= */}
      <div style={{ display: currentPage === 'login' ? 'flex' : 'none', flexDirection: 'column', minHeight: 'calc(100vh - 48px)', backgroundColor: '#f5f5f7' }}>
        <div className="login-main">
          <div className="login-header">
            <h1>Đăng nhập để thanh toán nhanh hơn.</h1>
          </div>
          
          <div className="login-container">
            <h2>Đăng nhập vào Apple Store</h2>
            
            <div className="login-input-wrapper">
              <input type="text" placeholder="Email hoặc số điện thoại" className="login-input" />
              <button className="login-submit-btn">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.71 10.71l-4 4c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L15.17 13H7c-.55 0-1-.45-1-1s.45-1 1-1h8.17l-2.88-2.88c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4 4c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
            </div>
            
            <div className="login-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Lưu tôi
              </label>
            </div>
            
            <div className="login-links">
              <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); navigateTo('forgot_password'); }}>Bạn đã quên mật khẩu? ↗</a>
              <p>Bạn không có Tài khoản Apple? <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); navigateTo('signup'); }}>Tạo Tài khoản Apple ↗</a></p>
            </div>
          </div>
        </div>

      {/* === THÊM FOOTER ĐĂNG NHẬP VÀO ĐÂY === */}
        <div className="login-footer-wrapper">
          <div className="login-footer-help">
            <div className="login-footer-content">
              Bạn cần hỗ trợ thêm? <a href="#">Chat ngay</a> hoặc gọi 1800-1192.
            </div>
          </div>
          <footer className="login-footer-main">
            <div className="login-footer-content">
              <p className="login-footer-text">
                Giá hiển thị đã bao gồm tất cả các khoản thuế. Giao hàng miễn phí cho tất cả đơn hàng.
              </p>
              <p className="login-footer-text">
                Apple Store Trực Tuyến sử dụng công nghệ mã hóa chuẩn ngành để bảo vệ tính bảo mật của thông tin do bạn gửi. Tìm hiểu thêm về <a href="#" className="dark-link">Chính Sách Bảo Mật</a>.
              </p>
              
              <div className="login-footer-divider"></div>
              
              <p className="login-footer-text">
                Xem thêm cách để mua hàng: <a href="#" className="blue-link">Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc gọi 1800-1192.
              </p>
              
              <div className="login-footer-bottom">
                <div className="login-footer-row-top">
                  <div className="login-footer-copyright">
                    Bản quyền © 2026 Apple Inc. Bảo lưu mọi quyền.
                  </div>
                  <div className="login-footer-locale">
                    Việt Nam
                  </div>
                </div>
                <div className="login-footer-links">
                  <a href="#">Chính Sách Quyền Riêng Tư</a> <span className="sep">|</span>
                  <a href="#">Điều Khoản Sử Dụng</a> <span className="sep">|</span>
                  <a href="#">Bán Hàng và Hoàn Tiền</a> <span className="sep">|</span>
                  <a href="#">Pháp Lý</a> <span className="sep">|</span>
                  <a href="#">Sơ Đồ Trang Web</a>
                </div>
              </div>

            </div>
          </footer>
        </div>
        </div>
        {/* === KẾT THÚC FOOTER ĐĂNG NHẬP === */}

      {/* ========================================================================= */}
      {/* TRANG TẠO TÀI KHOẢN (Chỉ hiển thị khi currentPage === 'signup')           */}
      {/* ========================================================================= */}
      <div style={{ display: currentPage === 'signup' ? 'block' : 'none', backgroundColor: '#ffffff', minHeight: 'calc(100vh - 48px)' }}>
        <div className="signup-top-bar">
          <div className="signup-logo">Tài khoản Apple</div>
          <div className="signup-top-links">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>Đăng Nhập</a>
            <a href="#" className="active">Tạo Tài khoản Apple</a>
            <a href="#">Những Câu Hỏi Thường Gặp</a>
          </div>
        </div>

        <div className="signup-container">
          <h1 className="signup-title">Tạo Tài khoản Apple</h1>
          <p className="signup-subtitle">Chỉ cần có một Tài khoản Apple để truy cập vào tất cả dịch vụ của Apple.</p>
          <p className="signup-login-prompt">Bạn đã có Tài khoản Apple? <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>Đăng nhập ↗</a></p>

          <form className="signup-form">
            <div className="form-row split">
              <input type="text" placeholder="Họ" className="form-input" />
              <input type="text" placeholder="Tên" className="form-input" />
            </div>

           <div className="form-row">
              <div className="form-floating-label">
                <label>QUỐC GIA/VÙNG</label>
                <select className="form-select" defaultValue="Việt Nam">
                  <option value="Việt Nam">Việt Nam</option>
                  <option value="Hoa Kỳ">Hoa Kỳ</option>
                  <option value="Anh">Anh</option>
                  <option value="Pháp">Pháp</option>
                  <option value="Đức">Đức</option>
                  <option value="Nhật Bản">Nhật Bản</option>
                  <option value="Hàn Quốc">Hàn Quốc</option>
                  <option value="Trung Quốc">Trung Quốc</option>
                  <option value="Úc">Úc</option>
                  <option value="Canada">Canada</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Ấn Độ">Ấn Độ</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Thái Lan">Thái Lan</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Tây Ban Nha">Tây Ban Nha</option>
                  <option value="Ý">Ý</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label className="form-label">Ngày sinh <span className="tooltip-icon">?</span></label>
              <div className="split-three">
                <select className="form-select" defaultValue="Ngày">
                  <option disabled value="Ngày">Ngày</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select className="form-select" defaultValue="Tháng">
                  <option disabled value="Tháng">Tháng</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select className="form-select" defaultValue="Năm">
                  <option disabled value="Năm">Năm</option>
                  {/* Tự động tạo năm từ 2026 lùi dần về 1867 */}
                  {Array.from({ length: 2026 - 1867 + 1 }, (_, i) => 2026 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-divider"></div>

            <div className="form-row">
              <input type="email" placeholder="name@example.com" className="form-input" />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Mật khẩu" className="form-input" />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Xác nhận Mật khẩu" className="form-input" />
            </div>

            <div className="form-divider"></div>

            <div className="form-row">
              <div className="form-floating-label">
                <label>TÙY CHỌN QUỐC GIA</label>
                <select className="form-select" defaultValue="+84 (Việt Nam)">
                  <option value="+84 (Việt Nam)">+84 (Việt Nam)</option>
                  <option value="+1 (Hoa Kỳ)">+1 (Hoa Kỳ)</option>
                  <option value="+44 (Anh)">+44 (Anh)</option>
                  <option value="+33 (Pháp)">+33 (Pháp)</option>
                  <option value="+49 (Đức)">+49 (Đức)</option>
                  <option value="+81 (Nhật Bản)">+81 (Nhật Bản)</option>
                  <option value="+82 (Hàn Quốc)">+82 (Hàn Quốc)</option>
                  <option value="+86 (Trung Quốc)">+86 (Trung Quốc)</option>
                  <option value="+61 (Úc)">+61 (Úc)</option>
                  <option value="+1 (Canada)">+1 (Canada)</option>
                  <option value="+55 (Brazil)">+55 (Brazil)</option>
                  <option value="+91 (Ấn Độ)">+91 (Ấn Độ)</option>
                  <option value="+65 (Singapore)">+65 (Singapore)</option>
                  <option value="+66 (Thái Lan)">+66 (Thái Lan)</option>
                  <option value="+60 (Malaysia)">+60 (Malaysia)</option>
                  <option value="+62 (Indonesia)">+62 (Indonesia)</option>
                  <option value="+63 (Philippines)">+63 (Philippines)</option>
                  <option value="+34 (Tây Ban Nha)">+34 (Tây Ban Nha)</option>
                  <option value="+39 (Ý)">+39 (Ý)</option>
                  <option value="+52 (Mexico)">+52 (Mexico)</option>
                </select>
              </div>
            </div>

            <div className="form-divider"></div>

            <div className="form-row">
              <input type="email" placeholder="name@example.com" className="form-input" />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Mật khẩu" className="form-input" />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Xác nhận Mật khẩu" className="form-input" />
            </div>

            <div className="form-divider"></div>

            <div className="form-row">
              <div className="form-floating-label">
                <label>TÙY CHỌN QUỐC GIA</label>
                <select className="form-select">
                  <option>+84 (Việt Nam)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="input-with-tooltip">
                <input type="text" placeholder="Số điện thoại" className="form-input" />
                <span className="tooltip-icon inside">?</span>
              </div>
            </div>
            <p className="form-hint">Nhập số điện thoại bạn chắc chắn luôn có thể truy cập. Số này sẽ được sử dụng để xác minh nhận dạng của bạn mỗi khi bạn đăng nhập trên một thiết bị mới hoặc trình duyệt web. Có thể mất phí tin nhắn hoặc dữ liệu.</p>

            <div className="form-row" style={{ marginTop: '20px' }}>
              <label className="form-label" style={{ marginBottom: '10px' }}>Xác minh với:</label>
              <div className="radio-group">
                <label className="radio-container">
                  <input type="radio" name="verify" defaultChecked />
                  <span className="radio-mark"></span>
                  Tin nhắn
                </label>
                <label className="radio-container">
                  <input type="radio" name="verify" />
                  <span className="radio-mark"></span>
                  Cuộc gọi điện
                </label>
              </div>
            </div>

            <div className="form-divider"></div>

            <div className="form-row checkbox-row">
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark-sq"></span>
                <div className="checkbox-text">
                  <strong>Các Thông Báo</strong>
                  <p>Nhận email và thông tin tin của Apple như thông báo, quảng cáo, gợi ý và cập nhật về các sản phẩm, dịch vụ, phần mềm của Apple.</p>
                </div>
              </label>
            </div>

            <div className="form-row checkbox-row">
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark-sq"></span>
                <div className="checkbox-text">
                  <strong>Ứng dụng, Nhạc, TV và Nhiều Hơn Nữa</strong>
                  <p>Nhận email và thông tin tin của Apple về các đợt phát hành mới, nội dung độc quyền, ưu đãi đặc biệt, quảng cáo và gợi ý cho ứng dụng, nhạc, phim, TV, sách, podcast và nhiều hơn nữa.</p>
                </div>
              </label>
            </div>

            <div className="form-divider"></div>

            <div className="captcha-section">
              <div className="captcha-image-wrapper">
                {/* Dùng chữ mô phỏng hình ảnh Captcha để khỏi cần tải ảnh */}
                <div style={{fontFamily:'Courier New', fontSize:'42px', fontWeight:'bold', letterSpacing:'8px', textDecoration:'line-through', color:'#333'}}>X2AE</div>
              </div>
              <div className="captcha-input-section">
                <input type="text" placeholder="Nhập các ký tự trong ảnh" className="form-input" />
                <div className="captcha-links">
                  <a href="#">↻ Mã Mới</a> | <a href="#">🔊 Khiếm thị</a>
                </div>
              </div>
            </div>

            <div className="form-divider"></div>

            <p className="privacy-disclaimer">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#0066cc" style={{ display: 'block', margin: '0 auto 15px auto' }}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11h.2c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h.2V9.5C9.2 8.1 10.6 7 12 7zm0 1.2c-.8 0-1.5.7-1.5 1.5V11h3V9.7c0-.8-.7-1.5-1.5-1.5z"/></svg>
              Thông tin về Tài khoản Apple của bạn được sử dụng để cho phép bạn đăng nhập an toàn và truy cập vào dữ liệu của mình. Apple ghi lại một số dữ liệu nhất định cho mục đích bảo mật, hỗ trợ, và báo cáo. Nếu đồng ý, Apple có thể sử dụng thông tin Tài khoản Apple của bạn để gửi email và thông tin liên lạc. <a href="#">Xem cách chúng tôi quản lý dữ liệu của bạn.</a>
            </p>

            <div style={{ textAlign: 'center' }}>
              <button className="signup-submit-btn" onClick={(e) => e.preventDefault()}>Tiếp tục</button>
            </div>
          </form>
        </div>

        {/* THÊM ĐOẠN FOOTER TỐI GIẢN NÀY VÀO ĐÂY */}
        <footer className="signup-footer">
          <div className="signup-footer-content">
            <div className="signup-footer-top">
              <a href="#">Find a retailer</a> near you.
            </div>
            <div className="signup-footer-bottom">
              <div className="signup-footer-row-top">
                <div className="signup-footer-copyright">
                  Copyright © 2026 Apple Inc. All rights reserved.
                </div>
                <div className="signup-footer-right">
                  <a href="#">Việt Nam</a>
                </div>
              </div>
              <div className="signup-footer-links">
                <a href="#">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#">Terms of Use</a>
                <span className="separator">|</span>
                <a href="#">Legal</a>
                <span className="separator">|</span>
                <a href="#">Site Map</a>
              </div>
            </div>
          </div>
        </footer>
        {/* KẾT THÚC FOOTER TỐI GIẢN */}

      </div> {/* <=== THẺ ĐÓNG TRANG SIGNUP ĐƯỢC CHUYỂN XUỐNG ĐÂY */}

      {/* ========================================================================= */}
      {/* TRANG QUÊN MẬT KHẨU (Chỉ hiển thị khi currentPage === 'forgot_password')  */}
      {/* ========================================================================= */}
      <div style={{ display: currentPage === 'forgot_password' ? 'flex' : 'none', flexDirection: 'column', minHeight: 'calc(100vh - 48px)', backgroundColor: '#ffffff' }}>
        
        <div className="signup-top-bar">
          <div className="signup-logo">Tài khoản Apple</div>
          <div className="signup-top-links">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>Đăng Nhập</a>
            <a href="#">Những Câu Hỏi Thường Gặp</a>
          </div>
        </div>

        <div className="forgot-main">
          <h1 className="forgot-title">Đặt Lại Mật Khẩu Của Bạn</h1>
          <div className="forgot-content-row">
            <div className="forgot-form-section">
              <p className="forgot-desc">Nhập địa chỉ email hoặc số điện thoại mà bạn sử dụng với tài khoản của mình để tiếp tục.</p>
              
              <input type="text" placeholder="Email hoặc số điện thoại" className="form-input forgot-input" />
              
              <div className="captcha-section forgot-captcha">
                <div className="captcha-input-wrapper">
                  <input type="text" placeholder="Nhập các ký tự trong ảnh" className="form-input" />
                </div>
                <div className="captcha-image-wrapper">
                  <div style={{fontFamily:'Courier New', fontSize:'32px', fontWeight:'bold', letterSpacing:'4px', color:'#333'}}>GBMLR</div>
                </div>
                <div className="captcha-actions">
                  <a href="#">↻ Mã Mới</a>
                  <a href="#">🔊 Khiếm Thị</a>
                </div>
              </div>
              
              <button className="signup-submit-btn forgot-btn" onClick={(e) => e.preventDefault()}>Tiếp tục</button>
            </div>
            
            <div className="forgot-info-section">
              <div className="forgot-info-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="#86868b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
              </div>
              <p>Bạn có thể đặt lại mật khẩu đã quên tại đây. Vì lý do bảo mật, hãy trả lời các câu hỏi để xác minh bạn là chủ tài khoản này.</p>
            </div>
          </div>
        </div>

        <footer className="signup-footer" style={{ marginTop: 'auto' }}>
          <div className="signup-footer-content">
            <div className="signup-footer-top">
              <a href="#">Find a retailer</a> near you.
            </div>
            <div className="signup-footer-bottom">
              <div className="signup-footer-row-top">
                <div className="signup-footer-copyright">
                  Copyright © 2026 Apple Inc. All rights reserved.
                </div>
                <div className="signup-footer-right">
                  <a href="#">Việt Nam</a>
                </div>
              </div>
              <div className="signup-footer-links">
                <a href="#">Privacy Policy</a> <span className="separator">|</span>
                <a href="#">Terms of Use</a> <span className="separator">|</span>
                <a href="#">Legal</a> <span className="separator">|</span>
                <a href="#">Site Map</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
      
      {/* ========================================================================= */}
      {/* TRANG CỬA HÀNG (Chỉ hiển thị khi currentPage === 'store')                 */}
      {/* ========================================================================= */}
      <div style={{ display: currentPage === 'store' ? 'block' : 'none' }}>
        <div className="store-main">
          <main className="container">
      {/* ================================================= */}
            
            {/* Store Hero */}
            <div className="store-hero"></div>
            
            {/* Store Hero */}
            <div className="store-hero">
              <div className="store-title">
                Cửa Hàng. <br />
                <span>Cách tốt nhất để mua sắm <br />sản phẩm bạn thích.</span>
              </div>
              <div className="store-subtitle">
                <p>Cần hỗ trợ mua sắm?</p>
                <a href="#">Kết nối với Chuyên Gia trực tuyến &gt;</a>
              </div>
            </div>

            {/* Các icon danh mục tròn */}
            <div className="store-categories">
              <div className="store-cat-item">
                <img src="img\csm_macOS_26_Tahoe_91a0398a5e-e1749607258159-Photoroom.png" alt="Mac" className="store-cat-img" />
                <span>Mac</span>
              </div>
              <div className="store-cat-item" onClick={() => navigateTo('iphone')}>
                <img src="img/designed-to_last__f60bwgep88ya_large-removebg-preview.png" alt="iPhone" className="store-cat-img" />
                <span>iPhone</span>
              </div>
              <div className="store-cat-item">
                <img src="img/ipad-card-50-financing-202501_GEO_SA_FMT_WHH-Photoroom.png" alt="iPad" className="store-cat-img" />
                <span>iPad</span>
              </div>
              <div className="store-cat-item">
                <img src="img/watch-card-40-compare-202509_GEO_VN_FMT_WHH-Photoroom.png" alt="Apple Watch" className="store-cat-img" />
                <span>Apple Watch</span>
              </div>
              <div className="store-cat-item">
                <img src="img/store-card-13-airpods-nav-202209.webp" alt="AirPods" className="store-cat-img" />
                <span>AirPods</span>
              </div>
              <div className="store-cat-item">
                <img src="img/8.webp" alt="AirTag" className="store-cat-img" />
                <span>AirTag</span>
              </div>
              <div className="store-cat-item">
                <img src="img\apple-tv-4k-128gb-mn893-1-750x500-Photoroom.png" alt="Apple TV 4K" className="store-cat-img" />
                <span>Apple TV 4K</span>
              </div>
              <div className="store-cat-item">
                <img src="img/iPhone-17-Pro-Silicone-Case-with-MagSafe-–-Bright-Guava-Photoroom.png" alt="Phụ Kiện" className="store-cat-img" />
                <span>Phụ Kiện</span>
              </div>
            </div>

            {/* Băng chuyền 1: Thế hệ mới nhất */}
            <div className="store-section-title">
              Thế hệ mới nhất. <span>Xem ngay có gì mới.</span>
            </div>
            
            <div className="store-carousel" ref={storeLatestRef}>
              <div className="store-card dark">
                <div className="store-tag">MỚI</div>
                <h3>iPhone 17 Pro</h3>
                <p className="desc">Pro đỉnh cao.</p>
                <p className="price">Từ 34.999.000đ</p>
                <div className="store-card-img">
                  <img src="img\Iphone 17 Pro.jpg" alt="iPhone 17 Pro" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>MacBook Neo</h3>
                <p className="desc">Điều tuyệt diệu của Mac ở mức giá bất ngờ.</p>
                <p className="price">Từ 16.499.000đ</p>
                <div className="store-card-img">
                  <img src="img/snapedit_1775530242443.png" alt="MacBook Neo" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>iPhone 17e</h3>
                <p className="desc">Đủ tính năng. Đầy giá trị.</p>
                <p className="price">Từ 17.999.000đ</p>
                <div className="store-card-img">
                  <img src="img\iphone-17e-co-gi-2-Photoroom.png" alt="iPhone 17e" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>AirPods Max 2</h3>
                <p className="desc">Các tính năng thông minh mới. Trải nghiệm nghe sống động hơn.</p>
                <p className="price">14.999.000đ</p>
                <div className="store-card-img">
                  <img src="img\Airpod Max 2.png" alt="AirPods Max 2" />
                </div>
              </div>

              <div className="store-card dark">
                <div className="store-tag">MỚI</div>
                <h3>MacBook Pro</h3>
                <p className="desc">Nay với M5, M5 Pro và M5 Max.</p>
                <p className="price">Từ 44.999.000đ</p>
                <div className="store-card-img">
                  <img src="img/Apple-MacBook-Pro-14-in-hero-251015-lp.jpg.news_app_ed.jpg" alt="MacBook Pro" />
                </div>
              </div>

             <div className="store-card bg-mac-air">
                <div className="store-tag">MỚI</div>
                <h3>MacBook Air</h3>
                <p className="desc">Nay siêu mạnh mẽ với M5.</p>
                <p className="price">Từ 29.999.000đ</p>
                <div className="store-card-img">
                  <img src="img/maxresdefault.jpg" alt="MacBook Pro" />
                </div>
              </div>

              <div className="store-card bg-ipad-air">
                <div className="store-tag">MỚI</div>
                <h3>iPad Air</h3>
                <p className="desc">Nay siêu mạnh mẽ với M4.</p>
                <p className="price">Từ 16.689.000đ hoặc 680.000đ/tháng trong 24 tháng</p>
                <div className="store-card-img">
                  <img src="img/71IZFXK5JGL.jpg" alt="MacBook Pro" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>Apple Watch Series 11</h3>
                <p className="desc">Chiếc Apple Watch cực đỉnh giúp bạn theo dõi sức khẻo.</p>
                <p className="price">Từ 11.499.000đ hoặc 468.000đ/tháng trong 24 tháng</p>
                <div className="store-card-img">
                  <img src="img\store-card-40-watch-s11-202509_GEO_VN_FMT_WHH-Photoroom.png" alt="MacBook Pro" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>iPhone 17</h3>
                <p className="desc">Đa tài, đa sắc.</p>
                <p className="price">Từ 24.999.000đ</p>
                <div className="store-card-img">
                  <img src="img\Ip 17.png" alt="MacBook Pro" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>iPhone Air</h3>
                <p className="desc">iPhone mỏng nhất từng có.</p>
                <p className="price">Từ 31.999.000đ</p>
                <div className="store-card-img">
                  <img src="img\Iphone Air.png" alt="MacBook Pro" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>Studio Display</h3>
                <p className="desc">Tuyệt diệu từ cái nhìn đầu tiên.</p>
                <p className="price">Từ 44.999.000đ</p>
                <div className="store-card-img">
                  <img src="img/MFEW4.jpg" alt="MacBook Pro" />
                </div>
              </div>

              <div className="store-card dark">
                <div className="store-tag">MỚI</div>
                <h3>Studio Display XDR</h3>
                <p className="desc">Thánh chuốt pixel.</p>
                <p className="price">Từ 89.999.000đ</p>
                <div className="store-card-img">
                  <img src="img/studio-display-xdr-og-202603.jpg" alt="MacBook Pro" />
                </div>
              </div>

              <div className="store-card">
                <div className="store-tag">MỚI</div>
                <h3>Apple Watch SE 3</h3>
                <p className="desc">Đi cùng. Trò chuyện. Theo sát. Mãi yêu.</p>
                <p className="price">Từ 6.999.000đ hoặc 285.000đ/tháng trong 24 tháng</p>
                <div className="store-card-img">
                  <img src="img/z6997027521929-90f4d28f7b896201fc41fb55d7043d9e.jpg" alt="MacBook Pro" />
                </div>
              </div>
            </div>
            
            <div className="carousel-nav">
              <button className="nav-btn" onClick={() => scrollCarousel(storeLatestRef, 'left')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
              <button className="nav-btn" onClick={() => scrollCarousel(storeLatestRef, 'right')}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
            </div>

            {/* Băng chuyền 2: Hỗ trợ tại đây */}
            <div className="store-section-title" style={{marginTop: '60px'}}>
              Hỗ trợ tại đây. <span>Ngay khi bạn muốn, mọi việc bạn cần.</span>
            </div>
            
            <div className="store-carousel" ref={storeSupportRef}>
              
              <div className="store-card" style={{ minWidth: '480px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 2, padding: '30px 30px 0' }}>
                  <div className="store-tag" style={{ color: '#86868b', padding: 0, marginBottom: '8px' }}>CHUYÊN GIA APPLE</div>
                  <h3 style={{ padding: 0, margin: 0 }}>Mua hàng với tư vấn trực tiếp từ<br />Chuyên Gia trực tuyến.</h3>
                </div>
                <div className="store-card-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', margin: 0, zIndex: 1 }}>
                  <img src="img\BeautyPlus-image-extender.jpeg" alt="Chuyên Gia" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom center' }} />
                </div>
              </div>
              
              <div className="store-card" style={{ minWidth: '480px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 2, padding: '30px 30px 0' }}>
                  <h3 style={{ padding: 0, margin: 0 }}>Dịch vụ và hỗ trợ. Chúng tôi<br />luôn sẵn sàng hỗ trợ.</h3>
                </div>
                <div className="store-card-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', margin: 0, zIndex: 1 }}>
                  <img src="img\store-card-50-genius-202603_FMT_WHH.jpg" alt="Hỗ trợ" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                </div>
              </div>

            </div>

            {/* Băng chuyền 3: Tạo nên mọi khác biệt */}
            <div className="store-section-title" style={{marginTop: '60px'}}>
              Tạo nên mọi khác biệt. <span>Thêm nhiều lý do để mua sắm cùng chúng tôi.</span>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Nút Trái */}
              <button className="nav-btn" style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeDifferenceRef, 'left')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="store-carousel" ref={storeDifferenceRef} style={{ gap: '20px', paddingBottom: '10px' }}>
                
                <div className="store-card" style={{ minWidth: '320px', height: '240px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #1e873c', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1e873c', fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>đ</div>
                  <h3 style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.4', padding: 0, margin: 0, textAlign: 'left' }}>Thanh toán hàng tháng thật dễ dàng. Bao gồm lựa chọn <span style={{ color: '#1e873c' }}>lãi suất 0%.</span><sup style={{fontSize: '14px'}}>§</sup></h3>
                </div>

                <div className="store-card" style={{ minWidth: '320px', height: '240px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', color: '#8e24aa', marginBottom: '20px', display: 'flex', alignItems: 'center' }}><svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></div>
                  <h3 style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.4', padding: 0, margin: 0, textAlign: 'left' }}>Thêm dấu ấn của riêng bạn. <span style={{ color: '#8e24aa' }}>Khắc kết hợp biểu tượng cảm xúc, tên và số miễn phí.</span></h3>
                </div>

                <div className="store-card" style={{ minWidth: '320px', height: '240px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', color: '#1e873c', marginBottom: '20px', display: 'flex', alignItems: 'center' }}><svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
                  <h3 style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.4', padding: 0, margin: 0, textAlign: 'left' }}>Giao hàng miễn phí.</h3>
                </div>

                <div className="store-card" style={{ minWidth: '320px', height: '240px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', color: '#0066cc', marginBottom: '20px', display: 'flex', alignItems: 'center' }}><svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
                  <h3 style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.4', padding: 0, margin: 0, textAlign: 'left' }}>Trải nghiệm <span style={{ color: '#0066cc' }}>mua sắm được cá nhân hóa</span> với ứng dụng Apple Store.</h3>
                </div>
                
                <div className="store-card" style={{ minWidth: '320px', height: '240px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', color: '#e53935', marginBottom: '20px', display: 'flex', alignItems: 'center' }}><svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                  <h3 style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.4', padding: 0, margin: 0, textAlign: 'left' }}>Tùy chỉnh Mac và <span style={{ color: '#e53935' }}>tạo phong cách riêng</span> cho Apple Watch của bạn.</h3>
                </div>

              </div>

              {/* Nút Phải */}
              <button className="nav-btn" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeDifferenceRef, 'right')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* ========================================= */}
            {/* Băng chuyền 4: Phụ kiện (MỚI) */}
            {/* ========================================= */}
            <div className="store-section-title" style={{marginTop: '60px'}}>
              Phụ kiện. <span>Những phụ kiện kết hợp hoàn hảo với thiết bị yêu thích của bạn.</span>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Nút Trái */}
              <button className="nav-btn" style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeAccessoriesRef, 'left')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="store-carousel" ref={storeAccessoriesRef} style={{ gap: '20px', paddingBottom: '20px' }}>
                
                {/* Thẻ 1: Khám phá Promo */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, marginBottom: '10px' }}>Thấy là mê.</h3>
                  <p style={{ fontSize: '14px', padding: 0, marginBottom: 'auto' }}>Phụ kiện bạn yêu.<br/>Cách phối mới giữa nhiều màu sắc.</p>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <img src="img\2-novos-acessorios-19-1260x671.jpg" alt="Phụ kiện" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                </div>

                {/* Thẻ 2: Ốp Lưng */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MHW64.jpg" alt="Ốp lưng" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  {/* Chấm màu (swatches) */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff7b7b' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f5f5f7' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#1d1d1f' }}></span>
                  </div>
                  <div className="store-tag" style={{ color: '#bf4800', padding: 0, marginBottom: '8px' }}>MỚI</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Ốp Lưng Silicon MagSafe cho iPhone 17 Pro - Ổi Đào</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>1.403.000đ</p>
                </div>

                {/* Thẻ 3: Dây Đeo Chéo */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\f10c64bbb336b68aeaf22830712dc8cf.avif" alt="Dây Đeo Chéo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff7b7b' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cddceb' }}></span>
                  </div>
                  <div className="store-tag" style={{ color: '#bf4800', padding: 0, marginBottom: '8px' }}>MỚI</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Dây Đeo Chéo - Ổi Đào</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>1.668.000đ</p>
                </div>

                {/* Thẻ 4: Sạc MagSafe */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\vn-11134207-7ras8-m2s35xq9zn3uee.jpg" alt="Sạc MagSafe" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div> {/* Khoảng trống bù cho swatches */}
                  <div className="store-tag" style={{ color: 'transparent', padding: 0, marginBottom: '8px' }}>-</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Bộ Sạc MagSafe (1 m)</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>1.177.000đ</p>
                </div>

                {/* Thẻ 5: Ốp Lưng Trong Suốt */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MHWC4.jpg" alt="Ốp lưng trong" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div>
                  <div className="store-tag" style={{ color: '#bf4800', padding: 0, marginBottom: '8px' }}>MỚI</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Ốp Lưng Trong Suốt MagSafe cho iPhone 17e</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>1.403.000đ</p>
                </div>

                {/* Thẻ 6: Dây Quấn Thể Thao Trong Màu Ổi Đào 46mm*/}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MHYP4.jpg" alt="Dây Quấn Thể Thao" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff7b7b' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cddceb' }}></span>
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div>
                  <div className="store-tag" style={{ color: '#bf4800', padding: 0, marginBottom: '8px' }}>MỚI</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Dây Quấn Thể Thao Trong Màu Ổi Đào 46mm</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>1.499.000đ</p>
                </div>

                {/* Thẻ 7: Dây Quấn Thể Thao Trong Màu Cam Clementine 46mm - M/L*/}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MHYD4ref.jpg" alt="Dây Quấn Thể Thao" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff7b7b' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cddceb' }}></span>
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div>
                  <div className="store-tag" style={{ color: '#bf4800', padding: 0, marginBottom: '8px' }}>MỚI</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Dây Quấn Thể Thao Trong Màu Cam Clementine 46mm - M/L</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>1.499.000đ</p>
                </div>

                {/* Thẻ 8: Magic Keyboard cho Ipad Air 13 inch (M4) - Tiếng Anh Mỹ - M... */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MGYY4.jpg" alt="Magic Keyboard" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#dcd9d9' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#000000' }}></span>
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div> {/* Khoảng trống bù cho swatches */}
                  <div className="store-tag" style={{ color: 'transparent', padding: 0, marginBottom: '8px' }}>-</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Magic Keyboard cho Ipad Air 13 inch (M4) - Tiếng Anh Mỹ - M...</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>8.148.000đ</p>
                </div>

                {/* Thẻ 9: Pin MagSafe cho iPhone Air */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MGPG4.jpg" alt="Pin MagSafe" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div> {/* Khoảng trống bù cho swatches */}
                  <div className="store-tag" style={{ color: 'transparent', padding: 0, marginBottom: '8px' }}>-</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Pin MagSafe cho iPhone Air</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>2.699.000đ</p>
                </div>

                {/* Thẻ 10: Magic Keyboard cho Ipad Air 13 inch (M4) - Tiếng Anh Mỹ - M... */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MH044.jpg" alt="Magic Keyboard" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ADD8E6' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#DEB887' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#dcd9d9' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#000000' }}></span>
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div> {/* Khoảng trống bù cho swatches */}
                  <div className="store-tag" style={{ color: 'transparent', padding: 0, marginBottom: '8px' }}>-</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Magic Keyboard cho Ipad Air 13 inch (M4) - Tiếng Anh Mỹ - M...</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>1.177.000đ</p>
                </div>

                {/* Thẻ 11: Khám phá tất cả */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', padding: 0, textAlign: 'center', marginBottom: '30px' }}>Khám phá tất cả phụ kiện</h3>
                  <img src="img\store-card-40-all-accessories-202603_FMT_WHH.jpg" alt="Tất cả phụ kiện" style={{ width: '80%', objectFit: 'contain' }} />
                </div>

              </div>

              {/* Nút Phải */}
              <button className="nav-btn" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeAccessoriesRef, 'right')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* ========================================= */}
            {/* Băng chuyền 5: Âm thanh (MỚI) */}
            {/* ========================================= */}
            <div className="store-section-title" style={{marginTop: '60px'}}>
              To rõ, trong trẻo. <span>Lựa chọn hoàn hảo cho âm thanh tròn đầy, chất lượng cao.</span>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Nút Trái */}
              <button className="nav-btn" style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeAudioRef, 'left')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="store-carousel" ref={storeAudioRef} style={{ gap: '20px', paddingBottom: '20px' }}>
                
                {/* Thẻ 1: Khuyến mãi Apple Music */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, marginBottom: '10px' }}>Tặng 3 tháng sử dụng Apple Music miễn phí.</h3>
                  <p style={{ fontSize: '14px', padding: 0, marginBottom: 'auto', color: '#1d1d1f' }}>Đi kèm khi mua một số thiết bị Apple.⁺</p>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <img src="img\store-card-40-apple-music-202509.webp" alt="Apple Music Promo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                </div>

                {/* Thẻ 2: AirPods Max 2 */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\airpods-max-select-202409-midnight_FMT_WHH.jpg" alt="AirPods Max 2" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  {/* Swatches */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2e3642' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#dcdce0' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f2e5d9' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#e2d3d9' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#e28f33' }}></span>
                  </div>
                  <div className="store-tag" style={{ color: '#bf4800', padding: 0, marginBottom: '8px' }}>MỚI</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>AirPods Max 2 - Đêm Xanh Thẳm</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>14.999.000đ</p>
                </div>

                {/* Thẻ 3: AirPods Pro 3 */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\airpods-pro-3-hero-select-202509_FMT_WHH.jpg" alt="AirPods Pro 3" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div> {/* Bù khoảng trống swatches */}
                  <div className="store-tag" style={{ color: '#a56243', padding: 0, marginBottom: '8px' }}>Khắc Miễn Phí</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>AirPods Pro 3</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>6.799.000đ</p>
                </div>

                {/* Thẻ 4: AirPods 4 */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\airpods-4-hero-select-202409_FMT_WHH.jpg" alt="AirPods 4" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ height: '10px', marginBottom: '15px' }}></div>
                  <div className="store-tag" style={{ color: '#a56243', padding: 0, marginBottom: '8px' }}>Khắc Miễn Phí</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>AirPods 4 với Chủ Động Khử Tiếng Ồn</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>4.999.000đ</p>
                </div>

                {/* Thẻ 5: Powerbeats Pro 2 */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MX743.jpg" alt="Powerbeats Pro 2" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#1d1d1f' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f5f5f7' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#e28f33' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#a1a1a6' }}></span>
                  </div>
                  <div className="store-tag" style={{ color: 'transparent', padding: 0, marginBottom: '8px' }}>-</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Powerbeats Pro 2 - Tai Nghe Hiệu Năng Cao - Cam Nóng...</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>6.380.000đ</p>
                </div>

                {/* Thẻ 6: Beats Solo 4 */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MUW33.jpg" alt="Beats Solo 4" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#1d1d1f' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f5f5f7' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#d9b3b8' }}></span>
                  </div>
                  <div className="store-tag" style={{ color: 'transparent', padding: 0, marginBottom: '8px' }}>-</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Beats Solo 4 - Tai Nghe Kiểu Áp Tai Không Dây - Mây Hồng</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>4.908.000đ</p>
                </div>

                {/* Thẻ 7: Beats Pill */}
                <div className="store-card" style={{ minWidth: '320px', height: '420px', padding: '30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
                  <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="img\MWQW3.jpg" alt="Beats Pill" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#1d1d1f' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#9e2a2b' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#e2b86b' }}></span>
                  </div>
                  <div className="store-tag" style={{ color: 'transparent', padding: 0, marginBottom: '8px' }}>-</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', padding: 0, margin: '0 0 10px 0' }}>Beats Pill - Loa Bluetooth® Không Dây - Đỏ Cá Tính</h3>
                  <p className="price" style={{ padding: 0, marginTop: 'auto' }}>4.220.000đ</p>
                </div>

              </div>

              {/* Nút Phải */}
              <button className="nav-btn" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeAudioRef, 'right')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* ========================================= */}
            {/* Băng chuyền 6: Trải nghiệm Apple (MỚI) */}
            {/* ========================================= */}
            <div className="store-section-title" style={{marginTop: '60px'}}>
              Trải nghiệm Apple. <span>Làm được nhiều hơn với các sản phẩm và dịch vụ Apple.</span>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Nút Trái */}
              <button className="nav-btn" style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeExperienceRef, 'left')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="store-carousel" ref={storeExperienceRef} style={{ gap: '20px', paddingBottom: '20px' }}>
                
                {/* Thẻ 1: Apple Intelligence */}
                <div className="store-card" style={{ minWidth: '400px', height: '500px', padding: '30px 30px 0 30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', overflow: 'hidden' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', background: 'linear-gradient(90deg, #cc2399, #5932df)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Apple Intelligence.</h3>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2 }}>Sáng tạo, giao tiếp và hoàn tất<br/>công việc dễ dàng.<sup style={{fontSize: '14px'}}>‡</sup></h3>
                  <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '20px' }}>
                    <img src="img\macbook_pro_ipad_iphone_17e_refresh.jpg" alt="Apple Intelligence" style={{ width: '100%', objectFit: 'contain', objectPosition: 'bottom' }} />
                  </div>
                </div>

                {/* Thẻ 2: Thông suốt */}
                <div className="store-card" style={{ minWidth: '400px', height: '500px', padding: '30px 30px 0 30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', overflow: 'hidden' }}>
                  <div className="store-tag" style={{ color: '#86868b', padding: 0, marginBottom: '8px' }}>THÔNG SUỐT</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2 }}>Mạnh mẽ khi riêng lẻ.<br/>Mạnh gấp bội khi lập đội.</h3>
                  <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '20px' }}>
                    <img src="img\store-card-50-continuity-202510_GEO_VN_FMT_WHH.jpg" alt="Thông suốt" style={{ width: '100%', objectFit: 'contain', objectPosition: 'bottom' }} />
                  </div>
                </div>

                {/* Thẻ 3: App Store */}
                <div className="store-card" style={{ minWidth: '400px', height: '500px', padding: '30px 30px 0 30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', overflow: 'hidden' }}>
                  <div className="store-tag" style={{ color: '#86868b', padding: 0, marginBottom: '8px' }}>ỨNG DỤNG APPLE STORE</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2 }}>Thêm dấu ấn cá nhân.</h3>
                  <p style={{ fontSize: '14px', color: '#1d1d1f', padding: 0, margin: 0 }}>Thiết kế món quà của riêng người nhận với<br/>lời nhắn cá nhân hóa dành riêng cho họ.</p>
                  <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '20px' }}>
                    <img src="img\airpods-4-hero-select-202409_FMT_WHH.jpg" alt="App Store Engraving" style={{ width: '100%', objectFit: 'contain', objectPosition: 'bottom' }} />
                  </div>
                </div>

                {/* Thẻ 4: Apple Services */}
                <div className="store-card" style={{ minWidth: '400px', height: '500px', padding: '30px 30px 0 30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', overflow: 'hidden' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2 }}>Bốn dịch vụ của Apple. Một<br/>gói đăng ký dễ dàng.</h3>
                  <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <img src="img\store-card-50-subscriptions-202605_GEO_TH_FMT_WHH.jpg" alt="Apple Services" style={{ width: '80%', objectFit: 'contain' }} />
                  </div>
                </div>

                {/* Thẻ 5: AppleCare+ */}
                <div className="store-card" style={{ minWidth: '400px', height: '500px', padding: '30px 30px 0 30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', overflow: 'hidden' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2 }}>Bạn được bảo vệ nhiều<br/>mặt.</h3>
                  <p style={{ fontSize: '14px', color: '#1d1d1f', padding: 0, margin: 0 }}>AppleCare+ nay đã có dịch vụ sửa chữa<br/>không hạn chế cho trường hợp hư hỏng do<br/>sự cố bất ngờ.</p>
                  <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '20px' }}>
                    <img src="img\store-card-40-apple-music-202509.webp" alt="AppleCare+" style={{ width: '100%', objectFit: 'contain', objectPosition: 'bottom' }} />
                  </div>
                </div>

                {/* Thẻ 6: Apple Pay */}
                <div className="store-card" style={{ minWidth: '400px', height: '500px', padding: '30px 30px 0 30px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', overflow: 'hidden' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2 }}>Khám phá tất cả các cách<br/>sử dụng Apple Pay.</h3>
                  <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '20px' }}>
                    <img src="img\store-card-50-applepay-202509_GEO_VN_FMT_WHH.jpg" alt="Apple Pay" style={{ width: '100%', objectFit: 'contain', objectPosition: 'bottom' }} />
                  </div>
                </div>

              </div>

              {/* Nút Phải */}
              <button className="nav-btn" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeExperienceRef, 'right')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* ========================================= */}
            {/* Băng chuyền 7: Trợ giá và ưu đãi (MỚI) */}
            {/* ========================================= */}
            <div className="store-section-title" style={{marginTop: '60px'}}>
              Trợ giá và ưu đãi. <span>Khuyến mại độc quyền và nhiều ưu đãi hấp dẫn khác.</span>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Nút Trái */}
              <button className="nav-btn" style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeOffersRef, 'left')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="store-carousel" ref={storeOffersRef} style={{ gap: '20px', paddingBottom: '20px' }}>
                
                {/* Thẻ 1: Giáo dục */}
                <div className="store-card" style={{ minWidth: '480px', height: '500px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', zIndex: 2, padding: '30px 30px 0' }}>
                    <div className="store-tag" style={{ color: '#86868b', padding: 0, marginBottom: '8px' }}>GIÁO DỤC</div>
                    <h3 style={{ fontSize: '28px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2 }}>Tiết kiệm khi mua iPad<br/>hoặc Mac mới với chính<br/>sách trợ giá cho giáo dục.¹</h3>
                  </div>
                  <div className="store-card-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', margin: 0, zIndex: 1 }}>
                    <img src="img\mac-card-40-education-202512_FMT_WHH (1).jpg" alt="Giáo dục" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom' }} />
                  </div>
                </div>

                {/* Thẻ 2: Doanh nghiệp nhỏ */}
                <div className="store-card dark" style={{ minWidth: '480px', height: '500px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', zIndex: 2, padding: '30px 30px 0' }}>
                    <div className="store-tag" style={{ color: '#86868b', padding: 0, marginBottom: '8px' }}>DOANH NGHIỆP NHỎ</div>
                    <h3 style={{ fontSize: '28px', fontWeight: '700', padding: 0, margin: '0 0 10px 0', lineHeight: 1.2, color: '#ffffff' }}>Giải pháp đơn giản cho<br/>mọi công việc của bạn.</h3>
                  </div>
                  <div className="store-card-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', margin: 0, zIndex: 1 }}>
                    <img src="img\store-card-40-business-202506_FMT_WHH.jpg" alt="Doanh nghiệp nhỏ" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                </div>

              </div>

              {/* Nút Phải */}
              <button className="nav-btn" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => scrollCarousel(storeOffersRef, 'right')}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* ========================================= */}
            {/* Phần Liên Kết Nhanh (MỚI) */}
            {/* ========================================= */}
            <div className="store-section-title" style={{ marginTop: '80px', marginBottom: '20px' }}>
              Liên Kết Nhanh
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingBottom: '60px' }}>
              <a href="#" style={{ padding: '10px 20px', borderRadius: '30px', border: '1px solid #1d1d1f', color: '#1d1d1f', textDecoration: 'none', fontSize: '14px', fontWeight: '400', backgroundColor: 'transparent' }}>
                Trạng Thái Đơn Hàng
              </a>
              <a href="#" style={{ padding: '10px 20px', borderRadius: '30px', border: '1px solid #1d1d1f', color: '#1d1d1f', textDecoration: 'none', fontSize: '14px', fontWeight: '400', backgroundColor: 'transparent' }}>
                Trợ Giúp Mua Hàng
              </a>
              <a href="#" style={{ padding: '10px 20px', borderRadius: '30px', border: '1px solid #1d1d1f', color: '#1d1d1f', textDecoration: 'none', fontSize: '14px', fontWeight: '400', backgroundColor: 'transparent' }}>
                Trả hàng
              </a>
              <a href="#" style={{ padding: '10px 20px', borderRadius: '30px', border: '1px solid #1d1d1f', color: '#1d1d1f', textDecoration: 'none', fontSize: '14px', fontWeight: '400', backgroundColor: 'transparent' }}>
                Mục Đã Lưu
              </a>
              <a href="#" style={{ padding: '10px 20px', borderRadius: '30px', border: '1px solid #1d1d1f', color: '#1d1d1f', textDecoration: 'none', fontSize: '14px', fontWeight: '400', backgroundColor: 'transparent' }}>
                Vận Chuyển & Giao Hàng
              </a>
              <a href="#" style={{ padding: '10px 20px', borderRadius: '30px', border: '1px solid #1d1d1f', color: '#1d1d1f', textDecoration: 'none', fontSize: '14px', fontWeight: '400', backgroundColor: 'transparent' }}>
                Thanh toán
              </a>
            </div>

          </main>
        </div>

      {/* ========================================================= */}
        {/* FOOTER RIÊNG CHO TRANG CỬA HÀNG                           */}
        {/* ========================================================= */}
        <footer className="store-footer">
          <div className="footer-content">
            <div className="footer-legal">
              <p>Giá hiển thị đã bao gồm tất cả các khoản thuế. Giao hàng miễn phí cho tất cả đơn hàng.</p>
              <br />
              <p>◊ Ước tính. Mức phí có thể thay đổi theo thời gian.</p>
              <p>Chương trình Trả Góp Hàng Tháng Với MoMo do (các) đối tác tín dụng cung cấp qua ứng dụng MoMo của Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến (“MoMo”) chứ không phải Apple. Chỉ cư dân Việt Nam đủ điều kiện mới có thể mua sản phẩm đủ điều kiện qua chương trình này.</p>
              <p>Tất cả sản phẩm được mua qua hình thức Trả Góp Hàng Tháng Với MoMo đều cần có tài khoản ví điện tử MoMo và phải được (các) đối tác tín dụng của MoMo phê duyệt. Nếu bạn có câu hỏi về điều kiện tín dụng của mình, vui lòng liên hệ với MoMo để nhận câu trả lời từ (các) đối tác tín dụng của MoMo. Ngoài ra, vui lòng tham khảo ứng dụng MoMo hoặc (các) đối tác tín dụng của MoMo để biết điều kiện, phí và phụ phí.</p>
              <p>Apple có toàn quyền quyết định sản phẩm nào đủ điều kiện hưởng ưu đãi trả góp vào bất cứ lúc nào. Mọi thay đổi về việc lựa chọn sản phẩm, kỳ hạn trả góp và phí dịch vụ đều sẽ làm thay đổi ưu đãi trả góp hàng tháng. Phí dịch vụ quy định là phí được tính theo phần trăm hàng tháng. Áp dụng số tiền mua tối thiểu 3.750.000đ cho sản phẩm đủ điều kiện và cần phải thanh toán trước 20% cho mọi sản phẩm bạn mua.</p>
              <p>Đơn hàng phải được đặt trên Apple Store Trực Tuyến www.apple.com/vn.</p>
              <p>Sản phẩm được mua từ Apple Store Trực Tuyến Dành cho Doanh Nghiệp và Apple Store Trực Tuyến Dành Cho Ngành Giáo Dục không đủ điều kiện hưởng ưu đãi trả góp hàng tháng của MoMo.</p>
              <p>Tiền sẽ được tính vào tài khoản MoMo của bạn khi sản phẩm được vận chuyển đến bạn. Phí dịch vụ hàng tháng trong ưu đãi trả góp của MoMo được tính dựa trên giá bán lẻ của sản phẩm do Apple cung cấp. Giá được hiển thị đã bao gồm thuế GTGT. Số tiền thanh toán hàng tháng được hiển thị chỉ là con số ước tính. Số tiền thanh toán hàng tháng thực tế của bạn sẽ được hiển thị trong phần báo cáo sử dụng trên ứng dụng MoMo.</p>
              <p>Khi bạn chọn thanh toán qua hình thức Trả Góp Hàng Tháng Với MoMo, Apple có thể sẽ cần chia sẻ số điện thoại di động của bạn với MoMo để xác minh danh tính và hoàn tất yêu cầu thanh toán của bạn. Apple sẽ luôn xử lý thông tin của bạn theo Chính Sách Quyền Riêng Tư của Apple, có tại www.apple.com/legal/privacy/vn. Mọi thông tin do MoMo thu thập sẽ tuân thủ chính sách quyền riêng tư của họ.</p>
              <br />
              <p>∆ Dịch vụ đổi cũ lấy mới do đối tác đổi cũ lấy mới của Apple cung cấp. Thông tin báo giá về giá trị đổi cũ lấy mới chỉ là giá ước tính và giá trị thực tế có thể thấp hơn giá ước tính này. Giá trị đổi cũ lấy mới sẽ khác nhau tùy theo tình trạng, năm sản xuất và phiên bản của thiết bị mà bạn tiến hành đổi cũ lấy mới. Không phải tất cả các thiết bị đều đủ điều kiện nhận điểm tín dụng. Bạn phải từ 18 tuổi trở lên thì mới đủ điều kiện nhận điểm tín dụng. Giá trị đổi cũ lấy mới có thể được sử dụng để mua thiết bị mới đủ điều kiện. Ước tính giá trị thực tế được dựa trên việc có nhận được thiết bị đủ điều kiện khớp với thông tin bạn đã mô tả hay không. Thuế Giá Trị Gia Tăng (GTGT) có thể được tính dựa trên toàn bộ giá trị của giao dịch mua thiết bị mới. Đối tác đổi cũ lấy mới của Apple có quyền từ chối hoặc giới hạn số lượng của bất kỳ giao dịch đổi cũ lấy mới nào vì bất kỳ lý do gì. Bạn có thể tìm hiểu thêm thông tin về chương trình đổi cũ lấy mới từ đối tác đổi cũ lấy mới của Apple và thông tin về tái chế thiết bị đủ điều kiện từ đối tác tái chế. Các hạn chế và giới hạn có thể được áp dụng. Có thể sẽ áp dụng Điều Khoản và giới hạn đối với việc tái chế thiết bị đủ điều kiện.</p>
              <br />
              <p>§ Điều Khoản và Điều Kiện Cho Gói Trả Góp Bằng Thẻ Tín Dụng</p>
              <p>Gói thanh toán trả góp bằng Thẻ Tín Dụng có thể được áp dụng cho các cá nhân đủ điều kiện có sở hữu thẻ tín dụng phù hợp của ACB, BIDV, HSBC, Sacombank, Shinhanbank, Techombank, VIB, Vietcombank, VP Bank. Ðể đủ điều kiện sử dụng gói trả góp bằng Thẻ Tín Dụng trong 3, 6, 9 hoặc 12 tháng thì giá trị mua hàng cho một giao dịch của bạn phải trên 3.000.000đ. Tất cả đơn mua hàng áp dụng gói trả góp bằng Thẻ Tín Dụng phải được bên phát hành thẻ tín dụng của bạn phê duyệt. Vui lòng tham khảo trang web của bên phát hành thẻ tín dụng của bạn để biết các thông tin về điều kiện, phí và lệ phí.</p>
              <br />
              <p>Ưu đãi trả góp chỉ được áp dụng cho khách hàng cá nhân sử dụng thẻ tín dụng tiêu dùng. Các đơn hàng mua trên Cửa Hàng Giáo Dục, đơn hàng mua từ Cửa Hàng Dành Cho Doanh Nghiệp Nhỏ Và Vừa (SMB) và đơn hàng mua cho tổ chức không đủ điều kiện để áp dụng ưu đãi này. Ðơn mua hàng bằng Thẻ Ghi Nợ không đủ điều kiện để áp dụng ưu đãi này. Nếu đơn hàng trả góp không được bên phát hành thẻ tín dụng của bạn phê duyệt thì chúng tôi sẽ không được thông báo lý do. Vui lòng liên hệ bên phát hành thẻ tín dụng của bạn để biết thêm thông tin. Ưu đãi áp dụng cho giá đã niêm yết hoặc trên tem giá. Khoản phí tài chính sẽ được liệt kê trên sao kê thẻ tín dụng của bạn.</p>
              <br />
              <p>Bạn có thể sẽ phải trả một khoản phí xử lý nếu chọn thanh toán qua Trả Góp Bằng Thẻ Tín Dụng. Các khoản phí đi kèm sẽ được thay đổi tùy theo thời hạn áp dụng và tùy vào ngân hàng. Bạn cũng có thể tìm thêm những thông tin khác tại đây.</p>
              <br />
              <p>Bạn sẽ được tính phí mua hàng ngay khi đặt hàng và sau đó thanh toán sẽ được chuyển sang hình thức trả góp. Nếu vì bất kỳ lý do gì làm đơn hàng của bạn không được chuyển sang hình thức trả góp, vui lòng liên hệ trực tiếp với ngân hàng phát hành thẻ tín dụng của bạn để được giải đáp thắc mắc và hỗ trợ. Apple không chịu trách nhiệm đối với quy trình chuyển đổi thanh toán trả góp hay được thông báo về lý do tại sao quy trình chuyển đổi này lại không thành công.</p>
              <br />
              <p>Thông tin này bắt đầu có hiệu lực từ ngày 20 tháng 3 năm 2024.</p>
              <br />
              <p>※ Chỉ dành cho người đăng ký mới. 65.000đ/tháng sau khi hết hạn dùng thử. Ưu đãi dành cho người mới đăng ký Apple Music sử dụng thiết bị mới hợp lệ, chỉ trong khoảng thời gian có hạn. Chương trình đổi ưu đãi dành cho các thiết bị nghe hợp lệ yêu cầu phải kết nối hoặc ghép nối với một thiết bị Apple đang chạy hệ điều hành iOS hoặc iPadOS mới nhất. Chương trình đổi ưu đãi dành cho Apple Watch yêu cầu phải kết nối hoặc ghép nối với một iPhone đang chạy hệ điều hành iOS mới nhất. Ưu đãi có hiệu lực trong 3 tháng sau khi kích hoạt thiết bị hợp lệ. Chỉ áp dụng một ưu đãi cho mỗi Tài khoản Apple, bất kể số lượng thiết bị hợp lệ mà bạn mua. Gói đăng ký sẽ tự động gia hạn cho đến khi bị hủy. Có áp dụng hạn chế và các điều khoản khác.</p>
              <br />
              <p>± Apple Intelligence khả dụng ở phiên bản beta. Một số tính năng không khả dụng ở một số khu vực hoặc ngôn ngữ. Để biết tính năng và ngôn ngữ khả dụng cũng như yêu cầu hệ thống, hãy truy cập support.apple.com/121115(Mở trong cửa sổ mới).</p>
              <br />
              <p>1. Có áp dụng mức giá đặc biệt cho khách hàng đủ điều kiện. Để tìm hiểu thêm về cách bắt đầu quy trình đăng ký nhận mức giá đặc biệt, hãy gọi cho chúng tôi qua số 1800-1192.</p>
              <br />
              <br />
              <p>Chúng tôi sử dụng vị trí của bạn để hiển thị cho bạn các lựa chọn giao hàng nhanh hơn. Chúng tôi đã tìm thấy vị trí của bạn bằng địa chỉ IP của bạn hoặc vì bạn đã nhập vị trí đó trong lần truy cập Apple trước đó.</p>
            </div>

            <div className="footer-breadcrumb">
              <a href="#" className="footer-apple-logo" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>
                <img src="img/images.png" alt="Logo" />
              </a>
              <span className="breadcrumb-separator">&gt;</span>
              <span>Cửa Hàng Trực Tuyến của Apple</span>
            </div>

            <div className="footer-directory">
              <div className="footer-column">
                <h3>Mua Sắm và Tìm Hiểu</h3>
                <ul>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }}>Cửa Hàng</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">iPad</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>iPhone</a></li>
                  <li><a href="#">Watch</a></li>
                  <li><a href="#">AirPods</a></li>
                  <li><a href="#">TV & Nhà</a></li>
                  <li><a href="#">AirTag</a></li>
                  <li><a href="#">Phụ Kiện</a></li>
                  <li><a href="#">Thẻ Quà Tặng</a></li>
                </ul>
                <br />
                <h3>Ví Apple</h3>
                <ul>
                  <li><a href="#">Ví</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Tài Khoản</h3>
                <ul>
                  <li><a href="#">Quản Lý Tài Khoản Apple Của Bạn</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>Tài Khoản Apple Store</a></li>
                  <li><a href="#">iCloud.com</a></li>
                </ul>
                <br />
                <h3>Giải trí</h3>
                <ul>
                  <li><a href="#">Apple One</a></li>
                  <li><a href="#">Apple TV</a></li>
                  <li><a href="#">Apple Music</a></li>
                  <li><a href="#">Apple Arcade</a></li>
                  <li><a href="#">Apple Podcasts</a></li>
                  <li><a href="#">Apple Books</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Apple Store</h3>
                <ul>
                  <li><a href="#">Ứng Dụng Apple Store</a></li>
                  <li><a href="#">Tài Chính</a></li>
                  <li><a href="#">Apple Trade In</a></li>
                  <li><a href="#">Tình Trạng Đơn Hàng</a></li>
                  <li><a href="#">Hỗ Trợ Mua Hàng</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Dành Cho Doanh Nghiệp</h3>
                <ul>
                  <li><a href="#">Apple và Doanh Nghiệp</a></li>
                  <li><a href="#">Mua Cho Doanh Nghiệp</a></li>
                </ul>
                <br />
                <h3>Cho Giáo Dục</h3>
                <ul>
                  <li><a href="#">Apple và Giáo Dục</a></li>
                  <li><a href="#">Mua Hàng Cho Bậc Đại Học</a></li>
                </ul>
                <br />
                <h3>Dành Cho Chăm Sóc Sức Khỏe</h3>
                <ul>
                  <li><a href="#">Apple trong Chăm Sóc Sức Khỏe</a></li>
                  <li><a href="#">Sức khỏe trên Apple Watch</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Giá Trị Cốt Lõi Của Apple</h3>
                <ul>
                  <li><a href="#">Trợ Năng</a></li>
                  <li><a href="#">Môi Trường</a></li>
                  <li><a href="#">Quyền Riêng Tư</a></li>
                  <li><a href="#">Chuỗi Cung Ứng</a></li>
                </ul>
                <br />
                <h3>Về Apple</h3>
                <ul>
                  <li><a href="#">Newsroom</a></li>
                  <li><a href="#">Lãnh Đạo Của Apple</a></li>
                  <li><a href="#">Nhà Đầu Tư</a></li>
                  <li><a href="#">Đạo Đức & Quy Tắc</a></li>
                  <li><a href="#">Sự Kiện</a></li>
                  <li><a href="#">Liên Hệ Apple</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-ways-to-buy">
              Xem thêm cách để mua hàng: <a href="#">Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc gọi 1800-1192.
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                Bản quyền © 2026 Apple Inc. Bảo lưu mọi quyền.
              </div>
              <div className="footer-legal-links">
                <a href="#">Chính Sách Quyền Riêng Tư</a> | <a href="#">Điều Khoản Sử Dụng</a> | <a href="#">Pháp Lý</a>
              </div>
              <div className="footer-locale">
                Việt Nam
              </div>
            </div>
          </div>
        </footer>
      </div> 

      {/* ========================================================================= */}
      {/* FOOTER CHUNG CHO TOÀN BỘ TRANG WEB                                          */}
      {/* ========================================================================= */}
      {currentPage !== 'signup' && currentPage !== 'login' && currentPage !== 'store' && currentPage !== 'forgot_password' && (
        <footer>
          <div className="footer-content">
            <div className="footer-legal">
            * Dịch vụ thương mại được cung cấp bởi các đối tác trao đổi của Apple. Báo giá giá trị trao đổi chỉ mang tính ước tính và giá trị thực tế có thể thấp hơn ước tính. Giá trị đổi cũ lấy mới sẽ khác nhau tùy theo tình trạng, năm và cấu hình của thiết bị đủ điều kiện đổi của bạn. Không phải tất cả các thiết bị đều đủ điều kiện nhận điểm tín dụng. Bạn phải ít nhất ở độ tuổi thành niên để đủ điều kiện giao dịch tín dụng. Giá trị đổi cũ lấy mới có thể sẽ được áp dụng cho thiết bị đủ điều kiện mới bạn mua. Ước tính giá trị thực tế được dựa trên việc có nhận được thiết bị đủ điều kiện khớp với thông tin bạn đã mô tả hay không. Thuế giá trị gia tăng (GTGT) có thể sẽ được tính trên toàn bộ giá trị của thiết bị mới bạn mua. Bạn phải xuất trình giấy tờ tùy thân hợp lệ (luật địa phương có thể yêu cầu lưu thông tin này). Các đối tác trao đổi của Apple có quyền từ chối, hủy bỏ hoặc giới hạn số lượng của bất kỳ giao dịch đổi cũ lấy mới nào vì bất kỳ lý do gì. Bạn có thể tìm hiểu thêm thông tin từ đối tác đổi cũ lấy mới của Apple về việc đổi cũ lấy mới và đối tác tái chế về việc tái chế các thiết bị đủ điều kiện. Các hạn chế và giới hạn có thể được áp dụng. Có thể sẽ áp dụng Điều khoản và giới hạn về việc tái chế thiết bị đủ điều kiện.<br />
            <br />
            1. So với iPhone thế hệ trước.<br />
            <br />
            2. iPhone 17e, iPhone 17, iPhone Air và iPhone 17 Pro có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng.<br />
            <br />
            3. Apple Intelligence khả dụng ở phiên bản beta. Một số tính năng không khả dụng ở một số khu vực hoặc ngôn ngữ. Để biết tính năng và ngôn ngữ khả dụng cũng như yêu cầu hệ thống, hãy truy cập support.apple.com/vi-vn/121115.<br />
            <br />
            4. Tính năng Dịch Trực Tiếp trong Tin Nhắn hỗ trợ tiếng Trung (Giản thể), tiếng Trung (Phồn thể), tiếng Hà Lan, tiếng Anh (Anh, Mỹ), tiếng Pháp (Pháp), tiếng Đức, tiếng Ý, tiếng Nhật, tiếng Hàn, tiếng Bồ Đào Nha (Brazil), tiếng Tây Ban Nha (Tây Ban Nha), tiếng Thổ Nhĩ Kỳ và tiếng Việt khi Apple Intelligence được bật trên iPhone, iPad hoặc Mac tương thích, cũng như trên Apple Watch Series 9 trở lên, Apple Watch Ultra 2 trở lên và Apple Watch SE 3 khi được ghép đôi với iPhone hỗ trợ Apple Intelligence.<br />
            <br />
            5. Trí thông minh thị giác khả dụng trên mọi phiên bản iPhone hỗ trợ Apple Intelligence. Một số tính năng chỉ khả dụng ở một số khu vực hoặc ngôn ngữ. Để biết thêm chi tiết, hãy truy cập support.apple.com/vi-vn/121115#visual-intelligence.<br />
            <br />
            6. Tính năng Dọn Dẹp khả dụng ở phiên bản beta. Để biết các thiết bị tương thích và yêu cầu hệ thống, hãy truy cập support.apple.com/vi-vn/121429.<br />
            <br />
            7. Chế độ Hành Động khả dụng trên các phiên bản iPhone 14 trở lên, ngoại trừ iPhone SE, iPhone 16e và iPhone 17e. Tính năng Hòa Âm khả dụng trên các phiên bản iPhone 16 trở lên. Điều Khiển Camera có trên các phiên bản iPhone 16 trở lên, ngoại trừ iPhone 16e và iPhone 17e. Camera trước Center Stage có trên iPhone 17, iPhone 17 Pro, iPhone 17 Pro Max và iPhone Air.<br />
            <br />
            8. Dựa trên phân bổ cân bằng khối lượng.<br />
            <br />
            9. Trả góp theo tháng với lãi suất 1,67%, sau khi thanh toán lần đầu 20%. Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.<br />
            <br />
            Chương trình Trả Góp Hàng Tháng Với MoMo do đối tác tín dụng cung cấp qua ứng dụng MoMo của Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến (“MoMo”) chứ không phải Apple. Chỉ cư dân Việt Nam đủ điều kiện mới có thể mua sản phẩm đủ điều kiện qua chương trình này. Tất cả sản phẩm được mua qua hình thức Trả Góp Hàng Tháng Với MoMo đều cần có tài khoản ví điện tử MoMo và phải được đối tác tín dụng của MoMo phê duyệt. Nếu bạn có câu hỏi về điều kiện tín dụng của mình, vui lòng liên hệ với MoMo để nhận câu trả lời từ đối tác tín dụng của MoMo. Ngoài ra, vui lòng tham khảo ứng dụng MoMo hoặc đối tác tín dụng của MoMo để biết điều kiện, phí và phụ phí.<br />
            <br />
            Apple có toàn quyền quyết định sản phẩm nào đủ điều kiện hưởng ưu đãi trả góp vào bất cứ lúc nào. Mọi thay đổi về việc lựa chọn sản phẩm, kỳ hạn trả góp và lãi suất đều sẽ làm thay đổi ưu đãi trả góp hàng tháng. Lãi suất quy định là lãi suất tính theo phần trăm hàng tháng. Áp dụng số tiền mua tối thiểu 3.000.000đ cho sản phẩm đủ điều kiện và cần phải thanh toán trước 20% cho mọi sản phẩm bạn mua.<br />
            <br />
            Đơn hàng phải được đặt trên Apple Store Trực Tuyến apple.com/vn.<br />
            <br />
            Sản phẩm được mua từ Apple Store Trực Tuyến Dành cho Doanh Nghiệp và Apple Store Trực Tuyến Dành Cho Ngành Giáo Dục không đủ điều kiện hưởng ưu đãi trả góp hàng tháng của MoMo.<br />
            <br />
            Tiền sẽ được tính vào tài khoản MoMo của bạn khi sản phẩm được vận chuyển đến bạn. Lãi suất hàng tháng trong ưu đãi trả góp của MoMo được tính dựa trên giá bán lẻ của sản phẩm do Apple cung cấp. Giá được hiển thị đã bao gồm thuế GTGT. Số tiền thanh toán hàng tháng được hiển thị chỉ là con số ước tính. Số tiền thanh toán hàng tháng thực tế của bạn sẽ được hiển thị trong phần báo cáo sử dụng trên ứng dụng MoMo.<br />
            <br />
            Khi bạn chọn thanh toán qua hình thức Trả Góp Hàng Tháng Với MoMo, Apple có thể sẽ cần chia sẻ số điện thoại di động của bạn với MoMo để xác minh danh tính và hoàn tất yêu cầu thanh toán của bạn. Apple sẽ luôn xử lý thông tin của bạn theo Chính Sách Quyền Riêng Tư của Apple, có tại apple.com/legal/privacy/vn. Mọi thông tin do MoMo thu thập sẽ tuân thủ chính sách quyền riêng tư của họ.<br />
            <br />
            10. Gói thanh toán trả góp bằng Thẻ Tín Dụng có thể được áp dụng cho các cá nhân đủ điều kiện có sở hữu thẻ tín dụng phù hợp của ACB, BIDV, HSBC, Sacombank, Shinhanbank, VIB, Vietcombank, VP Bank. Ðể đủ điều kiện sử dụng gói trả góp bằng Thẻ Tín Dụng trong 3, 6, 9 hoặc 12 tháng thì giá trị mua hàng cho một giao dịch của bạn phải trên 3.000.000đ. Tất cả đơn mua hàng áp dụng gói trả góp bằng Thẻ Tín Dụng phải được bên phát hành thẻ tín dụng của bạn phê duyệt. Vui lòng tham khảo trang web của bên phát hành thẻ tín dụng của bạn để biết các thông tin về điều kiện, phí và lệ phí.<br />
            <br />
            Ưu đãi trả góp chỉ được áp dụng cho khách hàng cá nhân sử dụng thẻ tín dụng tiêu dùng. Các đơn hàng mua trên Cửa Hàng Giáo Dục, cửa hàng SMB và đơn mua hàng của tổ chức không đủ điều kiện để áp dụng ưu đãi này. Ðơn mua hàng bằng Thẻ Ghi Nợ không đủ điều kiện để áp dụng ưu đãi này. Nếu đơn hàng trả góp không được bên phát hành thẻ tín dụng của bạn phê duyệt thì chúng tôi sẽ không được thông báo lý do. Vui lòng liên hệ bên phát hành thẻ tín dụng của bạn để biết thêm thông tin. Ưu đãi áp dụng cho giá đã niêm yết hoặc trên tem giá. Khoản phí tài chính sẽ được liệt kê trên sao kê thẻ tín dụng của bạn.<br />
            <br />
            Bạn có thể sẽ phải trả một khoản phí xử lý nếu chọn thanh toán qua Trả Góp Bằng Thẻ Tín Dụng. Các khoản phí đi kèm sẽ được thay đổi tùy theo thời hạn áp dụng và tùy vào ngân hàng. Bạn cũng có thể tìm thêm những thông tin khác tại đây.<br />
            <br />
            Bạn sẽ được tính phí mua hàng ngay khi đặt hàng và sau đó thanh toán sẽ được chuyển sang hình thức trả góp. Nếu vì bất kỳ lý do gì làm đơn hàng của bạn không được chuyển sang hình thức trả góp, vui lòng liên hệ trực tiếp với ngân hàng phát hành thẻ tín dụng của bạn để được giải đáp thắc mắc và hỗ trợ. Apple không chịu trách nhiệm đối với quy trình chuyển đổi thanh toán trả góp hay được thông báo về lý do tại sao quy trình chuyển đổi này lại không thành công.<br />
            <br />
            11. Thử nghiệm do Apple thực hiện vào tháng 7 năm 2025 sử dụng các thiết bị và phần mềm phiên bản tiền sản xuất của iPhone 17, iPhone Air, iPhone 17 Pro và iPhone 17 Pro Max đã đăng ký mạng di động LTE và 5G. Thử nghiệm bổ sung với iPhone Air được thực hiện khi kết nối với các thiết bị và phần mềm phiên bản tiền sản xuất của Pin MagSafe cho iPhone Air. Thời gian xem video bao gồm việc phát lặp lại một bộ phim HDR có thời lượng 2 giờ 23 phút được mua từ iTunes Store. Thời gian xem video (trực tuyến) bao gồm việc phát lặp lại một bộ phim HDR có thời lượng 3 giờ 1 phút được mua từ iTunes Store. Tất cả các cài đặt đều là mặc định ngoại trừ: Bluetooth được kết nối với tai nghe; Wi‑Fi được kết nối với mạng; tính năng Wi‑Fi Hỏi Để Kết Nối Mạng, Độ Sáng Tự Động, và True Tone đều ở chế độ tắt.<br />
            <br />
            12. Cần có gói cước dữ liệu. Mạng 5G chỉ khả dụng ở một số thị trường và được cung cấp qua một số nhà mạng. Tốc độ có thể thay đổi tùy địa điểm và nhà mạng. Để biết thông tin về hỗ trợ mạng 5G, vui lòng liên hệ nhà mạng và truy cập apple.com/vn/iphone/cellular.<br />
            <br />
            13. Phụ kiện được bán riêng.<br />
            <br />
            14. So với AirTag thế hệ trước. Tính năng Tìm Chính Xác mở rộng tương thích với AirTag (thế hệ thứ 2) ghép nối với iPhone Air hoặc iPhone 15 trở lên (ngoại trừ iPhone 16e và iPhone 17e); chỉ khả dụng ở một số khu vực. Truy cập apple.com/vn/uwb để biết thêm thông tin.<br />
            <br />
            15. Yêu cầu iPhone và Apple Watch có chip Ultra Wideband thế hệ thứ 2. Tính năng Ultra Wideband chỉ khả dụng ở một số khu vực.<br />
            <br />
            Một số tính năng có thể thay đổi. Một số tính năng, ứng dụng và dịch vụ chỉ khả dụng ở một số khu vực hoặc ngôn ngữ và có thể yêu cầu phải có các phần cứng và phần mềm nhất định. Để biết thêm thông tin, truy cập trang Tính Năng Khả Dụng.
          </div>
          
          <div className="footer-breadcrumb">
            <a href="#" className="footer-apple-logo" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>
              <img src="img/images.png" alt="Logo" />
            </a>
            <span className="breadcrumb-separator">&gt;</span>
            <span>{currentPage === 'store' ? 'Cửa Hàng Trực Tuyến của Apple' : 'iPhone'}</span>
          </div>

          <div className="footer-directory">
            <div className="footer-column">
              <h3>Mua Sắm và Tìm Hiểu</h3>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }}>Cửa Hàng</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('iphone'); }}>iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">TV & Nhà</a></li>
                <li><a href="#">AirTag</a></li>
                <li><a href="#">Phụ Kiện</a></li>
                <li><a href="#">Thẻ Quà Tặng</a></li>
              </ul>
              <h3 className="footer-mt-20">Ví Apple</h3>
              <ul>
                <li><a href="#">Ví</a></li>
                <li><a href="#">Apple Pay</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Tài Khoản</h3>
              <ul>
                <li><a href="#">Quản Lý Tài Khoản Apple Của Bạn</a></li>
                <li><a href="#">Tài Khoản Apple Store</a></li>
                <li><a href="#">iCloud.com</a></li>
              </ul>
              <h3 className="footer-mt-20">Giải trí</h3>
              <ul>
                <li><a href="#">Apple One</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">Apple Fitness+</a></li>
                <li><a href="#">Apple Podcasts</a></li>
                <li><a href="#">Apple Books</a></li>
                <li><a href="#">App Store</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Apple Store</h3>
              <ul>
                <li><a href="#">Ứng Dụng Apple Store</a></li>
                <li><a href="#">Tài Chính</a></li>
                <li><a href="#">Apple Trade In</a></li>
                <li><a href="#">Trạng Thái Đơn Hàng</a></li>
                <li><a href="#">Hỗ Trợ Mua Hàng</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Dành Cho Doanh Nghiệp</h3>
              <ul>
                <li><a href="#">Apple Và Doanh Nghiệp</a></li>
                <li><a href="#">Mua Sắm Cho Doanh Nghiệp</a></li>
              </ul>
              <h3 className="footer-mt-20">Cho Giáo Dục</h3>
              <ul>
                <li><a href="#">Apple Và Giáo Dục</a></li>
                <li><a href="#">Mua Sắm Cho Bậc Đại Học</a></li>
              </ul>
              <h3 className="footer-mt-20">Chăm Sóc Sức Khỏe</h3>
              <ul>
                <li><a href="#">Apple Trong Chăm Sóc Sức Khỏe</a></li>
                <li><a href="#">Sức Khỏe Trên Apple Watch</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Giá Trị Cốt Lõi Của Apple</h3>
              <ul>
                <li><a href="#">Trợ Năng</a></li>
                <li><a href="#">Môi Trường</a></li>
                <li><a href="#">Quyền Riêng Tư</a></li>
                <li><a href="#">Chuỗi Cung Ứng</a></li>
              </ul>
              <h3 className="footer-mt-20">Về Apple</h3>
              <ul>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Lãnh Đạo Của Apple</a></li>
                <li><a href="#">Nhà Đầu Tư</a></li>
                <li><a href="#">Đạo Đức & Quy Tắc Tuân Thủ</a></li>
                <li><a href="#">Sự Kiện</a></li>
                <li><a href="#">Liên Hệ Apple</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-ways-to-buy">
            Xem thêm cách để mua hàng: <a href="#" className="blue-link">Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc gọi 1800-1192.
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              Bản quyền © 2026 Apple Inc. Bảo lưu mọi quyền.
            </div>
            <div className="footer-legal-links">
              <a href="#">Chính Sách Quyền Riêng Tư</a> <span className="sep">|</span>
              <a href="#">Điều Khoản Sử Dụng</a> <span className="sep">|</span>
              <a href="#">Bán Hàng và Hoàn Tiền</a> <span className="sep">|</span>
              <a href="#">Pháp Lý</a> <span className="sep">|</span>
              <a href="#">Sơ Đồ Trang Web</a>
            </div>
            <div className="footer-locale">
              <a href="#">Việt Nam</a>
            </div>
          </div>
        </div>
      </footer>
      )}
    </>
  );
}