// Database of teachers (ใช้รูปภาพจริง)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwBF_-mHdePzrLEslrG3G1C-AhC4BmWq4H5FwtSCFrZSabq01--4W7uWnjTBFXrza4e/exec";

const teachersData = {
    math: [
        { id: 'math1', name: 'นางสาวพรวิภา สมบุญ', image: 'images/math/phonwipha.jpg' },
        { id: 'math2', name: 'นางสาวกนกวรรณ มีชัยผาสุข', image: 'images/math/kanokwan.jpg' },
        { id: 'math3', name: 'นางสายสมร เงินเหลี่ยม', image: 'images/math/saisamon.jpg' },
        { id: 'math4', name: 'นางสาวสุภัตรา ทรัพย์อุปการ', image: 'images/math/supattra.jpg' },
        { id: 'math5', name: 'นายสุริโย เหมือนวดี', image: 'images/math/suriyo.jpg' },
        { id: 'math6', name: 'นางสาวนัทธมน แดงแท้', image: 'images/math/natthamon.jpg' },
        { id: 'math7', name: 'นางสาวอิศราภรณ์ พูลสวัสดิ์', image: 'images/math/itsaraphon.jpg' },
        { id: 'math8', name: 'นางสาวอรญา เติมโพก', image: 'images/math/oraya.jpg' },
        { id: 'math9', name: 'นางสาวศุภมาศ ชาที', image: 'images/math/supamat.jpg' },
        { id: 'math10', name: 'นางสาวอัมพิกา ศิริพงษ์', image: 'images/math/ampika.jpg' },
        { id: 'math11', name: 'นางสาวปนัดดา จันทร์วัฒน์', image: 'images/math/panadda.jpg' },
        { id: 'math12', name: 'นางสาวนพรัตน์ อรุณสุวรรณ', image: 'images/math/nopparat.jpg' },
        { id: 'math13', name: 'นางสาวอวรรษดา สายแก้ว', image: 'images/math/awassada.jpg' }, // แก้จาก awassada
        { id: 'math14', name: 'นายเกษมสันต์ จากโพชน์', image: 'images/math/kasemsan.jpg' },
        { id: 'math15', name: 'ว่าที่ร้อยตรีเศรษฐา เชื่อมมณี', image: 'images/math/settha.jpg' },
        { id: 'math16', name: 'นางสาวนภัสสร สว่างศรี', image: 'images/math/naphatson.jpg' },
        { id: 'math17', name: 'นางสาวปาริฉัตร ทองช้อย', image: 'images/math/parichat.jpg' }
    ],
    science: [
        { id: 'sci1', name: 'นางสาวรสสุคนธ์ สุนทรโอวาท', image: 'images/sci/rotsukon.jpg' },
        { id: 'sci2', name: 'นายกิจจา กิจหงวน', image: 'images/sci/kitcha.jpg' },
        { id: 'sci3', name: 'นางนภาพร ชัยเชื้อ', image: 'images/sci/naphaphon.jpg' },
        { id: 'sci4', name: 'นางสาวภรณี คีรีคุ้ม', image: 'images/sci/phoranee.jpg' },
        { id: 'sci5', name: 'นายกิตติธร เดชเกิด', image: 'images/sci/kittithon.jpg' },
        { id: 'sci6', name: 'นายจักรพงษ์ กิตติพงศ์ธนกิจ', image: 'images/sci/chakkraphong.jpg' },
        { id: 'sci7', name: 'นางสาวชนากานต์ สายนาค', image: 'images/sci/chanakan.jpg' },
        { id: 'sci8', name: 'นางสาวนวพร วัฒนศฤงคาร', image: 'images/sci/nawaphon.jpg' },
        { id: 'sci9', name: 'นายกิตติ พงศ์พานิช', image: 'images/sci/kitti.jpg' },
        { id: 'sci10', name: 'นางสาวศศิธร จีนสินธุ์', image: 'images/sci/sasithon.jpg' },
        { id: 'sci11', name: 'นางสาววรรณา ประสงค์ดี', image: 'images/sci/wanna.jpg' },
        { id: 'sci12', name: 'นายพารวีร์ เลือดแดง', image: 'images/sci/pharawee.jpg' },
        { id: 'sci13', name: 'นางสาวธัญสิริ โพธิพิบูลย์', image: 'images/sci/thansiri.jpg' },
        { id: 'sci14', name: 'นางสาวสิริมณฑ์ พรหมสวัสดิ์', image: 'images/sci/sirimon.jpg' },
        { id: 'sci15', name: 'นายศุกล นฤมลธนภัทร', image: 'images/sci/sukon.jpg' },
        { id: 'sci16', name: 'นายธนวิทย์ เชื้อนุช', image: 'images/sci/thanawit.jpg' },
        { id: 'sci17', name: 'นางสาวธันยธรณ์ ชุมแก้ว', image: 'images/sci/thanyathon.jpg' },
        { id: 'sci18', name: 'นางบุศราพร อรรถวุฒิกุล', image: 'images/sci/butsaraphon.jpg' },
        { id: 'sci19', name: 'นางสาวเบญจวรรณ บัวบังใบ', image: 'images/sci/benjawan.jpg' },
        { id: 'sci20', name: 'นายชาคริต พรหมกรุง', image: 'images/sci/chakrit.jpg' },
        { id: 'sci21', name: 'นางสาวไอลดา กลิ่นสมหวัง', image: 'images/sci/ailada.jpg' },
        { id: 'sci22', name: 'นางสาวปาริชาติ วีรมนตรังษี', image: 'images/sci/parichat2.jpg' },
        { id: 'sci23', name: 'นางสาวศิริรัตน์ ดวงแก้ว', image: 'images/sci/sirirat.jpg' },
        { id: 'sci24', name: 'นางสาวธัญญารัตน์ ทนทาน', image: 'images/sci/thanyarat.jpg' },
        { id: 'sci25', name: 'ว่าที่ร้อยตรีอานนท์ เมืองแก้ว', image: 'images/sci/anon.jpg' },
        { id: 'sci26', name: 'นางสาวกวีวรรณ เชื้อบ้านเกาะ', image: 'images/sci/kaweewan.jpg' },
        { id: 'sci27', name: 'นางสาวอรทัย รักคำ', image: 'images/sci/onthai.jpg' },
        { id: 'sci28', name: 'นางสาวเพ็ญนภา จันนาค', image: 'images/sci/phennapha.jpg' },
        { id: 'sci29', name: 'นางสาวเกวลิน ยืนนาน', image: 'images/sci/kewalin.jpg' },
        { id: 'sci30', name: 'นายอนิรุทธ์ ดอนสะคู', image: 'images/sci/anirut.jpg' }
    ],
    thai: [
        { id: 'thai1', name: 'นายจักรกฤษณ์ บัวลอย', image: 'images/thai/jakkrit.jpg' },
        { id: 'thai2', name: 'นางกรวรรณ คล่องยุทธ์', image: 'images/thai/kornwan.jpg' },
        { id: 'thai3', name: 'นางสาวจรรยงค์ บุญซัน', image: 'images/thai/chanyong.jpg' },
        { id: 'thai4', name: 'นางสาวบำเพ็ญ ขาวสง่า', image: 'images/thai/bampen.jpg' },
        { id: 'thai5', name: 'นางชุติมา อังกุลดี', image: 'images/thai/chutima.jpg' },
        { id: 'thai6', name: 'นายรัตนศักดิ์ ก้อนเพชร', image: 'images/thai/rattanasak.jpg' },
        { id: 'thai7', name: 'นายธนากร ชมเชย', image: 'images/thai/thanakorn.jpg' },
        { id: 'thai8', name: 'นางสาวณัฏฐนิช เยี่ยงมานิต', image: 'images/thai/natthanit.jpg' },
        { id: 'thai9', name: 'นางสาวทิพย์วัลย์ ทองดี', image: 'images/thai/thipphawan.jpg' },
        { id: 'thai10', name: 'นางสาววิราชิน ขันติสิทธิ์', image: 'images/thai/wirachin.jpg' },
        { id: 'thai11', name: 'นางสาวสุจิตรา กลิ่นสว่าง', image: 'images/thai/sujitra.jpg' },
        { id: 'thai12', name: 'นายวงศ์วรัณ ช้างพลาย', image: 'images/thai/wongwaran.jpg' },
        { id: 'thai13', name: 'นายอธิวัฒน์ พูลเพิ่ม', image: 'images/thai/athiwat.jpg' }
    ],
    foreign: [
        { id: 'foreign1', name: 'นางสาวจิราภรณ์ เหมือนอ่วม', image: 'images/eng/chiraphon.jpg' },
        { id: 'foreign2', name: 'นางสาวนวรัตน์ สังขฤทธิ์', image: 'images/eng/nawarat.jpg' },
        { id: 'foreign3', name: 'นางสาวธมลวรรณ เคล้าคลึง', image: 'images/eng/thamonwan.jpg' },
        { id: 'foreign4', name: 'นางสาวศิรดา อ่อนทรัพย์', image: 'images/eng/sirada.jpg' },
        { id: 'foreign5', name: 'นางสาวดวงกมล ตรีหัตถ์', image: 'images/eng/duangkamon.jpg' },
        { id: 'foreign6', name: 'นางสาวอรวรรณ มาช่วย', image: 'images/eng/onwan.jpg' },
        { id: 'foreign7', name: 'นายวรวัตต์ มานะแท้', image: 'images/eng/worawat.jpg' },
        { id: 'foreign8', name: 'นางสาวรัตนา มีประวัติ', image: 'images/eng/rattana.jpg' },
        { id: 'foreign9', name: 'นางสาวสุพัตรา เพชรใหญ่', image: 'images/eng/supattra.jpg' },
        { id: 'foreign10', name: 'นางสาวิณี ปัทมเสถียรชัย', image: 'images/eng/sawinee.jpg' },
        { id: 'foreign11', name: 'นายปฏิภาณ ปู่พันธ์', image: 'images/eng/patiphan.jpg' },
        { id: 'foreign12', name: 'นางสาวภัทริยา ปานเชียงวงษ์', image: 'images/eng/phattriya.jpg' },
        { id: 'foreign13', name: 'นางสาววทิพร เครือพันธุ์', image: 'images/eng/wathiphon.jpg' },
        { id: 'foreign14', name: 'นางสาวอรภัทร เวชชูศักดิ์ชัย', image: 'images/eng/onphat.jpg' },
        { id: 'foreign15', name: 'นางสาวปณิตา เทวบัญชาประเสริฐ', image: 'images/eng/panita.jpg' },
        { id: 'foreign16', name: 'นางสาวศิริอำไพ สุธีเจริญกุล', image: 'images/eng/siriamphai.jpg' },
        { id: 'foreign17', name: 'นางสาวนลินภัสร์ จิตพิบูลย์', image: 'images/eng/nalinphat.jpg' },
        { id: 'foreign18', name: 'นางสาวจิตติมา แวววับศรี', image: 'images/eng/chittima.jpg' },
        { id: 'foreign19', name: 'นางสาวนิชนิภา ขนอม', image: 'images/eng/nitchnipha.jpg' },
        { id: 'foreign20', name: 'นายพงศธร คงดี', image: 'images/eng/phongsathon.jpg' },
        { id: 'foreign21', name: 'นางสาวสุนิษา เผือกสวัสดิ์', image: 'images/eng/sunisa.jpg' }
    ],
    social: [
        { id: 'soc1', name: 'นายธนากร ทองศิริ', image: 'images/soc/thanakorn2.jpg' },
        { id: 'soc2', name: 'นางสาวสิรีกร ทับทิมทอง', image: 'images/soc/sireekorn.jpg' },
        { id: 'soc3', name: 'นางสาวไอรินทร์ โกณฑา', image: 'images/soc/airin.jpg' },
        { id: 'soc4', name: 'นางสาวประภัสสร สิทธิศักดิ์', image: 'images/soc/praphatson.jpg' },
        { id: 'soc5', name: 'นางสาวพรนิภา เวียงวิเศษ', image: 'images/soc/phonnipha.jpg' },
        { id: 'soc6', name: 'นางทัสณียา แบบสังข์', image: 'images/soc/thatsaneeya.jpg' },
        { id: 'soc7', name: 'นางสาวสุภานัน เบญจมังคลารักษ์', image: 'images/soc/suphanan.jpg' },
        { id: 'soc8', name: 'นางสาวพัทธนันท์ ชนะภัย', image: 'images/soc/phatthanan.jpg' },
        { id: 'soc9', name: 'นางสาวสุชาดา ปลอยปลา', image: 'images/soc/suchada.jpg' },
        { id: 'soc10', name: 'นางสาวฌัชฌา พลีไพล', image: 'images/soc/chatcha.jpg' },
        { id: 'soc11', name: 'นางสาวศุภัทศจี โตใหญ่', image: 'images/soc/suphatsajee.jpg' },
        { id: 'soc12', name: 'นางสาวกรกนก บุญเดชา', image: 'images/soc/kornkanok.jpg' },
        { id: 'soc13', name: 'นางสาวสิริกัญญา อัมพสุวรรณ', image: 'images/soc/sirikanya.jpg' },
        { id: 'soc14', name: 'นางสาวประภาพรรณ ประกอบบุญ', image: 'images/soc/praphaphan.jpg' },
        { id: 'soc15', name: 'นายสหรัฐ แจ่มกระจ่าง', image: 'images/soc/saharat.jpg' }
    ],
    pe: [
        { id: 'pe1', name: 'นายธีรวุฒิ แกละบังทอง', image: 'images/pe/theerawut.jpg' },
        { id: 'pe2', name: 'นายชัชวาล พูลสวัสดิ์', image: 'images/pe/chatchawan.jpg' },
        { id: 'pe3', name: 'นายอนุพงศ์ สุริฉาย', image: 'images/pe/anuphong.jpg' },
        { id: 'pe4', name: 'นางสาวเอมวิกา เพชรทอง', image: 'images/pe/amwika.jpg' }, // แก้จาก amwika
        { id: 'pe5', name: 'นายจริพจน์ คงทัพ', image: 'images/pe/charipot.jpg' },
        { id: 'pe6', name: 'นางสาวทยากร งามน้อย', image: 'images/pe/thayakorn.jpg' },
        { id: 'pe7', name: 'นายกฤษณะ อินทโชติ', image: 'images/pe/kritsana.jpg' }
    ],
    career: [
        { id: 'car1', name: 'นางสาวจีรวรรณ สุขผล', image: 'images/car/jeerawan.jpg' },
        { id: 'car2', name: 'นางสาวสุนารี ก๋าแก่น', image: 'images/car/sunaree.jpg' },
        { id: 'car3', name: 'นางสาวปรวรรธ์น สอนเพ็ง', image: 'images/car/porawan.jpg' },
        { id: 'car4', name: 'นายไพบูลย์ รอดทิม', image: 'images/car/paiboon.jpg' },
        { id: 'car5', name: 'นางสาวปริณา คุณสุทธิ์', image: 'images/car/parina.jpg' }
    ],
    art: [
        { id: 'art1', name: 'นางสาวนัฐกานต์ หุ่นงาม', image: 'images/art/natthakan.jpg' },
        { id: 'art2', name: 'นายวัลลภ แก้วกำเนิด', image: 'images/art/wanlop.jpg' },
        { id: 'art3', name: 'นางสาวฐาวรดา วิเชียรฉาย', image: 'images/art/thaworada.jpg' },
        { id: 'art4', name: 'นางชีวารัตน์ ยอดยิ่ง', image: 'images/art/chiwarat.jpg' },
        { id: 'art5', name: 'นายพัลลภ อินทรสาร', image: 'images/art/phanlop.jpg' },
        { id: 'art6', name: 'นางสาวณัฐกานต์ เดชบุญ', image: 'images/art/natthakan2.jpg' },
        { id: 'art7', name: 'นายวัชราภรณ์ เจริญกุล', image: 'images/art/watcharaphon.jpg' },
        { id: 'art8', name: 'นายณัชศิต ราชวงศ์', image: 'images/art/natchasit.jpg' }
    ],
    guidance: [
        { id: 'gui1', name: 'นางสาวสุวรรณา ขวัญแก้ว', image: 'images/gui/suwanna.jpg' },
        { id: 'gui2', name: 'นางสาวณัชฏ์ฑิฌาวดี พรหมพรรณ', image: 'images/gui/natchatichawadee.jpg' }
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

// --- ส่วนที่เหลือของโค้ด ---
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