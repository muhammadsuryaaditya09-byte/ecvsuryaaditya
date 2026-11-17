
if (typeof DATA === "undefined") {
    document.body.insertAdjacentHTML(
        "afterbegin",
        '<p class="note" role="alert">data.js tidak terbaca. Pastikan file data.js ada di folder yang sama dengan index.html dan namanya persis data.js, lalu muat ulang halaman.</p>'
    );
    throw new Error("data.js tidak terbaca");
}

const $ = s => document.querySelector(s),
    $$ = s => [...document.querySelectorAll(s)];

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const toast = m => {
    const t = $("#toast");
    t.textContent = m;
    t.classList.add("show");
    clearTimeout(toast.id);
    toast.id = setTimeout(() => t.classList.remove("show"), 2200);
};

/* render */
const nm = $("#name");

nm.innerHTML = DATA.name.split(" ").map((w, i) =>
    `<span style="animation-delay:${.2 + i * .15}s">${w}</span>`
).join(" ");

document.title = `${DATA.name} | e-CV`;
$('meta[name="description"]').content = DATA.headline;

const esc = t => String(t).replace(/[&<>"]/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
}[m]));

const sl = [DATA.location, DATA.status].filter(Boolean).join(" • ");

if (sl) {
    const st = $("#status");
    st.hidden = false;
    st.querySelector("span").textContent = sl;
}

if (DATA.role) {
    const r = $("#role");
    r.hidden = false;
    r.textContent = DATA.role;
}

$("#sideAbout").textContent = DATA.bio;

if (DATA.proj[0]) {
    $("#sideWork").textContent = DATA.proj[0].d;
} else {
    $("#workBox").hidden = true;
}

const IC = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/> </svg>',

    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',

    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',

    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/></svg>',

    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
};

$("#socials").innerHTML = DATA.contact.map(c => {
    const i = IC[c.n.toLowerCase()] || IC.link,
        u = c.url;

    return u
        ? `<a class="soc" href="${esc(u)}"${u.startsWith("http") ? ' target="_blank" rel="noopener"' : ""} aria-label="${esc(c.n)}">${i}</a>`
        : `<span class="soc off" role="img" aria-label="${esc(c.n)} belum diisi" title="${esc(c.n)} belum diisi">${i}</span>`;
}).join("");

$("#headline").textContent = DATA.headline;

$("#ph").textContent = DATA.name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();

$("#bio").textContent = DATA.bio;
$("#interest").textContent = DATA.interest;
$("#goal").textContent = DATA.goal;

$("#mainSkill").innerHTML = DATA.mainSkill.map(s => `<li>${s}</li>`).join("");

const tl = a => a.map(e =>
    `<li><span class="yr">${e.y}</span><h3>${e.t}</h3><p>${e.d}</p></li>`
).join("");

$("#edu").innerHTML = tl(DATA.edu);
$("#exp").innerHTML = tl(DATA.exp);

$("#foot").innerHTML = `<p class="bigname">${DATA.name}</p><p>© ${new Date().getFullYear()} ${DATA.name}</p>`;

/* skills tabs */
const NOTE = {
    hard: "Kemampuan teknis yang saya pakai untuk membangun dan menganalisis.",
    soft: "Kemampuan nonteknis yang mendukung kerja tim dan kepemimpinan."
};

function showSkills(k) {
    $("#skillNote").textContent = NOTE[k];

    $$(".tabs button").forEach(b =>
        b.setAttribute("aria-selected", b.id === "t-" + k)
    );

    $("#chips").innerHTML = DATA[k].map((s, i) =>
        `<span class="chip" style="animation-delay:${i * 70}ms">${s}</span>`
    ).join("");
}

$("#t-hard").onclick = () => showSkills("hard");
$("#t-soft").onclick = () => showSkills("soft");
showSkills("hard");

