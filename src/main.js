// src/main.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".section");

// Créer les pastilles de navigation
const navDotsContainer = document.getElementById("navDots");
sections.forEach((section, index) => {
  const dot = document.createElement("div");
  dot.className = "nav-dot";
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth" });
  });
  navDotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".nav-dot");

// Snap global (sur la page entière)
ScrollTrigger.create({
  start: 0,
  end: "max",
  snap: {
    snapTo: sections.map((_, i) => i / (sections.length - 1)),
    duration: 0.5,
    ease: "power2.inOut",
  },
  scrub: true,
  onUpdate: (self) => {
    // Mettre à jour les pastilles
    const currentIndex = Math.round(self.progress * (sections.length - 1));
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  },
});

// Triggers pour Lottie (play/stop quand la section est centrée)
sections.forEach((section, sectionIndex) => {
  const lottie = section.querySelector("dotlottie-wc");

  // Sauter la section 6 (elle a un traitement spécial)
  if (section.id === "section-6") return;

  // Initialiser l'animation à opacity 0 et scale 0.8
  if (lottie) {
    gsap.set(lottie, { opacity: 0, scale: 0.8 });
  }

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      if (lottie?.play) lottie.play();
      // Animation pop-in
      gsap.to(lottie, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out",
      });
    },
    onEnterBack: () => {
      if (lottie?.play) lottie.play();
      // Animation pop-in
      gsap.to(lottie, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out",
      });
    },
    onLeave: () => {
      if (lottie?.stop) lottie.stop();
      // Animation pop-out
      gsap.to(lottie, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "back.in",
      });
    },
    onLeaveBack: () => {
      if (lottie?.stop) lottie.stop();
      // Animation pop-out
      gsap.to(lottie, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "back.in",
      });
    },
  });
});

// Animation pop-in pour les images SVG de la section 3
const section3 = document.getElementById("section-3");
if (section3) {
  const svgImage = section3.querySelector("#france-img");
  if (svgImage) {
    // Initialiser l'image en pop-in (scale + opacity)
    gsap.set(svgImage, { scale: 0, opacity: 0 });

    // Animation pop-in avec trigger
    ScrollTrigger.create({
      trigger: section3,
      start: "top center",
      onEnter: () => {
        gsap.to(svgImage, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
        });
      },
      onEnterBack: () => {
        gsap.to(svgImage, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
        });
      },
    });
  }

  const svgImage2 = section3.querySelector("#persos-france-img");
  if (svgImage2) {
    // Initialiser l'image en pop-in (scale + opacity)
    gsap.set(svgImage2, { scale: 0, opacity: 0 });

    // Animation pop-in avec délai
    ScrollTrigger.create({
      trigger: section3,
      start: "top center",
      onEnter: () => {
        gsap.to(svgImage2, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
          delay: 0.2, // Délai pour un effet en cascade
        });
      },
      onEnterBack: () => {
        gsap.to(svgImage2, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
          delay: 0.2,
        });
      },
    });
  }
}

// Animation pop-in pour l'image SVG de la section 4
const section4 = document.getElementById("section-4");
if (section4) {
  const svgImage = section4.querySelector("img");
  if (svgImage) {
    // Initialiser l'image en pop-in (scale + opacity)
    gsap.set(svgImage, { scale: 0, opacity: 0 });

    // Animation pop-in avec trigger
    ScrollTrigger.create({
      trigger: section4,
      start: "top center",
      onEnter: () => {
        gsap.to(svgImage, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
        });
      },
      onEnterBack: () => {
        gsap.to(svgImage, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
        });
      },
    });
  }
}

// Animation pop-in pour l'image SVG data-center de la section 5
const section5 = document.getElementById("section-5");
if (section5) {
  const dataCenterImg = section5.querySelector("#data-center-img");
  if (dataCenterImg) {
    // Initialiser l'image en pop-in (scale + opacity)
    gsap.set(dataCenterImg, { scale: 0, opacity: 0 });

    // Animation pop-in avec trigger
    ScrollTrigger.create({
      trigger: section5,
      start: "top center",
      onEnter: () => {
        gsap.to(dataCenterImg, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
        });
      },
      onEnterBack: () => {
        gsap.to(dataCenterImg, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out",
        });
      },
    });
  }
}

