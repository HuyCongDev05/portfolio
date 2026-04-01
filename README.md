# 🚀 Portfolio - Nguyen Huy Cong

Trang portfolio cá nhân được xây dựng bằng **React + Vite**, thiết kế theo phong cách **Glassmorphism** hiện đại với hiệu ứng animation mượt mà và giao diện responsive trên mọi thiết bị.

---

## ✨ Tính năng chính

- **Trang chủ** – Avatar nổi bật với hiệu ứng glow, navigation cuộn mượt đến từng phần, màu sắc đổi theo item được hover.
- **Chi tiết** – Timeline thông tin cá nhân, 3 nhóm kỹ năng (Công nghệ / Công cụ / AI) với auto-scroll khi tràn hàng.
- **Dự án** – Grid card tối đa 4 cột, căn giữa, card glassmorphism có màu sắc riêng và nút GitHub/Demo.
- **Footer** – Navigation nội bộ, social icons với hiệu ứng pop staggered, cuộn đến phần tương ứng khi click.
- Hoàn toàn **responsive** – PC, tablet và mobile.

---

## 🛠 Công nghệ sử dụng

| Công nghệ | Phiên bản |
|---|---|
| React | ^19 |
| Vite | ^8 |
| react-router-dom | ^7 |
| CSS Modules | Vanilla CSS |
| @flaticon/flaticon-uicons | ^3 |

---

## 📁 Cấu trúc thư mục

```
portfolio/
├── public/
│   └── logo.svg
├── src/
│   ├── assets/
│   │   └── imgs/          # Ảnh avatar, icon công nghệ, icon social
│   ├── components/
│   │   ├── Button/        # Button dùng chung (custom color, hover, border-radius)
│   │   ├── Footer/        # Footer có nav + social icons animated
│   │   ├── Loading/       # Loading spinner
│   │   └── Social/        # Icon social sidebar (Telegram, Github, Linkedin)
│   ├── pages/
│   │   ├── Home/          # Trang chủ: hero, avatar, nav
│   │   ├── Detail/        # Chi tiết: about + 3 nhóm kỹ năng
│   │   ├── Project/       # Dự án: grid card layout
│   │   ├── Contact/       # Liên hệ (đang phát triển)
│   │   └── NotFound/      # Trang 404
│   ├── routes/            # Cấu hình React Router
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example           # Template biến môi trường
├── vite.config.js
└── package.json
```

---

## ⚙️ Hướng dẫn cài đặt

### Yêu cầu

- **Node.js** >= 18
- **npm** >= 9

### 1. Clone dự án

```bash
git clone https://github.com/HuyCongDev05/portfolio.git
cd portfolio
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cấu hình biến môi trường

Tạo file `.env` từ template:

```bash
cp .env.example .env
```

Mở `.env` và điền link mạng xã hội của bạn:

```env
VITE_SOCIAL_FACEBOOK=https://facebook.com/your-profile
VITE_SOCIAL_TELEGRAM=https://t.me/your-username
VITE_SOCIAL_LINKEDIN=https://linkedin.com/in/your-profile
VITE_SOCIAL_TIKTOK=https://tiktok.com/@your-username
VITE_SOCIAL_GITHUB=https://github.com/your-username
VITE_SOCIAL_X=https://x.com/your-username
```

> ⚠️ Mọi biến môi trường phải có tiền tố `VITE_` thì Vite mới expose ra phía client được.

### 4. Chạy development

```bash
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173`

---

## 🏗 Build production

```bash
npm run build
```

Output nằm trong thư mục `dist/`. Preview bản build trước khi deploy:

```bash
npm run preview
```

---

## 🚀 Deploy lên Netlify

### Cách 1: Kéo thả thư mục `dist/` (nhanh nhất)

1. Build project: `npm run build`
2. Truy cập [app.netlify.com](https://app.netlify.com)
3. Kéo thả thư mục **`dist/`** vào vùng **"Deploy manually"**
4. Netlify sẽ tự cấp URL luôn – xong!

---

### Cách 2: Kết nối GitHub (deploy tự động)

1. Push code lên GitHub repository
2. Truy cập [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Chọn **GitHub** → chọn repository của bạn
4. Cấu hình build settings:

| Trường | Giá trị |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

5. Click **Deploy site**

---

### Cấu hình biến môi trường trên Netlify

Sau khi deploy, thêm các biến môi trường của `.env` vào Netlify:

**Site settings → Environment variables → Add a variable**

```
VITE_SOCIAL_FACEBOOK    = https://facebook.com/your-profile
VITE_SOCIAL_TELEGRAM    = https://t.me/your-username
VITE_SOCIAL_LINKEDIN    = https://linkedin.com/in/your-profile
VITE_SOCIAL_TIKTOK      = https://tiktok.com/@your-username
VITE_SOCIAL_GITHUB      = https://github.com/your-username
VITE_SOCIAL_X           = https://x.com/your-username
```

> ⚠️ Sau khi thêm biến môi trường, bấm **Trigger deploy** để rebuild lại.

---

### Fix lỗi 404 khi reload trang (React Router)

File `public/_redirects` đã được tạo sẵn trong project để fix lỗi này:

```
/* /index.html 200
```

File này sẽ được tự động copy vào `dist/` khi build, Netlify sẽ đọc và redirect mọi route về `index.html` cho React Router xử lý – **không cần làm thêm gì**.

---

## 🌐 Tuỳ chọn: Expose qua Ngrok

Nếu muốn test trên điện thoại thật qua mạng ngoài:

1. Cập nhật domain ngrok của bạn trong `vite.config.js`:

```js
server: {
    host: true,
    allowedHosts: ['your-subdomain.ngrok-free.dev'],
    hmr: {
        host: 'your-subdomain.ngrok-free.dev',
        clientPort: 443,
        protocol: 'wss'
    }
}
```

2. Chạy ngrok song song với dev server:

```bash
ngrok http 5173
```

---

## 📦 Các dự án được showcase

| Tên | Công nghệ | Link |
|---|---|---|
| Movie Streaming Website | Spring Boot, React, MySQL, Docker, Redis, MongoDB, Python, Gemini AI | [GitHub](https://github.com/HuyCongDev05/cinema) |
| Comic Reading Website | Spring Boot, MySQL, Docker, Redis, MongoDB, Python | [GitHub](https://github.com/HuyCongDev05/comic) |
| Game Store Website | Laravel, Bootstrap, MySQL | [GitHub](https://github.com/HuyCongDev05/PHP-website-programming) |
| Comic Book Reading App | MySQL, Android (XML layouts) | [GitHub](https://github.com/HuyCongDev05/android-app) |
