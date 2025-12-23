const initialProducts = [
  {
    id: 1,
    name: { zh: "智能温感睡眠枕", en: "Smart Temp Pillow", ar: "وسادة حرارية ذكية" },
    category: "care",
    price: 299,
    image: "https://images.unsplash.com/photo-1584143997623-a5509705a61d?auto=format&fit=crop&q=80&w=800",
    tag: { zh: "热销", en: "Hot", ar: "رائج" },
    desc: {
      zh: "采用太空记忆棉材质，内置高精度温度传感器，能根据体温自动调节枕头软硬度。支持 APP 睡眠监测，早晨智能唤醒。",
      en: "Made of space memory foam with built-in high-precision temperature sensors. Automatically adjusts firmness based on body temperature. Supports APP sleep monitoring and smart wake-up.",
      ar: "مصنوعة من رغوة الذاكرة الفضائية مع أجهزة استشعار درجة الحرارة عالية الدقة. يضبط الصلابة تلقائيًا بناءً على درجة حرارة الجسم. يدعم مراقبة النوم عبر التطبيق والاستيقاظ الذكي."
    }
  },
  {
    id: 2,
    name: { zh: "老人防跌倒雷达", en: "Fall Detection Radar", ar: "رادار كشف السقوط" },
    category: "care",
    price: 1299,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tag: { zh: "医疗级", en: "Medical", ar: "طبي" },
    desc: {
      zh: "毫米波雷达技术，非接触式监测。无需佩戴设备即可识别跌倒姿态，并立即向监护人发送警报。保护隐私，适用于浴室等私密空间。",
      en: "Millimeter-wave radar technology for contactless monitoring. Identifies falls without wearable devices and sends immediate alerts to caregivers. Privacy-safe, suitable for bathrooms.",
      ar: "تقنية رادار الموجات المليمترية للمراقبة غير التلامسية. يحدد السقوط دون الحاجة لأجهزة قابلة للارتداء ويرسل تنبيهات فورية لمقدمي الرعاية. آمن للخصوصية، مناسب للحمامات."
    }
  },
  {
    id: 3,
    name: { zh: "AI 自动喂食器 Pro", en: "AI Feeder Pro", ar: "مغذي ذكي برو" },
    category: "pet",
    price: 599,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    tag: { zh: "新品", en: "New", ar: "جديد" },
    desc: {
      zh: "带摄像头的智能喂食器，AI 识别宠物进食习惯。支持远程双向语音，不仅能喂食，更能陪伴。",
      en: "Smart feeder with camera, AI recognizes pet eating habits. Supports remote two-way voice, not just feeding, but accompanying.",
      ar: "وحدة تغذية ذكية مع كاميرا، يتعرف الذكاء الاصطناعي على عادات أكل الحيوانات الأليفة. يدعم الصوت ثنائي الاتجاه عن بعد، ليس فقط للتغذية، بل للمرافقة."
    }
  },
  {
    id: 4,
    name: { zh: "全屋氛围光律动灯", en: "Ambient Rhythm Light", ar: "إضاءة محيطية ذكية" },
    category: "decor",
    price: 199,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tag: { zh: "", en: "", ar: "" },
    desc: {
      zh: "1600万色无极调光，可随音乐律动。支持 HomeKit 和 Google Home，语音控制，为家增添无限情调。",
      en: "16 million colors stepless dimming, rhythm with music. Supports HomeKit and Google Home, voice control, adding infinite mood to your home.",
      ar: "16 مليون لون تعتيم غير متدرج، إيقاع مع الموسيقى. يدعم HomeKit و Google Home، والتحكم الصوتي، مما يضيف مزاجًا لا نهائيًا لمنزلك."
    }
  },
  {
    id: 5,
    name: { zh: "智能人体工学椅", en: "Smart Ergo Chair", ar: "كرسي مريح ذكي" },
    category: "daily",
    price: 1599,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
    tag: { zh: "舒适", en: "Comfy", ar: "مريح" },
    desc: {
      zh: "内置压力传感器，自动调整腰托位置。久坐提醒功能，通过轻微震动提醒您起身活动。",
      en: "Built-in pressure sensors automatically adjust lumbar support position. Sedentary reminder function alerts you to move with slight vibration.",
      ar: "أجهزة استشعار ضغط مدمجة تضبط موضع دعم أسفل الظهر تلقائيًا. وظيفة التذكير بالجلوس الطويل تنبهك للتحرك باهتزاز خفيف."
    }
  },
  {
    id: 6,
    name: { zh: "宠物情绪识别项圈", en: "Pet Mood Collar", ar: "طوق تتبع مزاج الحيوانات" },
    category: "pet",
    price: 399,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800",
    tag: { zh: "黑科技", en: "Tech", ar: "تقنية" },
    desc: {
      zh: "通过监测心率和叫声频率，AI 分析宠物情绪（开心、焦虑、生气等），让您更懂毛孩子。",
      en: "By monitoring heart rate and barking frequency, AI analyzes pet emotions (happy, anxious, angry, etc.), helping you understand your pet better.",
      ar: "من خلال مراقبة معدل ضربات القلب وتكرار النباح، يقوم الذكاء الاصطناعي بتحليل مشاعر الحيوانات الأليفة (سعيد، قلق، غاضب، إلخ)، مما يساعدك على فهم حيوانك الأليف بشكل أفضل."
    }
  },
];

const categoriesData = [
  { id: "all", name: { zh: "全部商品", en: "All Products", ar: "جميع المنتجات" } },
  { id: "daily", name: { zh: "智慧日用", en: "Smart Daily", ar: "حياة ذكية" }, icon: "Zap", desc: { zh: "人体工学与芯片的结合", en: "Ergonomics meets Chips", ar: "بيئة العمل تلتقي بالرقائق" }, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "care", name: { zh: "智能护理", en: "Smart Care", ar: "رعاية ذكية" }, icon: "Heart", desc: { zh: "全天候无感健康监测", en: "24/7 Health Monitoring", ar: "مراقبة صحية على مدار الساعة" }, color: "text-red-500", bg: "bg-red-50" },
  { id: "pet", name: { zh: "爱宠健康", en: "Pet Health", ar: "صحة الحيوانات" }, icon: "Cat", desc: { zh: "读懂毛孩子的需求", en: "Understand Your Pets", ar: "افهم حيواناتك الأليفة" }, color: "text-orange-500", bg: "bg-orange-50" },
  { id: "decor", name: { zh: "家居装饰", en: "Home Decor", ar: "ديكور المنزل" }, icon: "Sparkles", desc: { zh: "光影随心而动", en: "Light Moves with Mood", ar: "الضوء يتحرك مع المزاج" }, color: "text-purple-600", bg: "bg-purple-50" }
];

export { initialProducts, categoriesData };
