// Database of teachers (ใช้รูปภาพจริง)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwBF_-mHdePzrLEslrG3G1C-AhC4BmWq4H5FwtSCFrZSabq01--4W7uWnjTBFXrza4e/exec";

// --- แก้ไข PATH รูปภาพทั้งหมดให้ถูกต้องตามโครงสร้างไฟล์ล่าสุด ---
const teachersData = {
    math: [
        { id: 'math1', name: 'นางสาวพรวิภา สมบุญ', image: '/sapateachersday/phonwipha.jpg' },
        { id: 'math2', name: 'นางสาวกนกวรรณ มีชัยผาสุข', image: '/sapateachersday/kanokwan.jpg' },
        { id: 'math3', name: 'นางสายสมร เงินเหลี่ยม', image: '/sapateachersday/saisamon.jpg' },
        { id: 'math4', name: 'นางสาวสุภัตรา ทรัพย์อุปการ', image: '/sapateachersday/supattra.jpg' },
        { id: 'math5', name: 'นายสุริโย เหมือนวดี', image: '/sapateachersday/suriyo.jpg' },
        { id: 'math6', name: 'นางสาวนัทธมน แดงแท้', image: '/sapateachersday/natthamon.jpg' },
        { id: 'math7', name: 'นางสาวอิศราภรณ์ พูลสวัสดิ์', image: '/sapateachersday/itsaraphon.jpg' },
        { id: 'math8', name: 'นางสาวอรญา เติมโพก', image: '/sapateachersday/oraya.jpg' },
        { id: 'math9', name: 'นางสาวศุภมาศ ชาที', image: '/sapateachersday/supamat.jpg' },
        { id: 'math10', name: 'นางสาวอัมพิกา ศิริพงษ์', image: '/sapateachersday/ampika.jpg' },
        { id: 'math11', name: 'นางสาวปนัดดา จันทร์วัฒน์', image: '/sapateachersday/panadda.jpg' },
        { id: 'math12', name: 'นางสาวนพรัตน์ อรุณสุวรรณ', image: '/sapateachersday/nopparat.jpg' },
        { id: 'math13', name: 'นางสาวอวรรษดา สายแก้ว', image: '/sapateachersday/awassada.jpg' },
        { id: 'math14', name: 'นายเกษมสันต์ จากโพชน์', image: '/sapateachersday/kasemsan.jpg' },
        { id: 'math15', name: 'ว่าที่ร้อยตรีเศรษฐา เชื่อมมณี', image: '/sapateachersday/settha.jpg' },
        { id: 'math16', name: 'นางสาวนภัสสร สว่างศรี', image: '/sapateachersday/naphatson.jpg' },
        { id: 'math17', name: 'นางสาวปาริฉัตร ทองช้อย', image: '/sapateachersday/parichat.jpg' }
    ],
    science: [
        { id: 'sci1', name: 'นางสาวรสสุคนธ์ สุนทรโอวาท', image: '/sapateachersday/rotsukon.jpg' },
        { id: 'sci2', name: 'นายกิจจา กิจหงวน', image: '/sapateachersday/kitcha.jpg' },
        { id: 'sci3', name: 'นางนภาพร ชัยเชื้อ', image: '/sapateachersday/naphaphon.jpg' },
        { id: 'sci4', name: 'นางสาวภรณี คีรีคุ้ม', image: '/sapateachersday/phoranee.jpg' },
        { id: 'sci5', name: 'นายกิตติธร เดชเกิด', image: '/sapateachersday/kittithon.jpg' },
        { id: 'sci6', name: 'นายจักรพงษ์ กิตติพงศ์ธนกิจ', image: '/sapateachersday/chakkraphong.jpg' },
        { id: 'sci7', name: 'นางสาวชนากานต์ สายนาค', image: '/sapateachersday/chanakan.jpg' },
        { id: 'sci8', name: 'นางสาวนวพร วัฒนศฤงคาร', image: '/sapateachersday/nawaphon.jpg' },
        { id: 'sci9', name: 'นายกิตติ พงศ์พานิช', image: '/sapateachersday/kitti.jpg' },
        { id: 'sci10', name: 'นางสาวศศิธร จีนสินธุ์', image: '/sapateachersday/sasithon.jpg' },
        { id: 'sci11', name: 'นางสาววรรณา ประสงค์ดี', image: '/sapateachersday/wanna.jpg' },
        { id: 'sci12', name: 'นายพารวีร์ เลือดแดง', image: '/sapateachersday/pharawee.jpg' },
        { id: 'sci13', name: 'นางสาวธัญสิริ โพธิพิบูลย์', image: '/sapateachersday/thansiri.jpg' },
        { id: 'sci14', name: 'นางสาวสิริมณฑ์ พรหมสวัสดิ์', image: '/sapateachersday/sirimon.jpg' },
        { id: 'sci15', name: 'นายศุกล นฤมลธนภัทร', image: '/sapateachersday/sukon.jpg' },
        { id: 'sci16', name: 'นายธนวิทย์ เชื้อนุช', image: '/sapateachersday/thanawit.jpg' },
        { id: 'sci17', name: 'นางสาวธันยธรณ์ ชุมแก้ว', image: '/sapateachersday/thanyathon.jpg' },
        { id: 'sci18', name: 'นางบุศราพร อรรถวุฒิกุล', image: '/sapateachersday/butsaraphon.jpg' },
        { id: 'sci19', name: 'นางสาวเบญจวรรณ บัวบังใบ', image: '/sapateachersday/benjawan.jpg' },
        { id: 'sci20', name: 'นายชาคริต พรหมกรุง', image: '/sapateachersday/chakrit.jpg' },
        { id: 'sci21', name: 'นางสาวไอลดา กลิ่นสมหวัง', image: '/sapateachersday/ailada.jpg' },
        { id: 'sci22', name: 'นางสาวปาริชาติ วีรมนตรังษี', image: '/sapateachersday/parichat2.jpg' },
        { id: 'sci23', name: 'นางสาวศิริรัตน์ ดวงแก้ว', image: '/sapateachersday/sirirat.jpg' },
        { id: 'sci24', name: 'นางสาวธัญญารัตน์ ทนทาน', image: '/sapateachersday/thanyarat.jpg' },
        { id: 'sci25', name: 'ว่าที่ร้อยตรีอานนท์ เมืองแก้ว', image: '/sapateachersday/anon.jpg' },
        { id: 'sci26', name: 'นางสาวกวีวรรณ เชื้อบ้านเกาะ', image: '/sapateachersday/kaweewan.jpg' },
        { id: 'sci27', name: 'นางสาวอรทัย รักคำ', image: '/sapateachersday/onthai.jpg' },
        { id: 'sci28', name: 'นางสาวเพ็ญนภา จันนาค', image: '/sapateachersday/phennapha.jpg' },
        { id: 'sci29', name: 'นางสาวเกวลิน ยืนนาน', image: '/sapateachersday/kewalin.jpg' },
        { id: 'sci30', name: 'นายอนิรุทธ์ ดอนสะคู', image: '/sapateachersday/anirut.jpg' }
    ],
    thai: [
        { id: 'thai1', name: 'นายจักรกฤษณ์ บัวลอย', image: '/sapateachersday/jakkrit.jpg' },
        { id: 'thai2', name: 'นางกรวรรณ คล่องยุทธ์', image: '/sapateachersday/kornwan.jpg' },
        { id: 'thai3', name: 'นางสาวจรรยงค์ บุญซัน', image: '/sapateachersday/chanyong.jpg' },
        { id: 'thai4', name: 'นางสาวบำเพ็ญ ขาวสง่า', image: '/sapateachersday/bampen.jpg' },
        { id: 'thai5', name: 'นางชุติมา อังกุลดี', image: '/sapateachersday/chutima.jpg' },
        { id: 'thai6', name: 'นายรัตนศักดิ์ ก้อนเพชร', image: '/sapateachersday/rattanasak.jpg' },
        { id: 'thai7', name: 'นายธนากร ชมเชย', image: '/sapateachersday/thanakorn.jpg' },
        { id: 'thai8', name: 'นางสาวณัฏฐนิช เยี่ยงมานิต', image: '/sapateachersday/natthanit.jpg' },
        { id: 'thai9', name: 'นางสาวทิพย์วัลย์ ทองดี', image: '/sapateachersday/thipphawan.jpg' },
        { id: 'thai10', name: 'นางสาววิราชิน ขันติสิทธิ์', image: '/sapateachersday/wirachin.jpg' },
        { id: 'thai11', name: 'นางสาวสุจิตรา กลิ่นสว่าง', image: '/sapateachersday/sujitra.jpg' },
        { id: 'thai12', name: 'นายวงศ์วรัณ ช้างพลาย', image: '/sapateachersday/wongwaran.jpg' },
        { id: 'thai13', name: 'นายอธิวัฒน์ พูลเพิ่ม', image: '/sapateachersday/athiwat.jpg' }
    ],
    foreign: [
        { id: 'foreign1', name: 'นางสาวจิราภรณ์ เหมือนอ่วม', image: '/sapateachersday/chiraphon.jpg' },
        { id: 'foreign2', name: 'นางสาวนวรัตน์ สังขฤทธิ์', image: '/sapateachersday/nawarat.jpg' },
        { id: 'foreign3', name: 'นางสาวธมลวรรณ เคล้าคลึง', image: '/sapateachersday/thamonwan.jpg' },
        { id: 'foreign4', name: 'นางสาวศิรดา อ่อนทรัพย์', image: '/sapateachersday/sirada.jpg' },
        { id: 'foreign5', name: 'นางสาวดวงกมล ตรีหัตถ์', image: '/sapateachersday/duangkamon.jpg' },
        { id: 'foreign6', name: 'นางสาวอรวรรณ มาช่วย', image: '/sapateachersday/onwan.jpg' },
        { id: 'foreign7', name: 'นายวรวัตต์ มานะแท้', image: '/sapateachersday/worawat.jpg' },
        { id: 'foreign8', name: 'นางสาวรัตนา มีประวัติ', image: '/sapateachersday/rattana.jpg' },
        { id: 'foreign9', name: 'นางสาวสุพัตรา เพชรใหญ่', image: '/sapateachersday/supattra.jpg' },
        { id: 'foreign10', name: 'นางสาวิณี ปัทมเสถียรชัย', image: '/sapateachersday/sawinee.jpg' },
        { id: 'foreign11', name: 'นายปฏิภาณ ปู่พันธ์', image: '/sapateachersday/patiphan.jpg' },
        { id: 'foreign12', name: 'นางสาวภัทริยา ปานเชียงวงษ์', image: '/sapateachersday/phattriya.jpg' },
        { id: 'foreign13', name: 'นางสาววทิพร เครือพันธุ์', image: '/sapateachersday/wathiphon.jpg' },
        { id: 'foreign14', name: 'นางสาวอรภัทร เวชชูศักดิ์ชัย', image: '/sapateachersday/onphat.jpg' },
        { id: 'foreign15', name: 'นางสาวปณิตา เทวบัญชาประเสริฐ', image: '/sapateachersday/panita.jpg' },
        { id: 'foreign16', name: 'นางสาวศิริอำไพ สุธีเจริญกุล', image: '/sapateachersday/siriamphai.jpg' },
        { id: 'foreign17', name: 'นางสาวนลินภัสร์ จิตพิบูลย์', image: '/sapateachersday/nalinphat.jpg' },
        { id: 'foreign18', name: 'นางสาวจิตติมา แวววับศรี', image: '/sapateachersday/chittima.jpg' },
        { id: 'foreign19', name: 'นางสาวนิชนิภา ขนอม', image: '/sapateachersday/nitchnipha.jpg' },
        { id: 'foreign20', name: 'นายพงศธร คงดี', image: '/sapateachersday/phongsathon.jpg' },
        { id: 'foreign21', name: 'นางสาวสุนิษา เผือกสวัสดิ์', image: '/sapateachersday/sunisa.jpg' }
    ],
    social: [
        { id: 'soc1', name: 'นายธนากร ทองศิริ', image: '/sapateachersday/thanakorn2.jpg' },
        { id: 'soc2', name: 'นางสาวสิรีกร ทับทิมทอง', image: '/sapateachersday/sireekorn.jpg' },
        { id: 'soc3', name: 'นางสาวไอรินทร์ โกณฑา', image: '/sapateachersday/airin.jpg' },
        { id: 'soc4', name: 'นางสาวประภัสสร สิทธิศักดิ์', image: '/sapateachersday/praphatson.jpg' },
        { id: 'soc5', name: 'นางสาวพรนิภา เวียงวิเศษ', image: '/sapateachersday/phonnipha.jpg' },
        { id: 'soc6', name: 'นางทัสณียา แบบสังข์', image: '/sapateachersday/thatsaneeya.jpg' },
        { id: 'soc7', name: 'นางสาวสุภานัน เบญจมังคลารักษ์', image: '/sapateachersday/suphanan.jpg' },
        { id: 'soc8', name: 'นางสาวพัทธนันท์ ชนะภัย', image: '/sapateachersday/phatthanan.jpg' },
        { id: 'soc9', name: 'นางสาวสุชาดา ปลอยปลา', image: '/sapateachersday/suchada.jpg' },
        { id: 'soc10', name: 'นางสาวฌัชฌา พลีไพล', image: '/sapateachersday/chatcha.jpg' },
        { id: 'soc11', name: 'นางสาวศุภัทศจี โตใหญ่', image: '/sapateachersday/suphatsajee.jpg' },
        { id: 'soc12', name: 'นางสาวกรกนก บุญเดชา', image: '/sapateachersday/kornkanok.jpg' },
        { id: 'soc13', name: 'นางสาวสิริกัญญา อัมพสุวรรณ', image: '/sapateachersday/sirikanya.jpg' },
        { id: 'soc14', name: 'นางสาวประภาพรรณ ประกอบบุญ', image: '/sapateachersday/praphaphan.jpg' },
        { id: 'soc15', name: 'นายสหรัฐ แจ่มกระจ่าง', image: '/sapateachersday/saharat.jpg' }
    ],
    pe: [
        { id: 'pe1', name: 'นายธีรวุฒิ แกละบังทอง', image: '/sapateachersday/theerawut.jpg' },
        { id: 'pe2', name: 'นายชัชวาล พูลสวัสดิ์', image: '/sapateachersday/chatchawan.jpg' },
        { id: 'pe3', name: 'นายอนุพงศ์ สุริฉาย', image: '/sapateachersday/anuphong.jpg' },
        { id: 'pe4', name: 'นางสาวเอมวิกา เพชรทอง', image: '/sapateachersday/amwika.jpg' },
        { id: 'pe5', name: 'นายจริพจน์ คงทัพ', image: '/sapateachersday/charipot.jpg' },
        { id: 'pe6', name: 'นางสาวทยากร งามน้อย', image: '/sapateachersday/thayakorn.jpg' },
        { id: 'pe7', name: 'นายกฤษณะ อินทโชติ', image: '/sapateachersday/kritsana.jpg' }
    ],
    career: [
        { id: 'car1', name: 'นางสาวจีรวรรณ สุขผล', image: '/sapateachersday/jeerawan.jpg' },
        { id: 'car2', name: 'นางสาวสุนารี ก๋าแก่น', image: '/sapateachersday/sunaree.jpg' },
        { id: 'car3', name: 'นางสาวปรวรรธ์น สอนเพ็ง', image: '/sapateachersday/porawan.jpg' },
        { id: 'car4', name: 'นายไพบูลย์ รอดทิม', image: '/sapateachersday/paiboon.jpg' },
        { id: 'car5', name: 'นางสาวปริณา คุณสุทธิ์', image: '/sapateachersday/parina.jpg' }
    ],
    art: [
        { id: 'art1', name: 'นางสาวนัฐกานต์ หุ่นงาม', image: '/sapateachersday/natthakan.jpg' },
        { id: 'art2', name: 'นายวัลลภ แก้วกำเนิด', image: '/sapateachersday/wanlop.jpg' },
        { id: 'art3', name: 'นางสาวฐาวรดา วิเชียรฉาย', image: '/sapateachersday/thaworada.jpg' },
        { id: 'art4', name: 'นางชีวารัตน์ ยอดยิ่ง', image: '/sapateachersday/chiwarat.jpg' },
        { id: 'art5', name: 'นายพัลลภ อินทรสาร', image: '/sapateachersday/phanlop.jpg' },
        { id: 'art6', name: 'นางสาวณัฐกานต์ เดชบุญ', image: '/sapateachersday/natthakan2.jpg' },
        { id: 'art7', name: 'นายวัชราภรณ์ เจริญกุล', image: '/sapateachersday/watcharaphon.jpg' },
        { id: 'art8', name: 'นายณัชศิต ราชวงศ์', image: '/sapateachersday/natchasit.jpg' }
    ],
    guidance: [
        { id: 'gui1', name: 'นางสาวสุวรรณา ขวัญแก้ว', image: '/sapateachersday/suwanna.jpg' },
        { id: 'gui2', name: 'นางสาวณัชฏ์ฑิฌาวดี พรหมพรรณ', image: '/sapateachersday/natchatichawadee.jpg' }
    ]
};

