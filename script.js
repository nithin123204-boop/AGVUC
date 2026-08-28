/* ========================================
   COUNTDOWN
======================================== */

function updateCountdown() {

    const targetDate =
        new Date("September 14, 2026 00:00:00").getTime();

    const currentDate =
        new Date().getTime();

    const distance =
        targetDate - currentDate;


    if (distance > 0) {

        const days =
            Math.floor(
                distance / (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance % (1000 * 60 * 60))
                / (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance % (1000 * 60))
                / 1000
            );


        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

    } else {

        document.getElementById("countdown").innerHTML = `
            <h2>🙏 Ganesh Utsav 2026 Has Begun! 🙏</h2>
            <p>
                🐘 Welcome to the divine celebration
                of Lord Ganesha! 🪔
            </p>
        `;
    }
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ========================================
   DAILY POOJA MEMBERS
======================================== */

/*
    CHANGE THESE NAMES WITH YOUR
    REAL POOJA MEMBERS / FAMILIES.
*/

const poojaDays = {

    1: {
        date: "Day 1 - 14 September 2026",
        title: "Ganesh Sthapana Pooja",
        time: "⏰ 6:00 AM onwards",

        members: [
            "NAGENDRA FAMILY",
            "SURESH FAMILY",
            "Member Name 3",
            "Member Name 4"
        ]
    },


    2: {
        date: "Day 2 - 15 September 2026",
        title: "Special Pooja & Aarti",
        time: "⏰ 7:00 AM onwards",

        members: [
            "Member Name 1",
            "Member Name 2",
            "Member Name 3",
            "Member Name 4"
        ]
    },


    3: {
        date: "Day 3 - 16 September 2026",
        title: "Cultural Program Pooja",
        time: "⏰ 7:00 AM onwards",

        members: [
            "Member Name 1",
            "Member Name 2",
            "Member Name 3"
        ]
    },


    4: {
        date: "Day 4 - 17 September 2026",
        title: "Special Archana",
        time: "⏰ 7:00 AM onwards",

        members: [
            "Member Name 1",
            "Member Name 2",
            "Member Name 3"
        ]
    },


    5: {
        date: "Day 5 - 18 September 2026",
        title: "Maha Prasadam Pooja",
        time: "⏰ 7:00 AM onwards",

        members: [
            "Member Name 1",
            "Member Name 2",
            "Member Name 3"
        ]
    },


    6: {
        date: "Day 6 - 19 September 2026",
        title: "Special Ganesh Pooja",
        time: "⏰ 7:00 AM onwards",

        members: [
            "Member Name 1",
            "Member Name 2",
            "Member Name 3"
        ]
    },


    7: {
        date: "Day 7 - 20 September 2026",
        title: "Grand Maha Aarti",
        time: "⏰ 7:00 PM onwards",

        members: [
            "Member Name 1",
            "Member Name 2",
            "Member Name 3"
        ]
    },


    8: {
        date: "Day 8 - 21 September 2026",
        title: "Ganesh Nimajjanam",
        time: "⏰ Time will be announced",

        members: [
            "All Committee Members",
            "All Volunteers",
            "All Devotees"
        ]
    }

};


const poojaTabs =
    document.querySelectorAll(".pooja-tab");

const poojaDate =
    document.getElementById("poojaDate");

const poojaTitle =
    document.getElementById("poojaTitle");

const poojaTiming =
    document.getElementById("poojaTiming");

const membersList =
    document.getElementById("membersList");


function showPoojaDay(day) {

    const selectedDay =
        poojaDays[day];


    poojaDate.textContent =
        selectedDay.date;

    poojaTitle.textContent =
        selectedDay.title;

    poojaTiming.textContent =
        selectedDay.time;


    membersList.innerHTML = "";


    selectedDay.members.forEach((member, index) => {

        const memberCard =
            document.createElement("div");

        memberCard.className =
            "member-card";


        memberCard.innerHTML = `
            <span class="member-number">
                ${index + 1}
            </span>

            <span>
                ${member}
            </span>
        `;


        membersList.appendChild(memberCard);

    });

}


poojaTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        poojaTabs.forEach((item) => {

            item.classList.remove("active");

        });


        tab.classList.add("active");


        const selectedDay =
            tab.dataset.day;


        showPoojaDay(selectedDay);

    });

});


