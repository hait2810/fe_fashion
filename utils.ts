import dayjs from 'dayjs'

export const debounce = (func: any, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    // Specify the type of 'this'
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export function numberFormat(number: number) {
  return (number / 1000).toLocaleString("de-DE", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
}

export function formatVND(amount: number) {
  return amount
    ? new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount)
    : 0;
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