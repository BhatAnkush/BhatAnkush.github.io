import { Tile, TileInner } from "@/components/Tile";

export function GitHubActivity() {
  const githubUsername = "bhatankush";
  
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
          <div className="product-shadow overflow-hidden rounded-[var(--radius-lg-token)] bg-[var(--surface-tile-2)] p-4">
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=252527&hide_border=true&title_color=2997ff&text_color=cccccc`}
              />
              <source
                media="(prefers-color-scheme: light)"
                srcSet={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=default&bg_color=1d1d1f&hide_border=true&title_color=0066cc&text_color=cccccc`}
              />
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=252527&hide_border=true&title_color=2997ff&text_color=cccccc`}
                alt="GitHub Stats"
                className="w-full object-contain"
                loading="lazy"
              />
            </picture>
          </div>

          <div className="product-shadow overflow-hidden rounded-[var(--radius-lg-token)] bg-[var(--surface-tile-2)] p-4">
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=252527&hide_border=true&title_color=2997ff&text_color=cccccc`}
              />
              <source
                media="(prefers-color-scheme: light)"
                srcSet={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=default&bg_color=1d1d1f&hide_border=true&title_color=0066cc&text_color=cccccc`}
              />
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=252527&hide_border=true&title_color=2997ff&text_color=cccccc`}
                alt="Top Languages"
                className="w-full object-contain"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </TileInner>
    </Tile>
  );
}
