if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.dc621b65.css",revision:"a8b131853787cdff07219b9cbf2fe19f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.ec7b7c88.js",revision:"0c2e56e56c98ef61e2a9b00302808f95"},{url:"assets/js/35.166c004a.js",revision:"196e7b82af0e3fab859e27100d3a4ed2"},{url:"assets/js/36.81d07db0.js",revision:"08a9201931eaeb045933904909b1e49a"},{url:"assets/js/37.0b396837.js",revision:"e1afd658da6e4fe32d267851db06a0ef"},{url:"assets/js/38.3fc1c440.js",revision:"d2ceee17651bce562293f546b59eb511"},{url:"assets/js/39.4c539e5b.js",revision:"841ce3e57fc930c75d7014c43297a988"},{url:"assets/js/app.b4a8682e.js",revision:"d02194365e1b1e005280523301413424"},{url:"assets/js/layout-Blog.888cdc24.js",revision:"67b508ec10e3505f093c974034568b13"},{url:"assets/js/layout-Layout.0f99aa0c.js",revision:"a0901909a3803a3409db0dd824fea090"},{url:"assets/js/layout-NotFound.65f72caa.js",revision:"91b3776c850d427cd62fe8449884cf22"},{url:"assets/js/layout-Slide.1be6b1d1.js",revision:"eb411eb13178826d96863dab8ad47c8f"},{url:"assets/js/mermaid.41b440b9.js",revision:"0eda834bba391e1bc55b9ce49f067dce"},{url:"assets/js/page-BlogHome.9756a466.js",revision:"781c5995861007b0b90fd033f5d00215"},{url:"assets/js/page-Componentdisabled.f7400488.js",revision:"6bf76261b35731b9c5ce6f151fb16523"},{url:"assets/js/page-CustomLayout.f421957d.js",revision:"1c9a407c8525e6fec2ec49bd5f0dfd33"},{url:"assets/js/page-Encryptionarticle.5870a51a.js",revision:"8abf1452f881f15ab73efb063417f9ac"},{url:"assets/js/page-Guides.371256c6.js",revision:"961568dbe9ec28c526d3609c6623df8c"},{url:"assets/js/page-IntroPage.831f9644.js",revision:"002dbb9c65571cfe3e4e71fe495070f0"},{url:"assets/js/page-MarkdownEnhance.988d9f57.js",revision:"495f146749bd1185d68e13ac9e836fec"},{url:"assets/js/page-Markdown增强.be59b3a0.js",revision:"f0681266f168c8e242a7cdb94cc0477b"},{url:"assets/js/page-pageconfig.8714b73c.js",revision:"f51756356c606e94bb29bc6aa378e95e"},{url:"assets/js/page-Projecthome.95eaa544.js",revision:"7d9f9e86c46421701407b8ac83086964"},{url:"assets/js/page-Slidepage.0510b620.js",revision:"03a833360c51ae443ca1b4173004dc35"},{url:"assets/js/page-主要功能与配置演示.11ccf760.js",revision:"77b9a10145a0fbecb8e5dbbbc58b8daa"},{url:"assets/js/page-博客主页.185eeef2.js",revision:"1e5938103eaaea00b02c8faa77aa9967"},{url:"assets/js/page-密码加密的文章.e1c27420.js",revision:"7f2a0d21f57b219dcd8485ed7cad0805"},{url:"assets/js/page-幻灯片页.d933dba2.js",revision:"1699adc12083456437fb63fee2219b17"},{url:"assets/js/page-组件禁用.79cd77d8.js",revision:"1641b6e6ad7fb3a5a01298bb22c810db"},{url:"assets/js/page-自定义布局.0052abb9.js",revision:"fd8dc05c7fc33c8fcd8b0d289d82201b"},{url:"assets/js/page-页面配置.deecf5bc.js",revision:"305c3efea22f8cc9ceff3ef72f04e277"},{url:"assets/js/page-项目主页.37286164.js",revision:"4a3d125a1310f8c1fa2b52b732c86160"},{url:"assets/js/vendors~flowchart.0120d66e.js",revision:"d47143b833eaabafa2292a2bdc40f4a3"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fc6246dc.js",revision:"0b532eb98ef68f1510f9f2fd9e2a1171"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.9cb1f6d8.js",revision:"42571f198cf96297cf1fde84699c3b4e"},{url:"assets/js/vendors~layout-Layout.63f495ba.js",revision:"d9c4ce8b9451803aca3398c91f53f5c9"},{url:"assets/js/vendors~mermaid.099d6f75.js",revision:"1ad29defd650df125939cf5eb08b83c2"},{url:"assets/js/vendors~photo-swipe.ea09ae9b.js",revision:"a8647398f94be48b72fbe1d41bbdfe2d"},{url:"assets/js/vendors~reveal.909aee5f.js",revision:"c5857c6ea90e6efa0f322f6c1c3fb5e1"},{url:"assets/js/vendors~waline.34abd63f.js",revision:"4c83217bccaaf03f7ffb06ce81fab168"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.3e94a45c.ttf",revision:"3e94a45ca214f93c9774291237bb393e"},{url:"assets/fonts/KaTeX_AMS-Regular.7bc59ee9.woff",revision:"7bc59ee9f9ad43040a2ff34a912bec13"},{url:"assets/fonts/KaTeX_AMS-Regular.92297720.woff2",revision:"92297720a8aaa0d239940bf10509fa1f"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4c370560.ttf",revision:"4c37056017b7f742eeb8851510f4971a"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.096ac2cc.ttf",revision:"096ac2cc25065eeca89ca560d0a51b1a"},{url:"assets/fonts/KaTeX_Fraktur-Bold.06e6c3f3.ttf",revision:"06e6c3f3900bf855fe69c6adbf2b59ac"},{url:"assets/fonts/KaTeX_Fraktur-Bold.5ec2d705.woff2",revision:"5ec2d70532268860be506b06c8c82615"},{url:"assets/fonts/KaTeX_Fraktur-Bold.8518f4fe.woff",revision:"8518f4fec3f73b37b3693f3625bc146b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.56d671ca.woff2",revision:"56d671ca5dc88ca20911bddc5a84c9fb"},{url:"assets/fonts/KaTeX_Fraktur-Regular.c5953fef.woff",revision:"c5953fefe37f48064e17b75ff607fc0d"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e78f1f02.ttf",revision:"e78f1f025d28668ddcaa2791fc818436"},{url:"assets/fonts/KaTeX_Main-Bold.36af3e91.woff",revision:"36af3e91a84645afe0e40be8046fba86"},{url:"assets/fonts/KaTeX_Main-Bold.5c603567.ttf",revision:"5c6035670847d3c6f8af38393b04eee9"},{url:"assets/fonts/KaTeX_Main-Bold.d94e53ed.woff2",revision:"d94e53ed77ae219e76e90cf02e7d627d"},{url:"assets/fonts/KaTeX_Main-BoldItalic.addf8657.woff2",revision:"addf865739892218570c00053c6c02dc"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ceb7b930.woff",revision:"ceb7b93007c7e338f635833a4259a14b"},{url:"assets/fonts/KaTeX_Main-BoldItalic.dde48012.ttf",revision:"dde48012334937d446600e982f5d8522"},{url:"assets/fonts/KaTeX_Main-Italic.2bc9206b.woff",revision:"2bc9206b7e2d0c75941d4930b1990e49"},{url:"assets/fonts/KaTeX_Main-Italic.890a6b3f.ttf",revision:"890a6b3ff7159ac41c71ccd2c4e76323"},{url:"assets/fonts/KaTeX_Main-Italic.c24bf2da.woff2",revision:"c24bf2da2b956b13ba8101dda48a2d77"},{url:"assets/fonts/KaTeX_Main-Regular.16df5fa9.woff",revision:"16df5fa99e77eff4b91a4f3423b761d4"},{url:"assets/fonts/KaTeX_Main-Regular.46b1ffa6.woff2",revision:"46b1ffa6b7af252c4f89e7c8d757a39f"},{url:"assets/fonts/KaTeX_Main-Regular.d866ab9b.ttf",revision:"d866ab9ba6d5654e524ec6bd5e1d5a14"},{url:"assets/fonts/KaTeX_Math-BoldItalic.a562e8c1.woff",revision:"a562e8c1abe0de60ffc1f77ed9412327"},{url:"assets/fonts/KaTeX_Math-BoldItalic.bb40192b.woff2",revision:"bb40192b2e03ed2f0fa8ee17ff587fd3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.cbf87238.ttf",revision:"cbf872382693c0b1c71f5df380206d7a"},{url:"assets/fonts/KaTeX_Math-Italic.92281c86.woff",revision:"92281c86717a2642f166728a8973f3f9"},{url:"assets/fonts/KaTeX_Math-Italic.96c61839.ttf",revision:"96c61839461dd0264a18a65a39212a62"},{url:"assets/fonts/KaTeX_Math-Italic.c359b8d5.woff2",revision:"c359b8d5e269eaf907baa338587ca80e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.26f259e4.woff",revision:"26f259e4e6c41f013a51f790e3a7dd0c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.95392fb8.woff2",revision:"95392fb82420439d0c3bb9f2d414f83c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.cb7f745a.ttf",revision:"cb7f745a9094fa659195d2d6f13711eb"},{url:"assets/fonts/KaTeX_SansSerif-Italic.7de8e4ae.woff2",revision:"7de8e4ae08eaaeb10a5112ce7f09ba80"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9c330d9e.ttf",revision:"9c330d9e5674fd3e79c644e451240331"},{url:"assets/fonts/KaTeX_SansSerif-Italic.a8f101e8.woff",revision:"a8f101e81769f08428b1e01d4b04c033"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3ad86448.woff2",revision:"3ad86448e4a27c0e4a9b4e333aebeaa7"},{url:"assets/fonts/KaTeX_SansSerif-Regular.63e176e6.ttf",revision:"63e176e62748655e2076a07a12cc9355"},{url:"assets/fonts/KaTeX_SansSerif-Regular.df1117b1.woff",revision:"df1117b1c61ba086c7c286b4132350d3"},{url:"assets/fonts/KaTeX_Script-Regular.1e0cfc32.woff",revision:"1e0cfc3296ecafedbd818c2dd8e42d44"},{url:"assets/fonts/KaTeX_Script-Regular.52316064.ttf",revision:"52316064070cd6860d779f6a1185633e"},{url:"assets/fonts/KaTeX_Size1-Regular.f8369ce8.ttf",revision:"f8369ce8f0adc37a0654c8e989499e7c"},{url:"assets/fonts/KaTeX_Size2-Regular.90b50b45.ttf",revision:"90b50b453237cd955bbe7b979bb7345a"},{url:"assets/fonts/KaTeX_Size4-Regular.70d01e49.ttf",revision:"70d01e490e97425d479807ea319ceed5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.099e00d5.woff2",revision:"099e00d5873cd2d4ef3ca5d23c23c313"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f005719.ttf",revision:"2f0057192d241cb99d64bba848b0164a"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f78c7d7.woff",revision:"2f78c7d76fe78153d0ca675b3923507d"},{url:"404.html",revision:"44b30fd6ad3741092499a99836a34498"},{url:"article/index.html",revision:"26a7641da0ee45bbee82c0b68b01fd10"},{url:"category/Guide/index.html",revision:"63824f32f086c0cfca3ba365ba783fdf"},{url:"category/index.html",revision:"e1908989ba925c7e22d4481e3e58e018"},{url:"category/使用指南/index.html",revision:"58806260be7698313acabdc1de66af69"},{url:"encrypt/index.html",revision:"7032ee872e99955f8952d04d0b7bec5e"},{url:"guide/disable/index.html",revision:"17102f8d1059b208e443ded07bc4c595"},{url:"guide/encrypt/index.html",revision:"13e828254f5da62a9aea2a74400c6d78"},{url:"guide/index.html",revision:"f49f2b0d8d8e56fc770db0921b5d9773"},{url:"guide/markdown/index.html",revision:"afb5cfeb94dcdfb61c60ff74076dc425"},{url:"guide/page/index.html",revision:"8eec4444b39bdefcf9fb2d0749320937"},{url:"home/index.html",revision:"2de2653ccfa289412ef5b6dc2d5e45a3"},{url:"index.html",revision:"84b410f457682342d5ecc85a1eff0aea"},{url:"intro/index.html",revision:"ac7df81e57782d5cda3f1b80789a00a7"},{url:"layout/index.html",revision:"0c6e98345a7af913130246b659e8faf1"},{url:"slide/index.html",revision:"b1e5eb3e7a04fbcb998f221ad760b8f7"},{url:"slides/index.html",revision:"2d25257e8f5041a9e05fb50d3cedb648"},{url:"star/index.html",revision:"ed2e98a2abf9c50623d9e4ad6268d4a5"},{url:"tag/encryption/index.html",revision:"b7ebc5baf7bbe55504f1d9c38ee86a1b"},{url:"tag/Guide/index.html",revision:"e1905de207503f40eb81a60f80ae22cb"},{url:"tag/index.html",revision:"802e056526a6e755feed80c76d47cee2"},{url:"tag/markdown/index.html",revision:"cefa8ae7ddde3743e73b763e5b5112d5"},{url:"tag/Page config/index.html",revision:"b06cbdc59d1dedba34c1fd445b22159d"},{url:"tag/使用指南/index.html",revision:"e17a0a33f2046448fe2d22eb27d3483b"},{url:"tag/文章加密/index.html",revision:"a1070347911f6a31f45624ef56a76df4"},{url:"tag/页面配置/index.html",revision:"ba4ecff628f4a2bdfb4f319ee8e125f7"},{url:"timeline/index.html",revision:"4654efb2716ac1c0611412b74c02f641"},{url:"zh/guide/disable/index.html",revision:"e161e2c3c297be215c56350d166ad038"},{url:"zh/guide/encrypt/index.html",revision:"d9c0d9282c1494e968b76173d7824800"},{url:"zh/guide/index.html",revision:"5275986ddcb052808265f5ec00c89486"},{url:"zh/guide/markdown/index.html",revision:"a87e140fe8d8f0efeb18d686669c50e2"},{url:"zh/guide/page/index.html",revision:"dcb6ebf00dd82a873c1df6e4ea80a304"},{url:"zh/home/index.html",revision:"dd8e86872af31c2a432afb241f8e102f"},{url:"zh/index.html",revision:"f33a1d62c1226cb5a5f9f019772fb22d"},{url:"zh/layout/index.html",revision:"13275757ef3b84bcd857257a516408ac"},{url:"zh/slides/index.html",revision:"73f5834d35cf316955649c006f47177a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
