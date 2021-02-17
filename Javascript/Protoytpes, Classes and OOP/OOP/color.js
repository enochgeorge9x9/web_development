
//*USing Classes
class Color {
    constructor(r, g, b, colorName) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = colorName;
        this.calcHSL()
    };

    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`

    }

    rgb() {
        return `rgb(${this.innerRGB()})`
    };

    rgba(a = 1) {
        const { r, g, b } = this;
        return `rgba(${this.innerRGB()},${a})`
    }

    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 18) + b).toString(16).slice(1)
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }

    opposite() {
        const { h, s, l } = this;
        const newH = (h+180)%360;
        return `hsl(${newH}, ${s}%, ${l}%)`
    }
    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`
    }

    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const c1 = new Color(233, 111, 221, "pink");
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
h1.style.backgroundColor = c1.rgb()
h2.style.backgroundColor = c1.opposite()
