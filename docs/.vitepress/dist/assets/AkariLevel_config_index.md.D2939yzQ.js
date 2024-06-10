import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.DCKU21so.js";const c=JSON.parse('{"title":"📄 配置","description":"","frontmatter":{},"headers":[],"relativePath":"AkariLevel/config/index.md","filePath":"AkariLevel/config/index.md"}'),l={name:"AkariLevel/config/index.md"},p=n(`<h1 id="📄-配置" tabindex="-1">📄 配置 <a class="header-anchor" href="#📄-配置" aria-label="Permalink to &quot;📄 配置&quot;">​</a></h1><blockquote><p>初次安装本插件后，会在插件目录下产生一些文件</p></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FsVoG" id="tab-kZapq9V" checked><label for="tab-kZapq9V">settings.yml</label><input type="radio" name="group-FsVoG" id="tab-Oy6XO2t"><label for="tab-Oy6XO2t">level.yml</label><input type="radio" name="group-FsVoG" id="tab-oR77zaq"><label for="tab-oR77zaq">lang/zh_CN.yml</label></div><div class="blocks"><div class="language-yaml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     _    _              _ _                   _  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    / \\  | | ____ _ _ __(_) |    _____   _____| | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   / _ \\ | |/ / _\` | &#39;__| | |   / _ \\ \\ / / _ \\ | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  / ___ \\|   &lt; (_| | |  | | |__|  __/\\ V /  __/ | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /_/   \\_\\_|\\_\\__,_|_|  |_|_____\\___| \\_/ \\___|_| #</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#       AkariLevel  Config       #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###########</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Options #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###########</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 配置文件版本</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Config-Version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 检查版本更新</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Check-Update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用 bStats 统计</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Send-Metrics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用调试模式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Database #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 数据存储设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 存储方式 (JSON, CBOR, SQL)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">JSON</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">database.json</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  CBOR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">database.cbor</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  SQL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">password</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">minecraft</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">akarilevel</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  REDIS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # user: user</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # password: password</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###########</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Level  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###########</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 等级设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 满足要求自动升级</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Auto-Levelup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 达到最大等级后不再获取经验</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Exp-Limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 将原版经验条与 AkariLevel 同步</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Vanilla-Exp-Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 原版经验转换为 AkariExp 的倍率 (类型为Double)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # AkariExp 改变量 = 四舍五入至整数 ( 原版经验改变量 * Vanilla-Exp-Rate )</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Vanilla-Exp-Rate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##########</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Hook  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##########</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 挂钩设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Hook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # MythicMobs 掉落拓展</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  MythicMobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 是否启用</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 经验掉落名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 继承自 2.X 的掉落物名称 PlayerExp</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Drop-Name: &quot;PlayerExp&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Drop-Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AkariExp&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 属性插件经验加成拓展</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 继承自 2.X 附属 AttributeLevel</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Attribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 是否启用</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 属性插件 (AttributePlus, SX-Attribute, OriginAttribute)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AttributePlus&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 属性名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # SX-Attribute 的属性名称是其英文名而非 DiscernName (即默认应填写 &quot;ExpAddition&quot; 而非&quot;经验增幅&quot;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # OriginAttribute 默认读取 ExpAddon 为经验加成属性, 无需填写 Name 配置项</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;经验加成&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 经验计算公式 (JavaScript支持)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # %exp% -&gt; 获得的经验值数量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # %attribute% -&gt; 额外加成经验数量</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Formula</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%exp% * ( 1 + %attribute% / 100 )&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 所监听的 PlayerExpChange 来源</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MYTHICMOBS_DROP_EXP&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # PlaceholderAPI 变量拓展</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  PlaceholderAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 变量前缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 继承自 2.X 的变量前缀 playerlevel</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Identifier: &quot;playerlevel&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;akarilevel&quot;</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 最高等级</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Max-Level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关键等级设置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只需对关键等级进行修改, 处于非关键等级时将自动读取上一个关键等级的信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 0 级等级设置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 等级名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # %level% -&gt; 对应等级</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;§8Lv.§b0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 升至该等级所需经验 (JavaScript支持)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # %level% -&gt; 对应等级</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 升至该等级所需条件 (Kether支持, 每行返回值均为 true 时才可升级)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Condition:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #   - &quot;permission akarilevel.default&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Condition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ ]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 升级后执行的动作 (Kether支持)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    Action:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #      - command inline &quot;say 此消息由 {{sender}} 在等级变更至 {{ papi %akarilevel_levelname% }} 时以 OP 权限执行 /say 命令发出&quot; as op</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ ]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 1 级 - 100 级(满级) 等级设置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;§8Lv.§b%level%&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%level% * 5 + 100&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Condition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ ]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">title &quot;§e§lLevel UP!&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">subtitle inline &quot;{{ papi %akarilevel_lastlevelname% }} §7→ {{ papi %akarilevel_levelname% }}&quot; by 10 20 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actionbar inline &quot;§8[ §7{{ papi %akarilevel_exp% }} §8/ §7{{ papi %akarilevel_nextlevelexp% }} §8]&quot;</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Add-Exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7已给予玩家 &amp;f{0} {1} &amp;7点经验值！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Remove-Exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7已移除玩家 &amp;f{0} {1} &amp;7点经验值！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Set-Exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7已设置玩家 &amp;f{0} &amp;7的经验值为 &amp;f{1} &amp;7！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Check-Exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7玩家 &amp;f{0} &amp;7拥有的经验值为 &amp;f{1} &amp;7！&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Add-Level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7已给予玩家 &amp;f{0} {1} &amp;7个等级！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Remove-Level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7已移除玩家 &amp;f{0} {1} &amp;7个等级！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Set-Level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7已设置玩家 &amp;f{0} &amp;7的等级为 &amp;f{1} &amp;7！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Check-Level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7玩家 &amp;f{0} &amp;7的等级为 &amp;f{1} &amp;7！&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Levelup-Success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;a升级成功！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Levelup-Fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c未满足升级所需条件！&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Max-Level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c已达到最大等级！&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">No-Permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c无进行当前操作的权限！&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;a重载成功.&quot;</span></span></code></pre></div></div></div>`,3),h=[p];function k(t,e,E,r,d,g){return a(),i("div",null,h)}const A=s(l,[["render",k]]);export{c as __pageData,A as default};
