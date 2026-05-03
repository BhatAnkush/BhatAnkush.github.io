export function GitHubActivity() {
  const githubUsername = "bhatankush";
  
  return (
    <section id="github-activity" className="py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">GitHub Activity</h2>
        <p className="mt-2 text-muted-foreground">Check out my latest contributions and repositories on GitHub.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Stats Card */}
        <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/20 p-2 sm:p-4 flex items-center justify-center min-h-[200px]">
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=0a0a0a&hide_border=true&title_color=3b82f6&text_color=888888`}
            />
            <source
              media="(prefers-color-scheme: light)"
              srcSet={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=default&bg_color=ffffff&hide_border=true&title_color=3b82f6`}
            />
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=0a0a0a&hide_border=true&title_color=3b82f6&text_color=888888`}
              alt="GitHub Stats"
              className="w-full max-w-md object-contain"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Top Languages Card */}
        <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/20 p-2 sm:p-4 flex items-center justify-center min-h-[200px]">
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=0a0a0a&hide_border=true&title_color=3b82f6&text_color=888888`}
            />
            <source
              media="(prefers-color-scheme: light)"
              srcSet={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=default&bg_color=ffffff&hide_border=true&title_color=3b82f6`}
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=0a0a0a&hide_border=true&title_color=3b82f6&text_color=888888`}
              alt="Top Languages"
              className="w-full max-w-md object-contain"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
