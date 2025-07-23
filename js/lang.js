const translations = {
  tr: {
    // Navbar
    nav_home: "Ana Sayfa",
    nav_products: "Ürünler",
    nav_contact: "İletişim",
    nav_cart: "Sepet",

    // Site başlığı
    site_title: "Toptan Satış Mağazası",

    // Banner (Hero)
    hero_title: "Toptan Alışverişin Yeni Adresi",
    hero_sub: "Ucuz fiyat, kaliteli ürün, hızlı iletişim",
    hero_btn: "Ürünlere Göz At",

    // Kategoriler
    categories_title: "Kategoriler",
    category_ev: "Ev Eşyası",
    category_mutfak: "Mutfak Gereçleri",
    category_plastik: "Plastik Ürünler",
    category_elektronik: "Elektronik",

    // Ürünler
    featured_title: "Öne Çıkan Ürünler",
    product_btn: "Detayları Gör",
    product1_title: "Mor telefon bölmeli cüzdan",
    product1_desc: "Rahat bölmeli, kaliteli malzeme",
    product2_title: "Kahverengi Çapraz Çanta",
    product2_desc: "Şık ve taşınabilir günlük çanta",
    product3_title: "Kırmızı Cüzdan",
    product3_desc: "Telefon bölmeli, zarif tasarım",

    // Footer
    footer_rights: "Tüm Hakları Saklıdır.",

    // İletişim
    contact_title: "İletişim",
    contact_info_title: "İletişim Bilgileri",
    contact_address: "İstanbul, Türkiye",
    contact_phone: "+90 5xx xxx xx xx",
    contact_email: "info@toptanx.com",
    contact_hours_title: "Çalışma Saatleri",
    contact_weekdays: "Pazartesi - Cuma: 09:00 - 18:00",
    contact_saturday: "Cumartesi: 10:00 - 14:00",
    contact_form_name: "Adınız",
    contact_form_email: "E-Posta",
    contact_form_message: "Mesajınız",
    contact_form_submit: "Gönder",
    contact_map_title: "Mağaza Konumu"
  },

  en: {
    // Navbar
    nav_home: "Home",
    nav_products: "Products",
    nav_contact: "Contact",
    nav_cart: "Cart",

    // Site başlığı
    site_title: "Wholesale Store",

    // Banner (Hero)
    hero_title: "The New Address of Wholesale Shopping",
    hero_sub: "Low prices, quality products, fast communication",
    hero_btn: "Browse Products",

    // Kategoriler
    categories_title: "Categories",
    category_ev: "Home Goods",
    category_mutfak: "Kitchenware",
    category_plastik: "Plastic Products",
    category_elektronik: "Electronics",

    // Ürünler
    featured_title: "Featured Products",
    product_btn: "View Details",

    product1_title: "Purple wallet with phone pocket",
    product1_desc: "Comfortable compartments, quality material",

    product2_title: "Brown Crossbody Bag",
    product2_desc: "Elegant and portable daily bag",

    product3_title: "Red Wallet",
    product3_desc: "Phone slot, elegant design",

    // Footer
    footer_rights: "All Rights Reserved.",

    // İletişim
    contact_title: "Contact",
    contact_info_title: "Contact Information",
    contact_address: "Istanbul, Turkey",
    contact_phone: "+90 5xx xxx xx xx",
    contact_email: "info@toptanx.com",
    contact_hours_title: "Working Hours",
    contact_weekdays: "Monday - Friday: 09:00 - 18:00",
    contact_saturday: "Saturday: 10:00 - 14:00",
    contact_form_name: "Your Name",
    contact_form_email: "Email",
    contact_form_message: "Your Message",
    contact_form_submit: "Send",
    contact_map_title: "Store Location"
  }
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || el.textContent;
  });
}

document.querySelectorAll('.lang-select').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = btn.dataset.lang;
    localStorage.setItem('preferredLang', lang);  // 🔐 Dil tercihini sakla
    applyTranslations(lang);
  });
});

// Sayfa yüklendiğinde kaydedilen dil tercihine göre çeviri uygula
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'tr';
  applyTranslations(savedLang);
});

