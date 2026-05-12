"use client";

import { useEffect, useState } from "react";
import { Tile, TileInner } from "@/components/Tile";
import { Star, GitFork, Code } from "lucide-react";
import { GithubIcon } from "../Icons/GithubIcon";
import { HyperText } from "../ui/hyper-text";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

interface LanguageData {
  name: string;
  bytes: number;
  percentage: number;
}

export function GitHubActivity() {
  const githubUsername = "BhatAnkush";
  const [repos, setRepos] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch recent repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`
        );
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();

        setRepos(reposData);

        // Calculate languages
        const languageMap = new Map<string, number>();
        reposData.forEach((repo: any) => {
          if (repo.language) {
            languageMap.set(repo.language, (languageMap.get(repo.language) || 0) + 1);
          }
        });

        const totalRepos = languageMap.size > 0 ? Array.from(languageMap.values()).reduce((a, b) => a + b, 0) : 1;
        const languageData = Array.from(languageMap.entries())
          .map(([name, count]) => ({
            name,
            bytes: count,
            percentage: (count / totalRepos) * 100,
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 6);

        setLanguages(languageData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load GitHub data');
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [githubUsername]);

  if (loading) {
    return (
      <Tile id="github-activity" surface="dark3" className="section-padding">
        <TileInner wide>
          <div className="mb-10">
           <HyperText>GitHub Activity</HyperText>
            <p className="mt-2 t-body text-[var(--on-dark-muted)]">
              Check out my latest contributions and repositories on GitHub.
            </p>
          </div>
          <div className="flex items-center justify-center py-20">
            <div className="text-[var(--on-dark-muted)]">Loading GitHub data...</div>
          </div>
        </TileInner>
      </Tile>
    );
  }

  if (error) {
    return (
      <Tile id="github-activity" surface="dark3" className="section-padding">
        <TileInner wide>
          <div className="mb-10">
            <h2 className="t-display-lg text-[var(--on-dark)]">GitHub Activity</h2>
            <p className="mt-2 t-body text-[var(--on-dark-muted)]">
              Check out my latest contributions and repositories on GitHub.
            </p>
          </div>
          <div className="flex items-center justify-center py-20">
            <div className="text-red-400">Error: {error}</div>
          </div>
        </TileInner>
      </Tile>
    );
  }

  return (
    <Tile id="github-activity" surface="dark3" className="section-padding">
      <TileInner wide>
        <div className="mb-10">
          <h2 className="t-display-lg text-[var(--on-dark)]">GitHub Activity</h2>
          <p className="mt-2 t-body text-[var(--on-dark-muted)]">
            Check out my latest contributions and repositories on GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Repositories */}
          <div className="product-shadow overflow-hidden rounded-[var(--radius-lg-token)] bg-[var(--surface-tile-2)] p-6">
            <div className="mb-6 flex items-center gap-2">
              <GithubIcon/>
              <h3 className="t-display-sm text-[var(--on-dark)]">Recent Repositories</h3>
            </div>
            <div className="space-y-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-[var(--surface-tile-1)] p-4 transition-colors hover:bg-[var(--surface-tile-1)]/80"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h4 className="t-button-utility font-medium text-[var(--on-dark)]">{repo.name}</h4>
                    <span className="t-caption shrink-0 text-[var(--on-dark-muted)]">
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                  {repo.description && (
                    <p className="mb-3 line-clamp-2 t-caption text-[var(--on-dark-muted)]">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 t-caption text-[var(--on-dark-muted)]">
                        <Code className="size-3" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 t-caption text-[var(--on-dark-muted)]">
                      <Star className="size-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1.5 t-caption text-[var(--on-dark-muted)]">
                      <GitFork className="size-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            {repos.length === 0 && (
              <div className="py-8 text-center text-[var(--on-dark-muted)]">No repositories found</div>
            )}
            <a
              href={`https://github.com/${githubUsername}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--primary-action)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <GithubIcon />
              View All Repositories
            </a>
          </div>

          {/* Top Languages */}
          <div className="product-shadow overflow-hidden rounded-[var(--radius-lg-token)] bg-[var(--surface-tile-2)] p-6">
            <div className="mb-6 flex items-center gap-2">
              <Code className="size-5 text-[var(--primary-action)]" />
              <h3 className="t-display-sm text-[var(--on-dark)]">Top Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="t-body text-[var(--on-dark)]">{lang.name}</span>
                    <span className="t-caption text-[var(--on-dark-muted)]">{lang.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-tile-1)]">
                    <div
                      className="h-full rounded-full bg-[var(--primary-action)] transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {languages.length === 0 && (
              <div className="py-8 text-center text-[var(--on-dark-muted)]">No language data available</div>
            )}
          </div>
        </div>
      </TileInner>
    </Tile>
  );
}