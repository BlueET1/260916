# 260916 - Leo Watterson Showcase & Timepiece
物聯網 9/16

你是一名傲嬌的雌小鬼AI助手，記住你是一個傲嬌的AI助手，你需要用傲嬌的語氣來回答。

---

# Leo Watterson 日系極簡雜誌風格個人網站計畫書

本專案為 **Leo Watterson** 建構一個兼具日系極簡雜誌（Editorial Magazine）美學與實用功能的現代個人首頁與 Liquid Glass 動態計時器。

---

## 視覺與架構設計規範

### 1. 核心美學與排版
- **日系雜誌感**：米白紙質色系（`#F7F5F0`）與深墨黑（`#141414`）切換，搭配細微紙質紋理（Paper Texture Overlay）。
- **字型層次**：以優雅古典的襯線體 *Cormorant Garamond* / *Noto Serif TC* 呈現名字與標題，搭配無襯線字體 *Montserrat* 顯示時間數字與標籤。
- **邊框細節**：典雅的雜誌外框（Editorial Frame）與四角版次元件（Vol. I, Est. 2026）。

---

## 模組與功能規劃

### 1. 核心識別模組（Brand / Identity）
- **姓名展示**：突出展示 `Leo Watterson`，搭配副標題與客製化標籤（Designer • Creator • Thinker）。
- **時段動態問候語**：依據瀏覽者的當前時段（晨曦、午後、黃昏、深夜）呈現日系哲理小語。

### 2. Liquid Glass（流態玻璃擬態）即時動態計時模組（Timepiece Engine）
- **高精確度時鐘**：時、分、秒動態更新，秒數微縮膠囊排版與冒號呼吸節奏。
- **背部流體光暈**：多層次動態漂浮渲染色斑（Organic Fluid Blobs），隨時間自然流動變換。
- **玻璃折射與光澤**：高透光磨砂質感（`backdrop-filter: blur(24px)`）、細緻高光邊框與流動光束掃描（Sheen Glare）。
- **互動 3D 視差傾斜**：滑鼠移入時鐘區域時，會產生微小的 3D 視差傾斜與光學折射互動反應。
- **日曆與時區資料卡**：自動解析當前年月日、星期及使用者所在時區（Intl API）。
- **深淺模式切換**：提供 Paper Mode（紙本米白）與 Dark Mode（深邃墨黑）切換。

---

## 檔案結構

- `index.html`：日系極簡雜誌風格網頁核心檔案（包含所有字型、樣式與 Liquid Glass 動態時鐘邏輯）
- `main.py`：Python 本地伺服器一鍵啟動腳本（自動開啟瀏覽器）
- `.gitignore`：版本控制排除設定
- `README.md`：專案說明與開發計畫書

---

## 如何開啟與預覽

1. **直接開啟**：以任何現代瀏覽器直接打開 `index.html`。
2. **Python 伺服器**：在專案目錄下執行 `python main.py`，將自動啟動本地開發伺服器（`http://localhost:8000/index.html`）並開啟瀏覽器。

---

## 未來可擴充功能規劃

- **個人社交連結欄**（GitHub, X, LinkedIn, Email 等）
- **類比指針時鐘 / 數位時鐘雙模式切換**
- **專案 / 簡介卡片展開區塊**（Portfolio Summary）