import{_ as a,c as e,o as s,R as t}from"./chunks/framework.5a3d92d1.js";const u=JSON.parse('{"title":"修复设置 npm 私服后 yarn 无法安装包的问题","description":"","frontmatter":{},"headers":[],"relativePath":"memo/web/yarn-private-error.md","lastUpdated":1683106498000}'),n={name:"memo/web/yarn-private-error.md"},o=t('<h1 id="修复设置-npm-私服后-yarn-无法安装包的问题" tabindex="-1">修复设置 npm 私服后 yarn 无法安装包的问题 <a class="header-anchor" href="#修复设置-npm-私服后-yarn-无法安装包的问题" aria-label="Permalink to &quot;修复设置 npm 私服后 yarn 无法安装包的问题&quot;">​</a></h1><blockquote><p>具体表现为 yarn install 提示 error Couldn&#39;t find package &quot;tinycolor2&quot; on the &quot;npm&quot; registry.</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always-auth</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span></code></pre></div>',3),r=[o];function l(p,c,i,_,d,y){return s(),e("div",null,r)}const h=a(n,[["render",l]]);export{u as __pageData,h as default};
