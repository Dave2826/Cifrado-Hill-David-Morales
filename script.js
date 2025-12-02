const mod = (n, m) => ((n % m) + m) % m;

function obtenerMatriz() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const c = parseInt(document.getElementById("c").value);
    const d = parseInt(document.getElementById("d").value);

    return [[a, b], [c, d]];
}

function inversaMod26(m) {
    const [a, b] = m[0];
    const [c, d] = m[1];

    const det = mod(a * d - b * c, 26);

    const inversos = {
        1: 1, 3: 9, 5: 21, 7: 15, 9: 3, 11: 19,
        15: 7, 17: 23, 19: 11, 21: 5, 23: 17, 25: 25
    };

    if (!(det in inversos)) return null;

    const invDet = inversos[det];

    return [
        [mod(d * invDet, 26), mod(-b * invDet, 26)],
        [mod(-c * invDet, 26), mod(a * invDet, 26)]
    ];
}

function textoANumeros(t) {
    return t.toLowerCase().replace(/[^a-z]/g, "")
        .split("")
        .map(l => l.charCodeAt(0) - 97);
}

function numerosATexto(nums) {
    return nums.map(n => String.fromCharCode(n + 97)).join("");
}

function encriptar() {
    const matriz = obtenerMatriz();
    const texto = document.getElementById("texto").value;
    let nums = textoANumeros(texto);

    if (nums.length % 2 !== 0) nums.push(23);

    let res = [];

    for (let i = 0; i < nums.length; i += 2) {
        const x = nums[i];
        const y = nums[i + 1];
        const e1 = mod(matriz[0][0] * x + matriz[0][1] * y, 26);
        const e2 = mod(matriz[1][0] * x + matriz[1][1] * y, 26);
        res.push(e1, e2);
    }

    document.getElementById("resultado").value = numerosATexto(res);
}

function desencriptar() {
    const matriz = obtenerMatriz();
    const inv = inversaMod26(matriz);

    if (!inv) {
        alert("La matriz no es invertible módulo 26");
        return;
    }

    const texto = document.getElementById("texto").value;
    let nums = textoANumeros(texto);

    if (nums.length % 2 !== 0) nums.push(23);

    let res = [];

    for (let i = 0; i < nums.length; i += 2) {
        const x = nums[i];
        const y = nums[i + 1];
        const d1 = mod(inv[0][0] * x + inv[0][1] * y, 26);
        const d2 = mod(inv[1][0] * x + inv[1][1] * y, 26);
        res.push(d1, d2);
    }

    document.getElementById("resultado").value = numerosATexto(res);
}
