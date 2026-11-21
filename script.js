const WHATSAPP_NUMBER = "996997767774";
const CURRENCY = "с";
const CAFE_ADDRESS_QUERY = "Манас, улица Пушкина 27А";

const I18N = {
    ru: {
        address: "г. Манас, ул. Пушкина 27А",
        themeDark: "Чёрно-оранжевый",
        themeLight: "Бело-красный",
        searchPlaceholder: "Поиск по меню...",
        cart: "Корзина",
        openMapTitle: "Открыть адрес",
        yourOrder: "Ваш заказ",
        deliveryMethod: "Способ получения",
        delivery: "Доставка",
        pickup: "С собой",
        addressLabel: "Адрес доставки",
        addressPlaceholder: "Улица, дом, квартира",
        nameLabel: "Имя",
        namePlaceholder: "Ваше имя",
        commentLabel: "Комментарий",
        commentPlaceholder: "Пожелания к заказу...",
        total: "Итого",
        orderWhatsapp: "Отправить в WhatsApp",
        addToCart: "+ Добавить",
        emptyCart: "Корзина пуста",
        notFound: "Ничего не найдено",
        alertEmpty: "Выберите хотя бы одно блюдо",
        alertAddress: "Укажите адрес доставки",
        catAll: "Все",
        waTitle: "НОВЫЙ ЗАКАЗ — ABI DONER",
        waTotal: "ИТОГО",
        waMethod: "Способ",
        waAddress: "Адрес",
        waClient: "Клиент",
        waComment: "Комментарий",
        notSpecified: "Не указано"
    },
    kg: {
        address: "Манас ш., Пушкин көч. 27А",
        themeDark: "Кара-кызгылт сары",
        themeLight: "Ак-кызыл",
        searchPlaceholder: "Менюдан издөө...",
        cart: "Себет",
        openMapTitle: "Даректи ачуу",
        yourOrder: "Сиздин буйрутма",
        deliveryMethod: "Алуу ыкмасы",
        delivery: "Жеткирүү",
        pickup: "Өзү менен",
        addressLabel: "Жеткирүү дареги",
        addressPlaceholder: "Көчө, үй, батир",
        nameLabel: "Атыңыз",
        namePlaceholder: "Атыңызды жазыңыз",
        commentLabel: "Комментарий",
        commentPlaceholder: "Каалоолор...",
        total: "Жалпы",
        orderWhatsapp: "WhatsApp'ка жөнөтүү",
        addToCart: "+ Кошуу",
        emptyCart: "Себет бош",
        notFound: "Эч нерсе табылган жок",
        alertEmpty: "Жок дегенде бир тамак тандаңыз",
        alertAddress: "Жеткирүү дарегин жазыңыз",
        catAll: "Баары",
        waTitle: "ЖАҢЫ БУЙРУТМА — ABI DONER",
        waTotal: "ЖАЛПЫ",
        waMethod: "Ыкмасы",
        waAddress: "Дареги",
        waClient: "Кардар",
        waComment: "Комментарий",
        notSpecified: "Көрсөтүлгөн эмес"
    }
};

