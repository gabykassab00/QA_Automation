function calculateTotal(items) {

    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  
  }
  
  
  
  function applyDiscount(total, discountPercentage) {
  
    if (discountPercentage > 100 || discountPercentage < 0) throw new Error("Invalid discount");
  
    return total - total * (discountPercentage / 100);
  
  }
  
  
  
  function formatPrice(amount) {
  
    return `$${amount.toFixed(2)}`;
  
  }
  
module.exports = { calculateTotal,applyDiscount,formatPrice};