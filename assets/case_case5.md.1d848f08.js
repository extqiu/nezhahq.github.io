import{_ as e,c as t,o as a,a as r}from"./app.38e99b9a.js";const m='{"title":"Nezha server over Argo tunnel","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE\u7279\u70B9:","slug":"\u9879\u76EE\u7279\u70B9"},{"level":2,"title":"\u51C6\u5907\u9700\u8981\u7528\u7684\u53D8\u91CF","slug":"\u51C6\u5907\u9700\u8981\u7528\u7684\u53D8\u91CF"},{"level":2,"title":"PaaS \u90E8\u7F72\u5B9E\u4F8B","slug":"paas-\u90E8\u7F72\u5B9E\u4F8B"},{"level":2,"title":"VPS \u90E8\u7F72\u5B9E\u4F8B","slug":"vps-\u90E8\u7F72\u5B9E\u4F8B"},{"level":3,"title":"docker \u90E8\u7F72","slug":"docker-\u90E8\u7F72"},{"level":3,"title":"docker-compose \u90E8\u7F72","slug":"docker-compose-\u90E8\u7F72"},{"level":2,"title":"\u5BA2\u6237\u7AEF\u63A5\u5165","slug":"\u5BA2\u6237\u7AEF\u63A5\u5165"},{"level":2,"title":"SSH \u63A5\u5165","slug":"ssh-\u63A5\u5165"},{"level":2,"title":"","slug":""},{"level":2,"title":"\u9E23\u8C22\u4E0B\u5217\u4F5C\u8005\u7684\u6587\u7AE0\u548C\u9879\u76EE:","slug":"\u9E23\u8C22\u4E0B\u5217\u4F5C\u8005\u7684\u6587\u7AE0\u548C\u9879\u76EE"},{"level":2,"title":"\u514D\u8D23\u58F0\u660E:","slug":"\u514D\u8D23\u58F0\u660E"}],"relativePath":"case/case5.md","lastUpdated":1682159272000}',n={},l=r(`<h1 id="nezha-server-over-argo-tunnel" tabindex="-1">Nezha server over Argo tunnel <a class="header-anchor" href="#nezha-server-over-argo-tunnel" aria-hidden="true">#</a></h1><p>\u4F7F\u7528 Argo \u96A7\u9053\u7684\u54EA\u5412\u670D\u52A1\u7AEF \u8D21\u732E\u8005:</p><ul><li><a href="https://github.com/fscarmen2" target="_blank" rel="noopener noreferrer">fscarmen</a></li></ul><p>\u9879\u76EE\u5730\u5740\uFF1A<a href="https://github.com/fscarmen2/Argo-Nezha-Service-Container" target="_blank" rel="noopener noreferrer">Argo-Nezha-Service-Container</a></p><p>\u955C\u50CF\u5907\u4EFD\uFF08\u975E\u5B9E\u65F6\u66F4\u65B0\uFF09\uFF1A<a href="https://github.com/nezhahq/Argo-Nezha-Service-Container" target="_blank" rel="noopener noreferrer">Argo-Nezha-Service-Container</a></p><hr><h1 id="\u76EE\u5F55" tabindex="-1">\u76EE\u5F55 <a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a></h1><ul><li><a href="./case5.html#\u9879\u76EE\u7279\u70B9">\u9879\u76EE\u7279\u70B9</a></li><li><a href="./case5.html#\u51C6\u5907\u9700\u8981\u7528\u7684\u53D8\u91CF">\u51C6\u5907\u9700\u8981\u7528\u7684\u53D8\u91CF</a></li><li><a href="./case5.html#PaaS-\u90E8\u7F72\u5B9E\u4F8B">PaaS \u90E8\u7F72\u5B9E\u4F8B</a></li><li><a href="./case5.html#VPS-\u90E8\u7F72\u5B9E\u4F8B">VPS \u90E8\u7F72\u5B9E\u4F8B</a></li><li><a href="./case5.html#\u5BA2\u6237\u7AEF\u63A5\u5165">\u5BA2\u6237\u7AEF\u63A5\u5165</a></li><li><a href="./case5.html#ssh-\u63A5\u5165">SSH \u63A5\u5165</a></li><li><a href="./case5.html#\u9E23\u8C22\u4E0B\u5217\u4F5C\u8005\u7684\u6587\u7AE0\u548C\u9879\u76EE">\u9E23\u8C22\u4E0B\u5217\u4F5C\u8005\u7684\u6587\u7AE0\u548C\u9879\u76EE</a></li><li><a href="./case5.html#\u514D\u8D23\u58F0\u660E">\u514D\u8D23\u58F0\u660E</a></li></ul><hr><h2 id="\u9879\u76EE\u7279\u70B9" tabindex="-1">\u9879\u76EE\u7279\u70B9: <a class="header-anchor" href="#\u9879\u76EE\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>\u9002\u7528\u8303\u56F4\u66F4\u5E7F --- \u53EA\u8981\u80FD\u8FDE\u901A\u7F51\u7EDC\uFF0C\u5C31\u80FD\u5B89\u88C5\u54EA\u5412\u670D\u52A1\u7AEF\uFF0C\u5982 Nas \u865A\u62DF\u673A , Container PaaS \u7B49</li><li>Argo \u96A7\u9053\u7A81\u7834\u9700\u8981\u516C\u7F51\u5165\u53E3\u7684\u9650\u5236 --- \u4F20\u7EDF\u7684\u54EA\u5412\u9700\u8981\u6709\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u7528\u4E8E\u9762\u677F\u7684\u8BBF\u95EE\uFF0C\u53E6\u4E00\u4E2A\u7528\u4E8E\u5BA2\u6237\u7AEF\u4E0A\u62A5\u6570\u636E\uFF0C\u672C\u9879\u76EE\u501F\u7528 Cloudflare Argo \u96A7\u9053\uFF0C\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u7684\u529E\u6CD5</li><li>IPv4 / v6 \u5177\u5907\u66F4\u9AD8\u7684\u7075\u6D3B\u6027 --- \u4F20\u7EDF\u54EA\u5412\u9700\u8981\u5904\u7406\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u7684 IPv4/v6 \u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u8FD8\u9700\u8981\u901A\u8FC7 warp \u7B49\u5DE5\u5177\u6765\u89E3\u51B3\u4E0D\u5BF9\u5E94\u7684\u60C5\u51B5\u3002\u7136\u800C\uFF0C\u672C\u9879\u76EE\u53EF\u4EE5\u5B8C\u5168\u4E0D\u9700\u8981\u8003\u8651\u8FD9\u4E9B\u95EE\u9898\uFF0C\u53EF\u4EE5\u4EFB\u610F\u5BF9\u63A5\uFF0C\u66F4\u52A0\u65B9\u4FBF\u548C\u7B80\u4FBF</li><li>\u4E00\u6761 Argo \u96A7\u9053\u5206\u6D41\u591A\u4E2A\u57DF\u540D\u548C\u534F\u8BAE --- \u5EFA\u7ACB\u4E00\u6761\u5185\u7F51\u7A7F\u900F\u7684 Argo \u96A7\u9053\uFF0C\u5373\u53EF\u5206\u6D41\u4E09\u4E2A\u57DF\u540D(hostname)\u548C\u534F\u8BAE(protocal)\uFF0C\u5206\u522B\u7528\u4E8E\u9762\u677F\u7684\u8BBF\u95EE(http)\uFF0C\u5BA2\u6237\u7AEF\u4E0A\u62A5\u6570\u636E(tcp)\u548C ssh\uFF08\u53EF\u9009\uFF09</li><li>Nginx \u53CD\u5411\u4EE3\u7406\u7684 gRPC \u6570\u636E\u7AEF\u53E3 --- \u914D\u4E0A\u8BC1\u4E66\u505A tls \u7EC8\u7ED3\uFF0C\u7136\u540E Argo \u7684\u96A7\u9053\u914D\u7F6E\u7528 https \u670D\u52A1\u6307\u5411\u8FD9\u4E2A\u53CD\u5411\u4EE3\u7406\uFF0C\u542F\u7528http2\u56DE\u6E90\uFF0Cgrpc(nezha)-&gt;h2(nginx)-&gt;argo-&gt;cf cdn edge-&gt;agent</li><li>\u6BCF\u5929\u81EA\u52A8\u5907\u4EFD --- \u6BCF\u5929 0 \u65F6 0 \u5206\u81EA\u52A8\u5907\u4EFD\u6574\u4E2A\u54EA\u5412\u9762\u677F\u6587\u4EF6\u5939\u5230\u6307\u5B9A\u7684 github \u79C1\u5E93\uFF0C\u5305\u62EC\u9762\u677F\u4E3B\u9898\uFF0C\u9762\u677F\u8BBE\u7F6E\uFF0C\u63A2\u9488\u6570\u636E\u548C\u96A7\u9053\u4FE1\u606F\uFF0C\u5907\u4EFD\u4FDD\u7559\u8FD1 30 \u5929\u6570\u636E\uFF1B\u9274\u4E8E\u5185\u5BB9\u5341\u5206\u91CD\u8981\uFF0C\u5FC5\u987B\u8981\u653E\u5728\u79C1\u5E93</li><li>\u6570\u636E\u66F4\u5B89\u5168 --- Argo \u96A7\u9053\u4F7F\u7528TLS\u52A0\u5BC6\u901A\u4FE1\uFF0C\u53EF\u4EE5\u5C06\u5E94\u7528\u7A0B\u5E8F\u6D41\u91CF\u5B89\u5168\u5730\u4F20\u8F93\u5230 Cloudflare \u7F51\u7EDC\uFF0C\u63D0\u9AD8\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u5168\u6027\u548C\u53EF\u9760\u6027\u3002\u6B64\u5916\uFF0CArgo Tunnel\u4E5F\u53EF\u4EE5\u9632\u6B62IP\u6CC4\u9732\u548CDDoS\u653B\u51FB\u7B49\u7F51\u7EDC\u5A01\u80C1</li></ul><img width="1298" alt="image" src="https://user-images.githubusercontent.com/92626977/233363248-e2caa687-b513-448c-a92f-c870db0e4236.png"><h2 id="\u51C6\u5907\u9700\u8981\u7528\u7684\u53D8\u91CF" tabindex="-1">\u51C6\u5907\u9700\u8981\u7528\u7684\u53D8\u91CF <a class="header-anchor" href="#\u51C6\u5907\u9700\u8981\u7528\u7684\u53D8\u91CF" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7 Cloudflare Json \u751F\u6210\u7F51\u8F7B\u677E\u83B7\u53D6 Argo \u96A7\u9053\u4FE1\u606F: <a href="https://fscarmen.cloudflare.now.cc" target="_blank" rel="noopener noreferrer">https://fscarmen.cloudflare.now.cc</a></li></ul><img width="1040" alt="image" src="https://user-images.githubusercontent.com/92626977/231084930-02e3c2de-c52b-420d-b39c-9f135d040b3b.png"><ul><li>\u5230 Cloudflare \u5B98\u65B9\uFF0C\u5728\u76F8\u5E94\u7684\u57DF\u540D <code>DNS</code> \u8BB0\u5F55\u91CC\u52A0\u4E0A\u5BA2\u6237\u7AEF\u4E0A\u62A5\u6570\u636E(tcp)\u548C ssh\uFF08\u53EF\u9009\uFF09\u7684\u57DF\u540D\uFF0C\u6253\u5F00\u6A59\u8272\u4E91\u542F\u7528 CDN</li></ul><img width="1666" alt="image" src="https://user-images.githubusercontent.com/92626977/231087110-85ddab87-076b-45c9-97d1-c8b051dcb5b0.png"><img width="1627" alt="image" src="https://user-images.githubusercontent.com/92626977/231087714-e5a45eb9-bc47-4c38-8f5b-a4a9fb492d0d.png"><ul><li>\u5230 Cloudflare \u5B98\u65B9\uFF0C\u9009\u62E9\u4F7F\u7528\u7684\u57DF\u540D\uFF0C\u6253\u5F00 <code>\u7F51\u7EDC</code> \u9009\u9879\u5C06 <code>gRPC</code> \u5F00\u5173\u6253\u5F00</li></ul><img width="1590" alt="image" src="https://user-images.githubusercontent.com/92626977/233138703-faab8596-a64a-40bb-afe6-52711489fbcf.png"><ul><li>\u83B7\u53D6 github \u8BA4\u8BC1\u6388\u6743: <a href="https://github.com/settings/applications/new" target="_blank" rel="noopener noreferrer">https://github.com/settings/applications/new</a></li></ul><p>\u9762\u677F\u57DF\u540D\u52A0\u4E0A <code>https://</code> \u5F00\u5934\uFF0C\u56DE\u8C03\u5730\u5740\u518D\u52A0\u4E0A <code>/oauth2/callback</code> \u7ED3\u5C3E</p><img width="916" alt="image" src="https://user-images.githubusercontent.com/92626977/231099071-b6676f2f-6c7b-4e2f-8411-c134143cab24.png"><img width="1122" alt="image" src="https://user-images.githubusercontent.com/92626977/231086319-1b625dc6-713b-4a62-80b1-cc5b2b7ef3ca.png"><ul><li>\u83B7\u53D6 github \u7684 PAT (Personal Access Token): <a href="https://github.com/settings/tokens/new" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens/new</a></li></ul><img width="1226" alt="image" src="https://user-images.githubusercontent.com/92626977/233346036-60819f98-c89a-4cef-b134-0d47c5cc333d.png"><img width="1148" alt="image" src="https://user-images.githubusercontent.com/92626977/233346508-273c422e-05c3-4c91-9fae-438202364787.png"><ul><li>\u521B\u5EFA github \u7528\u4E8E\u5907\u4EFD\u7684\u79C1\u5E93: <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">https://github.com/new</a></li></ul><img width="814" alt="image" src="https://user-images.githubusercontent.com/92626977/233345537-c5b9dc27-35c4-407b-8809-b0ef68d9ad55.png"><h2 id="paas-\u90E8\u7F72\u5B9E\u4F8B" tabindex="-1">PaaS \u90E8\u7F72\u5B9E\u4F8B <a class="header-anchor" href="#paas-\u90E8\u7F72\u5B9E\u4F8B" aria-hidden="true">#</a></h2><p>\u955C\u50CF <code>fscarmen/argo-nezha:latest</code> \uFF0C \u652F\u6301 amd64 \u548C arm64 \u67B6\u6784</p><p>\u7528\u5230\u7684\u53D8\u91CF</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>GH_USER</td><td>\u662F</td><td>github \u7684\u7528\u6237\u540D\uFF0C\u7528\u4E8E\u9762\u677F\u7BA1\u7406\u6388\u6743</td></tr><tr><td>GH_CLIENTID</td><td>\u662F</td><td>\u5728 github \u4E0A\u7533\u8BF7</td></tr><tr><td>GH_CLIENTSECRET</td><td>\u662F</td><td>\u5728 github \u4E0A\u7533\u8BF7</td></tr><tr><td>GH_REPO</td><td>\u5426</td><td>\u5728 github \u4E0A\u5907\u4EFD\u54EA\u5412\u670D\u52A1\u7AEF\u6570\u636E\u5E93\u6587\u4EF6\u7684\u5E93</td></tr><tr><td>GH_EMAIL</td><td>\u5426</td><td>github \u7684\u90AE\u7BB1\uFF0C\u7528\u4E8E\u5907\u4EFD\u7684 git \u63A8\u9001\u5230\u8FDC\u7A0B\u5E93</td></tr><tr><td>GH_PAT</td><td>\u5426</td><td>github \u7684 PAT</td></tr><tr><td>ARGO_JSON</td><td>\u662F</td><td>\u4ECE <a href="https://fscarmen.cloudflare.now.cc" target="_blank" rel="noopener noreferrer">https://fscarmen.cloudflare.now.cc</a> \u83B7\u53D6\u7684 Argo Json</td></tr><tr><td>DATA_DOMAIN</td><td>\u662F</td><td>\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u901A\u4FE1 argo \u57DF\u540D</td></tr><tr><td>WEB_DOMAIN</td><td>\u662F</td><td>\u9762\u677F argo \u57DF\u540D</td></tr><tr><td>SSH_DOMAIN</td><td>\u5426</td><td>ssh \u7528\u7684 argo \u57DF\u540D</td></tr><tr><td>SSH_PASSWORD</td><td>\u5426</td><td>ssh \u7684\u5BC6\u7801\uFF0C\u53EA\u6709\u5728\u8BBE\u7F6E SSH_JSON \u540E\u624D\u751F\u6548\uFF0C\u9ED8\u8BA4\u503C password</td></tr></tbody></table><p>1.Koyeb</p><img width="927" alt="image" src="https://user-images.githubusercontent.com/92626977/231088411-fbac3e6e-a8a6-4661-bcf8-7c777aa8ffeb.png"><img width="750" alt="image" src="https://user-images.githubusercontent.com/92626977/231088973-7134aefd-4c80-4559-8e40-17c3be11d27d.png"><img width="754" alt="image" src="https://user-images.githubusercontent.com/92626977/233336491-6bb801af-257d-467d-aaf0-6dcb68a531ac.png"><img width="1187" alt="image" src="https://user-images.githubusercontent.com/92626977/231092893-c8f017a2-ee0e-4e28-bee3-7343158f0fa7.png"><img width="500" alt="image" src="https://user-images.githubusercontent.com/92626977/231094144-df6715bc-c611-47ce-a529-03c43f38102e.png"><h2 id="vps-\u90E8\u7F72\u5B9E\u4F8B" tabindex="-1">VPS \u90E8\u7F72\u5B9E\u4F8B <a class="header-anchor" href="#vps-\u90E8\u7F72\u5B9E\u4F8B" aria-hidden="true">#</a></h2><ul><li>\u6CE8\u610F: ARGO_JSON= \u540E\u9762\u9700\u8981\u6709\u5355\u5F15\u53F7\uFF0C\u4E0D\u80FD\u53BB\u6389</li><li>\u5982\u679C VPS \u662F IPv6 only \u7684\uFF0C\u8BF7\u5148\u5B89\u88C5 WARP IPv4 \u6216\u8005\u53CC\u6808: <a href="https://github.com/fscarmen/warp" target="_blank" rel="noopener noreferrer">https://github.com/fscarmen/warp</a></li></ul><h3 id="docker-\u90E8\u7F72" tabindex="-1">docker \u90E8\u7F72 <a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a></h3><div class="language-"><pre><code>docker run -dit \\
           --name nezha_dashboard \\
           --restart always \\
           -v ./dashboard:/dashboard \\
           -e GH_USER=&lt;\u586B github \u7528\u6237\u540D&gt; \\
           -e GH_EMAIL=&lt;\u586B github \u90AE\u7BB1&gt; \\
           -e GH_PAT=&lt;\u586B\u83B7\u53D6\u7684&gt; \\
           -e GH_REPO=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt; \\
           -e GH_CLIENTID=&lt;\u586B\u83B7\u53D6\u7684&gt;  \\
           -e GH_CLIENTSECRET=&lt;\u586B\u83B7\u53D6\u7684&gt; \\
           -e ARGO_JSON=&#39;&lt;\u586B\u83B7\u53D6\u7684&gt;&#39; \\
           -e WEB_DOMAIN=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt; \\
           -e DATA_DOMAIN=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt; \\
           -e SSH_DOMAIN=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt; \\
           -e SSH_PASSWORD=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt; \\
           fscarmen/argo-nezha
</code></pre></div><h3 id="docker-compose-\u90E8\u7F72" tabindex="-1">docker-compose \u90E8\u7F72 <a class="header-anchor" href="#docker-compose-\u90E8\u7F72" aria-hidden="true">#</a></h3><div class="language-"><pre><code>version: &#39;3.8&#39;
services:
    argo-nezha:
        image: fscarmen/argo-nezha
        container_name: nezha_dashboard
        restart: always
        volumes:
            - ./dashboard:/dashboard
        environment:
            - GH_USER=&lt;\u586B github \u7528\u6237\u540D&gt;
            - GH_EMAIL=&lt;&lt;\u586B github \u90AE\u7BB1&gt;
            - GH_PAT=&lt;\u586B\u83B7\u53D6\u7684&gt;
            - GH_REPO=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt;
            - GH_CLIENTID=&lt;\u586B\u83B7\u53D6\u7684&gt;
            - GH_CLIENTSECRET=&lt;\u586B\u83B7\u53D6\u7684&gt;
            - ARGO_JSON=&#39;&lt;\u586B\u83B7\u53D6\u7684&gt;&#39;
            - WEB_DOMAIN=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt;
            - DATA_DOMAIN=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt;
            - SSH_DOMAIN=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt;
            - SSH_PASSWORD=&lt;\u586B\u81EA\u5B9A\u4E49\u7684&gt;
</code></pre></div><h2 id="\u5BA2\u6237\u7AEF\u63A5\u5165" tabindex="-1">\u5BA2\u6237\u7AEF\u63A5\u5165 <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u63A5\u5165" aria-hidden="true">#</a></h2><p>\u901A\u8FC7gRPC\u4F20\u8F93\uFF0C\u65E0\u9700\u989D\u5916\u914D\u7F6E\u3002\u4F7F\u7528\u9762\u677F\u7ED9\u5230\u7684\u5B89\u88C5\u65B9\u5F0F\uFF0C\u4E3E\u4F8B</p><div class="language-"><pre><code>curl -L https://raw.githubusercontent.com/naiba/nezha/master/script/install.sh -o nezha.sh &amp;&amp; chmod +x nezha.sh &amp;&amp; sudo ./nezha.sh install_agent data.seales.nom.za 443 eAxO9IF519fKFODlW0 --tls
</code></pre></div><h2 id="ssh-\u63A5\u5165" tabindex="-1">SSH \u63A5\u5165 <a class="header-anchor" href="#ssh-\u63A5\u5165" aria-hidden="true">#</a></h2><ul><li>\u4EE5 macOS + WindTerm \u4E3A\u4F8B\uFF0C\u5176\u4ED6\u6839\u636E\u4F7F\u7528\u7684 SSH \u5DE5\u5177\uFF0C\u7ED3\u5408\u5B98\u65B9\u5B98\u65B9\u8BF4\u660E\u6587\u6863: <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/use_cases/ssh/#2-connect-as-a-user" target="_blank" rel="noopener noreferrer">https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/use_cases/ssh/#2-connect-as-a-user</a></li><li>\u5B98\u65B9 cloudflared \u4E0B\u8F7D: <a href="https://github.com/cloudflare/cloudflared/releases" target="_blank" rel="noopener noreferrer">https://github.com/cloudflare/cloudflared/releases</a></li><li>\u4EE5\u4E0B\u8F93\u5165\u547D\u4EE4\u4E3E\u4F8B</li></ul><div class="language-"><pre><code>&lt;file path&gt;/cloudflared access ssh --hostname ssh.seales.nom.za
</code></pre></div><img width="834" alt="image" src="https://user-images.githubusercontent.com/92626977/233349393-cec79e11-346e-4a57-8357-8d153d75ee40.png"><img width="830" alt="image" src="https://user-images.githubusercontent.com/92626977/233350601-73de67f9-19ca-451f-b395-8721abbb3342.png"><img width="955" alt="image" src="https://user-images.githubusercontent.com/92626977/233350802-754624e0-8456-4353-8577-1f5385fb8723.png"><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="\u9E23\u8C22\u4E0B\u5217\u4F5C\u8005\u7684\u6587\u7AE0\u548C\u9879\u76EE" tabindex="-1">\u9E23\u8C22\u4E0B\u5217\u4F5C\u8005\u7684\u6587\u7AE0\u548C\u9879\u76EE: <a class="header-anchor" href="#\u9E23\u8C22\u4E0B\u5217\u4F5C\u8005\u7684\u6587\u7AE0\u548C\u9879\u76EE" aria-hidden="true">#</a></h2><ul><li>\u70ED\u5FC3\u7684\u671D\u9633\u7FA4\u4F17 Robin\uFF0C\u8BA8\u8BBA\u54EA\u5412\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u7684\u5173\u7CFB\uFF0C\u4ECE\u800C\u8BDE\u751F\u4E86\u6B64\u9879\u76EE</li><li>\u54EA\u5412\u5B98\u7F51: <a href="https://nezha.wiki/" target="_blank" rel="noopener noreferrer">https://nezha.wiki/</a> , TG \u7FA4: <a href="https://t.me/nezhamonitoring" target="_blank" rel="noopener noreferrer">https://t.me/nezhamonitoring</a></li><li>\u5171\u7A77\u56FD\u9645\u8001\u4E2D\u533B: <a href="http://solitud.es/" target="_blank" rel="noopener noreferrer">http://solitud.es/</a></li><li>Akkia&#39;s Blog: <a href="https://blog.akkia.moe/" target="_blank" rel="noopener noreferrer">https://blog.akkia.moe/</a></li><li>\u7528 Cloudflare Tunnel \u8FDB\u884C\u5185\u7F51\u7A7F\u900F: <a href="https://blog.outv.im/2021/cloudflared-tunnel/" target="_blank" rel="noopener noreferrer">https://blog.outv.im/2021/cloudflared-tunnel/</a></li></ul><h2 id="\u514D\u8D23\u58F0\u660E" tabindex="-1">\u514D\u8D23\u58F0\u660E: <a class="header-anchor" href="#\u514D\u8D23\u58F0\u660E" aria-hidden="true">#</a></h2><ul><li>\u672C\u7A0B\u5E8F\u4EC5\u4F9B\u5B66\u4E60\u4E86\u89E3, \u975E\u76C8\u5229\u76EE\u7684\uFF0C\u8BF7\u4E8E\u4E0B\u8F7D\u540E 24 \u5C0F\u65F6\u5185\u5220\u9664, \u4E0D\u5F97\u7528\u4F5C\u4EFB\u4F55\u5546\u4E1A\u7528\u9014, \u6587\u5B57\u3001\u6570\u636E\u53CA\u56FE\u7247\u5747\u6709\u6240\u5C5E\u7248\u6743, \u5982\u8F6C\u8F7D\u987B\u6CE8\u660E\u6765\u6E90\u3002</li><li>\u4F7F\u7528\u672C\u7A0B\u5E8F\u5FC5\u5FAA\u9075\u5B88\u90E8\u7F72\u514D\u8D23\u58F0\u660E\u3002\u4F7F\u7528\u672C\u7A0B\u5E8F\u5FC5\u5FAA\u9075\u5B88\u90E8\u7F72\u670D\u52A1\u5668\u6240\u5728\u5730\u3001\u6240\u5728\u56FD\u5BB6\u548C\u7528\u6237\u6240\u5728\u56FD\u5BB6\u7684\u6CD5\u5F8B\u6CD5\u89C4, \u7A0B\u5E8F\u4F5C\u8005\u4E0D\u5BF9\u4F7F\u7528\u8005\u4EFB\u4F55\u4E0D\u5F53\u884C\u4E3A\u8D1F\u8D23\u3002</li></ul>`,59),s=[l];function i(o,h,c,d,g,u){return a(),t("div",null,s)}var b=e(n,[["render",i]]);export{m as __pageData,b as default};
