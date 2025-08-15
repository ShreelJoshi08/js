// dashboard.js

async function loadModule(moduleName) {
    try {
        if (moduleName === "inventory") {
            const inventoryModule = await import('./inventory.js');
            inventoryModule.showInventory();
        } 
        else if (moduleName === "orders") {
            const ordersModule = await import('./orders.js');
            ordersModule.showOrders();
        } 
        else {
            console.log(`❌ Module "${moduleName}" not found.`);
        }
    } catch (error) {
        console.error(`Error loading ${moduleName}:`, error);
    }
}

// Example: Simulate user accessing different sections
(async () => {
    console.log("User clicks 'Inventory'");
    await loadModule("inventory");

    console.log("\nUser clicks 'Orders'");
    await loadModule("orders");

    console.log("\nUser clicks 'Unknown'");
    await loadModule("payments");
})();
