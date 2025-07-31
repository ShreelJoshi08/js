module.exports = (temp, product) => {
  let output = temp.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%NAME%}/g, product.name);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%BRAND%}/g, product.brand);
  output = output.replace(/{%SPECS%}/g, product.specs);
  output = output.replace(/{%STOCK%}/g, product.stock);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%WARRANTY%}/g, product.warranty ? "Yes" : "No");
  return output;
};