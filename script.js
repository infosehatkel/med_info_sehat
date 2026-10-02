const D={
otak:{n:"Otak",x:100,y:36,f:"Pusat kendali pikiran, gerakan, ingatan, dan emosi. Otak memakai sekitar seperlima energi tubuh.",t:["Sakit kepala hebat mendadak","Sulit bicara atau lemah sebelah tubuh","Pingsan atau kejang"],k:["Tidur cukup","Kontrol tekanan darah","Tetap belajar hal baru","Kelola stres"]},
paru:{n:"Paru-paru",x:78,y:108,x2:122,f:"Menukar oksigen dari udara dengan karbon dioksida dari darah, sekitar belasan kali setiap menit saat istirahat.",t:["Batuk lebih dari 2 minggu","Batuk berdarah","Napas pendek saat aktivitas ringan"],k:["Tidak merokok","Hindari asap dan polusi","Latihan napas dan olahraga aerobik"]},
jantung:{n:"Jantung",x:108,y:128,f:"Memompa darah ke seluruh tubuh tanpa henti, sekitar 100.000 kali per hari.",t:["Nyeri atau rasa tertekan di dada","Jantung berdebar disertai pusing","Bengkak di kaki dan mudah lelah"],k:["Periksa tekanan darah rutin (hipertensi bila 140/90 atau lebih)","Kurangi garam dan lemak jenuh","Jalan cepat rutin"]},
hati:{n:"Hati",x:84,y:160,f:"Menyaring racun, membuat empedu, dan menyimpan energi. Hati mampu memulihkan diri, tetapi kerusakan lama bisa permanen.",t:["Mata dan kulit menguning","Urine sangat pekat","Perut membesar atau nyeri kanan atas"],k:["Batasi alkohol","Vaksin hepatitis B","Jaga berat badan ideal"]},
lambung:{n:"Lambung",x:118,y:156,f:"Mengaduk makanan dengan asam lambung agar mudah dicerna oleh usus.",t:["Nyeri ulu hati berulang","Muntah darah atau tinja hitam","Sulit menelan"],k:["Makan teratur","Kurangi kopi, pedas, dan rokok","Jangan langsung berbaring setelah makan"]},
usus:{n:"Usus",x:100,y:196,f:"Menyerap nutrisi dan air. Rumah bagi triliunan bakteri yang memengaruhi kekebalan tubuh.",t:["Diare lebih dari beberapa hari","BAB berdarah","Perubahan pola BAB tanpa sebab jelas"],k:["Makan serat dari sayur dan buah","Cukup minum","Batasi makanan ultra-olahan"]}
};
const OC={otak:'#8E6CFF',paru:'#2FA4E0',jantung:'#E0457B',hati:'#C9822B',lambung:'#F26B3A',usus:'#2A9D8F'};
const hots=document.getElementById('hots'),chips=document.getElementById('chips'),panel=document.getElementById('panel');
const NS='http://www.w3.org/2000/svg';
function show(k){
  const o=D[k];panel.style.setProperty('--oc',OC[k]);
  document.querySelectorAll('.hot').forEach(e=>e.classList.toggle('on',e.dataset.k===k));
  document.querySelectorAll('.chip').forEach(e=>e.setAttribute('aria-pressed',e.dataset.k===k));
  const li=a=>a.map(s=>'<li>'+s+'</li>').join('');
  panel.classList.remove('swap');void panel.offsetWidth;panel.classList.add('swap');
  panel.innerHTML='<h2>'+o.n+'</h2><p>'+o.f+'</p><h3>Tanda yang perlu diperiksakan</h3><ul>'+li(o.t)+'</ul><h3>Cara menjaganya</h3><ul>'+li(o.k)+'</ul>';
}
Object.keys(D).forEach(k=>{
  const o=D[k];
  [[o.x,o.y],o.x2?[o.x2,o.y]:null].filter(Boolean).forEach(([x,y])=>{
    const c=document.createElementNS(NS,'circle');
    c.setAttribute('cx',x);c.setAttribute('cy',y);c.setAttribute('r',13);
    c.setAttribute('class','hot');c.style.fill=OC[k];c.dataset.k=k;c.setAttribute('tabindex','0');
    c.setAttribute('role','button');c.setAttribute('aria-label',o.n);
    c.addEventListener('click',()=>show(k));
    c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(k)}});
    hots.appendChild(c);
  });
  const b=document.createElement('button');b.className='chip';b.dataset.k=k;b.textContent=o.n;
  b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>show(k));chips.appendChild(b);
});
show('jantung');

