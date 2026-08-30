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
    { id: '20267311893', title: '个人拍着玩 · 弓箭 · 01', place: '地点待补充', method: '场景人像', idea: '保留原始横构图，突出人物、弓箭与室内光影。', note: '个人拍着玩', kind: '个人拍着玩', orientation: 'landscape', image: 'assets/portfolio-100/20267311893.jpg' },
    { id: '2026820221457', title: '江南 · 斗笠 · 01', place: '江南', method: '场景人像', idea: '以斗笠、暖墙和枝叶阴影构成江南巷间的人物小景。', note: '个人拍着玩', kind: '个人拍着玩', orientation: 'landscape', image: 'assets/portfolio-100/2026820221457.jpg' },
    { id: '2026820223216', title: '江南 · 斗笠 · 02', place: '江南', method: '场景人像', idea: '保留原始横构图，呈现竹帘、斗笠和人物姿态。', note: '个人拍着玩', kind: '个人拍着玩', orientation: 'landscape', image: 'assets/portfolio-100/2026820223216.jpg' },
    { id: '2026820224234', title: '江南 · 书页 · 01', place: '江南', method: '场景人像', idea: '以室内斜照光影和书页细节表现安静的日常场景。', note: '江南npc', kind: '个人拍着玩', orientation: 'landscape', image: 'assets/portfolio-100/2026820224234.jpg' },
    { id: 'retouch-20260823-182315', title: '黑夜天气 · 冰蓝 · 01', place: '黑夜天气', method: '场景人像', idea: '以夜色、冰蓝光点和人物侧影营造冷冽而神秘的氛围。', note: '作品集精选', kind: '作品集', orientation: 'landscape', image: 'assets/portfolio-100/retouch-20260823-182315.jpg' },
    { id: '202682316625', title: '江南 · 荷叶 · 01', place: '江南', method: '场景人像', idea: '旋转为竖幅后，以荷叶、绿发与水面倒影构成清新的江南画面。', note: '作品集精选', kind: '作品集', orientation: 'portrait', image: 'assets/portfolio-100/202682316625.jpg' },
    { id: '2026827235543', title: '无明春山 · 赤月 · 01', place: '无明春山', method: '场景人像', idea: '以赤月与红黑造型构成强烈的暗色人物肖像。', note: '作品集精选', kind: '作品集', orientation: 'portrait', image: 'assets/portfolio-100/2026827235543.jpg' },
    { id: '2026827225016', title: '无明春山 · 赤焰 · 02', place: '无明春山', method: '场景人像', idea: '以俯拍角度、炽热光源和人物侧脸制造张力。', note: '作品集精选', kind: '作品集', orientation: 'landscape', image: 'assets/portfolio-100/2026827225016.jpg' },
    { id: '2026827232634', title: '无明春山 · 赤焰 · 03', place: '无明春山', method: '场景人像', idea: '用手部动作和面具细节收紧画面，强化人物情绪。', note: '作品集精选', kind: '作品集', orientation: 'landscape', image: 'assets/portfolio-100/2026827232634.jpg' },
    { id: '2026827234819', title: '无明春山 · 赤月 · 04', place: '无明春山', method: '场景人像', idea: '利用深色留白与侧光突出人物轮廓和服装质感。', note: '作品集精选', kind: '作品集', orientation: 'landscape', image: 'assets/portfolio-100/2026827234819.jpg' },
    {
      id: '2026829172233',
      title: '河西湖泊 · 金色流光全身',
      place: '河西 · 湖泊',
      method: '场景人像',
      idea: '以金色光效、近景人物与黑白羽翼制造强烈的戏剧氛围。',
      note: '作品集精选',
      kind: '作品集',
      orientation: 'landscape',
      image: 'assets/portfolio-100/2026829172233.jpg'
    },
    {
      id: '2026829171927',
      title: '河西湖泊 · 金色流光近景',
      place: '河西 · 湖泊',
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
