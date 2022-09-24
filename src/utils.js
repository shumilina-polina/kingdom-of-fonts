export const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor

export const monthsShort = [
  "янв", "фев", "мар", "апр", "мая", "июня", "июля", "авг", "сент", "окт", "ноя", "дек"
]

export const formatDate = (value) => {
  if (!value) return ''

  const date = new Date(value)

  const day = date.getDate()
  const month = monthsShort[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export const pluralize = (number, one, few, many) => {
  const last = number % 10
  const lastTwo = number % 100

  if (lastTwo >= 11 && lastTwo <= 14) {
    return many
  }
  if (last === 1) {
    return one
  }
  if (last >= 2 && last <= 4) {
    return few
  }
  return many
}