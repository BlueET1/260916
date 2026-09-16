# DIC-1 — Personal Page: Leo Watterson Showcase & Timepiece

本專案為 **DIC-1 作業** 之個人專屬網站，結合 **日系極簡雜誌風格（Editorial Design）** 與 **流態玻璃擬態（Liquid Glassmorphism）** 動態即時時計。

---

## 🔗 專案提交資訊 (Submission URLs)

- **① GitHub Repository**：[https://github.com/BlueET1/260916](https://github.com/BlueET1/260916)
- **② Live Website (GitHub Pages)**：[https://blueet1.github.io/260916/](https://blueet1.github.io/260916/)

---

## 📌 作業要求達成對照表 (Requirements Checklist)

| 要求項目 | 內容說明 | 狀態 |
| :--- | :--- | :---: |
| **👤 1. Profile** | 姓名：Leo Watterson、個人照片（阿甘妙世界阿甘）、科系：電機工程學系、自我介紹：我是桃園人，支援動態編輯並保存至 `localStorage` | ✅ 完成 |
| **🛠 2. Skills** | 展示 3 大核心技術：Python、Machine Learning、AI | ✅ 完成 |
| **🚀 3. Projects** | 收錄 AICUP 2025 桌球戰術分析與軌跡追蹤專案，含技術標籤與 GitHub 連結 | ✅ 完成 |
| **🕐 4. Live Clock** | JavaScript 動態即時時鐘，精確更新 HH:MM:SS，採用 Apple 簡潔字體，無羅馬數字，支援 12H/24H 切換與複製時間戳 | ✅ 完成 |
| **🎨 5. Personal Design** | 日系極簡紙質雜誌排版、Liquid Glass 流態玻璃擬態、3D 視差傾斜反應、多層流體光斑與雙主題模式 | ✅ 完成 |

---

## ⭐ Bonus 挑戰加分項目 (Bonus Features)

- 🌅 **動態時段語錄**：依早晨、午後、黃昏、深夜自動呈現哲理問候
- 🔄 **12H / 24H 雙模式切換**：可一鍵切換時間制，並儲存使用者偏好
- 🌍 **自動偵測時區**：使用 `Intl.DateTimeFormat` 自動顯示瀏覽器所在地時區
- 📋 **一鍵複製時間戳（Copy Timestamp）**：點擊即可複製當前精確時間
- ✏️ **可自訂個人檔案（Editable Profile）**：隨時點擊修改姓名、科系與自傳
- 💾 **localStorage 本地持久化**：主題設定、時間制式與個人資訊於重新整理後依然保留
- ✨ **Liquid Glass 3D 視差傾斜**：滑鼠游標移入時鐘產生即時物理光學折射反應
- 🎨 **雙色主題切換**：Paper Mode（極簡米白）與 Dark Mode（深墨黑）無縫過渡

---

## 📁 專案檔案架構

```text
260916/
├── assets/
│   └── avatar.jpg          # 個人形象頭像照
├── index.html              # 網站主頁面結構
├── style.css               # 樣式表、設計規範與 Liquid Glass 動畫
├── app.js                  # 時鐘引擎、主題切換與資料互動邏輯
├── main.py                 # Python 本地開發伺服器
├── requirements.txt        # DIC-1 作業規格書
├── README.md               # 專案報告與提交說明
└── .gitignore              # Git 版本控制排除規則
```

---

## 🚀 本地啟動與測試 (How to Run Locally)

1. **方式一（Python 伺服器）**：
   在專案目錄下執行以下指令，系統會自動在預設瀏覽器開啟頁面：
   ```bash
   python main.py
   ```
2. **方式二（直接開啟）**：
   直接使用任一現代瀏覽器開啟 `index.html` 即可完整體驗。