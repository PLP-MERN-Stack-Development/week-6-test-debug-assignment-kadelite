# Client-Side Debugging with Browser Developer Tools

## 1. Open DevTools
- **Chrome/Edge:** Press `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac).
- **Firefox:** Press `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac).

## 2. Key Features
- **Elements/Inspector:** Inspect and modify HTML/CSS in real time.
- **Console:** View logs, errors, and run JavaScript commands.
- **Sources:** Set breakpoints, step through code, and debug JavaScript.
- **Network:** Monitor API requests, responses, and performance.
- **Application/Storage:** Inspect localStorage, sessionStorage, cookies, and IndexedDB.
- **Performance:** Record and analyze runtime performance and memory usage.

## 3. Debugging Tips
- Use `console.log`, `console.warn`, and `console.error` to output debug info.
- Set breakpoints in the Sources panel to pause code execution and inspect variables.
- Use the Network tab to debug API calls and check request/response payloads.
- Use the React DevTools extension for component tree inspection and state/props debugging.

## 4. React-Specific Tools
- **React DevTools:**
  - Install from the Chrome Web Store or Firefox Add-ons.
  - Inspect React component hierarchy, props, and state. 

---

# Performance Monitoring & Optimization

## Client (React)
- **Lighthouse:** Use Chrome DevTools Lighthouse tab to audit performance, accessibility, and best practices.
- **React Profiler:** Use React DevTools Profiler tab to analyze component render times and re-renders.
- **Code Splitting:** Use React.lazy and Suspense to split code and load components on demand.
- **Memoization:** Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.
- **Image Optimization:** Use modern formats (WebP/AVIF), lazy loading, and responsive images.
- **Bundle Analysis:** Use tools like `source-map-explorer` or `webpack-bundle-analyzer` to find large dependencies.

## Server (Express/Node.js)
- **express-status-monitor:** Add real-time server metrics dashboard.
- **Logging:** Use Winston/Morgan for request and error logging.
- **Profiling:** Use Node.js built-in profiler or `clinic.js` for CPU/memory profiling.
- **Database Optimization:** Use indexes, lean queries, and connection pooling.
- **Caching:** Use in-memory (Node cache) or distributed (Redis) caching for frequent queries.
- **Load Testing:** Use tools like `autocannon` or `k6` to simulate traffic and find bottlenecks. 