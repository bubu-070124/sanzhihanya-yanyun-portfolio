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
