function copyToClipboard() {
    const input = document.getElementById("linkInput");
    navigator.clipboard.writeText(input.value).then(() => {
      alert("¡Enlace copiado!");
    }).catch(err => {
      console.error("Error al copiar:", err);
      alert("No se pudo copiar el enlace.");
    });
  }
  
  function compartir(app) {
    const url = document.getElementById("linkInput").value;
    let link = "";
  
    switch (app) {
      case "whatsapp":
        link = 'https://wa.me/?text=${encodeURIComponent(url)}';
        break;
      case "telegram":
        link = 'https://t.me/share/url?url=${encodeURIComponent(url)}';
        break;
      case "messenger":
        link = 'fb-messenger://share?link=${encodeURIComponent(url)}';
        break;
      case "instagram":
        alert("Instagram no permite compartir directamente desde enlaces. Copia el link.");
        return;
      default:
        alert('Compartiendo vía ${app}: ${url}');
        return;
    }
  
    window.open(link, "_blank");
  }