const mobileButton = document.querySelector('.mobile-menu');
const menu = document.querySelector('.nav-links');
mobileButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  mobileButton.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  mobileButton?.setAttribute('aria-expanded', 'false');
}));
const copyButton = document.getElementById('copyCommands');
copyButton?.addEventListener('click', async () => {
  const content = document.getElementById('commands')?.textContent.trim() || '';
  try {
    await navigator.clipboard.writeText(content);
    copyButton.textContent = 'COPIED ✓';
    setTimeout(() => { copyButton.textContent = 'COPY COMMANDS ⧉'; }, 1700);
  } catch {
    copyButton.textContent = 'SELECT COMMANDS TO COPY';
  }
});
// Optional real demo: add docs/assets/demo.mp4. The placeholder is kept
// when no video is available; we never pretend a recording exists.
const demoFrame = document.getElementById('videoContainer');
fetch('./assets/demo.mp4', { method: 'HEAD' }).then(r => {
  if (!r.ok || !demoFrame) return;
  demoFrame.classList.add('has-video');
  demoFrame.replaceChildren();
  const video = document.createElement('video');
  video.controls = true;
  video.preload = 'metadata';
  video.playsInline = true;
  video.poster = './assets/researchlab-app.png';
  const source = document.createElement('source');
  source.src = './assets/demo.mp4';
  source.type = 'video/mp4';
  video.append(source);
  demoFrame.append(video);
}).catch(() => {});