const subjectNames = {
    math: 'คณิตศาสตร์',
    science: 'วิทยาศาสตร์และเทคโนโลยี',
    thai: 'ภาษาไทย',
    foreign: 'ภาษาต่างประเทศ',
    social: 'สังคมศึกษา',
    pe: 'สุขศึกษาและพลศึกษา',
    career: 'การงานอาชีพ',
    art: 'ศิลปะ',
    guidance: 'แนะแนว'
};

const voteOptions = {
    1: 'สายคอนเทนต์',
    2: 'สายข้อสอบโหด',
    3: 'สายสอนเกินคาบ',
    4: 'สายบันเทิง',
    5: 'สายเจ้าระเบียบ',
    6: 'สายเข้าใจนักเรียน',
    7: 'สายตั้งใจสอน',
    8: 'สายใจดีเมตตา',
    9: 'สายแฟชั่น'
};

// --- ส่วนที่เหลือของโค้ด (ส่วนนี้ไม่ต้องแก้ไข) ---
let currentSubject = '';
let currentTeacher = null;
let selectedVote = null;

const stepSubjects = document.getElementById('step-subjects');
const stepTeachers = document.getElementById('step-teachers');
const stepVoting = document.getElementById('step-voting');
const stepThankyou = document.getElementById('step-thankyou');
const subjectTitle = document.getElementById('subject-title');
const teachersContainer = document.getElementById('teachers-container');
const teacherImage = document.getElementById('teacher-image');
const teacherName = document.getElementById('teacher-name');
const teacherSubject = document.getElementById('teacher-subject');
const submitVoteBtn = document.getElementById('submit-vote');
const voteTeacherName = document.getElementById('vote-teacher-name');
const voteTeacherSubject = document.getElementById('vote-teacher-subject');
const voteOption = document.getElementById('vote-option');