const SOLI={
'Kurus':['Tambah asupan energi dan protein secara bertahap: makan utama 3 kali ditambah 2 kali selingan bergizi.','Pilih makanan padat gizi seperti telur, ikan, tempe, tahu, kacang-kacangan, dan susu. Jangan melewatkan sarapan.','Lakukan olahraga ringan hingga sedang, termasuk latihan kekuatan, agar berat badan naik sebagai otot dan bukan hanya lemak.','Cukup istirahat dan kelola stres.','Periksakan diri ke dokter bila berat badan turun tanpa sebab, nafsu makan hilang lama, atau ada gejala lain seperti batuk lama, demam, atau diare berkepanjangan.'],
'Normal':['Pertahankan pola makan seimbang: separuh piring berisi sayur dan buah.','Bergerak minimal 150 menit per minggu dan kurangi duduk terlalu lama.','Tidur 7–9 jam dan kelola stres.','Timbang berat badan dan ukur lingkar perut secara berkala. Umumnya lingkar perut sebaiknya di bawah 90 cm untuk pria dan 80 cm untuk wanita.','Tetap lakukan pemeriksaan rutin (tekanan darah, gula darah, kolesterol) walau IMT normal.'],
'Gemuk (berat badan lebih)':['Turunkan berat badan secara bertahap, misalnya 5–10% dari berat badan awal, bukan dengan diet drastis.','Kurangi minuman manis, gorengan, dan makanan olahan. Perhatikan porsi dan perbanyak sayur serta makanan berserat.','Tambah aktivitas fisik mulai dari jalan kaki, lalu naikkan bertahap menuju 150 menit per minggu atau lebih.','Tidur cukup dan batasi camilan larut malam.','Ukur lingkar perut, tekanan darah, dan gula darah secara berkala.'],
'Obesitas':['Konsultasikan dengan dokter atau ahli gizi untuk rencana yang aman, termasuk pemeriksaan tekanan darah, gula darah, dan kolesterol.','Targetkan penurunan bertahap. Turun 5–10% dari berat badan awal sudah memberi manfaat bagi kesehatan.','Atur pola makan: kurangi minuman manis, gorengan, serta makanan tinggi gula dan lemak, dan perbanyak sayur dan buah.','Mulai aktivitas fisik secara bertahap sesuai kemampuan, lalu naikkan menuju 150 menit per minggu atau lebih. Bila ada nyeri sendi atau penyakit jantung, tanyakan dokter lebih dulu.','Hindari diet ekstrem serta obat atau suplemen pelangsing tanpa resep.','Tanyakan kepada dokter mengenai terapi lain bila perubahan gaya hidup belum cukup.']
};
const cats=[[18.5,'Kurus','#5B9BD5'],[25.05,'Normal','#1F8A7D'],[27.05,'Gemuk (berat badan lebih)','#E8A317'],[999,'Obesitas','#E0457B']];
document.getElementById('calc').addEventListener('click',()=>{
  const w=parseFloat(document.getElementById('w').value),h=parseFloat(document.getElementById('h').value)/100;
  const r=document.getElementById('res');
  if(!(w>0)||!(h>0.5)){r.innerHTML='<p style="margin:0">Masukkan berat (kg) dan tinggi (cm) dengan angka yang valid.</p>';return}
  const b=w/(h*h),c=cats.find(x=>b<x[0]);
  const pos=Math.min(100,Math.max(0,(b-14)/(40-14)*100));
  const note={Kurus:'Berat badan di bawah rentang normal. Bicarakan pola makan dengan tenaga kesehatan.',Normal:'Berada dalam rentang normal. Pertahankan pola makan dan aktivitas.','Gemuk (berat badan lebih)':'Sedikit di atas rentang normal. Perubahan kecil pada pola makan dan aktivitas sudah membantu.',Obesitas:'Risiko diabetes dan penyakit jantung meningkat. Konsultasikan rencana yang aman dengan dokter.'}[c[1]];
  r.innerHTML='<div class="big" id="num" style="color:'+c[2]+'">0.0</div><strong style="font-family:Bricolage Grotesque,sans-serif">'+c[1]+'</strong>'
   +'<div class="scale"><i style="background:#5B9BD5;flex:4.5"></i><i style="background:#1F8A7D;flex:6.5"></i><i style="background:#E8A317;flex:2"></i><i style="background:#E0457B;flex:13"></i></div>'
   +'<div class="pin"><b id="pn" style="left:0"></b></div><p style="margin:8px 0 0">'+note+'</p><h3 class="sh">Langkah yang disarankan</h3><ul class="sol">'+SOLI[c[1]].map(t=>'<li>'+t+'</li>').join('')+'</ul><p class="fine">Kategori mengikuti pedoman Kemenkes RI untuk orang dewasa (normal 18,5–25,0; gemuk 25,1–27,0; obesitas di atas 27,0). Standar WHO Asia-Pasifik lebih ketat: risiko meningkat mulai IMT 23. IMT tidak berlaku untuk anak-anak dan ibu hamil, dan kurang akurat bagi atlet berotot.</p>';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{document.getElementById('pn').style.left=pos+'%'}));
  const t0=performance.now(),el=document.getElementById('num');
  (function tick(t){const q=Math.min(1,(t-t0)/1100);el.textContent=(b*(1-Math.pow(1-q,3))).toFixed(1);if(q<1)requestAnimationFrame(tick)})(t0);
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{threshold:.2});
document.querySelectorAll('.habits div').forEach((d,i)=>{d.classList.add('rv');d.style.transitionDelay=(i*90)+'ms';io.observe(d)});

