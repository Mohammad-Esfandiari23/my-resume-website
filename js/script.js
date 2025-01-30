document.addEventListener("DOMContentLoaded", function() {
    // گرفتن همه‌ی بخش‌های قابل کلیک
    var accordions = document.querySelectorAll(".interest-item");

    accordions.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            var panel = this.querySelector(".panel");

            // بررسی اینکه آیا این پنل در حال حاضر باز است یا نه
            var isActive = panel.classList.contains("show");

            // اگر پنل فعلی باز است، آن را ببند
            if (isActive) {
                panel.classList.remove("show");
            } else {
                // بستن همه‌ی پنل‌های دیگر
                document.querySelectorAll(".panel").forEach(function(item) {
                    item.classList.remove("show");
                });

                // باز کردن پنل فعلی
                panel.classList.add("show");
            }
        });
    });
});
