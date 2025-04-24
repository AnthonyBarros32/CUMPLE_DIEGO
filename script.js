const messages = [
    "¡Te mereces lo mejor!",
    "Hoy es tu día, Diego 🎂",
    "Que todos tus sueños se hagan realidad 💫",
    "Sigue brillando como siempre 🌟",
    "Una vuelta más al sol y mucho por vivir ✨",
    "¡Felicidades, crack! 🎈",
    "Un año más sabio y fuerte 💪",
    "¡Celebra a lo grande! 🎉"
  ];
  
  let lastMessageIndex = -1;
  
  function showRandomMessage() {
    let index;
    do {
      index = Math.floor(Math.random() * messages.length);
    } while (index === lastMessageIndex);  // Evita repetir el mismo
  
    lastMessageIndex = index;
  
    const message = document.createElement('div');
    message.innerText = messages[index];
    message.style.position = 'absolute';
    message.style.fontSize = (Math.random() * 0.8 + 1) + 'em';
    message.style.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
  
    let x, y;
  
    // Bucle para asegurarse de que no aparezca sobre el texto central
    do {
      x = Math.random() * 80;
      y = Math.random() * 80;
    } while (x > 30 && x < 55 && y > 25 && y < 50);  // Evita zona central
  
    message.style.left = `${x}vw`;
    message.style.top = `${y}vh`;
    message.style.opacity = 0;
    message.style.transition = 'opacity 2s';
  
    document.body.appendChild(message);
  
    setTimeout(() => message.style.opacity = 1, 100);   // Fade in
    setTimeout(() => message.style.opacity = 0, 5000);  // Fade out
    setTimeout(() => message.remove(), 7000);           // Eliminar
  }
  
  // Generar mensajes cada 3 segundos
  setInterval(showRandomMessage, 3000);
  