const DB=[
{t:'o',n:'Paracetamol',k:'demam panas sakit kepala nyeri parasetamol',ic:'💊',g:'Obat bebas',d:'Menurunkan demam dan meredakan nyeri ringan hingga sedang.',c:'Sakit kepala, sakit gigi, nyeri badan, demam.',w:'Jangan melebihi batas harian di kemasan. Dosis berlebih merusak hati, dan hindari bersamaan dengan alkohol atau produk lain yang mengandung paracetamol.'},
{t:'o',n:'Ibuprofen',k:'nyeri radang sakit gigi haid nsaid',ic:'💊',g:'Bebas terbatas / keras (menurut sediaan)',d:'Antiradang nonsteroid untuk nyeri, radang, dan demam.',c:'Nyeri otot dan sendi, nyeri haid, sakit gigi.',w:'Minum sesudah makan. Hati-hati pada riwayat maag, penyakit ginjal, asma, dan kehamilan. Jangan dipakai saat dicurigai demam berdarah.'},
{t:'o',n:'Amoksisilin',k:'antibiotik infeksi bakteri amoxicillin',ic:'🧫',g:'Obat keras (resep)',d:'Antibiotik untuk infeksi akibat bakteri tertentu.',c:'Infeksi telinga, saluran napas, dan saluran kemih sesuai penilaian dokter.',w:'Tidak mempan untuk flu atau pilek karena virus. Habiskan sesuai anjuran dokter agar tidak memicu resistensi. Tanyakan bila alergi penisilin.'},
{t:'o',n:'Omeprazol',k:'maag asam lambung gerd ulu hati ppi',ic:'💊',g:'Obat keras (resep)',d:'Menekan produksi asam lambung.',c:'GERD, tukak lambung, gastritis.',w:'Biasanya diminum sebelum makan. Pemakaian jangka panjang perlu pengawasan dokter.'},
{t:'o',n:'Antasida',k:'maag perih lambung kembung mylanta promag',ic:'🥛',g:'Bebas / bebas terbatas',d:'Menetralkan asam lambung dengan cepat.',c:'Nyeri ulu hati, perih, dan kembung sesekali.',w:'Beri jeda dengan obat lain sekitar 2 jam. Bila keluhan berulang, periksakan ke dokter.'},
{t:'o',n:'Cetirizine',k:'alergi gatal bersin biduran antihistamin',ic:'🤧',g:'Bebas terbatas / keras (menurut sediaan)',d:'Antihistamin untuk gejala alergi.',c:'Bersin, hidung berair, mata gatal, biduran.',w:'Bisa menimbulkan kantuk pada sebagian orang, jadi berhati-hati saat berkendara.'},
{t:'o',n:'Oralit',k:'diare dehidrasi cairan garam elektrolit',ic:'🧂',g:'Obat bebas',d:'Larutan garam dan gula pengganti cairan yang hilang.',c:'Mencegah dan mengatasi dehidrasi akibat diare atau muntah.',w:'Larutkan sesuai petunjuk kemasan. Segera ke dokter bila diare disertai darah, demam tinggi, atau lemas berat.'},
{t:'o',n:'Metformin',k:'diabetes gula darah kencing manis',ic:'🩸',g:'Obat keras (resep)',d:'Menurunkan gula darah dengan meningkatkan kepekaan tubuh terhadap insulin.',c:'Diabetes melitus tipe 2.',w:'Diminum bersama atau sesudah makan. Jangan berhenti atau mengubah dosis tanpa arahan dokter.'},
{t:'o',n:'Amlodipin',k:'darah tinggi hipertensi tekanan',ic:'❤️',g:'Obat keras (resep)',d:'Melebarkan pembuluh darah sehingga tekanan darah turun.',c:'Hipertensi dan nyeri dada angina.',w:'Efek samping umum: kaki bengkak dan pusing. Diminum rutin, bukan hanya saat merasa tidak enak.'},
{t:'p',n:'Demam berdarah dengue (DBD)',k:'dbd demam berdarah nyamuk aedes trombosit',ic:'🦟',g:'Infeksi virus',d:'Ditularkan nyamuk Aedes aegypti. Demam tinggi mendadak 2–7 hari.',c:'Nyeri di belakang mata, nyeri otot, ruam, mual, bintik perdarahan.',w:'Fase kritis muncul saat demam turun: nyeri perut hebat, muntah terus, mimisan, lemas. Segera ke IGD. Perbanyak minum dan lakukan 3M plus.'},
{t:'p',n:'Hipertensi',k:'darah tinggi tekanan tensi',ic:'❤️',g:'Penyakit kronis',d:'Tekanan darah terus tinggi (umumnya 140/90 atau lebih) dan sering tanpa gejala.',c:'Sering tanpa keluhan; kadang pusing atau tengkuk berat.',w:'Bila tidak terkontrol, risikonya stroke, serangan jantung, dan gagal ginjal. Kurangi garam, olahraga, dan cek tekanan darah rutin.'},
{t:'p',n:'Diabetes melitus',k:'kencing manis gula darah sering haus',ic:'🩸',g:'Penyakit kronis',d:'Kadar gula darah tinggi karena kekurangan atau resistensi insulin.',c:'Sering haus, sering buang air kecil, cepat lapar, luka lama sembuh, berat badan turun.',w:'Diagnosis lewat pemeriksaan darah. Pola makan, aktivitas, dan kontrol rutin sama penting dengan obat.'},
{t:'p',n:'Maag (gastritis) dan GERD',k:'maag gerd asam lambung perih ulu hati',ic:'🔥',g:'Gangguan pencernaan',d:'Peradangan lambung atau naiknya asam lambung ke kerongkongan.',c:'Perih ulu hati, mual, rasa terbakar di dada, sendawa asam.',w:'Waspada bila ada muntah darah, tinja hitam, atau sulit menelan. Makan teratur, kurangi kopi dan pedas, hindari rokok.'},
{t:'p',n:'Diare',k:'mencret bab cair dehidrasi',ic:'🚽',g:'Gangguan pencernaan',d:'Buang air besar cair 3 kali atau lebih dalam sehari, sering akibat infeksi.',c:'Mulas, mual, lemas, kadang demam.',w:'Kunci utama adalah mengganti cairan. Segera ke dokter pada bayi, lansia, tinja berdarah, atau tanda dehidrasi berat.'},
{t:'p',n:'Influenza dan pilek',k:'flu batuk pilek demam pusing meriang',ic:'🤒',g:'Infeksi virus',d:'Infeksi virus saluran napas atas yang biasanya sembuh sendiri dalam 1–2 minggu.',c:'Demam, batuk, pilek, sakit tenggorokan, badan pegal.',w:'Istirahat dan minum banyak. Antibiotik tidak diperlukan. Cari bantuan bila sesak napas atau demam lebih dari 3 hari.'},
{t:'p',n:'Asma',k:'sesak napas mengi bengek',ic:'🫁',g:'Penyakit kronis',d:'Penyempitan saluran napas yang datang berulang dan dipicu debu, dingin, atau aktivitas.',c:'Mengi, batuk malam hari, dada sesak.',w:'Kenali pemicunya dan selalu bawa inhaler. Sesak yang tidak membaik dengan inhaler adalah keadaan darurat.'}
];

