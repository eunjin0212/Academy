const send = new price();

function price() {
  this.data = function (money, sale, reserve) {
    const total = (money * sale) / 100;
    let cal = money - total - reserve;
    let min = 10000 - reserve;
    return [cal, min];
  };
}
