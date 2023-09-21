export const formatPrice = (price) => {
    return Intl.NumberFormat('en-us', { style: 'currency', currency: 'INR' }).format(price)
}
export const difference = (n1, n2) => {
    const ans = Math.abs((n1 - n2) / (n1 + n2) * 100);
    return ans.toFixed(2)
}