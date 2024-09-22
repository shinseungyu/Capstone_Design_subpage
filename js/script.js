function scrollToNextSection(nextSectionId) {
    const nextSection = document.getElementById(nextSectionId);
    nextSection.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener(`DOMContentLoaded`, function () {
    // 달력
    const monthNames = [
        "1월", "2월", "3월", "4월", "5월", "6월",
        "7월", "8월", "9월", "10월", "11월", "12월"
    ];

    let currentDate = new Date();
    let selectedMonth = currentDate.getMonth();
    let selectedYear = currentDate.getFullYear();

    let startDate = null;
    let endDate = null;

    const monthElement = document.getElementById('month-name');
    const daysElement = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');


    function renderCalendar() {
        const firstDay = new Date(selectedYear, selectedMonth, 1);
        const lastDay = new Date(selectedYear, selectedMonth + 1, 0);

        monthElement.textContent = `${monthNames[selectedMonth]} ${selectedYear}`;
        daysElement.innerHTML = '';


        for (let i = 0; i < firstDay.getDay(); i++) {
            daysElement.innerHTML += `<div></div>`;
        }


        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            const dayDate = new Date(selectedYear, selectedMonth, day);


            if (startDate && dayDate.getTime() === startDate.getTime()) {
                dayElement.classList.add('selected');
            }
            if (endDate && dayDate.getTime() === endDate.getTime()) {
                dayElement.classList.add('selected');
            }
            if (startDate && endDate && dayDate > startDate && dayDate < endDate) {
                dayElement.classList.add('range');
            }

            dayElement.addEventListener('click', () => handleDateClick(dayDate));

            daysElement.appendChild(dayElement);
        }
    }


    function handleDateClick(dayDate) {
        if (!startDate || (startDate && endDate)) {
            startDate = dayDate;
            endDate = null;
        } else if (dayDate < startDate) {
            startDate = dayDate;
        } else {
            endDate = dayDate;
        }
        renderCalendar();
    }

    prevButton.addEventListener('click', () => {
        selectedMonth--;
        if (selectedMonth < 0) {
            selectedMonth = 11;
            selectedYear--;
        }
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        selectedMonth++;
        if (selectedMonth > 11) {
            selectedMonth = 0;
            selectedYear++;
        }
        renderCalendar();
    });

    renderCalendar();
    //   달력끝
    // 풀페이지
    new fullpage('#wrap', {
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
        scrollBar: true,
        // normalScrollElements: '.sec4, .footer',
        // 높이값이 풀페이지가 아닌 경우 풀페이지 상단으로 올라가는 것 막아주기
        fitToSection: false,

        scrollingSpeed: 300,
        responsiveWidth: 1200,
        responsiveHeight: 700,
    });
    // section1 클릭하면 변경 
    const buttons = document.querySelectorAll(`.con`);
    //span 이 두개이상이기때문에 for문 사용

    for (let button of buttons) {
        button.addEventListener(`click`, function () {
            //현재 클릭된 버튼에만 active 클래스 추가
            this.classList.add(`active`);

            // 현재 클릭된 버튼을 제외한 나머지 버튼들이 'active' 클래스 제거(조건문 배우고 진행)
            for (let btn of buttons) {
                if (btn !== this) {
                    //반복문을 돌면서 btn span을 찾을때 this 요소가 아닌것이 걸리면 
                    //제거하게 처리
                    btn.classList.remove(`active`);
                }
            }
        });
    }
    // section4 1번 
    const bttn1 = document.querySelectorAll(`.img-box1`);
    //span 이 두개이상이기때문에 for문 사용

    for (let button of bttn1) {
        button.addEventListener(`click`, function () {
            //현재 클릭된 버튼에만 active 클래스 추가
            this.classList.add(`on`);

            // 현재 클릭된 버튼을 제외한 나머지 버튼들이 'active' 클래스 제거(조건문 배우고 진행)
            for (let btn of bttn1) {
                if (btn !== this) {
                    //반복문을 돌면서 btn span을 찾을때 this 요소가 아닌것이 걸리면 
                    //제거하게 처리
                    btn.classList.remove(`on`);
                }
            }
        });
    }
    // 2번
    const bttn2 = document.querySelectorAll(`.img-box2`);
    //span 이 두개이상이기때문에 for문 사용

    for (let button of bttn2) {
        button.addEventListener(`click`, function () {
            //현재 클릭된 버튼에만 active 클래스 추가
            this.classList.add(`on`);

            // 현재 클릭된 버튼을 제외한 나머지 버튼들이 'active' 클래스 제거(조건문 배우고 진행)
            for (let btn of bttn2) {
                if (btn !== this) {
                    //반복문을 돌면서 btn span을 찾을때 this 요소가 아닌것이 걸리면 
                    //제거하게 처리
                    btn.classList.remove(`on`);
                }
            }
        });
    }
    const bttn3 = document.querySelectorAll(`.img-box3`);
    // 3반
    for (let button of bttn3) {
        button.addEventListener(`click`, function () {
            //현재 클릭된 버튼에만 active 클래스 추가
            this.classList.add(`on`);

            // 현재 클릭된 버튼을 제외한 나머지 버튼들이 'active' 클래스 제거(조건문 배우고 진행)
            for (let btn of bttn3) {
                if (btn !== this) {
                    //반복문을 돌면서 btn span을 찾을때 this 요소가 아닌것이 걸리면 
                    //제거하게 처리
                    btn.classList.remove(`on`);
                }
            }
        });
    }
    // section5
    const bttn4 = document.querySelectorAll(`.sec-5-box`);

for (let button of bttn4) {
    button.addEventListener(`click`, function () {
        // 현재 클릭된 버튼에 'on' 클래스가 있으면 제거, 없으면 추가
        this.classList.toggle(`on`);
    });
}

    




    const topBtn = document.querySelector(`.top-btn`);

    window.addEventListener(`scroll`, function () {
        const sct = window.scrollY;

        console.log(sct);

        if (sct >= 300) {
            topBtn.classList.add(`on`);
        } else {
            topBtn.classList.remove(`on`);
        }
    });

    topBtn.addEventListener(`click`, () => {
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        });
    });

});