import { _ as r, w as o, a as l, j as d, o as a, c, b as n, n as u, k as f } from "./index-72138a98.js";

const p = {
    name: "TitleCard",
    setup() {
      return {
        wTop: o,
        wWidth: l,
        wHeight: d,
      };
    },
    props: {
      from: {
        type: String,
        default: "left",
      },
      title: {
        type: String,
        default: "ตัวอย่างหัวช้อ ตัวอย่างหัวช้อ ",
      },
    },
    data() {
      return {
        disp: "hide",
        defaultFontSize: 60,
        fontSize: 60,
        prevH: null,
      };
    },
    methods: {
      async chkFontSize() {
        var t = this.$refs.b.getBoundingClientRect().height;
        if (!(this.fontSize < 2)) {
          if (t == null || this.titleMaxHeight == null) return this.$nextTick((e) => this.chkFontSize());
          (this.prevH != null && this.prevH == t) || (this.fontSize--, (this.prevH = t), this.$nextTick((e) => this.chkFontSize()));
        }
      },
      checkPos() {
        var t = this.$refs.el.getBoundingClientRect().top / this.wHeight;
        if (this.disp == "hide") return (this.disp = 0.6 >= t && t >= 0 ? "show" : "hide");
        this.disp = 1.2 >= t && t >= -0.3 ? "show" : "hide";
      },
    },
    computed: {
      w() {
        return this.wWidth > 1200 ? 1244 : (this.wWidth * 1244) / 1200;
      },
      titleMaxHeight() {
        return (this.w * 170) / 1024;
      },
    },
    watch: {
      wTop() {
        this.checkPos();
      },
      wWidth() {
        (this.fontSize = this.defaultFontSize), (this.prevH = null), this.chkFontSize();
      },
      disp() {
        this.chkFontSize();
      },
      title() {
        (this.fontSize = this.defaultFontSize), (this.prevH = null), this.chkFontSize();
      },
    },
    mounted() {
      this.$nextTick((t) => this.checkPos());
    },
  },
  _ = ["innerHTML"];
function S(t, e, i, z, s, h) {
  return (
    a(),
    c(
      "div",
      {
        class: u(["titleCard", [i.from, s.disp]]),
        style: f({
          "--w": `${h.w}px`,
          "--fontSize": `${s.fontSize}px`,
        }),
        ref: "el",
      },
      [
        n("em", null, [
          n(
            "b",
            {
              ref: "b",
              innerHTML: i.title,
            },
            null,
            8,
            _
          ),
        ]),
      ],
      6
    )
  );
}
const k = r(p, [["render", S]]);
export { k as T };
