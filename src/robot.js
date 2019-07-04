/*
 * Description:
 *
 * Commands:
 *
 * Notes:
 *
 * Author:
 *   gjbianco
 */
const getAnswer = require('./answers').getAnswer;
module.exports = robot => {
  robot.respond(/^(?:what|who|when|why|how) (?:is|are) ([\w\s]+)\??$/i, res => {
    const query = escape(res.match[1]);
    getAnswer(query)
      .then(response => res.send(response))
      .catch(err => {
        console.error(`got an error getting answer for "${query}": ${err}`);
        res.send(`couldn't find an answer for ${query} D:`);
      });
  });
};
