import Decimal from "decimal.js";

export function formatNumber(numd: Decimal) {
    let num = numd.toNumber()
    if (Math.abs(num) >= 1.0e9) {
        // Billions
        return (Math.abs(num) / 1.0e9).toFixed(2) + " B";
    } else if (Math.abs(num) >= 1.0e6) {
        // Millions
        return (Math.abs(num) / 1.0e6).toFixed(2) + " M";
    } else if (Math.abs(num) >= 1.0e3) {
        // Thousands
        return (Math.abs(num) / 1.0e3).toFixed(2) + " K";
    } else {
        // Less than thousand
        return Math.abs(num).toFixed(2);
    }
}