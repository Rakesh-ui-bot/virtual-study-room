import './style.css';
import { initTheme } from './src/theme.js';
import { initTimer } from './src/timer.js';
import { initTodo } from './src/todo.js';
import { initMusic } from './src/music.js';
import { initAnalytics } from './src/analytics.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize modules
  initTheme();
  initAnalytics(); // Analytics needs to be initialized before timer/todo
  initTimer();
  initTodo();
  initMusic();
});