/* portfolio */
$("#proj").innerHTML = DATA.proj.map((p, i) =>
    `<article class="pc">
        <div class="cover">
            <span aria-hidden="true">${p.t}</span>
            ${p.image ? `<img src="${p.image}" alt="Tampilan proyek ${p.t}" width="600" height="300" loading="lazy" onerror="this.remove()">` : ""}
        </div>
        <div class="pb">
            <h3>${p.t}</h3>
            <p>${p.d}</p>
            <div class="more" id="m${i}">
                <div>
                    <dl>
                        <dt>Peran dan kontribusi</dt>
                        <dd>${p.role}</dd>
                        <dt>Teknologi</dt>
                        <dd>${p.tools}</dd>
                    </dl>
                </div>
            </div>
            <button type="button" class="btn ghost" data-i="${i}" aria-expanded="false" aria-controls="m${i}">Lihat peran saya</button>
        </div>
    </article>`
).join("");

$$("#proj button").forEach(b => b.onclick = () => {
    const m = $("#m" + b.dataset.i),
        o = m.classList.toggle("open");

    b.setAttribute("aria-expanded", o);
    b.textContent = o ? "Sembunyikan" : "Lihat peran saya";
});


/* achievements */
$("#achievementsList").innerHTML = DATA.achievements.length
    ? DATA.achievements.map((a, i) =>
        `<article class="cc achievement-card">

            <div class="thumb achievement-visual">

    ${a.image
        ? `<img src="${a.image}"
               alt="Dokumentasi ${esc(a.title)}"
               loading="lazy"
               onerror="this.remove()">`
        : `<span class="achievement-symbol">🏆</span>`
    }

    <span class="achievement-rank">
        ${esc(a.rank)}
    </span>

</div>

            <div class="pb">

                <span class="achievement-year">
                    ${esc(a.year)}
                </span>

                <h3>${esc(a.title)}</h3>

                <p class="achievement-club">
                    ${esc(a.club)}
                </p>

                <p>
                    ${esc(a.description)}
                </p>

            </div>

        </article>`
    ).join("")
    : `<p class="empty">Belum ada prestasi.</p>`;

/* certificates */
$("#certs").innerHTML = DATA.certs.length
    ? DATA.certs.map((c, i) =>
        `<article class="cc">
            <div class="thumb">
                <span aria-hidden="true">${c.title}</span>
                ${c.image ? `<img src="${c.image}" alt="Sertifikat ${c.title}" width="400" height="300" loading="lazy" onerror="this.remove()">` : ""}
            </div>
            <div class="pb">
                <h3>${c.title}</h3>
                <p>${c.issuer} · ${c.year}</p>
                <div class="row">
                    ${c.image
                        ? `<button type="button" class="btn ghost" data-v="${i}">Lihat sertifikat</button>`
                        : `<button type="button" class="btn ghost" disabled>Belum ada file</button>`
                    }
                    ${c.url ? `<a class="btn" href="${c.url}" target="_blank" rel="noopener">Verifikasi</a>` : ""}
                </div>
            </div>
        </article>`
    ).join("")
    : `<p class="empty">Belum ada sertifikat. Tambahkan di data.js pada bagian certs.</p>`;

const lb = $("#lb");

$$("[data-v]").forEach(b => b.onclick = () => {
    const c = DATA.certs[b.dataset.v];

    $("#lbImg").src = c.image;
    $("#lbImg").alt = "Sertifikat " + c.title;
    $("#lbCap").textContent = c.title + " · " + c.issuer + " · " + c.year;

    lb.showModal();
});

$("#lbX").onclick = () => lb.close();

lb.addEventListener("click", e => {
    if (e.target === lb) lb.close();
});

/* contact */

/* Fungsi WhatsApp */
function hubungiWhatsapp() {
    const nomor = "6285523618848";
    const pesan = "Halo Surya, saya ingin menghubungi Anda.";

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}

/* Menampilkan kontak pada website */
$("#ct").innerHTML = DATA.contact.map((c, i) =>
    `<li>
        <b>${c.n}</b>
        <span>${c.v}</span>
        ${c.copy ? `<button type="button" class="btn ghost" data-c="${i}">Salin</button>` : ""}
        ${c.url ? `<a class="btn" href="${c.url}" target="_blank" rel="noopener">Buka</a>` : `<button type="button" class="btn" disabled>Belum diisi</button>`}
    </li>`
).join("");