const MENU_ITEMS = [
    { id: 1, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "Фирменная", kg: "Фирмалык" }, price: 500, desc: { ru: "Фирменный соус, моцарелла, зелень и специи", kg: "Фирмалык соус, моцарелла, көк чөп жана татымал" } },
    { id: 2, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "Пепперони люкс", kg: "Пепперони люкс" }, price: 500, desc: { ru: "Пепперони, моцарелла и томатный соус", kg: "Пепперони, моцарелла жана томат соусу" } },
    { id: 3, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "4 сыра", kg: "4 сыр" }, price: 500, desc: { ru: "Моцарелла, чеддер, пармезан и сливочный сыр", kg: "Моцарелла, чеддер, пармезан жана каймак сыры" } },
    { id: 4, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "Колбасный взрыв", kg: "Колбаса жарылуусу" }, price: 480, desc: { ru: "Ассорти колбас и тягучий сыр", kg: "Колбаса ассортиси жана чоюлчаак сыр" } },
    { id: 5, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "Пицца ассорти", kg: "Пицца ассорти" }, price: 500, desc: { ru: "Мясо, колбасы, овощи и сыр", kg: "Эт, колбаса, жашылча жана сыр" } },
    { id: 6, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "Куриная с грибами", kg: "Тоок эти жана козу карын" }, price: 480, desc: { ru: "Куриное филе, шампиньоны и сыр", kg: "Тоок эти, козу карын жана сыр" } },
    { id: 7, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "Куриная", kg: "Тоок эти менен" }, price: 500, desc: { ru: "Куриное филе, томаты и моцарелла", kg: "Тоок эти, помидор жана моцарелла" } },
    { id: 8, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "Мясная", kg: "Эттүү пицца" }, price: 500, desc: { ru: "Говядина, курица, лук и моцарелла", kg: "Уй эти, тоок эти, пияз жана моцарелла" } },
    { id: 9, icon: "🍕", category: { ru: "Пицца", kg: "Пицца" }, name: { ru: "4 сезона", kg: "4 мезгил" }, price: 500, desc: { ru: "Четыре вкуса в одной пицце", kg: "Бир пиццада төрт даам" } },
    { id: 10, icon: "🍔", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо 1X", kg: "Комбо 1X" }, price: 280, desc: { ru: "Бургер, фри, соус и напиток", kg: "Бургер, фри, соус жана суусундук" } },
    { id: 11, icon: "🌯", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо 2X", kg: "Комбо 2X" }, price: 390, desc: { ru: "Шаурма, фри, наггетсы и напиток", kg: "Шаурма, фри, наггетсы жана суусундук" } },
    { id: 12, icon: "🌯", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо эконом", kg: "Комбо эконом" }, price: 1250, desc: { ru: "Шаурма, наггетсы, стрипсы, соусы, напитки", kg: "Шаурма, наггетсы, стрипсы, соустар, суусундуктар" } },
    { id: 13, icon: "🍕", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо эконом 2", kg: "Комбо эконом 2" }, price: 1450, desc: { ru: "Пицца, фри, крылышки, наггетсы, напитки", kg: "Пицца, фри, канатчалар, наггетсы, суусундуктар" } },
    { id: 14, icon: "🍔", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо эконом 3", kg: "Комбо эконом 3" }, price: 1250, desc: { ru: "4 бургера, фри, соусы и 4 напитка", kg: "4 бургер, фри, соустар жана 4 суусундук" } },
    { id: 15, icon: "🍔", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо достор", kg: "Комбо достор" }, price: 1350, desc: { ru: "4 бургера, крылышки, фри, соусы, напитки", kg: "4 бургер, канатчалар, фри, соустар, суусундуктар" } },
    { id: 16, icon: "🎉", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо семейный", kg: "Комбо үй-бүлөлүк" }, price: 1650, desc: { ru: "Пицца, 4 шаурмы, стрипсы, крылышки, напитки", kg: "Пицца, 4 шаурма, стрипсы, канатчалар, суусундуктар" } },
    { id: 17, icon: "🎉", category: { ru: "Комбо", kg: "Комбо" }, name: { ru: "Комбо семейный 2", kg: "Комбо үй-бүлөлүк 2" }, price: 1800, desc: { ru: "Пицца, 4 бургера, наггетсы, крылышки, напитки", kg: "Пицца, 4 бургер, наггетсы, канатчалар, суусундуктар" } },
    { id: 18, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Сет Abi", kg: "Сет Abi" }, price: 2300, desc: { ru: "Большой фирменный сет", kg: "Чоң фирмалык сет" } },
    { id: 19, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Сет бешенный", kg: "Сет бешенный" }, price: 1450, desc: { ru: "Запечённые и холодные роллы", kg: "Бышырылган жана муздак роллдор" } },
    { id: 20, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Сет сакура", kg: "Сет сакура" }, price: 1550, desc: { ru: "Лосось, угорь и краб", kg: "Лосось, жылан балык жана краб" } },
    { id: 21, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Сет холодный трио", kg: "Сет муздак трио" }, price: 1550, desc: { ru: "Три вида холодных роллов", kg: "Муздак роллдордун үч түрү" } },
    { id: 22, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Сет эконом", kg: "Сет эконом" }, price: 1050, desc: { ru: "Набор популярных роллов", kg: "Популярдуу роллдордун топтому" } },
    { id: 23, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Филадельфия жареный", kg: "Куурулган Филадельфия" }, price: 370, desc: { ru: "Лосось и сливочный сыр", kg: "Лосось жана каймак сыры" } },
    { id: 24, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Это гонконг", kg: "Бул Гонконг" }, price: 350, desc: { ru: "Запечённый ролл под соусом", kg: "Соус менен бышырылган ролл" } },
    { id: 25, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Запеченный сыр", kg: "Бышырылган сыр" }, price: 300, desc: { ru: "Ролл под сырной шапочкой", kg: "Сыр менен бышырылган ролл" } },
    { id: 26, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Стамбульская ночь", kg: "Стамбул түнү" }, price: 400, desc: { ru: "Авторский ролл", kg: "Автордук ролл" } },
    { id: 27, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Калифорния с крабом", kg: "Краб менен Калифорния" }, price: 320, desc: { ru: "Краб, огурец, авокадо, тобико", kg: "Краб, бадыраң, авокадо, тобико" } },
    { id: 28, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Горячий шик", kg: "Ысык шик" }, price: 360, desc: { ru: "Тёплый ролл в темпуре", kg: "Темпурадагы жылуу ролл" } },
    { id: 29, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Фила хот", kg: "Фила хот" }, price: 450, desc: { ru: "Горячая Филадельфия", kg: "Ысык Филадельфия" } },
    { id: 30, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Запеченный с курицей", kg: "Тоок эти менен бышырылган" }, price: 330, desc: { ru: "Курица, сыр и соус унаги", kg: "Тоок, сыр жана унаги соусу" } },
    { id: 31, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Бонито", kg: "Бонито" }, price: 350, desc: { ru: "Лосось, сыр и стружка тунца", kg: "Лосось, сыр жана тунец" } },
    { id: 32, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Бешенный лосось", kg: "Бешенный лосось" }, price: 350, desc: { ru: "Лосось, спайси и сыр", kg: "Лосось, спайси жана сыр" } },
    { id: 33, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Калифорния с угрем", kg: "Жылан балык менен Калифорния" }, price: 340, desc: { ru: "Угорь, огурец и тобико", kg: "Жылан балык, бадыраң жана тобико" } },
    { id: 34, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Канадский ролл", kg: "Канадалык ролл" }, price: 370, desc: { ru: "Угорь, лосось, сыр, кунжут", kg: "Жылан балык, лосось, сыр, кунжут" } },
    { id: 35, icon: "🍣", category: { ru: "Роллы", kg: "Роллдор" }, name: { ru: "Филадельфия", kg: "Филадельфия" }, price: 340, desc: { ru: "Лосось, сливочный сыр, огурец", kg: "Лосось, каймак сыры, бадыраң" } },
    { id: 36, icon: "🍽️", category: { ru: "Блюда", kg: "Тамактар" }, name: { ru: "Бейти донер", kg: "Бейти донер" }, price: 350, desc: { ru: "Донер в лаваше с соусом и гарниром", kg: "Соус жана гарнир менен донер" } },
    { id: 37, icon: "🍽️", category: { ru: "Блюда", kg: "Тамактар" }, name: { ru: "Саде донер с курицей", kg: "Тоок эти менен саде донер" }, price: 380, desc: { ru: "Куриный донер с гарниром и овощами", kg: "Гарнир жана жашылча менен тоок донери" } }
];

let cart = {};
try {
    cart = JSON.parse(localStorage.getItem("abi_cart")) || {};
} catch (e) {
    cart = {};
}

let currentLang = localStorage.getItem("abi_lang") === "kg" ? "kg" : "ru";
let activeCategory = "ALL";
let searchQuery = "";
let deliveryType = "delivery";
document.addEventListener("DOMContentLoaded", () => {
    setupMapLinks();
    applyTranslations();
    renderCategories();
    renderMenu();
    updateCartUI();
    bindEvents();
});

function setupMapLinks() {
    const q = encodeURIComponent(CAFE_ADDRESS_QUERY);
    document.getElementById("link2gis").href = `https://2gis.kg/search/${q}`;
    document.getElementById("linkYandex").href = `https://yandex.ru/maps/?text=${q}`;
    document.getElementById("linkGoogle").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function applyTranslations() {
    const t = I18N[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.textContent = t[key];
    });

    const isDark = document.body.classList.contains("theme-dark");
    document.getElementById("themeToggle").textContent = isDark ? t.themeLight : t.themeDark;
    document.getElementById("langToggle").textContent = currentLang === "ru" ? "Кыргызча" : "Русский";

    document.getElementById("searchInput").placeholder = t.searchPlaceholder;
    document.getElementById("customerAddress").placeholder = t.addressPlaceholder;
    document.getElementById("customerName").placeholder = t.namePlaceholder;
    document.getElementById("customerComment").placeholder = t.commentPlaceholder;
}

function renderCategories() {
    const container = document.getElementById("categoriesContainer");
    const t = I18N[currentLang];

    const seen = new Set();
    const cats = [];
    MENU_ITEMS.forEach((item) => {
        if (!seen.has(item.category.ru)) {
            seen.add(item.category.ru);
            cats.push({ key: item.category.ru, label: item.category[currentLang] });
        }
    });

    const allBtn = `<button type="button" class="cat-chip ${activeCategory === "ALL" ? "active" : ""}" data-cat="ALL">${t.catAll}</button>`;
    const catBtns = cats.map((c) =>
        `<button type="button" class="cat-chip ${activeCategory === c.key ? "active" : ""}" data-cat="${c.key}">${c.label}</button>`
    ).join("");

    container.innerHTML = allBtn + catBtns;

    container.querySelectorAll(".cat-chip").forEach((btn) => {
        btn.addEventListener("click", () => {
            activeCategory = btn.dataset.cat;
            renderCategories();
            renderMenu();
        });
    });
}

function renderMenu() {
    const grid = document.getElementById("menuGrid");
    const t = I18N[currentLang];
    const q = searchQuery.trim().toLowerCase();

    const list = MENU_ITEMS.filter((item) => {
        const catOk = activeCategory === "ALL" || item.category.ru === activeCategory;
        const textOk = !q ||
            item.name.ru.toLowerCase().includes(q) ||
            item.name.kg.toLowerCase().includes(q) ||
            item.desc.ru.toLowerCase().includes(q) ||
            item.desc.kg.toLowerCase().includes(q);
        return catOk && textOk;
    });

    if (!list.length) {
        grid.innerHTML = `<p>${t.notFound}</p>`;
        return;
    }

    grid.innerHTML = list.map((item) => {
        const qty = cart[item.id] || 0;
        const controlHtml = qty === 0
            ? `<button type="button" class="add-btn" data-add="${item.id}">${t.addToCart}</button>`
            : `<div class="stepper">
                    <button type="button" class="step-btn" data-dec="${item.id}">−</button>
                    <span class="step-num">${qty}</span>
                    <button type="button" class="step-btn" data-inc="${item.id}">+</button>
               </div>`;

        return `
            <article class="dish-card">
                <div>
                    <div class="dish-top">
                        <span class="dish-cat">${item.category[currentLang]}</span>
                        <span class="dish-icon">${item.icon}</span>
                    </div>
                    <h3 class="dish-title">${item.name[currentLang]}</h3>
                    <p class="dish-desc">${item.desc[currentLang]}</p>
                </div>
                <div class="dish-bottom">
                    <span class="dish-price">${item.price} ${CURRENCY}</span>
                    ${controlHtml}
                </div>
            </article>
        `;
    }).join("");

    grid.querySelectorAll("[data-add]").forEach((btn) => {
        btn.addEventListener("click", () => changeQty(Number(btn.dataset.add), 1));
    });
    grid.querySelectorAll("[data-inc]").forEach((btn) => {
        btn.addEventListener("click", () => changeQty(Number(btn.dataset.inc), 1));
    });
    grid.querySelectorAll("[data-dec]").forEach((btn) => {
        btn.addEventListener("click", () => changeQty(Number(btn.dataset.dec), -1));
    });
}

function changeQty(id, delta) {
    const next = (cart[id] || 0) + delta;
    if (next <= 0) {
        delete cart[id];
    } else {
        cart[id] = next;
    }
    try {
        localStorage.setItem("abi_cart", JSON.stringify(cart));
    } catch (e) {}
    renderMenu();
    updateCartUI();
}

function updateCartUI() {
    const t = I18N[currentLang];
    const cartList = document.getElementById("cartItems");
    let count = 0;
    let sum = 0;
    let rows = "";

    Object.entries(cart).forEach(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === Number(id));
        if (!item) return;
        const lineSum = item.price * qty;
        count += qty;
        sum += lineSum;

        rows += `
            <div class="cart-row">
                <div>
                    <strong>${item.name[currentLang]}</strong><br>
                    <small>${item.price} ${CURRENCY} × ${qty} = ${lineSum} ${CURRENCY}</small>
                </div>
                <div class="stepper">
                    <button type="button" class="step-btn" data-cdec="${item.id}">−</button>
                    <span class="step-num">${qty}</span>
                    <button type="button" class="step-btn" data-cinc="${item.id}">+</button>
                </div>
            </div>
        `;
    });

    document.getElementById("cartCount").textContent = count;
    document.getElementById("cartTotalWidget").textContent = `${sum} ${CURRENCY}`;
    document.getElementById("modalTotal").textContent = `${sum} ${CURRENCY}`;
    cartList.innerHTML = rows || `<p>${t.emptyCart}</p>`;

    cartList.querySelectorAll("[data-cinc]").forEach((btn) => {
        btn.addEventListener("click", () => changeQty(Number(btn.dataset.cinc), 1));
    });
    cartList.querySelectorAll("[data-cdec]").forEach((btn) => {
        btn.addEventListener("click", () => changeQty(Number(btn.dataset.cdec), -1));
    });
}

function bindEvents() {
    document.getElementById("searchInput").addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderMenu();
    });

    document.getElementById("langToggle").addEventListener("click", () => {
        currentLang = currentLang === "ru" ? "kg" : "ru";
        try {
            localStorage.setItem("abi_lang", currentLang);
        } catch (e) {}
        applyTranslations();
        renderCategories();
        renderMenu();
        updateCartUI();
    });

    document.getElementById("themeToggle").addEventListener("click", () => {
        const isDark = document.body.classList.contains("theme-dark");
        document.body.classList.toggle("theme-dark", !isDark);
        document.body.classList.toggle("theme-light", isDark);
        applyTranslations();
    });

    const mapModal = document.getElementById("mapModal");
    document.getElementById("addressBtn").addEventListener("click", () => mapModal.classList.add("open"));
    document.getElementById("closeMapModalBtn").addEventListener("click", () => mapModal.classList.remove("open"));
    mapModal.addEventListener("click", (e) => {
        if (e.target === mapModal) mapModal.classList.remove("open");
    });

    const cartModal = document.getElementById("cartModal");
    document.getElementById("cartWidgetBtn").addEventListener("click", () => cartModal.classList.add("open"));
    document.getElementById("closeModalBtn").addEventListener("click", () => cartModal.classList.remove("open"));
    cartModal.addEventListener("click", (e) => {
        if (e.target === cartModal) cartModal.classList.remove("open");
    });

    const addressGroup = document.getElementById("addressGroup");
    document.querySelectorAll(".seg-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            deliveryType = btn.dataset.type;
            addressGroup.style.display = deliveryType === "pickup" ? "none" : "block";
        });
    });

    document.getElementById("sendWhatsappBtn").addEventListener("click", sendOrder);
}

function sendOrder() {
    const t = I18N[currentLang];
    const entries = Object.entries(cart);
    if (!entries.length) {
        alert(t.alertEmpty);
        return;
    }

    const name = document.getElementById("customerName").value.trim() || t.notSpecified;
    const address = document.getElementById("customerAddress").value.trim();
    const comment = document.getElementById("customerComment").value.trim();

    if (deliveryType === "delivery" && !address) {
        alert(t.alertAddress);
        return;
    }

    let total = 0;
    const msg = [
        `🔥 *${t.waTitle}*`,
        "——————————————"
    ];

    entries.forEach(([id, qty], idx) => {
        const item = MENU_ITEMS.find((m) => m.id === Number(id));
        if (!item) return;
        const lineSum = item.price * qty;
        total += lineSum;
        msg.push(`${idx + 1}. *${item.name[currentLang]}* — ${qty} шт. × ${item.price} ${CURRENCY} = *${lineSum} ${CURRENCY}*`);
    });

    msg.push("——————————————");
    msg.push(`💰 *${t.waTotal}: ${total} ${CURRENCY}*`);
    msg.push(`🚚 *${t.waMethod}:* ${deliveryType === "delivery" ? t.delivery : t.pickup}`);
    if (deliveryType === "delivery") {
        msg.push(`📍 *${t.waAddress}:* ${address}`);
    }
    msg.push(`👤 *${t.waClient}:* ${name}`);
    if (comment) {
        msg.push(`💬 *${t.waComment}:* ${comment}`);
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg.join("\n"))}`;
    window.open(url, "_blank");
}
