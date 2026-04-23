export default function decorate(block) {
  const items = [...block.children];
  const container = document.createElement('div');
  container.className = 'carousel-container';
  items.forEach((item) => {
    item.className = 'carousel-item';
    container.append(item);
  });
  block.textContent = '';
  block.append(container);
}