$$("[data-c]").forEach(b => b.onclick = async () => {
    try {
        await navigator.clipboard.writeText(DATA.contact[b.dataset.c].v);
        toast("Email tersalin");
    } catch (e) {
        toast("Salin manual: " + DATA.contact[b.dataset.c].v);
    }
});

/* photo upload */
$("#pick").onclick = () => $("#file").click();

$("#file").onchange = e => {
    const f = e.target.files[0];

    if (!f) return;

    if (!f.type.startsWith("image/")) {
        toast("Pilih file gambar");
        return;
    }

    const r = new FileReader();

    r.onload = () => {
        $("#frame").innerHTML = `<img alt="Foto profil ${DATA.name}" src="${r.result}">`;
    };

    r.readAsDataURL(f);
};

/* foto profil dari data.js, tetap pakai inisial jika file tidak ada */
if (DATA.photo) {
    const im = new Image();

    im.alt = "Foto profil " + DATA.name;
    im.width = 380;
    im.height = 380;
    im.fetchPriority = "high";
    im.onload = () => $("#frame").replaceChildren(im);
    im.src = DATA.photo;
}


/* tilt + 3D hover + neon glow + floating photo */
const ph = $("#photo"),
    fr = $("#frame"),
    PE = DATA.photoEffect || {
        enabled: true,
        tilt: 18,
        scale: 1.08,
        lift: 12,
        glow: true,
        glowIntensity: 0.75,
        transition: 350,
        perspective: 1000
    };

if (!reduce && PE.enabled !== false) {

    const tilt = PE.tilt ?? 18,
        scale = PE.scale ?? 1.08,
        lift = PE.lift ?? 12,
        glow = PE.glow !== false,
        glowIntensity = PE.glowIntensity ?? 0.75,
        transition = PE.transition ?? 350,
        perspective = PE.perspective ?? 1000;

    ph.style.perspective = perspective + "px";

    fr.style.transformStyle = "preserve-3d";
    fr.style.transformOrigin = "center center";
    fr.style.willChange = "transform, filter";

    fr.style.transition =
        `transform ${transition}ms cubic-bezier(.2,.8,.2,1), 
         filter ${transition}ms ease`;

    ph.addEventListener("pointerenter", () => {

        fr.style.transition =
            "transform 180ms cubic-bezier(.2,.8,.2,1), filter 250ms ease";

    });

    ph.addEventListener("pointermove", e => {

        const b = ph.getBoundingClientRect(),
            x = (e.clientX - b.left) / b.width - .5,
            y = (e.clientY - b.top) / b.height - .5;

        const rotateY = x * tilt,
            rotateX = -y * tilt;

        fr.style.transform =
            `translate3d(${x * 5}px, ${-lift + y * 5}px, 0) 
             rotateY(${rotateY}deg) 
             rotateX(${rotateX}deg) 
             scale(${scale})`;

        if (glow) {

            const intensity = Math.max(0, Math.min(1, glowIntensity));

            fr.style.filter =
                `drop-shadow(${x * 8}px ${y * 8}px ${18 + intensity * 18}px rgba(201, 243, 29, ${intensity})) 
                 drop-shadow(0 0 ${12 + intensity * 20}px rgba(201, 243, 29, ${intensity * .55}))`;

        }

    });

    ph.addEventListener("pointerleave", () => {

        fr.style.transition =
            `transform ${transition}ms cubic-bezier(.2,.8,.2,1), 
             filter ${transition}ms ease`;

        fr.style.transform = "";

        fr.style.filter = "";

    });

}


/* menu */
const nav = $("#nav"),
    mb = $("#menu");

const syncNav = () => {
    nav.inert = innerWidth <= 900 && !nav.classList.contains("open");
};

