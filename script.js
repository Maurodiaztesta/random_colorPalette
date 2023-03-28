const button$$ = document.querySelector('button');

const div1$$ = document.querySelector('.divPadre__hijo--1');
const div2$$ = document.querySelector('.divPadre__hijo--2');
const div3$$ = document.querySelector('.divPadre__hijo--3');
const div4$$ = document.querySelector('.divPadre__hijo--4');
const div5$$ = document.querySelector('.divPadre__hijo--5');

const p1$$ = document.querySelector('.divPadre__hijo--codigo1');
const p2$$ = document.querySelector('.divPadre__hijo--codigo2');
const p3$$ = document.querySelector('.divPadre__hijo--codigo3');
const p4$$ = document.querySelector('.divPadre__hijo--codigo4');
const p5$$ = document.querySelector('.divPadre__hijo--codigo5');


const randomColor = () => {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    return randomHex;
  };

  const changeBackground = () => {
    const color1 = randomColor();
    const color2 = randomColor();
    const color3 = randomColor();
    const color4 = randomColor();
    const color5 = randomColor();

    div1$$.style.backgroundColor = color1;
    div2$$.style.backgroundColor = color2;
    div3$$.style.backgroundColor = color3;
    div4$$.style.backgroundColor = color4;
    div5$$.style.backgroundColor = color5;


    p1$$.textContent = color1;
    p2$$.textContent = color2;
    p3$$.textContent = color3;
    p4$$.textContent = color4;
    p5$$.textContent = color5;

}

button$$.addEventListener('click', changeBackground)