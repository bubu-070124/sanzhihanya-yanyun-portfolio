(() => {
  const changes = {
    '20260115_005': {
      title: '金色废墟噤声特写',
      method: '',
      idea: '同一单主的噤声动作构图：镜头更近，脸部和贴近嘴边的手指更加突出。',
      note: '',
      kind: '作品集'
    },
    '20260215_011': {
      title: '舞狮兄弟 · 火光持刀',
      method: '',
      idea: '橙红火光中的半身持刀画面。',
      note: '',
      kind: '作品集'
    },
    '20260215_019': {
      title: '舞狮兄弟 · 火场全身',
      method: '',
      idea: '保留火场环境与完整人物站姿。',
      note: '',
      kind: '作品集'
    },
    '20260215_024': {
      title: '舞狮兄弟 · 火光近景',
      method: '',
      idea: '横向拍摄的脸部近景，转正后作为竖幅人物特写。',
      note: '',
      kind: '作品集'
    }
  };

  const addedWorks = [
    {
      id: '2026829172233',
      title: '方盘城废墟 · 金羽 · 01',
      place: '河西 · 方盘城废墟',
      method: '场景人像',
      idea: '以金色光效、近景人物与黑白羽翼制造强烈的戏剧氛围。',
      note: '作品集精选',
      kind: '作品集',
      orientation: 'landscape',
      image: 'assets/portfolio-100/2026829172233.jpg'
    },
    {
      id: '2026829171927',
      title: '方盘城废墟 · 金羽 · 02',
      place: '河西 · 方盘城废墟',
      method: '场景人像',
      idea: '竖幅近景突出人物神态、孔雀纹样与羽翼细节。',
      note: '作品集精选',
      kind: '作品集',
      orientation: 'portrait',
      image: 'assets/portfolio-100/2026829171927.jpg'
    },
    {
      id: '202682917542',
      title: '方盘城废墟 · 金羽 · 03',
      place: '河西 · 方盘城废墟',
      method: '场景人像',
      idea: '人物手持发光器物，利用满画面的金色光点强化力量感。',
      note: '作品集精选',
      kind: '作品集',
      orientation: 'landscape',
      image: 'assets/portfolio-100/202682917542.jpg'
    },
    {
      id: '2026829154933',
      title: '梦中不羡仙 · 外部 · 01',
      place: '梦中不羡仙 · 竹林',
      method: '场景人像',
      idea: '以水岸、芦苇与樱花衬托人物和猫咪，保留轻松安静的相处感。',
      note: '梦中不羡仙外部',
      kind: '作品集',
      orientation: 'landscape',
      image: 'assets/portfolio-100/2026829154933.jpg'
    },
    {
      id: '2026829161630',
      title: '梦中不羡仙 · 竹林 · 01',
      place: '梦中不羡仙 · 竹林',
      method: '场景人像',
      idea: '以竹林、薄雾与人物近景形成清冷安静的氛围，突出人物神态与手中饰物。',
      note: '作品集精选',
      kind: '作品集',
      orientation: 'landscape',
      image: 'assets/portfolio-100/2026829161630.jpg'
    },
    {
      id: '20260824_free_template_golden_spark',
      title: '金光蝶影',
      place: '地点待补充',
      method: '场景人像',
      idea: '以人物侧脸与金色粒子作为主视觉，留出左侧光点和蝴蝶，方便套用时调整人物朝向与明暗关系。',
      note: '免费模板',
      kind: '免费模板',
      orientation: 'landscape',
      image: 'assets/portfolio-100/template-golden-spark-20260824.jpg'
    }
  ];

  window.portfolioWorks = [
    ...addedWorks,
    ...(window.portfolioWorks || []).map((work) =>
      changes[work.id] ? { ...work, ...changes[work.id] } : work
    )
  ];
})();
