//Handle image slider
const imageSlider = (currentImg) => {
    document.querySelector('.nikeSneakerImg').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color, textColor) => {
    document.querySelector('.circle').style.background = color;
    document.querySelector('.brandName').style.color = textColor;

    const textBoxButton = document.querySelector('.textBoxButton');

    textBoxButton.style.color = textColor;
    textBoxButton.style.border = "2px solid "+ textColor;
}

//Handle menu button
const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}