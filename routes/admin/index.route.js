const productsRoutes = require("./products.route");
const dashboardRoutes = require("./dashboard.route");

module.exports.routesAdmin = (app) => {
    app.use("/admin/dashboard", dashboardRoutes);
    app.use("/admin/products", productsRoutes);
}