showPoojaDay(1);


/* ========================================
   GALLERY
======================================== */

/*
    ADD YOUR PAST YEARS PHOTOS HERE.

    Example:

    {
        src: "images/2025-1.jpg",
        year: "2025"
    }

    Copy your photos into the images folder.
*/

const galleryImages = [

    {
        src: "images/ganesh.png",
        year: "2025"
    },

    {
        src: "images/2025-1.jpg",
        year: "2025"
    },

    {
        src: "images/2025-2.jpg",
        year: "2025"
    },

    {
        src: "images/2024-1.jpg",
        year: "2024"
    },

    {
        src: "images/2024-2.jpg",
        year: "2024"
    },

    {
        src: "images/2023-1.jpg",
        year: "2023"
    },

    {
        src: "images/2023-2.jpg",
        year: "2023"
    }

];


const galleryContainer =
    document.getElementById("memoriesgallery");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");

const prevImage =
    document.getElementById("prevImage");

const nextImage =
    document.getElementById("nextImage");

const filterButtons =
    document.querySelectorAll(".filter-btn");


let currentImages =
    [...galleryImages];

let currentImageIndex =
    0;


/* CREATE GALLERY */

function createGallery(images = galleryImages) {

    galleryContainer.innerHTML = "";


    currentImages =
        images;


    images.forEach((image, index) => {

        const item =
            document.createElement("div");


        item.className =
            "gallery-item";


        const img =
            document.createElement("img");


        img.src =
            image.src;


        img.alt =
            `Ganesh Utsav ${image.year} Memory ${index + 1}`;


        const yearLabel =
            document.createElement("span");


        yearLabel.className =
            "gallery-year";


        yearLabel.textContent =
            image.year;


        item.appendChild(img);

        item.appendChild(yearLabel);

        galleryContainer.appendChild(item);


        item.addEventListener("click", () => {

            currentImageIndex =
                index;

            openLightbox();

        });

    });

}


/* GALLERY FILTER */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((item) => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        const selectedYear =
            button.dataset.filter;


        if (selectedYear === "all") {

            createGallery(galleryImages);

        } else {

            const filteredImages =
                galleryImages.filter((image) => {

                    return image.year === selectedYear;

                });


            createGallery(filteredImages);

        }

    });

});


/* OPEN LIGHTBOX */

function openLightbox() {

    if (currentImages.length === 0) {

        return;

    }


    lightboxImage.src =
        currentImages[currentImageIndex].src;


    lightbox.classList.add("active");


    document.body.style.overflow =
        "hidden";

}


/* CLOSE LIGHTBOX */

function closeGallery() {

    lightbox.classList.remove("active");


    document.body.style.overflow =
        "auto";

}


/* NEXT IMAGE */

function showNextImage() {

    currentImageIndex++;


    if (
        currentImageIndex >=
        currentImages.length
    ) {

        currentImageIndex =
            0;

    }


    lightboxImage.src =
        currentImages[currentImageIndex].src;

}


/* PREVIOUS IMAGE */

function showPreviousImage() {

    currentImageIndex--;


    if (currentImageIndex < 0) {

        currentImageIndex =
            currentImages.length - 1;

    }


    lightboxImage.src =
        currentImages[currentImageIndex].src;

}


/* BUTTON EVENTS */

closeLightbox.addEventListener(
    "click",
    closeGallery
);


nextImage.addEventListener(
    "click",
    showNextImage
);


prevImage.addEventListener(
    "click",
    showPreviousImage
);


/* CLOSE WHEN CLICKING OUTSIDE */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeGallery();

    }

});


/* KEYBOARD CONTROLS */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {

        return;

    }


    if (event.key === "Escape") {

        closeGallery();

    }


    if (event.key === "ArrowRight") {

        showNextImage();

    }


    if (event.key === "ArrowLeft") {

        showPreviousImage();

    }

});


/* ========================================
   COPY UPI ID
======================================== */

const copyUpiBtn =
    document.getElementById("copyUpiBtn");


copyUpiBtn.addEventListener("click", () => {

    const upiId =
        document.getElementById("upiId").textContent;


    navigator.clipboard.writeText(
        upiId.trim()
    );


    const originalText =
        copyUpiBtn.textContent;


    copyUpiBtn.textContent =
        "Copied ✓";


    setTimeout(() => {

        copyUpiBtn.textContent =
            originalText;

    }, 2000);

});
/* ========================================
   DONATION SYSTEM
======================================== */