const setMenu = o => {
    nav.classList.toggle("open", o);
    mb.setAttribute("aria-expanded", o);
    syncNav();
};

syncNav();
addEventListener("resize", syncNav);

mb.onclick = () => setMenu(!nav.classList.contains("open"));

nav.addEventListener("click", e => {
    if (e.target.closest("a")) setMenu(false);
});

addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
});

$("#noteX").onclick = () => $("#note").remove();

/* scroll progress */
let tick = false;

addEventListener("scroll", () => {
    if (tick) return;

    tick = true;

    requestAnimationFrame(() => {
        const h = document.documentElement;

        $("#prog").style.transform = `scaleX(${Math.min(1, scrollY / (h.scrollHeight - innerHeight || 1))})`;

        tick = false;
    });
}, {
    passive: true
});

/* reveal + active nav */
const ro = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add("in");
        ro.unobserve(e.target);
    }
}), {
    threshold: .15
});

$$(".stg").forEach(g =>
    [...g.children].forEach((c, i) => c.style.setProperty("--i", i))
);

$$(".rv,.stg").forEach(el => ro.observe(el));

const links = $$("nav a"),
    so = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
            links.forEach(a =>
                a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)
            );
        }
    }), {
        rootMargin: "-45% 0px -50% 0px"
    });

$$("main section").forEach(s => so.observe(s));

const mq = [DATA.name, ...DATA.hard, ...DATA.soft].map(t => `<span>${t}</span>`).join("");

$("#marq").innerHTML = mq + mq;

/* mode warna, cahaya kartu, paralaks */
const md = $("#mode");

md.onclick = () => {
    const d = document.documentElement.dataset.mode === "dark";

    document.documentElement.dataset.mode = d ? "" : "dark";
    md.setAttribute("aria-pressed", !d);
    toast(d ? "Warna normal" : "Warna dibalik");
};

/* ===== interaksi halus: kursor, magnet, tilt kartu, pil menu, marquee ===== */
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

(() => {
    const t = $("#marq"),
        box = t.parentElement;

    let x = 0,
        v = 0,
        last = scrollY,
        stop = false,
        H = 0;

    const meas = () => {
        H = t.scrollWidth / 2;
    };

    meas();

    addEventListener("resize", meas);

    document.fonts && document.fonts.ready.then(meas);

    box.addEventListener("pointerenter", () => stop = true);
    box.addEventListener("pointerleave", () => stop = false);

    (function f() {
        const dy = scrollY - last;

        last = scrollY;
        v += ((reduce ? 0 : dy) - v) * .08;

        const h = H;

        if (h) {
            x -= (reduce || stop ? 0 : .7) + v * .6;

            if (x <= -h) x += h;
            if (x > 0) x -= h;

            t.style.transform = `translate3d(${x}px,0,0)`;
        }

        requestAnimationFrame(f);
    })();
})();

const ul = $("nav ul"),
    pill = document.createElement("li"),
    pin = document.createElement("div");

pill.className = "pill";
pill.setAttribute("aria-hidden", "true");
pin.className = "pill-in";

/* salinan label berwarna gelap di dalam pil: teks selalu terbaca persis di dalam blok lime, di mana pun pil berada */
pin.innerHTML = links.map(a => `<span>${esc(a.textContent)}</span>`).join("");

pill.append(pin);
ul.prepend(pill);

let hov = null,
    lock = null;

const act = () => lock || links.find(a => a.classList.contains("on"));

function place(a) {
    if (!a || innerWidth <= 900) {
        pill.style.opacity = 0;
        return;
    }

    const r = a.getBoundingClientRect(),
        x = r.left - ul.getBoundingClientRect().left;

    pill.style.opacity = 1;
    pill.style.width = r.width + "px";
    pill.style.transform = `translateX(${x}px)`;
    pin.style.transform = `translateX(${-x}px)`;
}

function snap(a) {
    pill.style.transition = pin.style.transition = "none";

    place(a);

    requestAnimationFrame(() =>
        requestAnimationFrame(() => {
            pill.style.transition = pin.style.transition = "";
        })
    );
}

