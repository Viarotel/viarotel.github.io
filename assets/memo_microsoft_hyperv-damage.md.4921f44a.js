import{_ as a,o as e,c as s,R as o}from"./chunks/framework.bdd825cc.js";const h=JSON.parse('{"title":"Hyper-V 删除损坏的虚拟机","description":"","frontmatter":{},"headers":[],"relativePath":"memo/microsoft/hyperv-damage.md","filePath":"memo/microsoft/hyperv-damage.md","lastUpdated":1683620540000}'),t={name:"memo/microsoft/hyperv-damage.md"},n=o(`<h1 id="hyper-v-删除损坏的虚拟机" tabindex="-1">Hyper-V 删除损坏的虚拟机 <a class="header-anchor" href="#hyper-v-删除损坏的虚拟机" aria-label="Permalink to &quot;Hyper-V 删除损坏的虚拟机&quot;">​</a></h1><blockquote><p>注意: 必须在管理员权限下执行</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 获取虚拟机列表</span></span>
<span class="line"><span style="color:#FFCB6B;">vm-get</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除指定虚拟机</span></span>
<span class="line"><span style="color:#FFCB6B;">remove-vm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Windows10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-force</span></span></code></pre></div>`,3),l=[n];function p(r,c,i,m,d,_){return e(),s("div",null,l)}const f=a(t,[["render",p]]);export{h as __pageData,f as default};