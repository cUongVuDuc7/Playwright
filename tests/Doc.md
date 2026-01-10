-  toHaveScreenshot():
Chụp ảnh
So sánh với ảnh chuẩn đã lưu (onlyElement.png)
Nếu chưa có ảnh chuẩn:
Playwright sẽ tạo ảnh mới
Nếu đã có ảnh:
Playwright sẽ so sánh pixel



| Thành phần           | TypeScript                |
| -------------------- | ------------------------- |
| `async`              | function trả về `Promise` |
| `await`              | chờ Promise               |
| `{ page }`           | destructuring             |
| `page: Page`         | Playwright type           |
| `locator()`          | trả về `Locator`          |
| `expect()`           | generic matcher           |
| `toHaveScreenshot()` | async assertion           |


Browser
 └── BrowserContext
      └── Page

{
  page: Page,  // Đại diện cho 1 tab trình duyệt
  browser: Browser, // Đại diện cho trình duyệt thật
  context: BrowserContext,  // phiên trình duyệt độc lập
  ...
}
- Có gì trong context?
    cookies
    localStorage
    sessionStorage
    cache
    permissions


1️⃣ Vì sao Playwright dùng hàm bất đồng bộ (async)?
Bản chất trình duyệt là bất đồng bộ
Những việc sau KHÔNG xảy ra ngay lập tức:
Mở trang (goto)
Load HTML / JS / CSS
Render DOM
Chụp screenshot
Click chờ element xuất hiện
👉 Tất cả đều cần thời gian
----------
2️⃣ Nếu KHÔNG await thì chuyện gì xảy ra?
goto() chưa load xong
Test đã chạy tới expect
DOM chưa sẵn sàng
❌ → test fail ngẫu nhiên (flaky test)