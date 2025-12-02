# 🔐 Cifrado Hill — Proyecto Final  
**Alumno:** David Morales Guerrero  
**Grupo:** 1-A  
**Materia:** Fundamentos de Álgebra 
**Institución:** Tecnológico de Software  
**Cuatrimestre:** 1° — 2025  

---

## 📘 Descripción del Proyecto
Este proyecto implementa el **Cifrado Hill**, un método clásico de criptografía basado en **álgebra lineal**, donde un mensaje se encripta mediante una **multiplicación matricial** usando una matriz clave invertible módulo 26.

El objetivo de esta actividad es aplicar conocimientos de:
- Programación en JavaScript.
- Álgebra lineal (matrices, determinantes e inversas).
- Gestión de versiones con Git y GitHub.
- Desarrollo web (HTML/CSS/JS).
- Documentación profesional y despliegue público.

El proyecto incluye:
✔ Encriptación  
✔ Desencriptación  
✔ Validación de matrices  
✔ Interfaz web personalizada  
✔ Despliegue mediante GitHub Pages  

---

## 💡 ¿Qué es el Cifrado Hill?
El **Cifrado Hill** transforma bloques de letras en vectores numéricos y los multiplica por una matriz clave.

### ✨ Pasos del cifrado:
1. Convertir letras a números (`a=0`, `b=1`, ..., `z=25`)
2. Agrupar el texto en bloques del tamaño de la matriz (este proyecto usa 2x2 → bloques de 2)
3. Multiplicar el vector por la matriz clave:
   
   \[
   C = (K \cdot P) \mod 26
   \]

4. Convertir los resultados numéricos a letras nuevamente.

### 🔓 Pasos del **desencriptado**:
Se debe calcular la **matriz inversa módulo 26**:

\[
K^{-1} = det(K)^{-1} \cdot 
\begin{pmatrix}
d & -b \\
-c & a
\end{pmatrix}
\mod 26
\]

Donde:
- `det(K)` es el determinante
- `det(K)^{-1}` es el **inverso modular** del determinante
- Se usa módulo 26 porque el alfabeto tiene 26 letras

Solo si la matriz es **invertible modulo 26** el desencriptado será posible.

---

## 🧪 Ejemplo de matriz clave válida
\[
K = \begin{pmatrix}
3 & 3 \\
2 & 5
\end{pmatrix}
\]

Determinante:
\[
(3)(5) - (3)(2) = 9 \mod 26 = 9
\]

El 9 sí tiene inverso modular → matriz válida ✔

---

## 🖥️ Uso de la Aplicación
La aplicación está disponible como página web publicada.

### 🟦 1. Escribir el texto
En la sección **“Texto a Encriptar”** escribe un mensaje.

### 🟩 2. Ingresar la matriz clave
Introduce una matriz 2x2:

| a | b |
|---|---|
| c | d |

Debe ser **invertible módulo 26**.

### 🟥 3. Encriptar
Pulsa el botón **“Encriptar”** → aparece texto cifrado.

### 🟨 4. Desencriptar
Pulsa **“Desencriptar”** para recuperar el mensaje original.

---

## 📂 Estructura del Proyecto

# 🔐 Cifrado Hill — Proyecto Final  
**Alumno:** David Morales Guerrero  
**Grupo:** 1-A  
**Materia:** Álgebra Lineal  
**Institución:** Tecnológico de Software  
**Cuatrimestre:** 1° — 2025  

---

## 📘 Descripción del Proyecto
Este proyecto implementa el **Cifrado Hill**, un método clásico de criptografía basado en **álgebra lineal**, donde un mensaje se encripta mediante una **multiplicación matricial** usando una matriz clave invertible módulo 26.

El objetivo de esta actividad es aplicar conocimientos de:
- Programación en JavaScript.
- Álgebra lineal (matrices, determinantes e inversas).
- Gestión de versiones con Git y GitHub.
- Desarrollo web (HTML/CSS/JS).
- Documentación profesional y despliegue público.

El proyecto incluye:
✔ Encriptación  
✔ Desencriptación  
✔ Validación de matrices  
✔ Interfaz web personalizada  
✔ Despliegue mediante GitHub Pages  

---

## 💡 ¿Qué es el Cifrado Hill?
El **Cifrado Hill** transforma bloques de letras en vectores numéricos y los multiplica por una matriz clave.

### ✨ Pasos del cifrado:
1. Convertir letras a números (`a=0`, `b=1`, ..., `z=25`)
2. Agrupar el texto en bloques del tamaño de la matriz (este proyecto usa 2x2 → bloques de 2)
3. Multiplicar el vector por la matriz clave:
   
   \[
   C = (K \cdot P) \mod 26
   \]

4. Convertir los resultados numéricos a letras nuevamente.

### 🔓 Pasos del **desencriptado**:
Se debe calcular la **matriz inversa módulo 26**:

\[
K^{-1} = det(K)^{-1} \cdot 
\begin{pmatrix}
d & -b \\
-c & a
\end{pmatrix}
\mod 26
\]

Donde:
- `det(K)` es el determinante
- `det(K)^{-1}` es el **inverso modular** del determinante
- Se usa módulo 26 porque el alfabeto tiene 26 letras

Solo si la matriz es **invertible modulo 26** el desencriptado será posible.

---

## 🧪 Ejemplo de matriz clave válida
\[
K = \begin{pmatrix}
3 & 3 \\
2 & 5
\end{pmatrix}
\]

Determinante:
\[
(3)(5) - (3)(2) = 9 \mod 26 = 9
\]

El 9 sí tiene inverso modular → matriz válida ✔

---

## 🖥️ Uso de la Aplicación
La aplicación está disponible como página web publicada.

### 🟦 1. Escribir el texto
En la sección **“Texto a Encriptar”** escribe un mensaje.

### 🟩 2. Ingresar la matriz clave
Introduce una matriz 2x2:

| a | b |
|---|---|
| c | d |

Debe ser **invertible módulo 26**.

### 🟥 3. Encriptar
Pulsa el botón **“Encriptar”** → aparece texto cifrado.

### 🟨 4. Desencriptar
Pulsa **“Desencriptar”** para recuperar el mensaje original.

---

## 📂 Estructura del Proyecto

