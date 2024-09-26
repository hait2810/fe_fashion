import dayjs from 'dayjs'
export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}
export const formatNumber = (value: number) => {
    return new Intl.NumberFormat('de-DE').format(value || 0)
}
export function formatTime(time: Date, mode?: string) {
    switch (mode) {
      case "month":
        return dayjs(time).format("DD-MM-YYYY");
        break;
      default:
        return dayjs(time).format("HH:mm:ss DD-MM-YYYY");
    }
  }