const SOL={
'Demam berdarah dengue (DBD)':[
'Istirahat total dan perbanyak minum (air putih, oralit, atau cairan lain) sesuai anjuran tenaga kesehatan.',
'Untuk demam dan nyeri, gunakan paracetamol sesuai aturan pakai. Hindari ibuprofen dan aspirin karena dapat meningkatkan risiko perdarahan.',
'Periksakan diri ke fasilitas kesehatan sejak demam hari ke-2 atau ke-3 untuk pemeriksaan darah dan pemantauan.',
'Waspadai tanda bahaya saat demam mulai turun (nyeri perut hebat, muntah terus, perdarahan, lemas, gelisah) dan segera ke IGD.',
'Cegah penularan dengan 3M Plus: menguras, menutup tempat penampungan air, dan mendaur ulang barang bekas, ditambah menghindari gigitan nyamuk.'],
'Hipertensi':[
'Minum obat darah tinggi secara rutin sesuai resep dokter. Jangan berhenti sendiri walau tekanan darah sudah terasa normal.',
'Batasi garam (WHO menganjurkan kurang dari 5 gram atau sekitar 1 sendok teh per hari), termasuk garam dari makanan olahan dan penyedap.',
'Perbanyak sayur, buah, dan biji-bijian; kurangi lemak jenuh dan gorengan.',
'Bergerak rutin, misalnya jalan cepat sekitar 30 menit pada sebagian besar hari, dan jaga berat badan ideal.',
'Berhenti merokok, batasi alkohol, kelola stres, dan ukur tekanan darah secara berkala.'],
'Diabetes melitus':[
'Ikuti rencana pengobatan dari dokter (obat atau insulin) dan jangan mengubah dosis sendiri.',
'Atur pola makan: batasi gula dan minuman manis, pilih karbohidrat berserat, dan makan teratur dengan porsi terjaga.',
'Aktif bergerak secara rutin sesuai kondisi dan anjuran dokter.',
'Pantau gula darah dan lakukan kontrol berkala, termasuk pemeriksaan HbA1c, mata, dan ginjal.',
'Periksa dan rawat kaki setiap hari. Segera ke dokter bila ada luka yang sulit sembuh.',
'Kenali gula darah rendah (gemetar, keringat dingin, lemas): bila masih sadar, segera minum atau makan sumber gula, lalu hubungi tenaga kesehatan. Bila tidak membaik atau tidak sadar, segera ke IGD.'],
'Maag (gastritis) dan GERD':[
'Makan teratur dengan porsi kecil tetapi sering, dan jangan menunda waktu makan.',
'Hindari pemicu pribadi seperti makanan pedas, asam, berlemak, kopi, minuman bersoda, alkohol, dan rokok.',
'Jangan berbaring dalam 2–3 jam setelah makan. Tinggikan kepala saat tidur bila gejala muncul pada malam hari.',
'Hindari obat antinyeri golongan NSAID (misalnya ibuprofen) tanpa anjuran karena dapat mengiritasi lambung.',
'Antasida dapat meredakan keluhan sesaat. Bila keluhan berulang atau ada tanda bahaya, periksakan ke dokter.'],
'Diare':[
'Segera ganti cairan: minum oralit atau cairan sedikit demi sedikit tetapi sering.',
'Tetap makan. Pilih makanan lunak dan mudah dicerna, hindari makanan sangat berlemak dan pedas.',
'Pada anak, ikuti anjuran tenaga kesehatan mengenai pemberian zinc, dan teruskan ASI.',
'Antibiotik tidak diperlukan pada sebagian besar diare. Gunakan hanya bila diresepkan dokter.',
'Cegah dengan mencuci tangan memakai sabun serta memakai air minum dan makanan yang bersih dan matang.'],
'Influenza dan pilek':[
'Istirahat cukup dan perbanyak minum cairan hangat.',
'Untuk demam atau badan pegal, bisa memakai paracetamol sesuai aturan pakai.',
'Pakai masker saat batuk atau pilek dan cuci tangan agar tidak menularkan.',
'Antibiotik tidak diperlukan karena penyebabnya virus.',
'Vaksin influenza tahunan membantu pencegahan, terutama bagi kelompok berisiko seperti lansia, ibu hamil, dan penderita penyakit kronis.'],
'Asma':[
'Gunakan obat sesuai rencana dokter: obat pelega (inhaler) saat gejala muncul dan obat pengendali bila diresepkan.',
'Kenali dan hindari pemicu seperti debu, asap rokok, bulu hewan, udara dingin, atau aktivitas berat tanpa persiapan.',
'Jaga kebersihan rumah dari debu dan jangan merokok.',
'Bawa inhaler ke mana pun dan periksakan cara pemakaiannya kepada tenaga kesehatan.',
'Kontrol berkala. Segera ke IGD bila sesak berat atau tidak membaik setelah memakai inhaler.']
};
DB.forEach(x=>{if(SOL[x.n])x.s=SOL[x.n]});

