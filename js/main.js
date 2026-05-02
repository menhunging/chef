$(document).ready(function () {
  if ($("[data-aos]").length > 0) {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
    });
  }

  if ($(".faq-section__list").length > 0) {
    $(".faq-section__quest").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".faq-section__item").removeClass("opened");
        $(this).next(".faq-section__answer").stop().slideUp();
      } else {
        $(".faq-section__item").removeClass("opened");
        $(".faq-section__quest").removeClass("active");
        $(".faq-section__answer").stop().slideUp();

        $(this).parents(".faq-section__item").addClass("opened");
        $(this).addClass("active");
        $(this).next(".faq-section__answer").stop().slideDown();
      }
    });
  }

  if ($(".catalog-main__tab").length > 0) {
    $(".catalog-main__tab").each(function () {
      const tabsBlock = $(this);
      const tabLinks = tabsBlock.find(".tabList__link");
      const tabItems = tabsBlock.find(".tabContent__item");

      let switchTimer = null;
      let pendingTargetId = null;

      const clearPendingSwitch = function () {
        if (switchTimer) {
          clearTimeout(switchTimer);
          switchTimer = null;
        }

        pendingTargetId = null;
        tabLinks.removeClass("tabList__link--switching");
        tabsBlock.removeClass("switching");
      };

      tabLinks.on("click", function (e) {
        e.preventDefault();

        const clickedLink = $(this);
        const targetId = (clickedLink.attr("href") || "").replace(/^#/, "");

        const targetItem = tabItems.filter("#" + targetId);

        if (
          pendingTargetId === targetId ||
          (clickedLink.hasClass("active") && targetItem.hasClass("active"))
        ) {
          return;
        }

        clearPendingSwitch();

        pendingTargetId = targetId;
        clickedLink.addClass("tabList__link--switching");
        tabsBlock.addClass("switching");

        tabLinks.removeClass("active");
        clickedLink.addClass("active");

        switchTimer = setTimeout(function () {
          tabItems.removeClass("active");
          tabsBlock.removeClass("switching");

          targetItem.addClass("active");

          const targetAosElements = targetItem.find("[data-aos]");

          if (targetAosElements.length) {
            targetAosElements.removeClass("aos-animate");

            targetAosElements.each(function () {
              void this.offsetWidth;
            });
          }

          if (
            typeof window.AOS !== "undefined" &&
            typeof window.AOS.refreshHard === "function"
          ) {
            window.AOS.refreshHard();
          }

          pendingTargetId = null;
          switchTimer = null;
        }, 100);
      });
    });
  }

  if ($(".docs-slider").length > 0) {
    new Swiper(".docs-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".docs-slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 5,
        },
        375: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.15,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1700: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".events-slider").length > 0) {
    new Swiper(".events-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        prevEl: ".events-section .swiperBtnPrev",
        nextEl: ".events-section .swiperBtnNext",
      },
      pagination: {
        el: ".events-slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 5,
        },
        375: {
          slidesPerView: 1.095,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.15,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.15,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".slider-partners-main").length > 0) {
    new Swiper(".slider-partners-main", {
      slidesPerView: 3,
      spaceBetween: 100,
      loop: true,
      speed: 2000,
      initialSlide: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".slider-partners-main .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          speed: 500,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      },
    });
  }

  if ($(".products-slider").length > 0) {
    const productsSlidesCount = $(".products-slider").find(
      ".swiper-wrapper > .swiper-slide",
    ).length;

    if (productsSlidesCount <= 4) {
      const parents = $(".products-slider").closest(".popular-products");

      parents.find(".swiper-controls").hide();
      $(".products-slider").find(".swiper-pagination").hide();
    }

    new Swiper(".products-slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        prevEl: ".popular-products .swiperBtnPrev",
        nextEl: ".popular-products .swiperBtnNext",
      },
      pagination: {
        el: ".products-slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        375: {
          slidesPerView: 1.25,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1700: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".catalog-main-page__slider").length > 0) {
    new Swiper(".catalog-main-page__slider", {
      slidesPerView: 3.62,
      spaceBetween: 80,
      navigation: {
        prevEl: ".catalog-main-page__head .swiperBtnPrev",
        nextEl: ".catalog-main-page__head .swiperBtnNext",
      },
      pagination: {
        el: ".catalog-main-page__slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        375: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        390: {
          slidesPerView: 1.15,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.8,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3.1,
          spaceBetween: 40,
        },
        1700: {
          slidesPerView: 3.62,
          spaceBetween: 80,
        },
      },
    });
  }

  if ($(".slider-adv").length > 0) {
    let advSwiper = null;

    const advSliderMediaQuery = window.matchMedia("(max-width: 767px)");

    const initAdvSwiper = function () {
      advSwiper = new Swiper(".slider-adv", {
        slidesPerView: 1.25,
        spaceBetween: 10,
        pagination: {
          el: ".slider-adv .swiper-pagination",
          type: "progressbar",
        },
      });
    };

    const toggleAdvSwiper = function () {
      if (advSliderMediaQuery.matches) {
        if (!advSwiper) {
          initAdvSwiper();
        }
      } else if (advSwiper) {
        advSwiper.destroy(true, true);
        advSwiper = null;
      }
    };

    toggleAdvSwiper();
    advSliderMediaQuery.addEventListener("change", toggleAdvSwiper);
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".header-burger").length > 0) {
    const burger = $(".header-burger");
    const body = $("body");
    const overlay = $(".overlay");
    const menu = $(".menu");
    const close = $(".menu__close");

    const openMenu = function () {
      burger.addClass("opened");
      menu.addClass("opened");
      overlay.addClass("visible");
      body.addClass("is-openMenu");
    };

    const closeMenu = function () {
      burger.removeClass("opened");
      menu.removeClass("opened");
      overlay.removeClass("visible");
      body.removeClass("is-openMenu");
    };

    burger.on("click", function () {
      burger.hasClass("opened") ? closeMenu() : openMenu();
    });

    close.on("click", closeMenu);
    overlay.on("click.menuOverlay", closeMenu);

    $(window).on("resize.menuOverlay", function () {
      if ($(window).width() < 1280) closeMenu();
    });
  }

  if ($(".header-search-block").length > 0) {
    const searchIcon = $(".header-search-block");
    const searchBlock = $(".header-input-search");
    const searchClose = $(".header-input-search__close");
    const searchInput = searchBlock.find("input");

    const openSearchBlock = function () {
      searchIcon.addClass("opened");
      searchBlock.addClass("opened");
    };

    const closeSearchBlock = function () {
      searchIcon.removeClass("opened");
      searchBlock.removeClass("opened");
    };

    searchIcon.on("click", function () {
      searchIcon.hasClass("opened") ? closeSearchBlock() : openSearchBlock();
    });

    searchClose.on("click", function () {
      searchInput.val("").trigger("input");
      closeSearchBlock();
    });

    $(document).on("click.searchOutside", function (e) {
      const target = $(e.target);
      const clickInsideSearchIcon =
        target.closest(".header-search-block").length > 0;
      const clickInsideSearchBlock =
        target.closest(".header-input-search").length > 0;

      if (!clickInsideSearchIcon && !clickInsideSearchBlock) {
        closeSearchBlock();
      }
    });
  }

  if ($(".search-mobile").length > 0) {
    $(".search-mobile").each(function () {
      const searchMobileBlock = $(this);
      const searchMobileInput = searchMobileBlock.find("input");
      const searchMobileClear = searchMobileBlock.find(".input-clear");

      const toggleMobileClear = function () {
        if (searchMobileInput.val().trim().length > 0) {
          searchMobileClear.addClass("is-visible");
        } else {
          searchMobileClear.removeClass("is-visible");
        }
      };

      searchMobileInput.on("input", toggleMobileClear);

      searchMobileClear.on("click", function () {
        searchMobileInput.val("").trigger("input").focus();
      });

      toggleMobileClear();
    });
  }

  if ($(".select-block").length > 0) {
    const selectBlocks = $(".select-block");
    const controlsBlocks = $(".catalog__contriols");
    let isAutoScrollingControls = false;

    const getSelectList = function (selectBlock) {
      return (
        selectBlock.data("selectList") ||
        selectBlock.find(".select-block__list")
      );
    };

    const restoreListToBlock = function (selectBlock) {
      const selectList = getSelectList(selectBlock);

      if (
        !selectList ||
        selectList.length === 0 ||
        !selectList.hasClass("is-floating")
      ) {
        return;
      }

      selectList
        .removeClass("is-floating")
        .removeAttr("style")
        .appendTo(selectBlock);
    };

    const moveListToBody = function (selectBlock) {
      const selectList = getSelectList(selectBlock);
      const blockRect = selectBlock[0].getBoundingClientRect();

      selectList
        .appendTo("body")
        .addClass("is-floating")
        .css({
          position: "fixed",
          top: `${Math.round(blockRect.bottom - 2)}px`,
          left: `${Math.round(blockRect.left)}px`,
          width: `${Math.round(blockRect.width)}px`,
          zIndex: 5,
          margin: 0,
        });
    };

    const openSelectBlock = function (selectBlock) {
      const selectList = getSelectList(selectBlock);
      selectBlock.addClass("is-open");
      moveListToBody(selectBlock);
      selectList.stop().slideDown(180);
    };

    const scrollControlsToBlockLeft = function (selectBlock, callback) {
      const controls = selectBlock.closest(".catalog__contriols");

      if (!controls.length) {
        if (typeof callback === "function") {
          callback();
        }
        return;
      }

      const controlsElement = controls[0];
      const controlsRect = controlsElement.getBoundingClientRect();
      const blockRect = selectBlock[0].getBoundingClientRect();
      const currentScrollLeft = controls.scrollLeft();
      const maxScrollLeft =
        controlsElement.scrollWidth - controlsElement.clientWidth;
      const leftOffset = 15;
      const targetScrollLeft = Math.max(
        0,
        Math.min(
          currentScrollLeft +
            (blockRect.left - (controlsRect.left + leftOffset)),
          maxScrollLeft,
        ),
      );

      if (Math.abs(targetScrollLeft - currentScrollLeft) < 1) {
        if (typeof callback === "function") {
          callback();
        }
        return;
      }

      isAutoScrollingControls = true;
      controls
        .stop(true)
        .animate({ scrollLeft: targetScrollLeft }, 220, function () {
          if (typeof callback === "function") {
            callback();
          }

          requestAnimationFrame(function () {
            isAutoScrollingControls = false;
          });
        });
    };

    const closeAllSelectBlocks = function (block) {
      selectBlocks.each(function () {
        const currentBlock = $(this);
        const currentList = getSelectList(currentBlock);

        if (block && currentBlock.is(block)) {
          return;
        }

        currentBlock.removeClass("is-open");

        if (currentList.hasClass("is-floating")) {
          currentList.stop().slideUp(180, function () {
            restoreListToBlock(currentBlock);
          });
        } else {
          currentList.stop().slideUp(180);
        }
      });
    };

    selectBlocks.each(function () {
      const selectBlock = $(this);
      const selectList = selectBlock.find(".select-block__list");
      selectBlock.data("selectList", selectList);

      selectBlock.on("click", function (e) {
        if ($(e.target).closest(".select-block__item").length > 0) {
          return;
        }

        if (selectBlock.hasClass("is-open")) {
          closeAllSelectBlocks();
        } else {
          closeAllSelectBlocks(selectBlock);
          scrollControlsToBlockLeft(selectBlock, function () {
            openSelectBlock(selectBlock);
          });
        }
      });

      selectBlock.find(".select-block__item a").on("click", function (e) {
        e.preventDefault();

        // TODO удалить потом если не нужно менять текст в селекте

        // const selectedText = $(this).text().trim();
        // selectData.text(selectedText);

        closeAllSelectBlocks();
      });
    });

    $(document).on("click.selectBlock", function (e) {
      const target = $(e.target);

      if (
        target.closest(".select-block").length === 0 &&
        target.closest(".select-block__list.is-floating").length === 0
      ) {
        closeAllSelectBlocks();
      }
    });

    controlsBlocks.on("scroll.selectBlock", function () {
      if (isAutoScrollingControls) {
        return;
      }
      closeAllSelectBlocks();
    });

    $(window).on("resize.selectBlock scroll.selectBlock", function () {
      closeAllSelectBlocks();
    });
  }

  // TODO удалить потом base

  // if ($(".grettings-main-slider").length > 0) {
  //   const swiper = new Swiper(".grettings-main-slider", {
  //     slidesPerView: 1,
  //     spaceBetween: 16,
  //     effect: "fade",
  //     fadeEffect: { crossFade: true },
  //     loop: true,
  //     autoplay: {
  //       delay: 5000,
  //       disableOnInteraction: false,
  //     },
  //     navigation: {
  //       prevEl: ".grettings-main-slider .btnSwiperPrev",
  //       nextEl: ".grettings-main-slider .btnSwiperNext",
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1,
  //         spaceBetween: 16,
  //       },
  //     },
  //   });
  // }

  // if ($(".phone-input").length > 0) {
  //   $(".phone-input").map(function () {
  //     $(this).inputmask({
  //       mask: "+7(999) 999-99-99",
  //       placeholder: "*",
  //       showMaskOnHover: false,
  //       showMaskOnFocus: true,
  //       clearIncomplete: true,
  //     });
  //   });
  // }

  // if ($("[data-fancybox]").length > 0) {
  //   Fancybox.bind("[data-fancybox]", {
  //     speedIn: 600,
  //     speedOut: 600,
  //   });
  // }

  // if ($(".subcategories-slider").length > 0) {
  //   const sliders = document.querySelectorAll(".subcategories-slider");
  //   let mySwipers = [];

  //   function sliderinit() {
  //     sliders.forEach((slider, index) => {
  //       let navNext = undefined;
  //       let navPrev = undefined;

  //       if (!slider.swiper) {
  //         navNext = $(slider)
  //           .parents(".subcategories")
  //           .find(".btnSwiperNext")[0];
  //         navPrev = $(slider)
  //           .parents(".subcategories")
  //           .find(".btnSwiperPrev")[0];

  //         mySwipers[index] = new Swiper(slider, {
  //           slidesPerView: 3,
  //           spaceBetween: 24,
  //           navigation: {
  //             nextEl: navNext && navNext,
  //             prevEl: navPrev && navPrev,
  //           },
  //           breakpoints: {
  //             0: {
  //               slidesPerView: 1,
  //               spaceBetween: 16,
  //             },
  //             640: {
  //               slidesPerView: 2,
  //               spaceBetween: 16,
  //             },
  //             1280: {
  //               slidesPerView: 3,
  //               spaceBetween: 24,
  //             },
  //           },
  //         });
  //       } else {
  //         return;
  //       }
  //     });
  //   }

  //   sliders.length && sliderinit();
  // }

  // if ($(".tabs").length > 0) {
  //   $(".tabs").tabslet({
  //     mouseevent: "click",
  //     attribute: "href",
  //     animation: true,
  //   });
  // }

  // if ($(".modal").length > 0) {
  //   MicroModal.init({
  //     openTrigger: "data-modal",

  //     onShow: () => {
  //       $("body").addClass("modal-open");
  //     },

  //     onClose: () => {
  //       $("body").removeClass("modal-open");
  //     },
  //   });

  //   $("[data-modal]").map(function () {
  //     $(this).click((e) => e.preventDefault());
  //   });
  // }

  // /base
});