document.querySelectorAll('.btn-subject').forEach(button => {
    button.addEventListener('click', () => {
        currentSubject = button.getAttribute('data-subject');
        showTeachers(currentSubject);
    });
});

document.getElementById('back-to-subjects').addEventListener('click', () => {
    stepTeachers.classList.add('hidden');
    stepSubjects.classList.remove('hidden');
});

document.getElementById('back-to-teachers').addEventListener('click', () => {
    stepVoting.classList.add('hidden');
    stepTeachers.classList.remove('hidden');
});

document.querySelectorAll('.vote-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.vote-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedVote = option.getAttribute('data-option');
        submitVoteBtn.disabled = false;
    });
});

submitVoteBtn.addEventListener('click', () => {
    if (selectedVote) {
        submitVoteBtn.disabled = true;
        submitVoteBtn.textContent = 'กำลังส่ง...';
        showThankYou();
    }
});

document.getElementById('vote-again').addEventListener('click', () => {
    stepThankyou.classList.add('hidden');
    stepSubjects.classList.remove('hidden');
});

function showTeachers(subject) {
    subjectTitle.textContent = `เลือกคุณครูในกลุ่มสาระ ${subjectNames[subject]}`;
    teachersContainer.innerHTML = '';
    teachersData[subject].forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-card bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-200 hover:border-green-400 cursor-pointer';
        teacherCard.innerHTML = `
            <div class="p-6">
                <div class="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4 overflow-hidden">
                    <img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover">
                </div>
                <h3 class="text-xl font-semibold text-green-800 text-center">${teacher.name}</h3>
                <p class="text-green-600 text-center">${subjectNames[subject]}</p>
            </div>
            <div class="bg-green-50 p-4 text-center">
                <span class="select-teacher bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all">
                    โหวตให้คนนี้
                </span>
            </div>
        `;
        teacherCard.addEventListener('click', () => selectTeacher(teacher, subject));
        teachersContainer.appendChild(teacherCard);
    });
    stepSubjects.classList.add('hidden');
    stepTeachers.classList.remove('hidden');
}

