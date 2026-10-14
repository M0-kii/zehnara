'use strict';

(() => {
  const DURATION = 15 * 60 * 1000;
  const STORAGE_KEY = 'zehnara.quiz.v1';
  const LANGUAGE_KEY = 'zehnara.language';
  const $ = (selector) => document.querySelector(selector);
  const fa = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { fa[el.dataset.i18n] = el.innerHTML; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { fa[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  Object.assign(fa, {
    title: 'ذهن‌آرا | آزمون هوش و منطق', startTitle: 'آماده یک چالش کوچک هستی؟', startInfo: '۲۰ پرسش تصویری، منطقی و عددی در پیش داری. یک جای آرام پیدا کن و بدون ماشین‌حساب پاسخ بده. می‌توانی بین پرسش‌ها رفت‌وبرگشت کنی.',
    timerInfo: 'زمان پس از شروع، حتی اگر صفحه را ببندی، ادامه دارد. هر پاسخ درست یک امتیاز دارد و پاسخ اشتباه نمره منفی ندارد.', begin: 'شروع کنیم', later: 'فعلاً نه',
    quizTitle: 'آزمون هوش و منطق', exit: 'بازگشت به خانه', question: 'پرسش', of: 'از', answered: 'پاسخ داده شده', next: 'سوال بعدی', previous: 'سوال قبلی', finish: 'پایان آزمون', questionMap: 'پرسش‌های آزمون', saved: 'پیشرفت در همین مرورگر ذخیره می‌شود.', quizHint: 'می‌توانی از پرسش بگذری و بعد برگردی. پاسخ اشتباه نمره منفی ندارد.',
    leaveTitle: 'بعداً برمی‌گردی؟', leaveInfo: 'پاسخ‌هایت در این مرورگر باقی می‌مانند. زمان آزمون همچنان ادامه دارد و می‌توانی از صفحه اصلی به آن برگردی.', leaveConfirm: 'بازگشت به خانه', stay: 'ادامه آزمون', finishTitle: 'آزمون را تمام می‌کنی؟', finishInfo: 'بعد از پایان، پاسخ‌ها قابل تغییر نیستند. می‌توانی نتیجه و توضیح همه سوال‌ها را ببینی.', remaining: 'پرسش بدون پاسخ داری.', finishConfirm: 'بله، دیدن نتیجه', continue: 'ادامه پاسخ‌دادن',
    resultKicker: 'یک قدم برای شناخت ذهنت', resultTitle: 'چالش تمام شد؛ کشف ادامه دارد.', resultDescription: 'هر پاسخ، فرصتی برای دیدن یک ارتباط تازه است.', correctAnswers: 'پاسخ درست', practiceScore: 'امتیاز تمرینی', performance: 'عملکرد تو در این چالش', highScore: 'الگوها را خیلی خوب پیدا کردی! حالا توضیح پاسخ‌ها را ببین و سرنخ‌های جاافتاده را کشف کن.', midScore: 'چندین ارتباط را پیدا کردی. بررسی پاسخ‌ها کمک می‌کند دفعه بعد با نگاه دقیق‌تری سراغ الگوها بروی.', lowScore: 'مهم‌ترین بخش، یاد گرفتن از الگوهاست. با بررسی توضیح‌ها، منطق هر پاسخ را قدم‌به‌قدم کشف کن.',
    timeSpent: 'زمان استفاده‌شده', unanswered: 'بدون پاسخ', review: 'بررسی پاسخ‌ها', retry: 'دوباره امتحان کن', download: 'ذخیره نتیجه', home: 'صفحه اصلی', resultDisclaimer: 'این امتیاز، تعداد پاسخ‌های درست در یک آزمون تمرینی است و ضریب هوشی استاندارد یا ارزیابی بالینی محسوب نمی‌شود.', yourAnswer: 'پاسخ تو:', correctAnswer: 'پاسخ درست:', noAnswer: 'بدون پاسخ', savedResults: 'دیدن نتیجه قبلی', timeout: 'زمان تمام شد. پاسخ‌ها ثبت شدند.', storageUnavailable: 'ذخیره در مرورگر ممکن نیست؛ برای حفظ پاسخ‌ها صفحه را باز نگه دار.', minutes: 'دقیقه', resultFile: 'نتیجه آزمون ذهن‌آرا', correct: 'درست', wrong: 'نادرست', downloadDone: 'نتیجه ذخیره شد.', timerLabel: 'زمان باقی‌مانده', choicesLabel: 'گزینه‌های پاسخ', selected: 'انتخاب شده', restartTitle: 'یک دور دیگر؟', restartInfo: 'پرسش‌های این نسخه ثابت هستند. پاسخ‌های قبلی و نتیجه آن‌ها جایگزین می‌شوند. برای تمرین دوباره آماده‌ای؟'
  });
  const en = {
    skip:'Skip to content', brand:'Zehnara', nav:'Main navigation', navTest:'About the test', navHow:'How it works', navFaq:'FAQs', kicker:'For curious minds', headline:'Give your mind<br>a little challenge.', description:'Behind every pattern is a hidden logic. Take a few focused minutes to explore your problem-solving skills and see your mind from a different angle.', start:'Take the free test', noSignup:'No sign-up. Just curiosity.', questionsCount:'20 questions', duration:'15 minutes', instant:'Instant results', resume:'Continue your previous test', sampleLabel:'A little warm-up', sampleTitle:'Find the missing piece', patternGrid:'Three by three pattern', answers:'Answers', sampleQuestion:'Which shape completes the pattern?', sampleHint:'Pick an option. Look at the number of dots.', sampleCaption:'Sometimes, a different perspective is all it takes.', discoverKicker:'More than a number', discoverTitle:'One mind. Many abilities.', discoverDescription:'There’s more to thinking than arithmetic.<br>Explore three different skills in one test.', visual:'Visual reasoning', visualDescription:'Find the relationship between shapes and discover the missing piece of each pattern.', visualTag:'See the hidden connections', logic:'Logical thinking', logicDescription:'Put the clues together, examine the assumptions, and reach a conclusion.', logicTag:'Find a path to the answer', numbers:'Numerical reasoning', numbersDescription:'Spot the order in a set of numbers and figure out what comes next.', numbersTag:'Find the order in the numbers', howKicker:'15 minutes for yourself', howTitle:'A little focus.<br>A little curiosity.', howDescription:'Find a quiet spot. We’ll take it from there.', letsStart:'I’m ready. Let’s begin', step1Title:'Make yourself comfortable', step1Description:'No account or personal details needed. Just you and a curious mind.', step2Title:'Follow the patterns', step2Description:'Work through 20 questions. Skip a question and come back to it before time runs out.', step3Title:'Learn from your answers', step3Description:'See your score, your performance in each skill, and an explanation of every answer.', faqKicker:'Before you begin', faqTitle:'You might be wondering.', faqDescription:'A few things to help you get started.', faq1:'Will this test tell me my actual IQ?', faq1Answer:'This test is designed for practice and enjoyment. Your score is based on correct answers. A valid IQ measurement requires a standardized test and professional assessment.', faq2:'What if I don’t know an answer?', faq2Answer:'You can skip a question and return to it before time runs out. There is no penalty for a wrong answer. Each correct answer earns one point.', faq3:'Is my information saved?', faq3Answer:'Your progress is saved only in your own browser so you can continue later. We don’t ask for your name, email, or personal information. The timer keeps running after you start.', faq4:'Can I switch languages during the test?', faq4Answer:'Yes. Every question, answer, and explanation is available in Persian and English. Switching languages keeps your answers intact.', closingTitle:'See where your mind takes you.', closingDescription:'The first step is just one question.', footer:'A space for curiosity, discovery, and mental practice.', practiceNote:'A practice experience, not a clinical assessment', close:'Close',
    title:'Zehnara | Logic & IQ practice', startTitle:'Ready for a little challenge?', startInfo:'You have 20 visual, logical, and numerical questions ahead. Find a quiet spot and try without a calculator. You can move back and forth between questions.', timerInfo:'Once started, the timer continues even if you close the page. Each correct answer earns one point. There is no penalty for a wrong answer.', begin:'Let’s begin', later:'Not just yet', quizTitle:'Logic & IQ practice', exit:'Back to home', question:'Question', of:'of', answered:'answered', next:'Next question', previous:'Previous', finish:'Finish test', questionMap:'Your questions', saved:'Progress is saved in this browser.', quizHint:'You can skip a question and return to it. There is no penalty for a wrong answer.', leaveTitle:'Coming back later?', leaveInfo:'Your answers will stay in this browser. The timer will continue, and you can return to the test from the home page.', leaveConfirm:'Back to home', stay:'Keep going', finishTitle:'Finish your test?', finishInfo:'You can’t change answers after finishing. You’ll see your results and an explanation of every question.', remaining:'questions are unanswered.', finishConfirm:'Yes, see my results', continue:'Keep answering', resultKicker:'A little more insight into your mind', resultTitle:'Challenge complete. Keep discovering.', resultDescription:'Every answer is a chance to see a new connection.', correctAnswers:'correct answers', practiceScore:'Practice score', performance:'Your performance in this challenge', highScore:'You spotted the patterns really well! Explore the explanations to discover any clues you missed.', midScore:'You found plenty of connections. Reviewing the answers can help you see the patterns more clearly next time.', lowScore:'The most useful part is learning from the patterns. Explore the explanations to discover the logic behind each answer.', timeSpent:'Time used', unanswered:'Unanswered', review:'Review answers', retry:'Try again', download:'Save results', home:'Back to home', resultDisclaimer:'This score counts correct answers in a practice test. It is not a standardized IQ score or a clinical assessment.', yourAnswer:'Your answer:', correctAnswer:'Correct answer:', noAnswer:'Unanswered', savedResults:'View previous results', timeout:'Time’s up. Your answers have been saved.', storageUnavailable:'Browser storage is unavailable. Keep this page open to preserve your answers.', minutes:'minutes', resultFile:'Zehnara practice test results', correct:'Correct', wrong:'Incorrect', downloadDone:'Results saved.', timerLabel:'Time remaining', choicesLabel:'Answer options', selected:'Selected', restartTitle:'Another round?', restartInfo:'This version uses the same questions each time. Your previous answers and results will be replaced. Ready to practice again?'
  };
  let lang = 'fa';
  let state = null;
  let view = 'home';
  let demoSelection = null;
  let dialogAction = null;
  let toastTimeout;
  let storageAvailable = true;
  try {
    lang = localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'fa';
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch { /* Ignore an invalid saved test. */ }
    if (saved && saved.version === 1 && Array.isArray(saved.answers) && saved.answers.length === QUESTIONS.length && saved.answers.every((a,i) => a === null || (Number.isInteger(a) && a >= 0 && a < QUESTIONS[i].options.length)) && Number.isInteger(saved.index) && saved.index >= 0 && saved.index < QUESTIONS.length && Number.isFinite(saved.startedAt) && saved.endAt === saved.startedAt + DURATION && (saved.completedAt === null || (Number.isFinite(saved.completedAt) && saved.completedAt >= saved.startedAt && saved.completedAt <= saved.endAt))) state = saved;
  } catch { storageAvailable = false; }
  const t = key => (lang === 'fa' ? fa : en)[key] || key;
  const local = content => typeof content === 'object' ? content[lang] : content;
  const n = value => new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { useGrouping:false }).format(value);
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const isShape = value => typeof value === 'string' && /^(dots|arrow|polygon|circle|blocks):\d+$/.test(value);
  const isComplete = () => state && state.completedAt !== null;
  const answeredCount = () => state ? state.answers.filter(answer => answer !== null).length : 0;
  const timeText = milliseconds => { const seconds = Math.max(0, Math.ceil(milliseconds / 1000)); return `${n(Math.floor(seconds / 60)).padStart(2,lang === 'fa'?'۰':'0')}:${n(seconds % 60).padStart(2,lang === 'fa'?'۰':'0')}`; };

  function shapeSVG(value) {
    const [kind, raw] = value.split(':');
    const count = Number(raw);
    let body = '';
    if (kind === 'dots' || kind === 'blocks') {
      const positions = {1:[[40,40]],2:[[25,40],[55,40]],3:[[40,24],[24,53],[56,53]],4:[[25,25],[55,25],[25,55],[55,55]],5:[[21,21],[59,21],[40,40],[21,59],[59,59]]}[count];
      body = positions.map(([x,y]) => kind === 'dots' ? `<circle cx="${x}" cy="${y}" r="8"/>` : `<rect x="${x-8}" y="${y-8}" width="16" height="16" rx="2"/>`).join('');
    } else if (kind === 'arrow') body = `<g transform="rotate(${count} 40 40)"><path d="M40 15 60 36H47v28H33V36H20Z"/></g>`;
    else if (kind === 'circle') body = `<circle cx="40" cy="40" r="22" ${count ? '' : 'fill="none" stroke="currentColor" stroke-width="4"'}/>`;
    else if (kind === 'polygon') {
      const points = Array.from({length:count},(_,i) => {const angle = i * 2 * Math.PI / count - Math.PI / 2 + (count === 4 ? Math.PI / 4 : 0);return `${40+26*Math.cos(angle)},${40+26*Math.sin(angle)}`;}).join(' ');
      body = `<polygon points="${points}"/>`;
    }
    return `<svg viewBox="0 0 80 80" fill="currentColor" style="color:#8c6fc5" aria-hidden="true">${body}</svg>`;
  }
  function shapeName(value) {
    const [kind, raw] = value.split(':');
    const count = Number(raw);
    if (kind === 'dots') return lang === 'fa' ? `${n(count)} نقطه` : `${count} ${count === 1 ? 'dot' : 'dots'}`;
    if (kind === 'blocks') return lang === 'fa' ? `${n(count)} مربع` : `${count} ${count === 1 ? 'square' : 'squares'}`;
    if (kind === 'arrow') return (lang === 'fa' ? {0:'فلش رو به بالا',90:'فلش رو به راست',180:'فلش رو به پایین',270:'فلش رو به چپ'} : {0:'Up arrow',90:'Right arrow',180:'Down arrow',270:'Left arrow'})[count];
    if (kind === 'circle') return lang === 'fa' ? (count ? 'دایره توپر' : 'دایره توخالی') : (count ? 'Filled circle' : 'Hollow circle');
    return lang === 'fa' ? `${n(count)} ضلعی` : `${count}-sided polygon`;
  }
  function optionHTML(value) {
    return isShape(value) ? `<span class="shape-answer" role="img" aria-label="${escape(shapeName(value))}">${shapeSVG(value)}</span>` : escape(typeof value === 'number' ? n(value) : local(value));
  }
  function promptHTML(prompt) {
    if (!prompt) return '';
    if (prompt.type === 'numbers') return `<div class="question-prompt number-sequence">${prompt.values.map(v => n(v)).join(' &nbsp; ')} &nbsp; <span>?</span></div>`;
    if (prompt.type === 'sequence') return `<div class="question-prompt visual-sequence">${prompt.shapes.map(s => `<span class="shape-tile" role="img" aria-label="${escape(shapeName(s))}">${shapeSVG(s)}</span>`).join('')}<span class="shape-tile missing" aria-label="${t('sampleTitle')}">?</span></div>`;
    return `<div class="question-prompt quiz-matrix">${prompt.shapes.map(s => s ? `<span class="matrix-cell" role="img" aria-label="${escape(shapeName(s))}">${shapeSVG(s)}</span>` : `<span class="matrix-cell missing" aria-label="${t('sampleTitle')}">?</span>`).join('')}</div>`;
  }

  function toast(message) {
    $('#toast').textContent = message;
    $('#toast').hidden = false;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { $('#toast').hidden = true; }, 5000);
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch { if (storageAvailable) toast(t('storageUnavailable')); storageAvailable = false; }
  }
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.title = t('title');
    $('meta[name="description"]').setAttribute('content', lang === 'fa' ? 'ذهنت را با ۲۰ پرسش تصویری، عددی و منطقی به چالش بکش. یک آزمون تمرینی رایگان به فارسی و انگلیسی.' : 'Challenge your mind with 20 visual, numerical, and logical questions. Free practice in Persian and English.');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $('#brand-link').setAttribute('aria-label', t('brand'));
    $('#language-button span').textContent = lang === 'fa' ? 'English' : 'فارسی';
    $('#language-button').setAttribute('aria-label', lang === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی');
    renderDemo();
    updateResume();
    if (view === 'quiz') renderQuiz();
    if (view === 'result') renderResults();
  }
  function updateResume() {
    $('#resume-button').hidden = !state;
    $('#resume-button [data-i18n]').textContent = t(isComplete() ? 'savedResults' : 'resume');
  }
  function renderDemo() {
    $('#demo-matrix').innerHTML = [1,2,3,2,3,4,3,4,null].map(v => v ? `<span class="matrix-cell" role="img" aria-label="${escape(shapeName(`dots:${v}`))}">${shapeSVG(`dots:${v}`)}</span>` : `<span class="matrix-cell missing">?</span>`).join('');
    $('#demo-options').innerHTML = [3,4,5,2].map((v,i) => `<button class="demo-choice ${demoSelection === i ? (i === 2 ? 'correct' : 'incorrect') : ''}" data-demo="${i}" aria-label="${escape(shapeName(`dots:${v}`))}" aria-pressed="${demoSelection === i}">${shapeSVG(`dots:${v}`)}</button>`).join('');
    const feedback = $('#demo-feedback');
    feedback.classList.toggle('success', demoSelection === 2);
    feedback.textContent = demoSelection === null ? t('sampleHint') : demoSelection === 2 ? (lang === 'fa' ? 'درست بود! هر خانه یک نقطه بیشتر دارد؛ پاسخ ۵ است.' : 'Exactly! Each cell adds one dot. The answer is 5.') : (lang === 'fa' ? 'یک بار دیگر نگاه کن؛ در هر ردیف یک نقطه اضافه می‌شود.' : 'Take another look. Each row adds one dot at a time.');
  }
  function setView(nextView) {
    view = nextView;
    $('#home-view').hidden = view !== 'home';
    $('#quiz-view').hidden = view !== 'quiz';
    $('#result-view').hidden = view !== 'result';
    $('.main-nav').hidden = view !== 'home';
    if (view === 'quiz') renderQuiz();
    if (view === 'result') renderResults();
    updateResume();
    window.scrollTo({top:0,behavior:'instant'});
    const target = view === 'quiz' ? $('#quiz-title') : view === 'result' ? $('#result-title') : $('.hero h1');
    target.tabIndex = -1;
    target.focus({preventScroll:true});
  }
  function showDialog(kind, action) {
    dialogAction = action;
    const data = {
      start: ['startTitle', `<p>${t('startInfo')}</p><div class="dialog-facts"><span>${t('questionsCount')}</span><span>${t('duration')}</span><span>${t('instant')}</span></div><p>${t('timerInfo')}</p>`, 'begin', 'later'],
      leave: ['leaveTitle', `<p>${t('leaveInfo')}</p>`, 'leaveConfirm','stay'],
      finish: ['finishTitle', `<p>${t('finishInfo')}</p>${answeredCount() < QUESTIONS.length ? `<p style="margin-top:12px;color:var(--purple)">${n(QUESTIONS.length-answeredCount())} ${t('remaining')}</p>` : ''}`, 'finishConfirm','continue'],
      restart: ['restartTitle', `<p>${t('restartInfo')}</p>`, 'begin', 'later']
    }[kind];
    $('#dialog-title').textContent = t(data[0]);
    $('#dialog-content').innerHTML = data[1];
    $('#dialog-confirm').textContent = t(data[2]);
    $('#dialog-cancel').textContent = t(data[3]);
    $('#action-dialog').returnValue = '';
    $('#action-dialog').showModal();
    $('#dialog-confirm').focus();
  }
  function startQuiz() {
    const now = Date.now();
    state = {version:1,answers:Array(QUESTIONS.length).fill(null),index:0,startedAt:now,endAt:now+DURATION,completedAt:null,expired:false};
    save();
    setView('quiz');
    if (!storageAvailable) toast(t('storageUnavailable'));
  }
  function resumeQuiz() {
    if (!state) return;
    if (isComplete()) {setView('result');return;}
    if (state.endAt <= Date.now()) { completeQuiz(true);return; }
    setView('quiz');
  }
  function completeQuiz(expired = false) {
    if (!state || isComplete()) return;
    state.completedAt = Math.max(state.startedAt, Math.min(Date.now(), state.endAt));
    state.expired = expired;
    save();
    // Cancel a pending dialog action before closing an expired quiz.
    dialogAction = null;
    if ($('#action-dialog').open) $('#action-dialog').close('cancel');
    setView('result');
    if (expired) toast(t('timeout'));
  }
  function tick() {
    if (!state || isComplete()) return;
    if (Date.now() >= state.endAt) {
      if (view === 'quiz') completeQuiz(true);
      return;
    }
    if (view === 'quiz' && $('#timer-value')) {
      $('#timer-value').textContent = timeText(state.endAt - Date.now());
      $('.timer').classList.toggle('urgent', state.endAt-Date.now() <= 60000);
    }
  }
  function renderQuiz() {
    const q = QUESTIONS[state.index];
    const count = answeredCount();
    const letters = lang === 'fa' ? ['الف','ب','ج','د'] : ['A','B','C','D'];
    $('#quiz-view').innerHTML = `<div class="quiz-topbar"><h1 id="quiz-title">${t('quizTitle')}</h1><div class="timer" role="timer" aria-label="${t('timerLabel')}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span id="timer-value">${timeText(state.endAt-Date.now())}</span></div><button class="exit-button" data-action="leave">${t('exit')} <span aria-hidden="true">↗</span></button></div>
      <div class="quiz-progress"><div class="progress-track" role="progressbar" aria-label="${t('answered')}" aria-valuenow="${count}" aria-valuemin="0" aria-valuemax="20"><div class="progress-fill" style="width:${count/QUESTIONS.length*100}%"></div></div><span>${n(count)} ${t('of')} ${n(QUESTIONS.length)} ${t('answered')}</span></div>
      <div class="quiz-layout"><div><article class="question-card"><div class="question-eyebrow"><span>${t('question')} ${n(state.index+1)} ${t('of')} ${n(QUESTIONS.length)}</span><span class="question-category">${t(q.category)}</span></div><h2 id="question-title" tabindex="-1">${escape(local(q.title))}</h2>${promptHTML(q.prompt)}<div class="question-options" role="group" aria-labelledby="question-title">${q.options.map((o,i) => `<button class="answer-option ${state.answers[state.index] === i ? 'selected' : ''}" data-answer="${i}" aria-pressed="${state.answers[state.index] === i}"><span class="answer-letter" aria-hidden="true">${letters[i]}</span>${optionHTML(o)}</button>`).join('')}</div><div class="question-controls"><button class="button secondary" data-action="previous" ${state.index === 0?'disabled':''}>${t('previous')}</button><button class="button primary" data-action="${state.index === QUESTIONS.length-1?'finish':'next'}">${t(state.index === QUESTIONS.length-1?'finish':'next')}<span class="direction-arrow" aria-hidden="true">←</span></button></div></article><p class="quiz-hint">${t('quizHint')}</p></div>
      <aside class="question-sidebar"><h3>${t('questionMap')}</h3><div class="question-map">${QUESTIONS.map((_,i) => `<button data-question="${i}" class="${state.answers[i] !== null?'answered':''} ${state.index===i?'current':''}" aria-label="${t('question')} ${n(i+1)}${state.answers[i]!==null?`, ${t('answered')}`:''}" ${state.index===i?'aria-current="step"':''}>${n(i+1)}</button>`).join('')}</div><div class="map-key"><i aria-hidden="true"></i>${t('answered')}</div><p class="save-note">${storageAvailable?t('saved'):t('storageUnavailable')}</p><button class="finish-button" data-action="finish">${t('finish')}</button></aside></div>`;
    tick();
  }
  function moveQuestion(index) {
    if (index < 0 || index >= QUESTIONS.length) return;
    state.index = index;
    save();
    renderQuiz();
    $('#question-title').focus({preventScroll:true});
  }
  function renderResults() {
    const total = QUESTIONS.filter((q,i) => state.answers[i] === q.answer).length;
    const percent = Math.round(total / QUESTIONS.length * 100);
    $('#result-view').innerHTML = `<div class="result-heading"><p class="section-kicker">${t('resultKicker')}</p><h1 id="result-title">${t('resultTitle')}</h1><p>${t('resultDescription')}</p></div><div class="score-card"><div class="score-ring" style="--score:${percent}%"><div class="score-inner"><strong>${n(percent)}${lang==='fa'?'٪':'%'}</strong><span>${t('practiceScore')}</span></div></div><div class="score-summary"><h2>${n(total)} ${t('of')} ${n(QUESTIONS.length)} ${t('correctAnswers')}</h2><p>${t(percent>=80?'highScore':percent>=45?'midScore':'lowScore')}</p><div class="score-details"><span>${t('timeSpent')}: <bdi>${timeText(state.completedAt-state.startedAt)}</bdi></span><span>${t('unanswered')}: ${n(QUESTIONS.length-answeredCount())}</span></div></div></div><div class="result-categories">${['visual','logic','numbers'].map(category => {
      const indices = QUESTIONS.map((q,i) => q.category === category ? i : -1).filter(i => i !== -1);
      const correct = indices.filter(i => state.answers[i] === QUESTIONS[i].answer).length;
      return `<div class="category-result"><div class="category-top"><span>${t(category)}</span><strong>${n(correct)} / ${n(indices.length)}</strong></div><div class="progress-track" role="progressbar" aria-label="${t(category)}" aria-valuenow="${correct}" aria-valuemin="0" aria-valuemax="${indices.length}"><div class="progress-fill" style="width:${correct/indices.length*100}%"></div></div></div>`;
    }).join('')}</div><p class="result-note">${t('resultDisclaimer')}</p><div class="result-actions"><button class="button primary" data-action="review">${t('review')}</button><button class="button secondary" data-action="retry">${t('retry')}</button><button class="button secondary" data-action="download">${t('download')}</button><button class="text-button" data-action="home">${t('home')}</button></div><div id="review-section" class="review-section" hidden><h2 tabindex="-1" id="review-title">${t('review')}</h2>${QUESTIONS.map((q,i) => {
      const selected = state.answers[i];
      const correct = selected === q.answer;
      return `<details class="review-item"><summary><span class="review-status ${selected===null?'skipped':correct?'':'wrong'}" aria-label="${t(selected===null?'noAnswer':correct?'correct':'wrong')}">${selected===null?'−':correct?'✓':'×'}</span><span>${n(i+1)}. ${escape(local(q.title))}</span></summary><div class="review-content">${promptHTML(q.prompt)}<div class="review-answer">${t('yourAnswer')} ${selected===null?t('noAnswer'):optionHTML(q.options[selected])}</div><div class="review-answer">${t('correctAnswer')} ${optionHTML(q.options[q.answer])}</div><p class="review-explanation">${escape(local(q.explanation))}</p></div></details>`;
    }).join('')}</div>`;
  }
  function downloadResults() {
    const correct = QUESTIONS.filter((q,i) => state.answers[i] === q.answer).length;
    const lines = [t('resultFile'), `${t('correctAnswers')}: ${n(correct)} / ${n(QUESTIONS.length)}`, `${t('practiceScore')}: ${n(Math.round(correct/QUESTIONS.length*100))}%`, `${t('timeSpent')}: ${timeText(state.completedAt-state.startedAt)}`, '', t('resultDisclaimer'), '', ...QUESTIONS.flatMap((q,i) => [ `${n(i+1)}. ${local(q.title)}`, `${t('yourAnswer')} ${state.answers[i]===null?t('noAnswer'):isShape(q.options[state.answers[i]])?shapeName(q.options[state.answers[i]]):typeof q.options[state.answers[i]]==='number'?n(q.options[state.answers[i]]):local(q.options[state.answers[i]])}`, `${t('correctAnswer')} ${isShape(q.options[q.answer])?shapeName(q.options[q.answer]):typeof q.options[q.answer]==='number'?n(q.options[q.answer]):local(q.options[q.answer])}`, local(q.explanation), '' ])];
    const url = URL.createObjectURL(new Blob(['\uFEFF', lines.join('\n')], {type:'text/plain;charset=utf-8'}));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `zehnara-results-${lang}.txt`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url),1000);
    toast(t('downloadDone'));
  }

  $('#language-button').addEventListener('click', () => {
    const reviewVisible = view === 'result' && !$('#review-section').hidden;
    lang = lang === 'fa' ? 'en' : 'fa';
    try {localStorage.setItem(LANGUAGE_KEY,lang);} catch { /* The selected language still works without storage. */ }
    applyLanguage();
    if (reviewVisible) $('#review-section').hidden = false;
  });
  $('#demo-options').addEventListener('click', event => {
    const button = event.target.closest('[data-demo]');
    if (!button) return;
    demoSelection = Number(button.dataset.demo);
    renderDemo();
    $(`[data-demo="${demoSelection}"]`).focus({preventScroll:true});
  });
  document.querySelectorAll('.start-trigger').forEach(button => button.addEventListener('click', () => state && !isComplete() ? resumeQuiz() : showDialog('start', startQuiz)));
  $('#resume-button').addEventListener('click', resumeQuiz);
  ['#brand-link','#footer-home'].forEach(selector => $(selector).addEventListener('click', event => {
    event.preventDefault();
    if (view === 'quiz') showDialog('leave', () => setView('home'));
    else setView('home');
  }));
  $('#action-dialog').addEventListener('close', () => {
    const action = dialogAction;
    dialogAction = null;
    if ($('#action-dialog').returnValue === 'confirm' && action) action();
  });
  $('#quiz-view').addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || !state || isComplete()) return;
    if (Date.now() >= state.endAt) {completeQuiz(true);return;}
    if (button.dataset.answer !== undefined) {
      state.answers[state.index] = Number(button.dataset.answer);
      save();
      renderQuiz();
      $(`[data-answer="${button.dataset.answer}"]`).focus({preventScroll:true});
    } else if (button.dataset.question !== undefined) moveQuestion(Number(button.dataset.question));
    else if (button.dataset.action === 'next') moveQuestion(state.index+1);
    else if (button.dataset.action === 'previous') moveQuestion(state.index-1);
    else if (button.dataset.action === 'leave') showDialog('leave', () => setView('home'));
    else if (button.dataset.action === 'finish') showDialog('finish', () => completeQuiz());
  });
  $('#result-view').addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    if (button.dataset.action === 'home') setView('home');
    if (button.dataset.action === 'retry') showDialog('restart',startQuiz);
    if (button.dataset.action === 'download') downloadResults();
    if (button.dataset.action === 'review') {
      $('#review-section').hidden = false;
      $('#review-title').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
      $('#review-title').focus({preventScroll:true});
    }
  });
  document.addEventListener('visibilitychange', tick);
  window.addEventListener('pageshow',tick);
  applyLanguage();
  setInterval(tick,500);
})();