const LG={b:['#2E9E4F','Obat bebas'],t:['#2B6CD9','Obat bebas terbatas'],k:['#E53935','Obat keras (resep)']};
function lg1(c,s){const [f,n]=LG[c];return '<span class="lgs" title="'+n+'"><svg viewBox="0 0 32 32" style="width:'+s+'px;height:'+s+'px" role="img" aria-label="Logo '+n+'"><circle cx="16" cy="16" r="13" fill="'+f+'" stroke="#111" stroke-width="2.5"/>'+(c==='k'?'<text x="16" y="21.5" text-anchor="middle" font-size="16" font-weight="800" font-family="Arial,sans-serif" fill="#111">K</text>':'')+'</svg></span>'}
function lgo(x){if(x.t!=='o')return '';const g=x.g.toLowerCase(),a=[];if(/bebas(?! terbatas)/.test(g))a.push('b');if(g.includes('bebas terbatas'))a.push('t');if(g.includes('keras'))a.push('k');return '<span class="lg">'+a.map(c=>lg1(c,16)).join('')+'</span>'}
document.getElementById('legend').innerHTML=['b','t','k'].map(c=>'<span class="li">'+lg1(c,14)+LG[c][1]+'</span>').join('');
const P=(x,y,c,l)=>'<g transform="translate('+x+','+y+')" class="'+c+'"><circle cy="-8" r="7"/><path d="M-12 14a12 12 0 0 1 24 0z"/><text y="28" text-anchor="middle">'+l+'</text></g>';
const ANIM={
'Demam berdarah dengue (DBD)':{al:'Nyamuk Aedes menggigit penderita lalu menggigit orang sehat',s:P(45,92,'sick','Penderita')+P(255,92,'inf','Orang sehat')+'<g class="mq"><ellipse rx="8" ry="3.5" fill="#555"/><ellipse class="wg" cx="-1" cy="-5" rx="6" ry="2.6" fill="#9CC9F0" opacity=".85"/><circle class="vr" cx="-9" cy="1" r="2.2" fill="#E53935"/><circle class="vr" cx="9" cy="1" r="2.2" fill="#E53935"/><text y="-12" text-anchor="middle">Nyamuk Aedes</text></g>',c:'Virus dengue berpindah lewat gigitan nyamuk Aedes: nyamuk menggigit penderita, virus ikut terbawa, lalu ditularkan ke orang sehat pada gigitan berikutnya. DBD tidak menular langsung dari orang ke orang.'},
'Hipertensi':{al:'Darah menekan dinding pembuluh lebih kuat pada hipertensi',s:'<text x="8" y="14">Normal (sekitar 120/80)</text><rect x="14" y="20" width="272" height="26" rx="13" fill="none" stroke="var(--line)" stroke-width="2.5"/><circle class="rc" cx="24" cy="33" r="4"/><circle class="rc" cx="24" cy="33" r="4" style="animation-delay:-1.3s"/><circle class="rc" cx="24" cy="33" r="4" style="animation-delay:-2.6s"/><text x="8" y="72">Hipertensi (140/90 atau lebih)</text><rect x="14" y="92" width="272" height="26" rx="13" fill="none" stroke="var(--line)" stroke-width="2.5"/>'+[0,.3,.6,.9,1.2,1.5].map(d=>'<circle class="rc f" cx="24" cy="105" r="4" style="animation-delay:-'+d+'s"/>').join('')+[70,130,190,250].map(x=>'<g transform="translate('+x+',82)"><path class="ar" style="--d:-1" d="M0 0L4 6L-4 6Z"/></g><g transform="translate('+x+',121)"><path class="ar" style="--d:1" d="M0 6L4 0L-4 0Z"/></g>').join('')+'<text x="8" y="146">Dinding pembuluh ditekan lebih kuat</text>',c:'Hipertensi tidak menular. Pada tekanan darah tinggi, darah menekan dinding pembuluh lebih kuat dan terus-menerus, sehingga pembuluh serta organ seperti jantung, otak, dan ginjal bisa rusak seiring waktu.'},
'Diabetes melitus':{al:'Insulin membuka pintu sel agar gula masuk; pada diabetes gula menumpuk di darah',s:'<text x="75" y="10" text-anchor="middle">Normal</text><text x="225" y="10" text-anchor="middle">Diabetes</text><rect x="25" y="16" width="100" height="16" rx="8" fill="#E53935" opacity=".22"/><rect x="175" y="16" width="100" height="16" rx="8" fill="#E53935" opacity=".22"/><circle cx="40" cy="24" r="2.5" fill="#F5B700"/><circle cx="110" cy="24" r="2.5" fill="#F5B700"/>'+[185,197,209,221,233,245,257,267].map(x=>'<circle cx="'+x+'" cy="24" r="2.5" fill="#F5B700"/>').join('')+'<rect x="35" y="92" width="80" height="44" rx="12" fill="none" stroke="var(--teal)" stroke-width="2"/><rect x="185" y="92" width="80" height="44" rx="12" fill="none" stroke="var(--teal)" stroke-width="2"/><rect x="65" y="89" width="20" height="6" rx="3" fill="#2B6CD9"/><rect x="215" y="89" width="20" height="6" rx="3" fill="#9AA5AB"/><g class="ky"><circle cx="75" cy="52" r="3.5" fill="#2B6CD9"/><rect x="78" y="51" width="9" height="2" fill="#2B6CD9"/></g>'+[68,75,82].map((x,i)=>'<circle class="gl gn" cx="'+x+'" cy="24" r="3.5" style="animation-delay:'+(0.9+i*0.25)+'s"/>').join('')+[218,225,232].map((x,i)=>'<circle class="gl gd" cx="'+x+'" cy="24" r="3.5" style="animation-delay:'+(i*0.25)+'s"/>').join('')+'<text x="75" y="147" text-anchor="middle">Insulin membuka pintu sel</text><text x="225" y="147" text-anchor="middle">Insulin kurang / tidak bekerja</text>',c:'Diabetes tidak menular. Insulin membuka "pintu" sel agar gula (glukosa) masuk dan dipakai sebagai energi. Bila insulin kurang atau tidak bekerja baik, gula tertahan dan menumpuk di darah.'},
'Maag (gastritis) dan GERD':{al:'Asam lambung naik ke kerongkongan karena katup melemah',s:'<rect x="135" y="6" width="30" height="64" rx="10" fill="var(--surf)" stroke="var(--line)" stroke-width="2"/><ellipse cx="150" cy="105" rx="62" ry="38" fill="#F26B3A" opacity=".18" stroke="#F26B3A" stroke-width="2"/><rect class="les" x="132" y="68" width="36" height="7" rx="3" fill="#8E6CFF"/>'+[142,150,158].map((x,i)=>'<circle class="ac" cx="'+x+'" cy="92" r="3" style="animation-delay:-'+i+'s"/>').join('')+'<text x="10" y="40">Kerongkongan</text><text x="10" y="108">Lambung</text><text x="176" y="76">Katup melemah</text><text x="176" y="30">Rasa terbakar</text>',c:'Maag/GERD tidak menular. Pada GERD, katup di ujung bawah kerongkongan melemah sehingga asam lambung naik dan terasa terbakar di dada. Pada gastritis, dinding lambung meradang, misalnya akibat infeksi bakteri H. pylori atau obat antinyeri tertentu.'},
'Diare':{al:'Kuman dari air atau makanan tercemar tertelan lalu mengiritasi usus',s:'<path d="M62 62H134M166 62H236" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/><g transform="translate(45,62)"><path d="M0-16C9-4 11 3 0 12C-11 3-9-4 0-16Z" fill="#2FA4E0"/></g><g transform="translate(150,62)"><circle r="14" fill="var(--bg)" stroke="var(--ink)" stroke-width="2"/><path d="M-7 2Q0 9 7 2" fill="none" stroke="var(--ink)" stroke-width="2"/></g><g transform="translate(255,62)"><path class="nd" d="M-15-10q8-6 15 0t15 0M-15 0q8-6 15 0t15 0M-15 10q8-6 15 0t15 0" fill="none" stroke-width="3" stroke-linecap="round"/></g>'+[0,1.6,3.2].map(d=>'<circle class="gm" cx="45" cy="62" r="3" style="animation-delay:-'+d+'s"/>').join('')+'<text x="45" y="100" text-anchor="middle">Air/makanan kotor</text><text x="150" y="100" text-anchor="middle">Tertelan lewat mulut</text><text x="255" y="100" text-anchor="middle">Usus teriritasi</text>',c:'Diare menular lewat jalur tinja-mulut: kuman dari tinja mencemari air, makanan, atau tangan, lalu tertelan dan mengiritasi usus. Mencuci tangan serta memakai air dan makanan yang bersih memutus rantai ini.'},
'Influenza dan pilek':{al:'Percikan dari penderita batuk atau bersin terhirup orang sehat',s:P(45,92,'sick','Penderita')+P(255,92,'inf6','Orang sehat')+'<text x="150" y="40" text-anchor="middle">Percikan (droplet)</text>'+[-12,-4,4,10,-8].map((y,i)=>'<circle class="dp" cx="62" cy="82" r="2.6" style="--dy:'+y+'px;animation-delay:'+(i*0.25)+'s"/>').join(''),c:'Virus influenza menyebar lewat percikan saat penderita batuk, bersin, atau berbicara, juga lewat tangan yang menyentuh permukaan tercemar lalu menyentuh mulut, hidung, atau mata. Masker dan cuci tangan membantu mencegah.'},
'Asma':{al:'Saluran napas menyempit saat serangan asma',s:'<circle cx="150" cy="68" r="44" fill="#E8A317" opacity=".5"/><circle class="lu o" cx="150" cy="68" r="36" fill="var(--surf)"/>'+[[140,64],[156,74],[148,60]].map(p=>'<circle class="mu" cx="'+p[0]+'" cy="'+p[1]+'" r="3" fill="#F2D64B"/>').join('')+'<text class="t1" x="150" y="140" text-anchor="middle">Saluran napas normal</text><text class="t2" x="150" y="140" text-anchor="middle">Serangan: otot mengencang, lendir menumpuk</text>',c:'Asma tidak menular. Saat serangan, otot saluran napas mengencang, dindingnya membengkak, dan lendir bertambah sehingga lubang saluran napas menyempit dan udara sulit lewat.'}
};
const EXTRA={
'Demam berdarah dengue (DBD)':'<circle class="rg2" cx="45" cy="84" r="16"/><circle class="rg" cx="255" cy="84" r="16"/>',
'Hipertensi':'<rect class="wp" x="14" y="92" width="272" height="26" rx="13" fill="none" stroke-width="3"/><text class="hb" x="276" y="15">♥</text>',
'Diabetes melitus':'<rect class="sh" x="25" y="16" width="26" height="16" rx="8"/><rect class="sh" x="175" y="16" width="26" height="16" rx="8"/>',
'Maag (gastritis) dan GERD':'<ellipse class="ch o" cx="150" cy="105" rx="62" ry="38" fill="none" stroke="#F26B3A" stroke-width="2"/>'+[[125,118],[150,124],[172,116],[138,128]].map((p,i)=>'<circle class="bb" cx="'+p[0]+'" cy="'+p[1]+'" r="2.2" style="animation-delay:-'+(i*0.5)+'s"/>').join(''),
'Diare':'<circle class="rp" cx="45" cy="62" r="14"/><circle class="rg5" cx="255" cy="62" r="18"/>',
'Influenza dan pilek':'<circle class="rg2" cx="45" cy="84" r="16" style="stroke:#E8A317"/><circle class="rg6" cx="255" cy="84" r="16"/>'+[-16,0,14,-6].map((y,i)=>'<circle class="dp" cx="62" cy="86" r="2" style="--dy:'+y+'px;animation-delay:'+(1.25+i*0.2)+'s"/>').join(''),
'Asma':'<path class="mu" d="M205 40q6 4 0 8M212 36q9 8 0 16M220 32q12 12 0 24" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linecap="round"/>'+[60,68,76].map((y,i)=>'<circle class="af" cx="100" cy="'+y+'" r="2" style="animation-delay:-'+(i*0.8)+'s"/>').join('')
};
function anim(x){const a=ANIM[x.n];if(!a)return '';const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;return '<h4>Bagaimana penyakit ini terjadi</h4><div class="anim'+(rm?' paused':'')+'"><svg viewBox="0 0 300 150" role="img" aria-label="'+a.al+'">'+a.s+(EXTRA[x.n]||'')+'</svg><p class="cap">'+a.c+'</p><button class="ab" type="button">'+(rm?'▶ Putar animasi':'❚❚ Jeda animasi')+'</button></div>'}

