const works = window.portfolioWorks || [];
const gallery = document.querySelector('#gallery');
const filterBar = document.querySelector('#filters');
const kindBar = document.querySelector('#kind-filters');
const kindOrder = ['全部', '作品集', '免费模板', '个人拍着玩'];
const filterOrder = ['全部', '河西 · 方盘城废墟', '试炼 · 猫咪', '试炼 · 天禄', '试炼 · 望月', '试炼 · 郑愕', '试炼 · 萧翰', '试炼 · 赵大哥', '试炼 · 裴航二阶段', '试炼 · 河伯', '无界山 · 碧水云涛', '无界山 · 滹沱', '梦中不羡仙 · 竹林', '月湖暗道', '无相皇镇守', '弱水岸镇守', '开封 · 鬼市', '无相之地', '皇宫地图', '试炼 · 听梅', '凉州', '试炼 · 舞狮兄弟', '奇术特效 · 衍九矢', '奇术特效 · 自在无碍', '无界山 · 七色坪（黄花）'];
let activeKind = '全部';
let activePlace = '全部';
const featuredByPlace = {
  '无界山 · 滹沱': '20260319_hutuo_boat_wide',
  '试炼 · 望月': '20260306_004',
  '开封 · 鬼市': '20260311_002',
  '凉州': '20260717_liangzhou_lantern'
};
const shortPlace = place => place.replace('河西 · ', '').replace('试炼 · ', '').replace('无界山 · ', '');
function visibleWorks() {
  const showing = works.filter(work => (activeKind === '全部' || work.kind === activeKind) && (activePlace === '全部' || work.place === activePlace || work.place.startsWith(`${activePlace}（`)));
  const featured = featuredByPlace[activePlace] || (activeKind === '免费模板' ? '20260311_002' : null);
  return featured ? showing.sort((a, b) => (a.id === featured ? -1 : 0) - (b.id === featured ? -1 : 0)) : showing;
}
function render() {
  kindBar.innerHTML = kindOrder.filter(kind => kind === '全部' || works.some(work => work.kind === kind)).map(kind => `<button class="filter ${kind === activeKind ? 'is-active' : ''}" data-kind="${kind}">${kind}</button>`).join('');
  const byKind = works.filter(work => activeKind === '全部' || work.kind === activeKind);
  filterBar.innerHTML = filterOrder.filter(place => place === '全部' || byKind.some(work => work.place === place || work.place.startsWith(`${place}（`))).map(place => `<button class="filter ${place === activePlace ? 'is-active' : ''}" data-filter="${place}">${shortPlace(place)}</button>`).join('');
  const showing = visibleWorks();
gallery.innerHTML = showing.length ? showing.map(work => `<button class="work-card ${work.orientation || 'landscape'}" data-id="${work.id}"><img loading="lazy" src="${work.image}" alt="${work.title}，${work.place}"><span class="photo-watermark photo-watermark--card" aria-hidden="true"><span class="watermark-mark">☾</span><span class="watermark-name">三只寒鸦</span><span class="watermark-sub">YAN YUN PHOTO</span></span><span class="card-overlay"><b>${work.title}</b><small>${work.place}</small></span></button>`).join('') : '<p class="empty">这个分类的代表图正在整理中。</p>';
}
kindBar.addEventListener('click', event => { const button = event.target.closest('[data-kind]'); if (!button) return; activeKind = button.dataset.kind; activePlace = '全部'; render(); });
filterBar.addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; activePlace = button.dataset.filter; render(); });
const dialog = document.querySelector('#work-dialog');
gallery.addEventListener('click', event => { const card = event.target.closest('[data-id]'); if (!card) return; const work = works.find(item => item.id === card.dataset.id); document.querySelector('#dialog-image').src = work.image; document.querySelector('#dialog-image').alt = work.title; document.querySelector('#dialog-type').textContent = work.kind; document.querySelector('#dialog-title').textContent = work.title; document.querySelector('#dialog-place').textContent = work.place; document.querySelector('#dialog-method').textContent = work.method; document.querySelector('#dialog-idea').textContent = work.idea; document.querySelector('#dialog-note').textContent = work.note; dialog.showModal(); });
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
render();