let selectedDonationAmount = 0;

let totalDonors = 0;

let totalDonationAmount = 0;


/* SELECT FIXED AMOUNT */

function selectAmount(amount) {

    selectedDonationAmount = amount;


    document
        .getElementById("selectedAmount")
        .textContent = "₹" + amount;


    const amountButtons =
        document.querySelectorAll(".amount-btn");


    amountButtons.forEach((button) => {

        button.classList.remove("active");

    });


    event.target.classList.add("active");

}


/* SELECT CUSTOM AMOUNT */

function selectCustomAmount() {

    const amount =
        prompt(
            "Enter the amount you would like to donate:"
        );


    if (
        amount !== null &&
        amount !== "" &&
        Number(amount) > 0
    ) {

        selectedDonationAmount =
            Number(amount);


        document
            .getElementById("selectedAmount")
            .textContent =
            "₹" + selectedDonationAmount;


        document
            .getElementById("donationAmount")
            .value =
            selectedDonationAmount;

    }

}


/* SHOW FORM AFTER PAYMENT */

function showDonationForm() {

    const donationForm =
        document.getElementById(
            "donorDetailsForm"
        );


    donationForm.classList.add("show");


    if (
        selectedDonationAmount > 0
    ) {

        document
            .getElementById("donationAmount")
            .value =
            selectedDonationAmount;

    }


    donationForm.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* CONFIRM DONATION */

function confirmDonation() {

    const donorName =
        document
            .getElementById("donorName")
            .value
            .trim();


    const donationAmount =
        Number(
            document
                .getElementById(
                    "donationAmount"
                )
                .value
        );


    const donationPurpose =
        document
            .getElementById(
                "donationPurpose"
            )
            .value;


    /* VALIDATION */

    if (!donorName) {

        alert(
            "Please enter your name 🙏"
        );

        return;

    }


    if (
        !donationAmount ||
        donationAmount <= 0
    ) {

        alert(
            "Please enter a valid donation amount."
        );

        return;

    }


    if (!donationPurpose) {

        alert(
            "Please select the donation purpose."
        );

        return;

    }


    /* UPDATE TOTALS */

    totalDonors++;

    totalDonationAmount +=
        donationAmount;


    document
        .getElementById("totalDonors")
        .textContent =
        totalDonors;


    document
        .getElementById("totalAmount")
        .textContent =
        "₹" +
        totalDonationAmount.toLocaleString(
            "en-IN"
        );


    /* GET DONOR LIST */

    const donorList =
        document.getElementById(
            "donorList"
        );


    /* REMOVE EMPTY MESSAGE */

    const emptyMessage =
        donorList.querySelector(
            ".empty-donor-message"
        );


    if (emptyMessage) {

        emptyMessage.remove();

    }


    /* CREATE DONOR ENTRY */

    const donation =
        document.createElement("div");


    donation.className =
        "donation-entry";


    donation.innerHTML = `

        <h3>
            🙏 ${donorName}
        </h3>

        <p>
            <strong>Amount:</strong>
            ₹${donationAmount.toLocaleString("en-IN")}
        </p>

        <p>
            <strong>Donated For:</strong>
            ${donationPurpose}
        </p>

        <p>
            <strong>Status:</strong>
            Payment Completed ❤️
        </p>

    `;


    /* ADD NEW DONATION */

    donorList.prepend(
        donation
    );


    /* SUCCESS MESSAGE */

    alert(
        "🙏 Thank you " +
        donorName +
        "! Your contribution has been recorded. ❤️"
    );


    /* RESET FORM */

    document
        .getElementById("donorName")
        .value = "";


    document
        .getElementById("donationAmount")
        .value = "";


    document
        .getElementById("donationPurpose")
        .value = "";


    selectedDonationAmount = 0;


    document
        .getElementById("selectedAmount")
        .textContent =
        "₹0";


    /* HIDE FORM */

    document
        .getElementById("donorDetailsForm")
        .classList
        .remove("show");


    /* SCROLL TO HISTORY */

    setTimeout(() => {

        document
            .getElementById(
                "donation-history"
            )
            .scrollIntoView({

                behavior: "smooth"

            });

    }, 400);

}