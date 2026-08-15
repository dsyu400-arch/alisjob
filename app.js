const tabs = document.querySelectorAll('.tab');
const table = document.querySelector('.table-scroll');
const emptyState = document.querySelector('#emptyState');
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const hasPositions = tab.dataset.tab === 'positions';
    table.hidden = !hasPositions;
    emptyState.hidden = hasPositions;
  });
});

document.querySelector('#exportBtn').addEventListener('click', () => {
  const rows = [
    ['代码', '名称', '持有金额', '当日盈亏', '持有盈亏', '仓位'],
    ['513530', 'XD港股红', '7885.00', '40.00', '20.29', '33.32%'],
  ];
  const csv = '\ufeff' + rows.map((row) => row.join(',')).join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  link.download = '持仓数据-2026-08-15.csv';
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('持仓数据已导出');
});

document.querySelector('#manageBtn').addEventListener('click', () => showToast('持仓管理功能已就绪'));
document.querySelector('#helpBtn').addEventListener('click', () => showToast('支持 CSV / XLSX 格式的持仓数据'));
document.querySelectorAll('.icon-btn').forEach((button) => button.addEventListener('click', () => showToast(button.getAttribute('aria-label'))));
