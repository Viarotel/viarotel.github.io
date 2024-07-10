import{_ as s,o as a,c as i,ah as e}from"./chunks/framework.iWru6dEE.js";const u=JSON.parse('{"title":"Git 上传可执行程序权限问题","description":"","frontmatter":{},"headers":[],"relativePath":"memo/git/upload-executable-permission.md","filePath":"memo/git/upload-executable-permission.md","lastUpdated":1720608291000}'),t={name:"memo/git/upload-executable-permission.md"},h=e('<h1 id="git-上传可执行程序权限问题" tabindex="-1">Git 上传可执行程序权限问题 <a class="header-anchor" href="#git-上传可执行程序权限问题" aria-label="Permalink to &quot;Git 上传可执行程序权限问题&quot;">​</a></h1><h2 id="单个" tabindex="-1">单个 <a class="header-anchor" href="#单个" aria-label="Permalink to &quot;单个&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-index</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chmod=+x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;electron/resources/extra/adb.exe&quot;</span></span></code></pre></div><h2 id="批量" tabindex="-1">批量 <a class="header-anchor" href="#批量" aria-label="Permalink to &quot;批量&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;electron/resources/extra&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-index</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chmod=+x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span></span></code></pre></div><h2 id="查看权限" tabindex="-1">查看权限 <a class="header-anchor" href="#查看权限" aria-label="Permalink to &quot;查看权限&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stage</span></span></code></pre></div>',7),n=[h];function l(p,d,o,r,k,c){return a(),i("div",null,n)}const F=s(t,[["render",l]]);export{u as __pageData,F as default};