ul.addEventListener("pointerover", e => {
    const a = e.target.closest("a");

    if (a) {
        hov = a;
        place(a);
    }
});

ul.addEventListener("pointerleave", () => {
    hov = null;
    place(act());
});

ul.addEventListener("focusin", e => {
    const a = e.target.closest("a");

    if (a) place(a);
});

ul.addEventListener("focusout", () => place(hov || act()));

new MutationObserver(() => {
    if (!hov) place(act());
}).observe(ul, {
    attributes: true,
    subtree: true,
    attributeFilter: ["class"]
});

addEventListener("resize", () => snap(hov || act()));

/* setelah klik, pil tetap di menu yang diklik selama halaman bergulir; dilepas saat pengguna menggulir sendiri */
nav.addEventListener("click", e => {
    const a = e.target.closest("a");

    if (a && a.hash) {
        lock = a;
        place(a);
    }
});

["wheel", "touchmove", "keydown"].forEach(t =>
    addEventListener(t, () => {
        if (lock) {
            lock = null;
            if (!hov) place(act());
        }
    }, {
        passive: true
    })
);

document.fonts && document.fonts.ready.then(() => snap(hov || act()));

snap(act());

$$(".tl li,.ct li").forEach(l => {
    const set = e => {
        const r = l.getBoundingClientRect();

        l.style.setProperty("--px", e.clientX - r.left + "px");
        l.style.setProperty("--py", e.clientY - r.top + "px");
    };

    l.addEventListener("pointerenter", set);
    l.addEventListener("pointerleave", set);
});

/* gerak halus bersama: semua efek hover berbagi satu loop lerp */
const lerp = (a, b, k) => a + (b - a) * k,
    live = new Set();

let raf = 0;

function loop() {
    let more = false;

    live.forEach(o => {
        o.x = lerp(o.x, o.tx, o.k);
        o.y = lerp(o.y, o.ty, o.k);

        o.set(o.x, o.y);

        if (Math.abs(o.x - o.tx) + Math.abs(o.y - o.ty) > .01) {
            more = true;
        } else {
            live.delete(o);
        }
    });

    raf = more ? requestAnimationFrame(loop) : 0;
}

const mk = (set, k) => ({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    k,
    set
});

const go = (o, tx, ty) => {
    o.tx = tx;
    o.ty = ty;

    live.add(o);

    if (!raf) raf = requestAnimationFrame(loop);
};

$$(".pc,.cc").forEach(c => {
    const o = mk((x, y) => {
        c.style.setProperty("--ry", x.toFixed(2) + "deg");
        c.style.setProperty("--rx", y.toFixed(2) + "deg");
    }, .14);

    c.addEventListener("pointermove", e => {
        if (e.pointerType !== "mouse") return;

        const r = c.getBoundingClientRect(),
            x = (e.clientX - r.left) / r.width,
            y = (e.clientY - r.top) / r.height;

        c.style.setProperty("--px", x * 100 + "%");
        c.style.setProperty("--py", y * 100 + "%");

        if (!reduce) go(o, (x - .5) * 9, (.5 - y) * 9);
    });

    c.addEventListener("pointerleave", () => go(o, 0, 0));
});

