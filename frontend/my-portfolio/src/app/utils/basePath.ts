export const getBasePath = () => {
  if (typeof window !== 'undefined') {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const repoName = 'Portfolio'; 
    return isGitHubPages ? `/${repoName}` : '';
  }
  return '';
};