function selectTeacher(teacher, subject) {
    currentTeacher = teacher;
    teacherName.textContent = teacher.name;
    teacherSubject.textContent = subjectNames[subject];
    teacherImage.innerHTML = `<img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover">`;
    resetVote();
    stepTeachers.classList.add('hidden');
    stepVoting.classList.remove('hidden');
}

function resetVote() {
    selectedVote = null;
    submitVoteBtn.disabled = true;
    submitVoteBtn.textContent = 'ส่งโหวต';
    document.querySelectorAll('.vote-option').forEach(opt => opt.classList.remove('selected'));
}

function showThankYou() {
    // เตรียมข้อมูลสำหรับส่ง
    const voteData = {
        teacherId: currentTeacher.id,
        teacherName: currentTeacher.name,
        subject: subjectNames[currentSubject],
        voteOptionNumber: selectedVote,
        voteOptionText: voteOptions[selectedVote]
    };

    // ใช้ fetch เพื่อส่งข้อมูลไปที่ Google Apps Script
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // ตั้งค่าโหมดเพื่อลดปัญหา CORS
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(voteData)
    })
    .then(() => {
        // เมื่อส่งคำขอออกไปแล้ว (ไม่รอคำตอบ) ให้แสดงหน้าขอบคุณทันที
        console.log('Vote submission request sent.');
        voteTeacherName.textContent = currentTeacher.name;
        voteTeacherSubject.textContent = subjectNames[currentSubject];
        voteOption.textContent = voteOptions[selectedVote];
        
        stepVoting.classList.add('hidden');
        stepThankyou.classList.remove('hidden');
    })
    .catch(error => {
        // หากเกิดข้อผิดพลาดในการส่ง (เช่น ไม่มีเน็ต, URL ผิด)
        console.error('Fetch Error:', error); // แสดง error จริงๆ ใน Console
        alert('เกิดข้อผิดพลาดในการส่งข้อมูลโหวต! กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองอีกครั้ง');
    })
    .finally(() => {
        // ส่วนนี้จะทำงานเสมอ ไม่ว่า fetch จะสำเร็จหรือล้มเหลว
        // เพื่อคืนค่าปุ่มให้กลับมาใช้งานได้ปกติ
        resetVote(); 
    });
}
