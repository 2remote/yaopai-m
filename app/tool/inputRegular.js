//* *** 正则表达式 **** //

export const checkTel = str => {
  const re = /^1\d{10}$/
  return !re.test(str)
}
