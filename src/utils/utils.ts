export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}
export const formatNumber = (value: number) => {
    return new Intl.NumberFormat('de-DE').format(value || 0)
}