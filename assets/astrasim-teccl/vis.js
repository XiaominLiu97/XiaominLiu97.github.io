/* AstraSim 轨迹可视化：真实 .et 数据 + Ring AllReduce 动画 */
(function(){
  var DATA = window.ET_DATA || {};
  var WORKLOADS = ['all_reduce','all_gather','reduce_scatter','all_to_all'];
  var LABELS = {all_reduce:'AllReduce', all_gather:'AllGather', reduce_scatter:'ReduceScatter', all_to_all:'AllToAll'};
  var TYPE_COLOR = {COMP_NODE:'#2563eb', COMM_COLL_NODE:'#d97706', COMM_SEND_NODE:'#7c3aed', COMM_RECV_NODE:'#7c3aed', MEM_LOAD_NODE:'#059669', MEM_STORE_NODE:'#059669', METADATA_NODE:'#64748b'};

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function mod(a,n){ return ((a%n)+n)%n; }
  function fmtBytes(b){
    if(b>=1048576) return (b/1048576).toFixed(2)+' MB';
    if(b>=1024) return (b/1024).toFixed(1)+' KB';
    return b+' B';
  }

  /* ---------- ① NPU 轨迹卡片 ---------- */
  var curWl = 'all_reduce';
  function renderTabs(){
    var box = document.getElementById('wl-tabs'); if(!box) return;
    box.innerHTML = '';
    WORKLOADS.forEach(function(w){
      var b = document.createElement('button');
      b.className = 'vbtn' + (w===curWl ? ' vbtn-primary' : '');
      b.textContent = LABELS[w] + ' (4npus)';
      b.onclick = function(){ curWl = w; renderTabs(); renderCards(); };
      box.appendChild(b);
    });
  }
  function renderCards(){
    var box = document.getElementById('npu-cards'); if(!box) return;
    var wd = DATA[curWl];
    if(!wd){ box.innerHTML = '<p>无数据</p>'; return; }
    var html = '';
    wd.files.forEach(function(f){
      var n = f.nodes[0] || {name:'-',type:'?',attrs:{}};
      var c = TYPE_COLOR[n.type] || '#64748b';
      var size = n.attrs.comm_size;
      var attrsHtml = '';
      Object.keys(n.attrs).forEach(function(k){
        if(k==='comm_type') return;
        var v = n.attrs[k];
        if(k==='comm_size') v = fmtBytes(v) + ' (' + v + ' B)';
        if(k==='is_cpu_op') v = v ? 'true' : 'false';
        attrsHtml += '<div class="npu-attr"><span class="ak">' + esc(k) + '</span><span class="av">' + esc(v) + '</span></div>';
      });
      html += '<div class="npu-card">'
        + '<div class="npu-head">' + esc(f.file) + '</div>'
        + '<div class="npu-meta">NPU #' + f.npu + ' · Chakra v' + esc(f.metadata.version) + '</div>'
        + '<div class="npu-node"><span class="npu-type" style="background:' + c + '">' + esc(n.type) + '</span>'
        + '<span class="npu-name">' + esc(n.name) + '</span></div>'
        + '<div class="npu-row">通信类型 <b>' + esc(n.comm_type || '-') + '</b></div>'
        + (size!==undefined ? '<div class="npu-row">通信大小 <b>' + fmtBytes(size) + '</b></div>' : '')
        + (attrsHtml ? '<div class="npu-attrs">' + attrsHtml + '</div>' : '')
        + '</div>';
    });
    box.innerHTML = html;
  }

  /* ---------- ② Ring AllReduce 动画 ---------- */
  var N = 4;
  var steps = [];
  (function buildSteps(){
    for(var k=0;k<N-1;k++){
      var s = {phase:'Reduce-Scatter 阶段（第 '+(k+1)+'/3 步）', sends:[]};
      for(var i=0;i<N;i++) s.sends.push({from:i, to:(i+1)%N, chunk:mod(i-k,N)});
      steps.push(s);
    }
    for(var k2=0;k2<N-1;k2++){
      var s2 = {phase:'All-Gather 阶段（第 '+(k2+1)+'/3 步）', sends:[]};
      for(var i2=0;i2<N;i2++) s2.sends.push({from:i2, to:mod(i2-1,N), chunk:mod(i2-1-k2,N)});
      steps.push(s2);
    }
  })();

  var cur = -1, timer = null;
  var CX=170, CY=145, R=95, NR=26;
  function pos(i){
    var a = (i*90 - 90) * Math.PI/180;
    return {x: CX + R*Math.cos(a), y: CY + R*Math.sin(a)};
  }
  function chunkSize(){
    var wd = DATA['all_reduce'];
    var sz = wd && wd.files[0] && wd.files[0].nodes[0] ? wd.files[0].nodes[0].attrs.comm_size : 1048576;
    return Math.round(sz / 4);
  }
  function drawRing(){
    var svg = document.getElementById('ring-svg'); if(!svg) return;
    var ns = 'http://www.w3.org/2000/svg';
    svg.innerHTML = '';
    // 基线环边（淡）
    for(var i=0;i<N;i++){
      var p1 = pos(i), p2 = pos((i+1)%N);
      var line = document.createElementNS(ns,'line');
      line.setAttribute('x1',p1.x); line.setAttribute('y1',p1.y);
      line.setAttribute('x2',p2.x); line.setAttribute('y2',p2.y);
      line.setAttribute('stroke','#cbd5e1'); line.setAttribute('stroke-width','2');
      svg.appendChild(line);
    }
    // 当前步骤的传输箭头
    if(cur>=0 && cur<steps.length){
      var s = steps[cur];
      s.sends.forEach(function(sd){
        var p1 = pos(sd.from), p2 = pos(sd.to);
        var mx = (p1.x+p2.x)/2, my = (p1.y+p2.y)/2;
        var ang = Math.atan2(p2.y-p1.y, p2.x-p1.x);
        var x1 = p1.x + Math.cos(ang)*NR, y1 = p1.y + Math.sin(ang)*NR;
        var x2 = p2.x - Math.cos(ang)*NR, y2 = p2.y - Math.sin(ang)*NR;
        var line = document.createElementNS(ns,'line');
        line.setAttribute('x1',x1); line.setAttribute('y1',y1);
        line.setAttribute('x2',x2); line.setAttribute('y2',y2);
        line.setAttribute('stroke','#ea580c'); line.setAttribute('stroke-width','4');
        line.setAttribute('stroke-linecap','round');
        svg.appendChild(line);
        // 箭头
        var ax = x2 - 12*Math.cos(ang), ay = y2 - 12*Math.sin(ang);
        var arrow = document.createElementNS(ns,'polygon');
        var sp = Math.PI/7;
        arrow.setAttribute('points',
          (x2)+','+(y2)+' '+
          (ax + 9*Math.cos(ang+Math.PI-sp))+','+(ay + 9*Math.sin(ang+Math.PI-sp))+' '+
          (ax + 9*Math.cos(ang+Math.PI+sp))+','+(ay + 9*Math.sin(ang+Math.PI+sp)));
        arrow.setAttribute('fill','#ea580c');
        svg.appendChild(arrow);
        // chunk 标签
        var tx = mx + 10, ty = my - 6;
        var t = document.createElementNS(ns,'text');
        t.setAttribute('x',tx); t.setAttribute('y',ty);
        t.setAttribute('font-size','11'); t.setAttribute('fill','#9a3412');
        t.setAttribute('text-anchor','middle');
        t.textContent = 'chunk '+sd.chunk;
        svg.appendChild(t);
      });
    }
    // 节点
    for(var j=0;j<N;j++){
      var p = pos(j);
      var circ = document.createElementNS(ns,'circle');
      circ.setAttribute('cx',p.x); circ.setAttribute('cy',p.y); circ.setAttribute('r',NR);
      circ.setAttribute('fill', cur>=0 ? '#1d4ed8' : '#3b82f6');
      circ.setAttribute('stroke','#1e3a8a'); circ.setAttribute('stroke-width','2');
      svg.appendChild(circ);
      var txt = document.createElementNS(ns,'text');
      txt.setAttribute('x',p.x); txt.setAttribute('y',p.y+4);
      txt.setAttribute('text-anchor','middle'); txt.setAttribute('font-size','12'); txt.setAttribute('fill','#fff');
      txt.setAttribute('font-weight','bold');
      txt.textContent = 'NPU '+j;
      svg.appendChild(txt);
    }
  }
  function renderInfo(){
    var info = document.getElementById('ring-info');
    var prog = document.getElementById('ring-progress');
    if(!info||!prog) return;
    if(cur<0){
      info.innerHTML = '<b style="color:#1e3a8a">AllReduce（1 MB，4 卡 Ring）</b><br>共 6 步：Reduce-Scatter 3 步 + All-Gather 3 步。<br>每步每个 NPU 只与一个邻居交换 1 个 chunk（<b>'+fmtBytes(chunkSize())+'</b>）。<br>点击「下一步」或「播放」开始。';
      prog.textContent = '当前：未开始（0 / 6）';
      return;
    }
    var s = steps[cur];
    var lines = s.sends.map(function(sd){
      return 'NPU '+sd.from+' → NPU '+sd.to+'：发送 chunk '+sd.chunk+' ('+fmtBytes(chunkSize())+')';
    });
    info.innerHTML = '<b style="color:#9a3412">'+esc(s.phase)+'</b><br>'+lines.join('<br>');
    prog.textContent = '当前：第 '+(cur+1)+' / 6 步';
  }
  function show(k){
    cur = k; drawRing(); renderInfo();
    document.getElementById('btn-play').textContent = '▶ 播放';
    if(timer){ clearInterval(timer); timer = null; }
  }
  function play(){
    var btn = document.getElementById('btn-play');
    if(timer){ clearInterval(timer); timer=null; btn.textContent='▶ 播放'; return; }
    if(cur >= steps.length-1) cur = -1;
    btn.textContent = '⏸ 暂停';
    timer = setInterval(function(){
      cur++;
      if(cur >= steps.length){ clearInterval(timer); timer=null; btn.textContent='▶ 播放'; cur=steps.length-1; }
      drawRing(); renderInfo();
    }, 1400);
    cur = -1;
    drawRing(); renderInfo();
  }
  function init(){
    renderTabs(); renderCards(); drawRing(); renderInfo();
    var bp = document.getElementById('btn-prev'), bn = document.getElementById('btn-next'),
        br = document.getElementById('btn-reset'), bpl = document.getElementById('btn-play');
    if(bp) bp.onclick = function(){ show(cur<=0 ? -1 : cur-1); };
    if(bn) bn.onclick = function(){ show(cur>=steps.length-1 ? steps.length-1 : cur+1); };
    if(br) br.onclick = function(){ show(-1); };
    if(bpl) bpl.onclick = play;
  }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();