const VQ={
'Demam berdarah dengue (DBD)':'Kemenkes demam berdarah dengue DBD',
'Hipertensi':'Kemenkes hipertensi darah tinggi',
'Diabetes melitus':'Kemenkes diabetes melitus',
'Maag (gastritis) dan GERD':'penjelasan dokter maag GERD asam lambung',
'Diare':'Kemenkes diare cegah dan atasi',
'Influenza dan pilek':'penjelasan dokter influenza pilek',
'Asma':'penjelasan dokter asma inhaler'
};
const VID={
'Demam berdarah dengue (DBD)':'https://youtu.be/g5gbu8l5_QI',
'Hipertensi':'https://youtu.be/sbttzVVagvA',
'Diabetes melitus':'https://youtu.be/JQC_hMP-Ies',
'Maag (gastritis) dan GERD':'https://youtu.be/gVW6B5p0GYE',
'Diare':'https://youtu.be/t52oGZcOD2I',
'Influenza dan pilek':'https://youtu.be/oXzwtGFyBik',
'Asma':'https://youtu.be/6_Erej_UhpM'
};
function vid(x){const u=VID[x.n]||('https://www.youtube.com/results?search_query='+encodeURIComponent(VQ[x.n]||x.n));
return '<p class="vid"><a href="'+u+'" target="_blank" rel="noopener noreferrer">▶ Video lengkap di YouTube</a><small>Dibuka di tab baru.</small></p>'}

