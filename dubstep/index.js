/* const songDecoder = song => {
  const decodeWub = song.split('WUB');

  let result = '';

  decodeWub.forEach(element => {
    if (element) result += ` ${element}`;
  });
  return result.trim();
};

songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'); */

const songDecoder = song => song.replace(/(WUB)+/g, ' ').trim();

module.exports = songDecoder;