if (fine && !reduce) {
    $$(".btn,.modebtn,#pick,.logo").forEach(el => {
        const o = mk((x, y) => {
            el.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
        }, .16);

        el.addEventListener("pointermove", e => {
            if (el.disabled) return;

            const r = el.getBoundingClientRect();

            go(
                o,
                (e.clientX - r.left - r.width / 2) * .22,
                (e.clientY - r.top - r.height / 2) * .3
            );
        });

        el.addEventListener("pointerleave", () => go(o, 0, 0));
    });

    const hero = $(".hero"),
        pt = $("#photo"),
        ho = mk((x, y) => {
            pt.style.setProperty("--hx", x.toFixed(3));
            pt.style.setProperty("--hy", y.toFixed(3));
        }, .07);

    hero.addEventListener("pointermove", e => {
        const r = hero.getBoundingClientRect();

        go(
            ho,
            ((e.clientX - r.left) / r.width - .5) * 2,
            ((e.clientY - r.top) / r.height - .5) * 2
        );
    });

    hero.addEventListener("pointerleave", () => go(ho, 0, 0));

    const root = document.documentElement,
        ensure = (id, inner) =>
            document.getElementById(id) ||
            Object.assign(document.body.appendChild(document.createElement("div")), {
                id,
                innerHTML: inner || ""
            });

    /* elemen kursor dibuat otomatis jika tidak ada di index.html, jadi tidak bergantung pada versi file HTML */
    const cu = ensure("cur", "<span></span>"),
        dot = ensure("cur-dot");

    let lab = cu.querySelector("span");

    if (!lab) lab = cu.appendChild(document.createElement("span"));

    cu.setAttribute("aria-hidden", "true");
    dot.setAttribute("aria-hidden", "true");

    let px = 0,
        py = 0,
        sp = 0,
        ang = 0,
        labelOn = false,
        first = true,
        mx = 0,
        my = 0,
        sraf = 0;

    /* cincin mengejar dengan lerp dan memanjang searah gerakan, lalu kembali bulat saat berhenti */
    const co = mk((x, y) => {
        const dx = x - px,
            dy = y - py,
            v = Math.hypot(dx, dy);

        px = x;
        py = y;
        sp += (v - sp) * .25;

        if (v > .5) ang = Math.atan2(dy, dx);

        const st = labelOn ? 0 : Math.min(sp / 70, .4);

        cu.style.transform = `translate3d(${x}px,${y}px,0) rotate(${ang}rad) scale(${1 + st},${1 - st * .35})`;
    }, .17);

    const state = t => {
        if (t.closest("a,button,.chip,.title,.soc")) return "lg";
        if (t.closest("[data-cursor]")) return "lab";
        if (t.closest(".tl li,.ct li")) return "lg";
        if (t.closest("p,li,dd,h1,h2,h3")) return "txt";

        return "";
    };

    function setState(t) {
        const s = state(t);

        cu.classList.toggle("lg", s === "lg");
        cu.classList.toggle("lab", s === "lab");
        cu.classList.toggle("txt", s === "txt");

        dot.classList.toggle("lab", s === "lab");
        dot.classList.toggle("txt", s === "txt");

        labelOn = s === "lab";

        if (labelOn) {
            const d = t.closest("[data-cursor]").dataset.cursor;

            if (lab.textContent !== d) lab.textContent = d;
        }

        const dk = !!t.closest(".alt,.hero,header,footer") !== (root.dataset.mode === "dark");

        cu.classList.toggle("dk", dk);
        dot.classList.toggle("dk", dk);
    }

    /* kursor bawaan hanya disembunyikan setelah kursor kustom terbukti tampil; jika gagal, kursor bawaan tetap ada */
    let ok = null;

    addEventListener("pointermove", e => {
        if (e.pointerType !== "mouse") return;

        mx = e.clientX;
        my = e.clientY;

        if (ok === null) {
            ok = getComputedStyle(dot).display !== "none" &&
                getComputedStyle(cu).display !== "none";
        }

        if (!ok) return;

        try {
            if (first) {
                co.x = px = mx;
                co.y = py = my;
                first = false;
            }

            go(co, mx, my);

            dot.style.transform = `translate3d(${mx}px,${my}px,0)`;

            cu.classList.add("on");
            dot.classList.add("on");

            if (e.target.closest) setState(e.target);

            root.classList.add("has-cur");
        } catch (err) {
            root.classList.remove("has-cur");
            ok = false;
        }
    }, {
        passive: true
    });

    /* saat halaman di-scroll tanpa menggerakkan mouse, status kursor ikut diperbarui */
    addEventListener("scroll", () => {
        if (sraf || first || !document.elementFromPoint) return;

        sraf = requestAnimationFrame(() => {
            sraf = 0;

            const t = document.elementFromPoint(mx, my);

            if (t) setState(t);
        });
    }, {
        passive: true
    });

    root.addEventListener("pointerleave", () => {
        cu.classList.remove("on");
        dot.classList.remove("on");
        root.classList.remove("has-cur");
    });

    addEventListener("pointerdown", () => {
        cu.classList.add("press");
        dot.classList.add("press");
    });

    addEventListener("pointerup", () => {
        cu.classList.remove("press");
        dot.classList.remove("press");
    });
}

