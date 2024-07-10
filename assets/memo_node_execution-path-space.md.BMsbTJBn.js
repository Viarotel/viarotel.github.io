import{_ as s,o as i,c as a,ah as e}from"./chunks/framework.iWru6dEE.js";const _=JSON.parse('{"title":"在 Node.js 中使用 child_process.exec 或 child_process.spawn 执行包含空格的程序路径","description":"","frontmatter":{},"headers":[],"relativePath":"memo/node/execution-path-space.md","filePath":"memo/node/execution-path-space.md","lastUpdated":1720608291000}'),n={name:"memo/node/execution-path-space.md"},p=e(`<h1 id="在-node-js-中使用-child-process-exec-或-child-process-spawn-执行包含空格的程序路径" tabindex="-1">在 Node.js 中使用 child_process.exec 或 child_process.spawn 执行包含空格的程序路径 <a class="header-anchor" href="#在-node-js-中使用-child-process-exec-或-child-process-spawn-执行包含空格的程序路径" aria-label="Permalink to &quot;在 Node.js 中使用 child_process.exec 或 child_process.spawn 执行包含空格的程序路径&quot;">​</a></h1><p>使用 <code>&quot;&quot;</code> 包裹可执行文件路径</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;child_process&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;C:/Program Files/myApp.exe&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;C:/Program Files/myApp.exe&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,3),t=[p];function h(l,c,d,o,k,r){return i(),a("div",null,t)}const g=s(n,[["render",h]]);export{_ as __pageData,g as default};