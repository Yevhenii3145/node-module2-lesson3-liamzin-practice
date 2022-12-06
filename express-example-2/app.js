const express = require("express");

const products = require("./products");

const app = express();

app.set("json spaces", 70);

app.get("/products", (req, res) => {
  //   res.send(null);
  //   res.json(null);
  //   res.send(products);
  //   res.json(products);
  // Если надо вернуть большие куски разметки используют шаблонизатор и рендер
  // res.render('products', {name: 'iPhone'})
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
});

app.listen(3002);