/* seluruh kartu bisa diklik, sesuai label di kursor */
$$(".pc").forEach(c => {
    c.dataset.cursor = "Detail";
});

$$(".cc").forEach(c => {
    if (c.querySelector("button:not([disabled])")) c.dataset.cursor = "Lihat";
});

$$(".pc,.cc").forEach(c =>
    c.addEventListener("click", e => {
        if (e.target.closest("a,button")) return;

        const b = c.querySelector("button:not([disabled])");

        if (b) b.click();
    })
);


/* =====================================================
   MAGNETIC LETTER INTERACTION
   Membuat setiap huruf merespons posisi kursor
   ===================================================== */

(function () {
    function initMagneticLetters() {
        const headings = document.querySelectorAll(".hero h1");

        headings.forEach(heading => {
            const words = heading.querySelectorAll(":scope > span");

            words.forEach(word => {
                // Mencegah huruf diproses dua kali
                if (word.dataset.magneticReady === "true") return;

                const originalText = word.textContent;

                word.dataset.magneticReady = "true";
                word.setAttribute("aria-label", originalText);
                word.textContent = "";

                [...originalText].forEach((character, index) => {
                    const letter = document.createElement("span");

                    letter.className = "magnetic-letter";
                    letter.textContent =
                        character === " " ? "\u00A0" : character;

                    letter.setAttribute("aria-hidden", "true");

                    // Gerakan setiap huruf
                    letter.addEventListener("pointermove", event => {
                        if (event.pointerType === "touch") return;

                        const rect = letter.getBoundingClientRect();

                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;

                        const moveX = (event.clientX - centerX) * 0.22;
                        const moveY = (event.clientY - centerY) * 0.22;

                        letter.style.setProperty(
                            "--move-x",
                            `${moveX}px`
                        );

                        letter.style.setProperty(
                            "--move-y",
                            `${moveY}px`
                        );
                    });

                    // Kembali ke posisi semula
                    letter.addEventListener("pointerleave", () => {
                        letter.style.setProperty("--move-x", "0px");
                        letter.style.setProperty("--move-y", "0px");
                    });

                    word.appendChild(letter);
                });
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initMagneticLetters
        );
    } else {
        initMagneticLetters();
    }
})();


/* =========================================================
   DOWNLOAD CV PDF
   Mengambil file PDF dari lokasi di data.js
   Tidak membuat PDF baru menggunakan html2pdf
   ========================================================= */

const printPdf = document.getElementById("printPdf");

if (printPdf) {

    printPdf.addEventListener("click", function () {

        if (!DATA.cvPdf) {
            alert("Lokasi file PDF belum diatur di data.js.");
            return;
        }

        const link = document.createElement("a");

        link.href = DATA.cvPdf;
        link.download = "CV Muhammad Surya Aditya.pdf";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    });

}
// ==========================================
// LOGIKA SIDEBAR MOBILE
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const btnOpen = document.getElementById("openSidebar");
    const btnClose = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");
    
    // Buat elemen overlay gelap secara otomatis
    const overlay = document.createElement("div");
    overlay.className = "side-overlay";
    document.body.appendChild(overlay);

    if (btnOpen && btnClose && sidebar) {
        // Buka sidebar
        btnOpen.addEventListener("click", function() {
            sidebar.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden"; // Kunci scroll background
        });

        // Tutup sidebar lewat tombol X
        btnClose.addEventListener("click", function() {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        });

        // Tutup sidebar kalau area gelap diklik
        overlay.addEventListener("click", function() {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        });
    }
});