// Animation scroll-linked pour l'animation Lottie de la section 6 (Version simplifiée)
const section6 = document.getElementById("section-6");
if (section6) {
  const lottieSection6 = section6.querySelector("#lottie-section-6");

  if (lottieSection6) {
    // Attendre que Lottie soit chargé
    lottieSection6.addEventListener("load", () => {
      // Désactiver la boucle automatique
      lottieSection6.loop = false;
      // Mettre à la frame 0 (drawer fermé)
      lottieSection6.currentFrame = 0;
      lottieSection6.pause();

      // Créer un ScrollTrigger qui contrôle l'animation
      ScrollTrigger.create({
        trigger: section6,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onEnter: () => {
          lottieSection6.play();
        },
        onLeave: () => {
          lottieSection6.pause();
        },
        onEnterBack: () => {
          lottieSection6.play();
        },
        onLeaveBack: () => {
          lottieSection6.pause();
        },
        onUpdate: (self) => {
          // Calculer la frame en fonction du scroll
          const progress = self.progress; // 0 à 1
          if (lottieSection6?.totalFrames) {
            lottieSection6.currentFrame = progress * lottieSection6.totalFrames;
          }
        },
        markers: false,
      });
    });
  }
}

// ====== QUIZ - SECTION 8 ======
const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.getElementById("quiz-feedback");
const feedbackText = document.getElementById("feedback-text");
let quizAnswered = false;

quizOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (quizAnswered) return; // Empêcher plusieurs réponses
    quizAnswered = true;

    const isCorrect = option.dataset.answer === "true";
    const answer = option.dataset.value;
    const allOptions = document.querySelectorAll(".quiz-option");

    // Désactiver tous les boutons
    allOptions.forEach((btn) => (btn.disabled = true));

    // Animation de la réponse
    if (isCorrect) {
      // Bonne réponse - Animation de célébration
      gsap.to(option, {
        duration: 0.5,
        backgroundColor: "#4ade80",
        borderColor: "#22c55e",
        ease: "back.out",
      });

      gsap.to(option.querySelector(".quiz-letter"), {
        duration: 0.6,
        backgroundColor: "#22c55e",
        scale: 1.2,
        rotation: 360,
        ease: "back.out",
      });

      // Feedback positif
      feedbackText.textContent = "Bravo ! Vous avez raison ! La part du numérique dans l'empreinte carbone française est bien de 4,4%.";
      quizFeedback.className = "section-8-feedback correct";
      quizFeedback.style.display = "block";

      // Animation du feedback
      gsap.from(quizFeedback, {
        duration: 0.5,
        y: -20,
        ease: "back.out",
      });

      // Shake confetti effect sur les autres options
      allOptions.forEach((btn, index) => {
        if (btn !== option) {
          gsap.to(btn, {
            duration: 0.1,
            x: Math.random() * 10 - 5,
            repeat: 5,
            yoyo: true,
            ease: "power2.inOut",
          });
        }
      });
    } else {
      // Mauvaise réponse - Animation d'erreur
      gsap.to(option, {
        backgroundColor: "#f87171",
        borderColor: "#dc2626",
        ease: "back.out",
      });

      gsap.to(option.querySelector(".quiz-letter"), {
        duration: 0.4,
        backgroundColor: "#dc2626",
        x: -10,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Feedback négatif
      feedbackText.textContent = `Désolé, ce n'est pas la bonne réponse. La réponse correcte est C : 4,4%.`;
      quizFeedback.className = "section-8-feedback incorrect";
      quizFeedback.style.display = "block";

      // Animation du feedback
      gsap.from(quizFeedback, {
        duration: 0.5,
        y: -20,
        ease: "back.out",
      });

      // Shake effect sur la mauvaise réponse
      gsap.to(option, {
        duration: 0.1,
        x: 10,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    // Afficher la bonne réponse après 1 seconde
    setTimeout(() => {
      const correctOption = document.querySelector('.quiz-option[data-answer="true"]');
      gsap.to(correctOption, {
        duration: 0.5,
        borderColor: "#22c55e",
        ease: "power2.out",
      });
    }, 1000);
  });
});

// Reset du quiz quand on quitte la section
ScrollTrigger.create({
  trigger: "#section-8",
  onLeave: () => {
    quizAnswered = false;
    quizFeedback.style.display = "block";
    quizOptions.forEach((btn) => (btn.disabled = false));
    // Réinitialiser les styles des boutons
    gsap.to(quizOptions, {
      duration: 0.3,
      backgroundColor: "var(--clr-white)",
      borderColor: "var(--clr-gray-300)",
    });
    quizOptions.forEach((btn) => {
      gsap.to(btn.querySelector(".quiz-letter"), {
        duration: 0.3,
        backgroundColor: "var(--clr-primary-bleu)",
        scale: 1,
        rotation: 0,
      });
    });
  },
});

ScrollTrigger.normalizeScroll(true);