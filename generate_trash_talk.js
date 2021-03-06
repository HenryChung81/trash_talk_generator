function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(career) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!career) return '請選擇您的職業'
  console.log('This function will generate a trash talk')
  let yourCareer = ''
  if (career === 'engineer') {
    yourCareer = '工程師'
  } else if (career === 'designer') {
    yourCareer = '設計師'
  } else if (career === 'entrepreneur') {
    yourCareer = '創業家'
  }

  const yourTask = sample(task[career])
  const randomPhrase = sample(phrase)

  return `身為一個${yourCareer}${yourTask}${randomPhrase}吧？`


}

module.exports = generateTrashTalk
