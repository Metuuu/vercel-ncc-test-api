module.exports = function getTest(body) {
   if (typeof body.test !== 'number') return 'Bad Request - Param "test" of type number is required'
   return `Success - ${body.test}`
}
