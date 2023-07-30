function confirmAndRedirect() {
    var result = confirm("Bạn có muốn mua sản phẩm này không? \n Sẽ chuyển đến Messenger");
    if (result) {
      // Thay thế "your_facebook_page_url_here" bằng đường dẫn đến trang Facebook của bạn
      window.location.href = "https://m.me/thecuong0602";
    }
  }

document.addEventListener("DOMContentLoaded", function() {
    var options = {
      strings: ['Hello, I am Thecuong!', 'a Hair Stylist', 'a Image Editor', 'a Beautiful Hair Photo', 'a Love Money', 'Cường đẹp zai'],
      typeSpeed: 130,
      backSpeed: 60,
      loop: true
    };
    var typed = new Typed("#lemin-text", options);
  });