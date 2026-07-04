document.addEventListener('DOMContentLoaded', () => {
  // PJAX link handler
  const handleLinkClick = async (e) => {
    const link = e.currentTarget;
    const url = link.getAttribute('href');
    if (!url) return;
    
    e.preventDefault();
    await loadPage(url);
  };

  const setupLinks = () => {
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      if (
        href && 
        (href.startsWith('/') || href.startsWith(window.location.origin)) &&
        !link.hasAttribute('download') &&
        link.getAttribute('target') !== '_blank' &&
        !link.hasAttribute('data-no-pjax')
      ) {
        link.removeEventListener('click', handleLinkClick);
        link.addEventListener('click', handleLinkClick);
      }
    });
  };

  const loadPage = async (url) => {
    try {
      const container = document.getElementById('main-content');
      if (!container) return;

      // Add loading state
      document.body.classList.add('pjax-loading');
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch page');
      
      const html = await response.text();
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html, 'text/html');
      
      const newContent = newDoc.getElementById('main-content');
      if (!newContent) {
        // Fallback to traditional redirect if structure doesn't match
        window.location.href = url;
        return;
      }
      
      // Update browser history & title
      window.history.pushState({}, '', url);
      document.title = newDoc.title;
      
      // Swap content
      container.innerHTML = newContent.innerHTML;
      
      // Re-initialize Alpine.js on the new tree
      if (window.Alpine) {
        window.Alpine.initTree(container);
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Update active links in navigation
      updateActiveNavLinks();
      
      // Re-setup links on new content
      setupLinks();
      
      // Dispatch page changed event
      document.dispatchEvent(new CustomEvent('pjax:complete'));
    } catch (err) {
      console.warn('PJAX error, falling back to full load:', err);
      window.location.href = url; // Fallback
    } finally {
      document.body.classList.remove('pjax-loading');
    }
  };

  const updateActiveNavLinks = () => {
    const currentPath = window.location.pathname;
    
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || link.getAttribute('data-active-prefix');
      if (!href) return;
      
      const isHomeActive = currentPath === '/' && href === '/';
      const isSubpageActive = href !== '/' && currentPath.startsWith(href);
      
      if (isHomeActive || isSubpageActive) {
        link.classList.add('text-white', 'font-semibold');
        link.classList.remove('text-cream/90');
      } else {
        link.classList.remove('text-white', 'font-semibold');
        link.classList.add('text-cream/90');
      }
    });
  };

  // Listen to popstate (back/forward browser buttons)
  window.addEventListener('popstate', () => {
    loadPage(window.location.pathname);
  });

  // Initial setups
  setupLinks();
  updateActiveNavLinks();
});