let filt='all';
const out=document.getElementById('out'),q=document.getElementById('q'),tabs=document.getElementById('tabs');
[['all','Semua'],['o','💊 Obat'],['p','🩺 Penyakit']].forEach(([k,l])=>{
  const b=document.createElement('button');b.className='chip';b.textContent=l;b.dataset.k=k;
  b.setAttribute('aria-pressed',k==='all');b.onclick=()=>{filt=k;tabs.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));render()};
  tabs.appendChild(b);
});
function render(){
  const v=q.value.trim().toLowerCase();
  const r=DB.filter(x=>(filt==='all'||x.t===filt)&&(!v||(x.n+' '+x.k).toLowerCase().includes(v)));
  out.innerHTML=r.length?r.map((x,i)=>'<details class="card" style="animation-delay:'+i*40+'ms"><summary><span class="ic">'+x.ic+'</span><span><h3>'+x.n+'</h3><span class="tag'+(x.g.includes('resep')?' rx':'')+'">'+x.g+'</span></span>'+lgo(x)+'</summary><div class="more"><p>'+x.d+'</p><p><b>'+(x.t==='o'?'Kegunaan: ':'Gejala: ')+'</b>'+x.c+'</p>'+anim(x)+(x.s?'<h4>Solusi dan penanganan</h4><ul class="sol">'+x.s.map(t=>'<li>'+t+'</li>').join('')+'</ul>':'')+(x.t==='p'?vid(x):'')+'<p class="wn"><b>Perhatian: </b>'+x.w+'</p></div></details>').join(''):'<p class="empty">Tidak ada hasil untuk "'+v.replace(/[<>&"]/g,'')+'". Coba kata lain, misalnya gejala (demam, batuk) atau nama obat.</p>';
}
q.addEventListener('input',render);render();
out.addEventListener('click',e=>{const b=e.target.closest('.ab');if(!b)return;const a=b.closest('.anim'),p=a.classList.toggle('paused');b.textContent=p?'▶ Putar animasi':'❚❚ Jeda animasi'});

const HB=['Minum air putih 8 gelas','Bergerak minimal 30 menit','Makan sayur dan buah','Tidur sebelum pukul 23.00','Jeda layar 1 jam sebelum tidur','Napas dalam atau meditasi 5 menit'];
const chk=document.getElementById('chk'),fg=document.getElementById('fg');
HB.forEach((h,i)=>{const li=document.createElement('li');li.innerHTML='<label><input type="checkbox"><span>'+h+'</span></label>';li.firstChild.firstChild.addEventListener('change',upd);chk.appendChild(li)});
function upd(){
  const n=chk.querySelectorAll('input:checked').length,f=n/HB.length;
  if(f===1&&fg.dataset.d!=='1')burst();fg.dataset.d=f===1?'1':'0';
  fg.style.strokeDashoffset=327*(1-f);fg.style.stroke=f===1?'var(--acc)':'var(--teal)';
  document.getElementById('pc').textContent=Math.round(f*100)+'%';
  document.getElementById('ps').textContent=f===1?'Hebat, hari ini lengkap!':n+' dari '+HB.length+' selesai';
}
document.querySelectorAll('#mind div').forEach((d,i)=>{d.classList.add('rv');d.style.transitionDelay=(i*90)+'ms';io.observe(d)});

function burst(){
  const r=document.querySelector('.ring'),cols=['var(--acc)','var(--teal)','#FFC247','#8E6CFF','#2FA4E0'];
  for(let i=0;i<28;i++){const c=document.createElement('i');c.className='cf';const a=Math.random()*6.28,d=60+Math.random()*80;
    c.style.cssText='background:'+cols[i%5]+';--x:'+Math.cos(a)*d+'px;--y:'+(Math.sin(a)*d+30)+'px;--r:'+(Math.random()*720-360)+'deg';
    r.appendChild(c);setTimeout(()=>c.remove(),1300)}
}
const FACTS=[['❤️','Jantung orang dewasa berdetak sekitar 100.000 kali dalam sehari.'],['💧','Sekitar 50–60% tubuh orang dewasa terdiri dari air.'],['🦴','Orang dewasa memiliki 206 tulang.'],['🫁','Saat istirahat, orang dewasa bernapas sekitar 12–20 kali per menit.'],['🧠','Otak memakai sekitar 20% energi tubuh, padahal beratnya hanya sekitar 2% dari berat badan.'],['😴','Orang dewasa umumnya butuh tidur 7–9 jam setiap malam.']];
let fi=0;const ft=document.getElementById('ft'),fe=document.getElementById('fi');
function fact(n){ft.classList.add('out');setTimeout(()=>{fi=n%FACTS.length;fe.textContent=FACTS[fi][0];ft.textContent=FACTS[fi][1];ft.classList.remove('out')},300)}
ft.textContent=FACTS[0][1];fe.textContent=FACTS[0][0];
let ftm;const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function auto(){if(!reduce){clearInterval(ftm);ftm=setInterval(()=>fact(fi+1),8000)}}
document.getElementById('fn').onclick=()=>{fact(fi+1);auto()};auto();

const bg=document.querySelector('.bgfx');
if(!reduce)for(let i=0;i<14;i++){const b=document.createElement('i');b.className='bub';const z=8+Math.random()*24;
  b.style.cssText='width:'+z+'px;height:'+z+'px;left:'+Math.random()*100+'%;animation-duration:'+(16+Math.random()*20)+'s;animation-delay:-'+Math.random()*30+'s';bg.appendChild(b)}

const pr=document.getElementById('prog');
addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;pr.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0)+')'},{passive:true});
document.querySelectorAll('h2.sec').forEach(h=>io.observe(h));

function pal(n){
  if(n==='samudra')document.documentElement.removeAttribute('data-pal');else document.documentElement.setAttribute('data-pal',n);
  document.querySelectorAll('.pal button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.p===n));
  try{localStorage.setItem('pal',n)}catch(e){}
}
document.querySelectorAll('.pal button').forEach(b=>b.onclick=()=>pal(b.dataset.p));
try{const sv=localStorage.getItem('pal');if(sv&&['samudra','senja','hutan'].includes(sv))pal(sv)}catch(e){}