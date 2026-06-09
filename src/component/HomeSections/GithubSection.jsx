"use client";
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub, FaCodeBranch, FaStar, FaCodeCommit, FaBookBookmark } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const GithubSection = () => {
  const [stats, setStats] = useState({ repos: 0, stars: 0, commits: 0, followers: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchStats = async () => {
      try {
        // Fetch user profile (repos, followers)
        const userRes = await fetch('https://api.github.com/users/Topan-Roy');
        const userData = await userRes.json();

        // Fetch repos to count stars
        const reposRes = await fetch('https://api.github.com/users/Topan-Roy/repos?per_page=100');
        const reposData = await reposRes.json();
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Fetch TOTAL commits using the contributions calendar API
        const calRes = await fetch('https://github-contributions-api.jogruber.de/v4/Topan-Roy?y=all');
        const calData = await calRes.json();
        const totalCommits = calData.total
          ? Object.values(calData.total).reduce((a, b) => a + b, 0)
          : 0;

        setStats({
          repos: userData.public_repos || reposData.length,
          stars: totalStars,
          commits: totalCommits,
          followers: userData.followers || 0,
        });
      } catch (err) {
        console.error('GitHub API error:', err);
      }
    };
    fetchStats();
  }, []);

  const cyanTheme = {
    dark: ['#0f172a', '#083344', '#0e7490', '#06b6d4', '#22d3ee'],
  };

  const statItems = [
    { icon: <FaBookBookmark className="text-cyan-400 text-2xl mb-2" />, label: 'Repositories', value: stats.repos },
    { icon: <FaStar className="text-yellow-400 text-2xl mb-2" />, label: 'Stars Earned', value: stats.stars },
    { icon: <FaCodeCommit className="text-emerald-400 text-2xl mb-2" />, label: 'Recent Commits', value: `${stats.commits}+` },
    { icon: <FaCodeBranch className="text-purple-400 text-2xl mb-2" />, label: 'Followers', value: stats.followers },
  ];

  return (
    <section id="github" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading mb-16 lg:text-center">
          <p className="section-kicker">Contributions & Activity</p>
          <h2 className="section-title">Code. Commit. Push. Repeat.</h2>
          <p className="mt-5 text-base leading-7 text-slate-300 max-w-2xl lg:mx-auto">
            This graph represents my dedication to continuous learning. I believe in writing code every single day to solve problems and build real-world applications.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1 shadow-2xl">
          <div className="bg-[#0a1519] rounded-[22px] p-6 sm:p-10 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 relative z-10 border-b border-white/5 pb-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 p-[2px]">
                  <div className="w-full h-full bg-[#071013] rounded-full flex items-center justify-center">
                    <FaGithub className="text-3xl text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Topan-Roy</h3>
                  <a href="https://github.com/Topan-Roy" target="_blank" rel="noreferrer" className="text-cyan-400 text-sm font-medium hover:underline">
                    github.com/Topan-Roy
                  </a>
                </div>
              </div>
              <a href="https://github.com/Topan-Roy" target="_blank" rel="noreferrer" className="px-6 py-2.5 text-sm rounded-full flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 transition-all text-white font-medium">
                <FaStar className="text-yellow-400" /> View on GitHub
              </a>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 relative z-10">
              {statItems.map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center text-center hover:border-cyan-400/30 transition-colors">
                  {item.icon}
                  <span className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">{item.label}</span>
                  <strong className="text-white mt-1 text-xl sm:text-2xl font-bold tabular-nums">
                    {item.value || '—'}
                  </strong>
                </div>
              ))}
            </div>

            {/* Calendar */}
            <div className="flex justify-center overflow-x-auto pb-4 scrollbar-hide relative z-10 min-h-[150px]">
              {mounted && (
                <GitHubCalendar
                  username="Topan-Roy"
                  colorScheme="dark"
                  theme={cyanTheme}
                  blockSize={15}
                  blockMargin={5}
                  fontSize={14}
                />
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
